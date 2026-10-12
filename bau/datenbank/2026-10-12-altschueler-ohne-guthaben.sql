-- 2026-10-12 — Altschueler ohne Guthaben: was bleibt, was zu ist
--
-- Julias Regel, woertlich: "Altschueler ohne Guthaben haben nur
-- Zugriff zu den Materialien und zu den Stundenmaterial die sie
-- gebucht hatten, aber sie haben sonst keinen Zugriff zu lernen und
-- auch nicht zu Amanda."
--
-- Was schon stimmte:
--   class_materials      "Material sichtbar fuer Gebuchte" — das
--                        Material einer gebuchten Stunde haengt an
--                        der Buchung, nicht am Guthaben.
--   student_nachbereitung  user_id = auth.uid() — die eigene
--                        Nachbereitung war nie gesperrt.
--   classes              "Stunde sichtbar fuer Gebuchte".
--
-- Was fehlte:
--   materials            Die Materialbibliothek war an
--                        has_full_access() geknuepft, mit einer
--                        Ausnahme fuer alles vor dem 10.06.2026.
--                        Eine Altschuelerin verlor damit jedes
--                        Material, das danach dazugekommen ist.
--
-- Was zu weit offen war (ausserhalb dieser Datei, in api/):
--   amanda-stimme.js     fragte nur status === 'aktiv' — den haben
--                        Altschueler ohne Guthaben weiterhin.
--   amanda-chat.js       fragte gar nichts ausser einem gueltigen
--                        Login. Jede Nachricht kostet Geld.
--   konto.html isActive() endete mit einem Rueckfall auf
--                        status aktiv/urlaub/pause und liess sie
--                        damit in den Lernbereich, wo dann leere
--                        Listen standen, weil die Datenbank sie
--                        nicht durchliess.
--
-- Die drei stehen jetzt auf derselben Regel (api/_zugang.js).

create or replace function public.ist_altschueler()
 returns boolean language sql stable security definer set search_path to 'public'
as $function$
  select exists (select 1 from public.bookings b
                 where b.user_id = auth.uid() and b.status = 'booked');
$function$;

alter policy "Materialien lesen" on public.materials
  using (has_full_access() or ist_altschueler()
         or created_at < '2026-06-10 22:00:00+00'::timestamptz);

-- Geprueft gegen acht Faelle:
--   Altschuelerin ohne Guthaben   Lernen nein · Materialien ja · Stunden ja
--   dieselbe mit kommender Stunde Lernen ja   · alles ja
--   archiviert                    Lernen nein · Materialien ja · Stunden ja
--   nur registriert, nie gebucht  nichts
--   Community/Premium/Lehrkraft   alles
