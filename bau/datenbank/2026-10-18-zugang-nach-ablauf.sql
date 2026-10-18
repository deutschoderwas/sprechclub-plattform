-- ============================================================
--  18.10.2026 — Zugang schliessen, wenn das Abo abgelaufen ist
--
--  Julia: "wenn ein Abo gekündigt wurde egal ob community oder
--  premium, dass die Leute NACH DEM ABLAUF auch keinen Zugang
--  mehr zu der Plattform haben und es im Admin bereich neben
--  dem Schüler steht (ZUGANG abgelaufen)."
--
--  Beim Nachsehen kam heraus: das war seit Tagen kaputt, nur
--  leise. Der naechtliche Lauf schrieb am 16. und am 17.10.
--  brav "gekuendigt" ins zugang_log — im Profil stand aber
--  weiter status='aktiv' und tier='community'.
--
--  Grund: profiles_status_chk kannte 'gekuendigt' gar nicht.
--  Jede dieser Aenderungen lief ins Leere. supabase-js wirft
--  bei so einem Fehler nicht, es gibt { error } zurueck — und
--  der wurde bis zum 17.10. nirgends angesehen. Drei Leute,
--  deren Abo am 26.09., 01.10. und 06.10. abgelaufen war,
--  hatten deshalb heute noch vollen Zugang.
-- ============================================================

-- 1. Der Status, den der naechtliche Lauf setzen will.
alter table public.profiles drop constraint if exists profiles_status_chk;
alter table public.profiles add constraint profiles_status_chk
  check (status = any (array['aktiv','probeschuler','pause','urlaub',
                             'gekuendigt','beendet','registriert','archiv']));

-- 2. Buchen nur mit Zugang.
--    book_class fragte has_full_access() nie. Der Premium-Weg verlangt
--    status='aktiv', der Guthaben-Weg aber nur credits >= 1 — und das
--    Guthaben nimmt der naechtliche Lauf niemandem weg. Ein abgelaufenes
--    Premium-Mitglied mit Restguthaben haette weiter gebucht. Drei
--    Premium-Mitglieder haben solches Restguthaben.
--    (Eingespielt am 18.10.2026 ueber ein DO-Block-Replace auf der
--    bestehenden Funktion, damit kein Zeichen des Rests neu getippt
--    werden musste. Hier steht nur, was dazugekommen ist:)
--
--      if not public.has_full_access() then
--        return json_build_object('ok', false, 'error', 'kein_zugang');
--      end if;
--
--    Eingefuegt direkt nach der Pruefung auf 'not_logged_in'.

-- 3. Wer zahlt fuer wen?
--    Julia: "Volha hat per Überweisung für ein ganzes Jahr bezahlt"
--    und "Arina wird von der Schwester Ekaterina bezahlt (Ekaterina
--    hat 2 Abos abgeschlossen auf ihren Namen), Arina hat immer
--    Zugang, sobald Ekaterinas Abos weiterlaufen."
alter table public.profiles
  add column if not exists bezahlt_von uuid references public.profiles(id) on delete set null,
  add column if not exists bezahlt_hinweis text;

comment on column public.profiles.bezahlt_von is
  'Wer zahlt fuer diese Person? Zeigt auf das Profil des Zahlers. Solange dessen Abo laeuft, bleibt der Zugang hier offen; der naechtliche Lauf gleicht das ab (Schritt 4d in api/pruefe-mitgliedschaften.js).';
comment on column public.profiles.bezahlt_hinweis is
  'Ein Satz im Klartext, warum diese Mitgliedschaft von Hand gesetzt ist — steht im Admin beim Schueler und im Schuelerbereich auf der Abo-Karte.';

-- 4. Die beiden Faelle eingetragen.
update public.profiles set
  tier='premium', tier_ab=date '2026-11-01', status='aktiv',
  abo_start         = timestamptz '2026-11-01 00:00:00+01',
  abo_ende          = timestamptz '2027-11-01 00:00:00+01',
  abo_gekuendigt_am = null,
  abo_stripe_status = 'von_hand',
  abo_plan          = 'premium_jahr_ueberweisung',
  pass_until        = timestamptz '2027-11-01 00:00:00+01',
  bezahlt_hinweis   = 'Jahresabo per Überweisung bezahlt. Nächste Zahlung am 01.11.2027.'
where email = 'skomorokh81@gmail.com';

update public.profiles set
  tier='premium', tier_ab=date '2026-11-01', status='aktiv',
  bezahlt_von       = (select id from public.profiles where email='ekaterinakovalenko1993@gmail.com'),
  bezahlt_hinweis   = 'Wird von ihrer Schwester Ekaterina Kovalenko mitbezahlt (zwei Abos auf Ekaterinas Namen). Zugang, solange Ekaterinas Abo läuft.',
  abo_stripe_status = 'von_hand',
  abo_plan          = 'premium_ueber_schwester'
where email = 'kovalenkoao06@yandex.ru';

-- Gegenprobe: ein abgelaufenes Konto kommt nicht mehr hinein,
-- behaelt aber seine Materialien. Am 18.10.2026 in einer
-- zurueckgerollten Transaktion gelaufen:
--   kommt_rein = false, materialien_bleiben = true.
