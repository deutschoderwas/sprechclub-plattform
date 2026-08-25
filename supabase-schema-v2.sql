-- ============================================================
-- Sprechclub-Plattform — Schema-Erweiterung v2
-- (Schülerbereich als Profi-Plattform: KI-Material, Übungen,
--  Fortschritt, Nachrichten, Bewertungen, Profil)
--
-- ▶ EINMAL komplett im Supabase SQL-Editor ausführen.
--   Sicher mehrfach ausführbar (idempotent dank IF NOT EXISTS).
-- ============================================================

-- ------------------------------------------------------------
-- 1) PROFIL erweitern (Lernziel, Zielniveau, Muttersprache)
-- ------------------------------------------------------------
alter table public.profiles add column if not exists goal            text;
alter table public.profiles add column if not exists target_level    text;
alter table public.profiles add column if not exists native_language text;

-- WICHTIGER FIX (42P17): Die bisherige profiles-Leserechte-Policy enthielt einen
-- Admin-Check, der wieder auf profiles zugriff -> "infinite recursion". Das blockierte
-- ALLE Abfragen, die profiles berühren. Lösung: Admin-Check in eine SECURITY-DEFINER-
-- Hilfsfunktion auslagern (umgeht RLS, daher keine Rekursion mehr).
create or replace function public.is_admin() returns boolean
  language sql security definer stable set search_path = public as $func$
  select exists (select 1 from public.profiles where id = auth.uid() and is_admin);
$func$;
grant execute on function public.is_admin() to anon, authenticated;

drop policy if exists "Eigenes Profil lesen" on public.profiles;
create policy "Eigenes Profil lesen" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

-- SICHERHEITS-FIX:
-- Bisher durften eingeloggte Nutzer ihr eigenes Profil direkt ändern
-- (with check auth.uid()=id) — damit hätte man sich selbst Guthaben
-- oder Admin-Rechte geben können. Wir nehmen das direkte UPDATE weg
-- und erlauben Profil-Änderungen nur noch über eine kontrollierte Funktion.
drop policy if exists "Eigenen Namen ändern" on public.profiles;
revoke update on public.profiles from authenticated, anon;

create or replace function public.update_my_profile(
  p_name text, p_goal text, p_target_level text, p_native_language text
) returns void language plpgsql security definer set search_path = public as $$
begin
  update public.profiles
     set name            = coalesce(nullif(p_name,''), name),
         goal            = p_goal,
         target_level    = p_target_level,
         native_language = p_native_language
   where id = auth.uid();
end; $$;

-- ------------------------------------------------------------
-- 2) KI-MATERIAL pro Stunde (eine Zeile je Stunde, von Amanda/Claude erzeugt)
-- ------------------------------------------------------------
create table if not exists public.class_materials (
  class_id     uuid primary key references public.classes(id) on delete cascade,
  content      jsonb not null,                 -- strukturierte Übungen + Grammatik + Vokabeln
  model        text,
  generated_at timestamptz not null default now()
);

alter table public.class_materials enable row level security;

-- Lesen: nur wer die Stunde gebucht hat (oder Admin)
drop policy if exists "Material für Gebuchte" on public.class_materials;
create policy "Material für Gebuchte" on public.class_materials
  for select using (
    exists (select 1 from public.bookings b
            where b.class_id = class_materials.class_id
              and b.user_id = auth.uid() and b.status = 'booked')
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin)
  );

-- Schreiben/Ändern direkt nur Admin (die Generier-Funktion schreibt mit Service-Key)
drop policy if exists "Material Admin schreibt" on public.class_materials;
create policy "Material Admin schreibt" on public.class_materials
  for all using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
      with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- ------------------------------------------------------------
-- 3) ÜBUNGS-FORTSCHRITT (pro Schüler, pro Stunde, pro Phase)
-- ------------------------------------------------------------
create table if not exists public.exercise_progress (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  class_id   uuid not null references public.classes(id) on delete cascade,
  phase      text not null,                    -- 'pre' | 'post'
  answers    jsonb,
  score      integer,
  total      integer,
  completed  boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (user_id, class_id, phase)
);

alter table public.exercise_progress enable row level security;

drop policy if exists "Eigener Fortschritt" on public.exercise_progress;
create policy "Eigener Fortschritt" on public.exercise_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ------------------------------------------------------------
-- 4) NACHRICHTEN (Schüler ⇄ Lehrerin)
-- ------------------------------------------------------------
create table if not exists public.messages (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,  -- der Schüler-Thread
  sender     text not null,                    -- 'student' | 'teacher'
  body       text not null,
  read       boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;

drop policy if exists "Eigene Nachrichten lesen" on public.messages;
create policy "Eigene Nachrichten lesen" on public.messages
  for select using (auth.uid() = user_id
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

drop policy if exists "Schüler schreibt eigene" on public.messages;
create policy "Schüler schreibt eigene" on public.messages
  for insert with check (auth.uid() = user_id and sender = 'student');

drop policy if exists "Admin schreibt Nachrichten" on public.messages;
create policy "Admin schreibt Nachrichten" on public.messages
  for all using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin))
      with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- ------------------------------------------------------------
-- 5) BEWERTUNGEN (Sterne + Kommentar nach der Stunde)
-- ------------------------------------------------------------
create table if not exists public.ratings (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  class_id   uuid not null references public.classes(id) on delete cascade,
  stars      integer not null check (stars between 1 and 5),
  comment    text,
  created_at timestamptz not null default now(),
  unique (user_id, class_id)
);

alter table public.ratings enable row level security;

drop policy if exists "Eigene Bewertungen" on public.ratings;
create policy "Eigene Bewertungen" on public.ratings
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Admin liest Bewertungen" on public.ratings;
create policy "Admin liest Bewertungen" on public.ratings
  for select using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_admin));

-- ------------------------------------------------------------
-- 6) Profil-Lesen um neue Spalten: bestehende Policy deckt das schon ab
--    (select using auth.uid()=id ...). Nichts weiter nötig.
-- ------------------------------------------------------------

-- Fertig ✓
