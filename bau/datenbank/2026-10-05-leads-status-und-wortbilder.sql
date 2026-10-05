-- ============================================================
--  05.10.2026 — zwei Aenderungen an der Datenbank
-- ============================================================

-- 1) leads.status kannte 'adresse_pruefen' nicht.
--    Der CHECK hat jedes Update darauf still abgelehnt: die
--    Automatik meldete alle zehn Minuten "4 Adressen pruefen",
--    der Status blieb 'neu', und dieselben vier Menschen liefen
--    endlos im Kreis. Supabase wirft bei so einem Fehler nichts,
--    es gibt ihn zurueck — ein try/catch sieht davon nichts.
alter table public.leads drop constraint leads_status_check;
alter table public.leads add constraint leads_status_check
  check (status = any (array['neu','kontaktiert','probestunde','gewonnen','abgelehnt','adresse_pruefen']));

-- 2) Bilder zu den Vokabeln: einmal pro Wort suchen, danach merken.
create table if not exists public.wort_bilder (
  wort      text primary key,
  url       text,
  autor     text,
  quelle    text,
  lizenz    text,
  such_en   text,
  leer      boolean not null default false,
  geholt_at timestamptz not null default now()
);
alter table public.wort_bilder enable row level security;
-- Keine Policy: nur der Server (service_role) liest und schreibt hier.
