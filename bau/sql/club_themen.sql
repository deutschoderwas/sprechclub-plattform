-- Welche Gruppe hat in welcher Club-Stunde welches Thema gemacht.
-- Grundlage für Nachbereitung und Empfehlungen im Schülerbereich.
-- thema_id = Kennung aus themen-katalog.js, z. B. 'sprechen:aemter'.
create table if not exists public.club_themen (
  id          bigint generated always as identity primary key,
  class_id    uuid not null references public.classes(id) on delete cascade,
  grp         integer not null default 0,
  thema_id    text not null check (thema_id ~ '^[a-z]+:[a-z0-9-]+$'),
  fokus       text not null check (fokus ~ '^[a-z]+$'),
  niveau      text check (niveau in ('ab','bb','bc')),
  gesetzt_von uuid references auth.users(id) on delete set null,
  gesetzt_am  timestamptz not null default now(),
  entfernt_am timestamptz,
  constraint club_themen_fokus_passt check (split_part(thema_id, ':', 1) = fokus),
  constraint club_themen_einmal unique (class_id, grp, thema_id)
);
comment on table public.club_themen is 'Welche Gruppe in welcher Club-Stunde welches Thema gemacht hat (Kennung aus themen-katalog.js). grp 0 = ganze Stunde. entfernt_am statt Löschen. Geschrieben nur über thema_setzen/thema_zuruecknehmen.';
create index if not exists club_themen_class_idx on public.club_themen (class_id);

alter table public.club_themen enable row level security;

drop policy if exists club_themen_lesen on public.club_themen;
create policy club_themen_lesen on public.club_themen for select to authenticated
  using (
    public.is_teacher()
    or exists (select 1 from public.bookings b
               where b.class_id = club_themen.class_id and b.user_id = auth.uid() and b.status = 'booked')
  );

create or replace function public._club_thema_erlaubt(p_class_id uuid, p_grp integer)
returns boolean language plpgsql stable security definer set search_path = public as $$
declare
  v_start timestamptz; v_dauer integer; v_hat_gruppen boolean;
begin
  if auth.uid() is null then return false; end if;
  if public.is_teacher() then return true; end if;
  select starts_at, duration_min into v_start, v_dauer from classes where id = p_class_id and not coalesce(is_cancelled,false);
  if v_start is null then return false; end if;
  if now() < v_start - interval '30 minutes' or now() > v_start + make_interval(mins => v_dauer + 60) then return false; end if;
  if not exists (select 1 from bookings where class_id = p_class_id and user_id = auth.uid() and status = 'booked') then return false; end if;
  if p_grp = 0 then return true; end if;
  select exists (select 1 from class_group_members where class_id = p_class_id) into v_hat_gruppen;
  if not v_hat_gruppen then return true; end if;
  return exists (select 1 from class_group_members where class_id = p_class_id and user_id = auth.uid() and grp = p_grp);
end $$;
revoke all on function public._club_thema_erlaubt(uuid, integer) from public, anon, authenticated;

create or replace function public.thema_setzen(p_class_id uuid, p_grp integer, p_thema_id text, p_niveau text default null)
returns json language plpgsql security definer set search_path = public as $$
declare v_fokus text := split_part(p_thema_id, ':', 1); v_id bigint;
begin
  if p_thema_id is null or p_thema_id !~ '^[a-z]+:[a-z0-9-]+$' then
    return json_build_object('ok', false, 'fehler', 'thema_ungueltig');
  end if;
  if p_niveau is not null and p_niveau not in ('ab','bb','bc') then
    return json_build_object('ok', false, 'fehler', 'niveau_ungueltig');
  end if;
  if not public._club_thema_erlaubt(p_class_id, coalesce(p_grp, 0)) then
    return json_build_object('ok', false, 'fehler', 'nicht_erlaubt');
  end if;
  insert into club_themen (class_id, grp, thema_id, fokus, niveau, gesetzt_von)
  values (p_class_id, coalesce(p_grp, 0), p_thema_id, v_fokus, p_niveau, auth.uid())
  on conflict (class_id, grp, thema_id) do update
    set entfernt_am = null, niveau = coalesce(excluded.niveau, club_themen.niveau),
        gesetzt_von = excluded.gesetzt_von, gesetzt_am = now()
  returning id into v_id;
  return json_build_object('ok', true, 'id', v_id);
end $$;
revoke all on function public.thema_setzen(uuid, integer, text, text) from public, anon;
grant execute on function public.thema_setzen(uuid, integer, text, text) to authenticated;

create or replace function public.thema_zuruecknehmen(p_class_id uuid, p_grp integer, p_thema_id text)
returns json language plpgsql security definer set search_path = public as $$
declare v_n integer;
begin
  if not public._club_thema_erlaubt(p_class_id, coalesce(p_grp, 0)) then
    return json_build_object('ok', false, 'fehler', 'nicht_erlaubt');
  end if;
  update club_themen set entfernt_am = now()
   where class_id = p_class_id and grp = coalesce(p_grp, 0) and thema_id = p_thema_id and entfernt_am is null;
  get diagnostics v_n = row_count;
  return json_build_object('ok', true, 'geaendert', v_n);
end $$;
revoke all on function public.thema_zuruecknehmen(uuid, integer, text) from public, anon;
grant execute on function public.thema_zuruecknehmen(uuid, integer, text) to authenticated;

create or replace function public.themen_der_stunde(p_class_id uuid)
returns table (grp integer, thema_id text, fokus text, niveau text, gesetzt_am timestamptz)
language sql stable security definer set search_path = public as $$
  select t.grp, t.thema_id, t.fokus, t.niveau, t.gesetzt_am
    from club_themen t
   where t.class_id = p_class_id and t.entfernt_am is null
     and (public.is_teacher() or exists (select 1 from bookings b where b.class_id = p_class_id and b.user_id = auth.uid() and b.status = 'booked'))
   order by t.grp, t.gesetzt_am;
$$;
revoke all on function public.themen_der_stunde(uuid) from public, anon;
grant execute on function public.themen_der_stunde(uuid) to authenticated;

create or replace function public.meine_club_themen()
returns table (class_id uuid, starts_at timestamptz, club text, grp integer, thema_id text, fokus text, niveau text)
language sql stable security definer set search_path = public as $$
  select c.id, c.starts_at, c.club, t.grp, t.thema_id, t.fokus, t.niveau
    from club_themen t
    join classes c on c.id = t.class_id
    join bookings b on b.class_id = t.class_id and b.user_id = auth.uid() and b.status = 'booked'
   where t.entfernt_am is null
     and coalesce(b.attendance, 'present') <> 'absent'
     and (t.grp = 0
          or not exists (select 1 from class_group_members g where g.class_id = t.class_id)
          or exists (select 1 from class_group_members g where g.class_id = t.class_id and g.user_id = auth.uid() and g.grp = t.grp))
   order by c.starts_at desc;
$$;
revoke all on function public.meine_club_themen() from public, anon;
grant execute on function public.meine_club_themen() to authenticated;
