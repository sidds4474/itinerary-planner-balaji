-- Allow agents to delete their own clients (was admin-only).
drop policy if exists "clients_admin_delete" on clients;

create policy "clients_owner_or_admin_delete" on clients for delete
  using (auth.uid() = owner_agent_id or is_admin());
