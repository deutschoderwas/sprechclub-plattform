-- 2026-10-12 — Amandas Minutenzaehlung: ein Abbruch kostete eine Stunde
--
-- amanda_monat_sekunden rechnete ein Gespraech ohne beendet-Zeitpunkt
-- mit der vollen laufenden Zeit an, gedeckelt bei 3600 Sekunden. Das war
-- Absicht: Wer wegklickt, soll der Monatsgrenze nicht entkommen.
--
-- In der Praxis traf es die Falschen. Meldet der Browser das Ende nicht
-- (Netz weg, Tab zu, Absturz), bleibt die Zeile fuer immer offen und
-- zaehlt bis zum Monatswechsel eine volle Stunde.
--
--   tamarabondarenko9@gmail.com  Premium, 180 Minuten
--     3 offene Gespraeche vom 3. und 9.10. = 180 Minuten
--     tatsaechlich gesprochen: 14 Sekunden        -> gesperrt
--   stewofu@gmail.com            60 Minuten
--     1 offenes Gespraech vom 3.10. = 60 Minuten
--     tatsaechlich gesprochen: 29 Sekunden        -> gesperrt
--
-- Zwei Aenderungen, von Julia so entschieden:
--
-- 1. Ein offenes Gespraech zaehlt hoechstens 15 Minuten statt 60.
--    Mehr als die meisten Gespraeche dauern, also lohnt Wegklicken
--    weiterhin nicht — ein Verbindungsabbruch kostet aber nicht mehr
--    den halben Monat.
-- 2. Die vier haengengebliebenen Zeilen werden auf 0 Sekunden gesetzt
--    und als abgebrochen markiert. Es gibt keinen Beleg dafuer, wie
--    lange wirklich gesprochen wurde: Die Sekunden standen auf 0, weil
--    nie etwas gemeldet wurde. Im Zweifel fuer die Schuelerin.
--
-- Dazu in api/amanda-stimme.js: Beim Start eines neuen Gespraechs
-- werden offene Zeilen derselben Person geschlossen. Wer neu anfaengt,
-- spricht sicher nicht mehr im alten Gespraech.

create or replace function public.amanda_monat_sekunden(p_user uuid)
 returns integer
 language sql
 stable security definer
 set search_path to 'public'
as $function$
  select coalesce(sum(
    case
      when beendet is null then greatest(0, least(900, extract(epoch from (now() - gestartet))::int))
      else sekunden
    end
  ), 0)::int
  from amanda_gespraeche
  where user_id = p_user
    and gestartet >= date_trunc('month', now());
$function$;

-- Einmalige Reparatur (am 12.10.2026 gelaufen, 4 Zeilen):
-- update amanda_gespraeche
-- set beendet = gestartet, sekunden = 0, abgebrochen = true
-- where beendet is null and gestartet < now() - interval '3 hours';
