-- ============================================================
--  mail_auftraege — Versand ohne Knopf
--
--  Julia, 16.10.2026: "was soll das ueberhaupt mit dem verschicken
--  im admin bereich — mach du das fuer mich, wenn ich dich darum
--  bitte."
--
--  Der Versand hing an einem Knopf im Admin-Bereich, weil der
--  Endpunkt ein Admin-Token verlangt. Jetzt reicht eine Zeile hier:
--  api/mail-auftraege.js wird alle 15 Minuten von
--  api/auto-nachbereitung.js angestossen, nimmt sich genau einen
--  offenen Auftrag und schreibt den Bericht zurueck.
--
--  Einen Versand anstossen:
--    insert into mail_auftraege (art, grund, angelegt_von)
--    values ('lead_erinnerung', 'Erinnerung an alle ohne Abo', 'Claude');
--
--  Nur zaehlen, nichts schicken:
--    art = 'lead_erinnerung_vorschau'
--
--  Nachsehen, was gelaufen ist:
--    select id, art, status, created_at, fertig_at, bericht
--      from mail_auftraege order by id desc;
--
--  Angewandt am 16.10.2026.
-- ============================================================

create table if not exists public.mail_auftraege (
  id            bigserial primary key,
  art           text not null,                   -- lead_erinnerung | lead_erinnerung_vorschau
  status        text not null default 'offen',   -- offen | laeuft | fertig | fehler
  grund         text,                            -- wofuer, in Julias Worten
  angelegt_von  text,                            -- 'Julia' oder 'Claude'
  max_mails     int,                             -- Obergrenze fuer diesen Lauf (optional)
  created_at    timestamptz not null default now(),
  gestartet_at  timestamptz,
  fertig_at     timestamptz,
  bericht       jsonb                            -- Bilanz des Laufs
);

alter table public.mail_auftraege enable row level security;

-- Julia darf nachsehen. Geschrieben wird nur mit dem Service-Key,
-- also aus den Endpunkten — nie aus dem Browser.
create policy "Admin liest Mail-Auftraege" on public.mail_auftraege
  for select using (
    exists (select 1 from profiles p where p.id = auth.uid() and p.is_admin)
  );

-- ------------------------------------------------------------
-- 18.10.2026: zwei Auftragsarten dazu.
--
-- Julia ueber eine Kundin, deren Profil den nie bezahlten Kaufversuch
-- spiegelt statt ihres echten, gekuendigten Jahresabos: "Aber toma hat
-- doch bezahlt, das was sie storniert hat das entfernen."
--
-- Richtigstellen kann das nur ein Blick zu Stripe. Von Hand eintragen
-- hiesse Zahlen erfinden, die der naechste naechtliche Lauf ohnehin
-- ueberschreibt. /api/pruefe-mitgliedschaften verlangt aber den
-- internen Schluessel — also stoesst ihn jetzt die Auftragstabelle an,
-- die auf dem Server laeuft und den Schluessel aus ihrer eigenen
-- Umgebung nimmt.
--
--   insert into mail_auftraege (art, grund, angelegt_von)
--   values ('mitgliedschaften_pruefen', 'Abos mit Stripe abgleichen', 'Claude');
--
-- Nur nachsehen, nichts aendern:
--   art = 'mitgliedschaften_vorschau'   (ruft den Lauf mit ?trocken=1)
--
-- Der Bericht landet wie bei jedem Auftrag in der Spalte bericht.
-- ------------------------------------------------------------
