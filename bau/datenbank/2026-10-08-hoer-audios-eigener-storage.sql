-- ============================================================
-- 2026-10-08  Hoer-Audios in eigenen Storage geholt
--
-- Vorher: alle 309 Audiodateien des Hoerbereichs lagen auf
-- https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/
-- Das ist der Nutzerspeicher eines fremden Dienstes (Higgsfield),
-- nicht unser eigener. Reisst dieser Pfad, ist der komplette
-- Hoerbereich auf allen Niveaus stumm - ohne lokale Kopie.
--
-- Jetzt: eigener, oeffentlicher Supabase-Bucket "hoeren".
-- 309 Dateien, 65,3 MB, byteweise identisch zur Quelle geprueft.
-- ============================================================

-- 1) Bucket
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('hoeren', 'hoeren', true, 20971520,
        array['audio/mpeg','audio/mp3','audio/wav','audio/x-wav','audio/wave'])
on conflict (id) do update set public = true;

-- 2) Protokolltabelle: welche Datei kam woher, wann, wie gross
create table if not exists public.hoer_audio (
  id          bigserial primary key,
  datei       text not null unique,          -- Dateiname im Bucket
  quelle_url  text not null,                 -- urspruengliche CDN-Adresse
  pfad        text,                          -- hoeren/<datei>
  bytes       bigint,
  kopiert_at  timestamptz,
  fehler      text,
  angelegt_at timestamptz not null default now()
);
alter table public.hoer_audio enable row level security;
create index if not exists hoer_audio_offen
  on public.hoer_audio (kopiert_at) where kopiert_at is null;
-- Keine SELECT-Policy: die Tabelle ist reines Protokoll und wird nur
-- serverseitig (service_role) gelesen.

-- 3) Kopiert hat die Edge Function "hoer-sichern":
--    ?schritt=sammeln   - liest hoer-neu.js, hoer-fragen.js, uebungen.js,
--                         hoer-dateien.js von der Live-Domain und traegt
--                         jede gefundene mp3/wav in hoer_audio ein
--    ?schritt=kopieren&n=30 - holt n offene Dateien von der CDN und legt
--                         sie im Bucket ab (nur aus der erlaubten Quelle)
--    ?schritt=stand     - Zaehlstand
--    Die Funktion hat ihre Arbeit getan und kann geloescht werden.

-- 4) Im Code umgestellt (582 Adressen):
--    hoer-fragen.js 238 | uebungen.js 162 | hoer-neu.js 136
--    hoer-dateien.js 14 | quellen/uebungen-a2-orte.json 16
--    quellen/uebungen-a2-wortschatz.json 16
--    Neuer Praefix:
--    https://csadlwsuisbyawrgdrca.supabase.co/storage/v1/object/public/hoeren/

-- Stand pruefen:
--   select count(*) filter (where kopiert_at is not null) as kopiert,
--          count(*) filter (where kopiert_at is null)     as offen,
--          pg_size_pretty(sum(bytes))                     as groesse
--   from public.hoer_audio;

-- OFFEN: auf derselben fremden CDN liegen noch ~636 Bilder, 6 mp4 und
-- die Bilder des Vokabeltrainers. Dieselbe Abhaengigkeit, gleiche
-- Gefahr - das ist der naechste Schritt.
