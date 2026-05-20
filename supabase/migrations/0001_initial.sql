-- Run this in Supabase Dashboard → SQL Editor → New Query → paste → Run.
-- Creates schema, RLS policies, and the auto-profile trigger for new sign-ups.

-- ─── Roles enum ────────────────────────────────────────────────
create type user_role as enum ('admin', 'agent');

-- ─── profiles: one row per auth.users entry ────────────────────
create table profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  role          user_role not null default 'agent',
  full_name     text,
  phone         text,
  email         text,
  created_at    timestamptz not null default now()
);

-- Auto-create a profile when a new user signs up.
create function handle_new_user() returns trigger
  security definer set search_path = public
  language plpgsql as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- Helper: is the current user an admin?
create function is_admin() returns boolean
  security definer set search_path = public
  language sql stable as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$;

-- ─── clients: phone is the natural key ─────────────────────────
create table clients (
  id              uuid primary key default gen_random_uuid(),
  phone           text not null unique,
  name            text not null,
  email           text,
  owner_agent_id  uuid not null references profiles(id) on delete restrict,
  notes           text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index clients_owner_idx on clients(owner_agent_id);

-- ─── interactions: 7-field quick-capture per client touch ──────
create table interactions (
  id                    uuid primary key default gen_random_uuid(),
  client_id             uuid not null references clients(id) on delete cascade,
  agent_id              uuid not null references profiles(id) on delete restrict,
  destination_package   text,
  budget_mentioned      text,
  travel_dates          text,
  group_size            text,
  last_objection        text,
  what_was_promised     text,
  special_needs         text,
  created_at            timestamptz not null default now()
);

create index interactions_client_idx on interactions(client_id, created_at desc);

-- ─── quotes: form snapshot + optional PDF reference ────────────
create table quotes (
  id              uuid primary key default gen_random_uuid(),
  client_id       uuid references clients(id) on delete set null,
  agent_id        uuid not null references profiles(id) on delete restrict,
  package_name    text,
  destination     text,
  travel_date     date,
  total_price     numeric(12,2),
  form_data       jsonb not null,
  pdf_url         text,
  created_at      timestamptz not null default now()
);

create index quotes_agent_idx on quotes(agent_id, created_at desc);
create index quotes_client_idx on quotes(client_id, created_at desc);

-- ─── custom_routes: shared route templates, editable by any agent ──
create table custom_routes (
  id              uuid primary key default gen_random_uuid(),
  label           text not null,
  package_name    text not null,
  destination     text not null,
  duration_nights int not null,
  duration_days   int not null,
  pickup_point    text not null,
  dropping_point  text not null,
  hotel_options   jsonb not null,
  day_itinerary   jsonb not null,
  created_by      uuid references profiles(id) on delete set null,
  updated_by      uuid references profiles(id) on delete set null,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ─── RLS ───────────────────────────────────────────────────────
alter table profiles      enable row level security;
alter table clients       enable row level security;
alter table interactions  enable row level security;
alter table quotes        enable row level security;
alter table custom_routes enable row level security;

-- profiles: signed-in user reads own; admins read all.
create policy "profiles_self_or_admin_read" on profiles for select
  using (auth.uid() = id or is_admin());
create policy "profiles_self_update" on profiles for update
  using (auth.uid() = id);
create policy "profiles_admin_update" on profiles for update
  using (is_admin());

-- clients: agent sees own; admin sees all.
create policy "clients_owner_or_admin_read" on clients for select
  using (auth.uid() = owner_agent_id or is_admin());
create policy "clients_insert" on clients for insert
  with check (auth.uid() = owner_agent_id or is_admin());
create policy "clients_owner_or_admin_update" on clients for update
  using (auth.uid() = owner_agent_id or is_admin());
create policy "clients_admin_delete" on clients for delete
  using (is_admin());

-- interactions: scoped via parent client.
create policy "interactions_owner_or_admin_read" on interactions for select
  using (
    is_admin() or exists (
      select 1 from clients c where c.id = client_id and c.owner_agent_id = auth.uid()
    )
  );
create policy "interactions_insert_for_owned_client" on interactions for insert
  with check (
    is_admin() or exists (
      select 1 from clients c where c.id = client_id and c.owner_agent_id = auth.uid()
    )
  );
create policy "interactions_owner_or_admin_update" on interactions for update
  using (
    is_admin() or exists (
      select 1 from clients c where c.id = client_id and c.owner_agent_id = auth.uid()
    )
  );

-- quotes: agent sees own; admin sees all.
create policy "quotes_owner_or_admin_read" on quotes for select
  using (auth.uid() = agent_id or is_admin());
create policy "quotes_insert" on quotes for insert
  with check (auth.uid() = agent_id or is_admin());
create policy "quotes_owner_or_admin_update" on quotes for update
  using (auth.uid() = agent_id or is_admin());

-- custom_routes: shared. Any signed-in user can read/insert/update/delete.
create policy "custom_routes_read_signed_in" on custom_routes for select
  using (auth.role() = 'authenticated');
create policy "custom_routes_insert_signed_in" on custom_routes for insert
  with check (auth.role() = 'authenticated');
create policy "custom_routes_update_signed_in" on custom_routes for update
  using (auth.role() = 'authenticated');
create policy "custom_routes_delete_signed_in" on custom_routes for delete
  using (auth.role() = 'authenticated');
