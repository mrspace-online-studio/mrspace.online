-- Retired services remain as minimal routing tombstones, outside active workspaces.
create table if not exists public.ms_service_retirements (
 site text primary key, retired_at timestamptz not null default now(), key_hashes text[] not null default '{}'
);
alter table public.ms_service_retirements enable row level security;
revoke all on public.ms_service_retirements from public,anon,authenticated;
grant select on public.ms_service_retirements to authenticated;
grant all on public.ms_service_retirements to service_role;
drop policy if exists ms_retirements_admin on public.ms_service_retirements;
create policy ms_retirements_admin on public.ms_service_retirements for select to authenticated using(public.ms_is_admin());

-- Public lookup discloses only whether a supplied old URL is closed; never keys or account data.
create or replace function public.ms_service_route(p_site text default null,p_key uuid default null,p_edit uuid default null)
returns jsonb language sql stable security definer set search_path='' as $$
 select case when exists(select 1 from public.ms_service_retirements r where r.site=p_site
  or pg_catalog.md5(p_key::text)=any(r.key_hashes) or pg_catalog.md5(p_edit::text)=any(r.key_hashes))
 then jsonb_build_object('retired',true,'url','https://mrspace.online/service-unavailable/','application_url','https://mrspace.online/start/?from=service-unavailable')
 else jsonb_build_object('retired',false) end;
$$;
revoke all on function public.ms_service_route(text,uuid,uuid) from public,anon,authenticated;
grant execute on function public.ms_service_route(text,uuid,uuid) to anon,authenticated,service_role;

