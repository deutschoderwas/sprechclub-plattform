-- 2026-10-13 — Kein Guthaben ist noch kein Grund zu sperren
--
-- Julias Regel: "Wenn ALTE Schueler Guthaben auf 0 haben, bitte nicht
-- den Zugang blockieren, erst wenn sie im Archiv sind und NICHT aktiv."
--
-- Am 12.10. hatte ich das Gegenteil gebaut: 0 Guthaben = sofort kein
-- Zugang mehr. Das griff zu frueh. Zwischen "Guthaben leer" und
-- "wirklich weg" liegen zwei Wochen, in denen jemand einfach nachkaufen
-- will — und in denen er die Plattform weiter sehen soll.
--
-- Jetzt entscheidet der Status, nicht das Guthaben:
--   aktiv, urlaub, pause        -> Zugang, auch mit 0 Guthaben
--   archiv, beendet, inaktiv,
--   geloescht, registriert,
--   probeschuler                -> kein Lernbereich
--
-- Ins Archiv schiebt weiterhin der naechtliche Lauf
-- (api/pruefe-mitgliedschaften.js) nach 14 Tagen ohne
-- Guthabenbewegung. Erst dann ist zu.
--
-- Was auch im Archiv bleibt (unveraendert, 12.10.): die Materialien
-- und das Material der Stunden, die sie gebucht hatten.
--
-- Dieselbe Regel steht in konto.html als isActive().

create or replace function public.has_full_access()
 returns boolean language sql stable security definer set search_path to 'public'
as $function$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and (
      p.is_admin or p.is_teacher or (
        coalesce(p.status,'') not in ('beendet','archiv','inaktiv','geloescht','registriert','probeschuler')
        and (
             coalesce(p.status,'') in ('aktiv','urlaub','pause')
          or (coalesce(p.tier,'') in ('community','premium','premiumplus','premium_plus')
              and coalesce(p.status,'aktiv') in ('aktiv','urlaub','pause'))
          or coalesce(p.credits,0) > 0
          or (p.pass_until is not null and p.pass_until > now())
          or exists (select 1 from public.bookings b join public.classes c on c.id = b.class_id
                     where b.user_id = p.id and b.status = 'booked' and c.starts_at > now())
        )
      )
    )
  );
$function$;

-- Nachgemessen am 13.10.2026:
--   kasia507@wp.pl        aktiv,  0 Guthaben -> Zugang
--   zoran.kraker@gmail    aktiv,  0 Guthaben -> Zugang
--   hetavakoli68@gmail    archiv, 0 Guthaben -> kein Lernbereich
--   ermolaeva.brixen      archiv, 0 Guthaben -> kein Lernbereich
