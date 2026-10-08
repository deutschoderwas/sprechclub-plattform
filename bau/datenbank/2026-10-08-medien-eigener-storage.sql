-- ============================================================
-- 2026-10-08  Lektionsbilder und -videos in eigenen Storage geholt
--
-- Vorher: 627 Bilder, Videos und Nachzuegler-Audios lagen auf
-- https://d8j0ntlcm91z4.cloudfront.net/user_38tIQPWpEsaUmk18tYN8mskaaAF/
-- also im Nutzerspeicher eines fremden Dienstes. Reisst dieser Pfad,
-- sind die Sprechclub-Lektionen, der Wortschatz- und Grammatikfokus
-- und der Niveautest ohne Bilder.
--
-- Zweites Problem, das dabei sichtbar wurde: die PNG waren im Schnitt
-- 1,4 MB gross. Die bilderreichste Lektion zog damit rund 70 MB pro
-- Aufruf - auf dem Handy unbenutzbar. Beim Kopieren wurden sie deshalb
-- in WebP umgewandelt (Qualitaet 85, Kante max. 1600 px).
--
-- Ergebnis: 844 MB -> 82 MB. Bilder im Schnitt 17x kleiner,
-- bei 1:1-Vergleich kein sichtbarer Unterschied.
-- ============================================================

-- 1) Bucket fuer Bilder und Videos (Audio liegt weiter in "hoeren")
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('medien','medien', true, 20971520,
        array['image/webp','image/png','image/jpeg','video/mp4'])
on conflict (id) do update set public = true,
  allowed_mime_types = excluded.allowed_mime_types;

-- 2) Protokolltabelle
create table if not exists public.medien_datei (
  id            bigserial primary key,
  datei         text not null unique,   -- urspruenglicher Name auf der CDN
  ziel          text not null,          -- Name im Bucket (.png wurde .webp)
  bucket        text not null default 'medien',
  quelle_url    text not null,
  bytes_vorher  bigint,
  bytes_nachher bigint,
  kopiert_at    timestamptz,
  fehler        text,
  angelegt_at   timestamptz not null default now()
);
alter table public.medien_datei enable row level security;
create index if not exists medien_datei_offen
  on public.medien_datei (kopiert_at) where kopiert_at is null;

-- 3) Kopiert hat die Edge Function "medien-sichern". Sie haelt den
--    Service-Role-Key und vergibt nur kurzlebige, signierte Upload-
--    Adressen - und zwar ausschliesslich fuer Dateien, die vorher
--    angemeldet wurden und noch nicht da sind. Die Umwandlung in WebP
--    passierte ausserhalb. Die Funktion hat ihre Arbeit getan und kann
--    geloescht werden; dasselbe gilt fuer "hoer-sichern".
--      ?schritt=anmelden   POST {"dateien":["hf_….png", …]}
--      ?schritt=signieren&n=25
--      ?schritt=fertig     POST {"meldungen":[{id,bytes_vorher,bytes_nachher}]}
--      ?schritt=stand

-- 4) Im Code umgestellt: 2692 Adressen in 109 Dateien, dazu vier
--    Basis-Variablen, die den Dateinamen erst zur Laufzeit anhaengen
--    und deshalb beim ersten Durchgang unsichtbar waren:
--      niveautest-items3.js  var CDN        -> hoeren
--      niveautest-data.js    var CDN        -> hoeren
--                            var SCENE_CDN  -> medien
--      ueben.js              var SHADOW_CDN -> hoeren
--      w04-b-teil1-…html     var B          -> medien

-- OFFEN: ein Bild ist auf der Quell-CDN schon tot (HTTP 403) und
-- konnte nicht gerettet werden:
--   hf_20260924_174126_e9e30f50-6139-4795-bccc-74b0cfdecc84.png
--   = "zerkleinern" in Unterricht-ab-14-09/wortschatzboost-verben-zer-3stufen.html
-- Dort bleibt die alte Adresse stehen, bis ein Ersatzbild da ist.
-- Genau dieser Fall ist der Grund fuer die ganze Aktion.

-- HINWEIS fuer neue Lektionen: Bilder, die frisch aus Higgsfield kommen,
-- zeigen wieder auf die fremde CDN. Pruefen mit:
--   grep -rl "d8j0ntlcm91z4.cloudfront.net" --include="*.html" --include="*.js" .
-- Stand pruefen:
--   select count(*) filter (where kopiert_at is not null) as kopiert,
--          count(*) filter (where kopiert_at is null)     as offen,
--          pg_size_pretty(sum(bytes_vorher))  as vorher,
--          pg_size_pretty(sum(bytes_nachher)) as nachher
--   from public.medien_datei;