create or replace function public.ms_retire_service(p_site text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare s public.ms_sites; hashes text[];
begin
 if not public.ms_is_admin() and session_user not in ('postgres','supabase_admin') then raise exception 'not_allowed'; end if;
 if p_site in ('mrspace','heron','laloo','space-tailoring') then raise exception 'protected_service'; end if;
 select * into s from public.ms_sites where slug=p_site for update;
 if not found then raise exception 'unknown_site'; end if;
 if exists(select 1 from public.ms_service_retirements where site=p_site) then return jsonb_build_object('retired',true); end if;
 select array_agg(distinct pg_catalog.md5(v)) into hashes from (
  select s.site_key::text as v union all select s.log_key::text
  union all select edit_key::text from public.ms_submissions where site=p_site
  union all select token::text from public.ms_trials where site=p_site
  union all select preview_key::text from public.ms_trials where site=p_site
 ) keys where v is not null;
 -- Disable connections before installing the tombstone so every step is one transaction.
 update public.ms_sites set status='retired',site_key=gen_random_uuid(),log_key=gen_random_uuid(),published_build=null,host=null,
  url='https://mrspace.online/service-unavailable/',admin_url=null,repo_path=null,
  suspend_message='We no longer provide service for this account. You can submit a new application.' where slug=p_site;
 update public.ms_submissions set edit_key=gen_random_uuid() where site=p_site;
 update public.ms_trials set token=gen_random_uuid(),preview_key=gen_random_uuid(),offer_until=now() where site=p_site;
 delete from public.ms_site_users where site=p_site;
 update public.ms_square set access_token=null,refresh_token=null,merchant_id=null,location_id=null,location_name=null,public_catalog=false where site=p_site;
 update public.ms_site_content set enabled=false,fields='{}'::jsonb where site=p_site;
 update public.ms_notification_preferences set email_enabled=false where site=p_site;
 update public.ms_push_subscriptions set enabled=false where site=p_site;
 update public.ms_catalog_publications set section='hidden' where site=p_site;
 update public.ms_service_connections set state='error',error_code='service_retired',checked_at=now() where site=p_site;
 insert into public.ms_service_retirements(site,key_hashes) values(p_site,coalesce(hashes,'{}'));
 return jsonb_build_object('retired',true);
end $$;
revoke all on function public.ms_retire_service(text) from public,anon,authenticated;
grant execute on function public.ms_retire_service(text) to authenticated,service_role;

-- No cached page or old integration can recreate access or submit new work for a retired site.
create or replace function public.ms_block_retired_write()
returns trigger language plpgsql security definer set search_path='' as $$
begin
 if exists(select 1 from public.ms_service_retirements where site=new.site) then raise exception 'service_retired'; end if;
 return new;
end $$;
revoke all on function public.ms_block_retired_write() from public,anon,authenticated;
do $$ declare tab text; begin
 foreach tab in array array['ms_site_users','ms_submissions','ms_changes','ms_repair_jobs','ms_builds','ms_catalog_publications','ms_square','ms_site_content','ms_service_connections'] loop
  execute format('drop trigger if exists ms_retired_write on public.%I',tab);
  execute format('create trigger ms_retired_write before insert or update on public.%I for each row execute function public.ms_block_retired_write()',tab);
 end loop;
end $$;

create or replace function public.ms_workspace_allowed(p_site text)
returns boolean language sql stable security definer set search_path='' as $$
 select auth.uid() is not null and not exists(select 1 from public.ms_service_retirements where site=p_site)
 and coalesce(public.ms_role(),'client')<>'viewer' and (public.ms_is_admin() or exists(
  select 1 from public.ms_site_users u where u.site=p_site and u.email=lower(coalesce(auth.jwt()->>'email',''))));
$$;
revoke all on function public.ms_workspace_allowed(text) from public,anon,authenticated;
grant execute on function public.ms_workspace_allowed(text) to authenticated,service_role;

create or replace function public.ms_my_sites()
returns json language sql stable security definer set search_path='' as $$
 select coalesce(json_agg(json_build_object('slug',s.slug,'name',s.name,'url',s.url,'plan',s.plan,'status',s.status,'site_key',s.site_key,
 'square',(select json_build_object('location',q.location_name,'public',q.public_catalog,'since',q.connected_at) from public.ms_square q where q.site=s.slug and q.access_token is not null)) order by s.name),'[]'::json)
 from public.ms_sites s where auth.uid() is not null and s.status<>'retired'
 and not exists(select 1 from public.ms_service_retirements where site=s.slug)
 and coalesce(public.ms_role(),'client')<>'viewer' and (public.ms_is_admin() or exists(select 1 from public.ms_site_users u where u.site=s.slug and u.email=lower(coalesce(auth.jwt()->>'email',''))));
$$;
revoke all on function public.ms_my_sites() from public,anon,authenticated;
grant execute on function public.ms_my_sites() to authenticated;

create or replace function public.ms_site_state(p_slug text)
returns json language sql stable security definer set search_path='' as $$
 select json_build_object('retired',s.status='retired','suspended',s.status in ('retired','suspended')
 or(s.kind='client' and s.plan<>'handover' and s.paid_until is not null and s.paid_until+s.grace_days<current_date),
 'url',case when s.status='retired' then 'https://mrspace.online/service-unavailable/' else null end,
 'message',coalesce(s.suspend_message,'This site is taking a short break. It will be back soon.')) from public.ms_sites s where slug=p_slug;
$$;
revoke all on function public.ms_site_state(text) from public,anon,authenticated;
grant execute on function public.ms_site_state(text) to anon,authenticated,service_role;

-- Retired services are excluded from read-only project snapshots as well.
create or replace function public.ms_viewer_snapshot() returns json
language plpgsql stable security definer set search_path = public as $$
begin
  if ms_role() is null then raise exception 'not_allowed'; end if;
  return json_build_object(
    'sites', coalesce((select json_agg(json_build_object('slug', slug, 'name', name, 'url', url, 'kind', kind, 'plan', plan,
                'status', status, 'small_quota', small_quota, 'big_quota', big_quota) order by created_at) from ms_sites where status<>'retired'), '[]'::json),
    'checks', coalesce((select json_agg(json_build_object('site', site, 'at', at, 'ok', ok, 'ms', ms) order by at)
                from ms_checks where not exists(select 1 from ms_service_retirements r where r.site=ms_checks.site) and at > now() - interval '24 hours'), '[]'::json),
    'changes', coalesce((select json_agg(json_build_object('id', id, 'site', site, 'kind', kind, 'target', target, 'request', request,
                'status', status, 'counts', counts, 'minutes', minutes, 'created_at', created_at) order by created_at desc)
                from (select * from ms_changes where not exists(select 1 from ms_service_retirements r where r.site=ms_changes.site) order by created_at desc limit 100) c), '[]'::json),
    'activity', coalesce((select json_agg(json_build_object('site', site, 'who', who, 'action', action, 'minutes', minutes, 'at', at, 'meta', meta) order by at desc)
                from (select * from ms_activity where not exists(select 1 from ms_service_retirements r where r.site=ms_activity.site) order by at desc limit 150) a), '[]'::json),
    'usage', coalesce((select json_agg(json_build_object('site', site, 'service', service, 'used', used, 'lim', lim, 'unit', unit, 'enabled', enabled)) from ms_usage where not exists(select 1 from ms_service_retirements r where r.site=ms_usage.site)), '[]'::json),
    'quota', coalesce((select json_object_agg(s.slug, (select row_to_json(q) from ms_quota(s.slug) q)) from ms_sites s where s.status<>'retired'), '{}'::json)
  );
end $$;
revoke all on function public.ms_viewer_snapshot() from public, anon;
grant execute on function public.ms_viewer_snapshot() to authenticated;
