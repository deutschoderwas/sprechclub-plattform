-- ============================================================
-- Sprechclub-Plattform — Supabase-Schema
-- Einmal komplett im Supabase SQL-Editor ausführen.
-- ============================================================

-- 1) PROFILE (wird automatisch bei Registrierung angelegt)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  credits integer not null default 0,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Eigenes Profil lesen" on public.profiles
  for select using (auth.uid() = id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

create policy "Eigenen Namen ändern" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Profil automatisch anlegen, wenn sich jemand registriert
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'name',''));
  return new;
end; $$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2) STUNDEN (classes) — jede konkrete Stunde mit Datum/Uhrzeit
create table public.classes (
  id uuid primary key default gen_random_uuid(),
  title text not null,                -- z.B. "B1/B2 Unterricht"
  level text not null,                -- z.B. "A2", "B1/B2", "B2/C1", "ab B1"
  topic text,                         -- Wochenthema, z.B. "Verb LASSEN"
  starts_at timestamptz not null,
  duration_min integer not null default 60,
  capacity integer not null default 5,
  zoom_link text,                     -- wird nur Gebuchten angezeigt
  material_pre text,                  -- Link/Text: Übungen VOR dem Unterricht
  material_live text,                 -- Link: Material WÄHREND des Unterrichts
  material_post text,                 -- Link/Text: Nachbearbeitung
  vocab jsonb,                        -- Vokabeln: [{"de":"die Beschwerde","info":"complaint — eine Beschwerde einreichen"}]
  is_cancelled boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.classes enable row level security;

create policy "Stunden sind öffentlich sichtbar" on public.classes
  for select using (true);

create policy "Nur Admin ändert Stunden" on public.classes
  for all using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- 3) BUCHUNGEN
create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  class_id uuid not null references public.classes(id) on delete cascade,
  status text not null default 'booked',   -- booked | cancelled
  created_at timestamptz not null default now(),
  cancelled_at timestamptz,
  unique (user_id, class_id)
);

alter table public.bookings enable row level security;

create policy "Eigene Buchungen lesen" on public.bookings
  for select using (auth.uid() = user_id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

create policy "Admin ändert Buchungen" on public.bookings
  for update using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
  with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- 4) GUTHABEN-HISTORIE (Käufe + Verbrauch, für Nachvollziehbarkeit)
create table public.credit_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  change integer not null,             -- +8 (Kauf), -1 (Buchung), +1 (Storno)
  reason text not null,                -- 'purchase:paket-8', 'booking:<class_id>', 'cancel:<class_id>'
  stripe_session_id text,              -- gegen doppelte Webhook-Gutschriften
  created_at timestamptz not null default now()
);

create unique index credit_log_stripe_session on public.credit_log (stripe_session_id) where stripe_session_id is not null;

alter table public.credit_log enable row level security;

create policy "Eigene Historie lesen" on public.credit_log
  for select using (auth.uid() = user_id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- 5) BUCHEN — sicher gegen Überbuchung & ohne Guthaben (RPC)
create or replace function public.book_class(p_class_id uuid)
returns json language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_class record;
  v_booked integer;
  v_credits integer;
begin
  if v_user is null then return json_build_object('ok', false, 'error', 'not_logged_in'); end if;

  select * into v_class from public.classes where id = p_class_id and not is_cancelled for update;
  if not found then return json_build_object('ok', false, 'error', 'class_not_found'); end if;
  if v_class.starts_at < now() then return json_build_object('ok', false, 'error', 'class_in_past'); end if;

  select count(*) into v_booked from public.bookings where class_id = p_class_id and status = 'booked';
  if v_booked >= v_class.capacity then return json_build_object('ok', false, 'error', 'class_full'); end if;

  if exists (select 1 from public.bookings where class_id = p_class_id and user_id = v_user and status = 'booked') then
    return json_build_object('ok', false, 'error', 'already_booked');
  end if;

  select credits into v_credits from public.profiles where id = v_user for update;
  if v_credits < 1 then return json_build_object('ok', false, 'error', 'no_credits'); end if;

  update public.profiles set credits = credits - 1 where id = v_user;
  insert into public.bookings (user_id, class_id, status) values (v_user, p_class_id, 'booked')
    on conflict (user_id, class_id) do update set status = 'booked', cancelled_at = null;
  insert into public.credit_log (user_id, change, reason) values (v_user, -1, 'booking:' || p_class_id);

  return json_build_object('ok', true);
end; $$;

-- 6) STORNIEREN — bis 2 Stunden vorher, Stunde zurück aufs Guthaben
create or replace function public.cancel_booking(p_class_id uuid)
returns json language plpgsql security definer set search_path = public as $$
declare
  v_user uuid := auth.uid();
  v_starts timestamptz;
begin
  if v_user is null then return json_build_object('ok', false, 'error', 'not_logged_in'); end if;

  select starts_at into v_starts from public.classes where id = p_class_id;
  if not found then return json_build_object('ok', false, 'error', 'class_not_found'); end if;
  if v_starts - interval '2 hours' < now() then
    return json_build_object('ok', false, 'error', 'too_late');   -- Stornofrist 2 h
  end if;

  update public.bookings set status = 'cancelled', cancelled_at = now()
    where class_id = p_class_id and user_id = v_user and status = 'booked';
  if not found then return json_build_object('ok', false, 'error', 'no_booking'); end if;

  update public.profiles set credits = credits + 1 where id = v_user;
  insert into public.credit_log (user_id, change, reason) values (v_user, +1, 'cancel:' || p_class_id);

  return json_build_object('ok', true);
end; $$;

-- 6b) GUTSCHRIFT (wird nur vom Stripe-Webhook mit Service-Key aufgerufen)
create or replace function public.add_credits(p_user_id uuid, p_amount integer)
returns void language sql security definer set search_path = public as $$
  update public.profiles set credits = credits + p_amount where id = p_user_id;
$$;
revoke execute on function public.add_credits(uuid, integer) from anon, authenticated;

-- 6c) ADMIN: Guthaben manuell anpassen (nur Admin-Konten)
create or replace function public.admin_adjust_credits(p_user_id uuid, p_amount integer)
returns void language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.profiles where id = auth.uid() and is_admin) then
    raise exception 'not_admin';
  end if;
  update public.profiles set credits = credits + p_amount where id = p_user_id;
  insert into public.credit_log (user_id, change, reason) values (p_user_id, p_amount, 'admin_adjust');
end; $$;

-- 7) Freie Plätze öffentlich abfragbar (für den Stundenplan)
create or replace function public.class_availability()
returns table (class_id uuid, booked bigint) language sql security definer set search_path = public as $$
  select c.id, count(b.id) filter (where b.status = 'booked')
  from public.classes c
  left join public.bookings b on b.class_id = c.id
  group by c.id;
$$;

-- 8) Zoom-Link + Materialien nur für Gebuchte
create or replace function public.my_bookings()
returns table (class_id uuid, title text, level text, topic text, starts_at timestamptz, duration_min integer,
               zoom_link text, material_pre text, material_live text, material_post text, vocab jsonb, status text)
language sql security definer set search_path = public as $$
  select c.id, c.title, c.level, c.topic, c.starts_at, c.duration_min,
         c.zoom_link, c.material_pre, c.material_live, c.material_post, c.vocab, b.status
  from public.bookings b join public.classes c on c.id = b.class_id
  where b.user_id = auth.uid()
  order by c.starts_at;
$$;
