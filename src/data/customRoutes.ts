import { RouteTemplate } from './routeTemplates';
import { createClient } from '@/lib/supabase/browser';

export interface CustomRouteTemplate extends RouteTemplate {
  custom: true;
  createdAt: number;
}

const CHANGE_EVENT = 'bt-custom-routes-changed';

function notify() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
}

function rowToTemplate(r: Record<string, unknown>): CustomRouteTemplate {
  return {
    id: r.id as string,
    label: r.label as string,
    packageName: r.package_name as string,
    destination: r.destination as string,
    durationNights: r.duration_nights as number,
    durationDays: r.duration_days as number,
    pickupPoint: r.pickup_point as string,
    droppingPoint: r.dropping_point as string,
    hotelOptions: r.hotel_options as RouteTemplate['hotelOptions'],
    dayItinerary: r.day_itinerary as RouteTemplate['dayItinerary'],
    custom: true,
    createdAt: new Date(r.created_at as string).getTime(),
  };
}

export async function loadCustomRoutes(): Promise<CustomRouteTemplate[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('custom_routes')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    console.error('loadCustomRoutes', error);
    return [];
  }
  return (data || []).map(rowToTemplate);
}

export async function saveCustomRoute(route: Omit<RouteTemplate, 'id'> & { id?: string }): Promise<CustomRouteTemplate | null> {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const payload = {
    label: route.label,
    package_name: route.packageName,
    destination: route.destination,
    duration_nights: route.durationNights,
    duration_days: route.durationDays,
    pickup_point: route.pickupPoint,
    dropping_point: route.droppingPoint,
    hotel_options: route.hotelOptions,
    day_itinerary: route.dayItinerary,
    updated_by: user?.id ?? null,
    updated_at: new Date().toISOString(),
  };

  if (route.id) {
    const { data, error } = await supabase
      .from('custom_routes')
      .update(payload)
      .eq('id', route.id)
      .select()
      .single();
    if (error) { console.error('saveCustomRoute (update)', error); return null; }
    notify();
    return rowToTemplate(data);
  }

  const { data, error } = await supabase
    .from('custom_routes')
    .insert({ ...payload, created_by: user?.id ?? null })
    .select()
    .single();
  if (error) { console.error('saveCustomRoute (insert)', error); return null; }
  notify();
  return rowToTemplate(data);
}

export async function deleteCustomRoute(id: string): Promise<boolean> {
  const supabase = createClient();
  const { error } = await supabase.from('custom_routes').delete().eq('id', id);
  if (error) { console.error('deleteCustomRoute', error); return false; }
  notify();
  return true;
}
