-- ============================================================
-- Zugang zur Plattform — Stand 2. September 2026
--
-- Diese Datei hält fest, was an der Datenbank geändert wurde. Sie ist
-- bereits eingespielt; sie steht hier, damit man später nachlesen kann,
-- warum die Regel so aussieht, wie sie aussieht.
--
-- Anlass: Ein archivierter Schüler konnte weiterhin in der Community
-- schreiben. Der Grund stand in has_full_access(): Dort war
-- "p.credits > 0" gleichrangig neben der Tier-Prüfung, die
-- Statusprüfung galt also nur für Community- und Premium-Mitglieder.
-- Wer archiviert war, aber noch eine Restgutschrift hatte, kam durch.
--
-- Die Regel, nach Julias Vorgabe:
--   gesperrt  beendet, archiv, inaktiv, geloescht, registriert,
--             probeschuler → kein Zugang, egal was sonst im Profil steht
--   Zugang    Alt-Schüler des Live-Sprechclubs mit Guthaben, gültigem
--             Pass oder einer noch bevorstehenden gebuchten Stunde
--             Community und Premium mit Status aktiv
--             Lehrkräfte und Admin immer
--
-- Dieselbe Regel steht als isActive() in konto.html. Wenn eine Seite
-- sich ändert, muss die andere mit.
-- ============================================================

create or replace function public.has_full_access()
returns boolean
language sql
stable
security definer
set search_path to 'public'
as $function$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and (
        p.is_admin
        or p.is_teacher
        or (
          coalesce(p.status,'') not in
            ('beendet','archiv','inaktiv','geloescht','registriert','probeschuler')
          and (
            (coalesce(p.tier,'') in ('community','premium','premium_plus')
             and coalesce(p.status,'aktiv') = 'aktiv')
            or p.credits > 0
            or (p.pass_until is not null and p.pass_until > now())
            or exists (
                 select 1 from public.bookings b
                   join public.classes c on c.id = b.class_id
                  where b.user_id = p.id and b.status = 'booked'
                    and c.starts_at > now())
          )
        )
      )
  );
$function$;


-- ------------------------------------------------------------
-- Kontrollansicht: "Bitte immer kontrollieren, so dass wir keine
-- Fremden haben, die nichts zahlen, aber die Plattform nutzen."
--
-- darf_rein bildet has_full_access() ab, letzte_aktivitaet zeigt, wann
-- die Person zuletzt etwas geschrieben hat. Interessant ist jede Zeile
-- mit darf_rein = false und frischer Aktivität.
--
-- Abfrage für den Alltag:
--   select name, status, tier, credits, letzte_aktivitaet
--     from v_zugang_kontrolle
--    where darf_rein = false
--      and letzte_aktivitaet > now() - interval '30 days'
--    order by letzte_aktivitaet desc;
-- ------------------------------------------------------------
create or replace view public.v_zugang_kontrolle as
select
  p.id,
  p.name,
  p.email,
  coalesce(nullif(p.status,''), '(leer)') as status,
  coalesce(p.tier, '(kein tier)')         as tier,
  p.credits,
  p.pass_until,
  (select count(*) from public.bookings b
     join public.classes c on c.id = b.class_id
    where b.user_id = p.id and b.status = 'booked' and c.starts_at > now()) as offene_stunden,
  (p.is_admin or p.is_teacher
   or (coalesce(p.status,'') not in
         ('beendet','archiv','inaktiv','geloescht','registriert','probeschuler')
       and ((coalesce(p.tier,'') in ('community','premium','premium_plus')
             and coalesce(p.status,'aktiv') = 'aktiv')
            or p.credits > 0
            or (p.pass_until is not null and p.pass_until > now())
            or exists (select 1 from public.bookings b
                         join public.classes c on c.id = b.class_id
                        where b.user_id = p.id and b.status = 'booked'
                          and c.starts_at > now()))))  as darf_rein,
  greatest(
    coalesce((select max(m.created_at) from public.community_messages m where m.user_id = p.id), 'epoch'::timestamptz),
    coalesce((select max(d.created_at) from public.direct_messages d where d.sender_id = p.id), 'epoch'::timestamptz)
  ) as letzte_aktivitaet
from public.profiles p;

-- Die Ansicht enthält Namen und E-Mail-Adressen aller Mitglieder.
-- Deshalb: Rechte des Aufrufers statt des Erstellers, und kein
-- Leserecht für eingeloggte Nutzer oder Besucher.
alter view public.v_zugang_kontrolle set (security_invoker = on);
revoke all on public.v_zugang_kontrolle from anon, authenticated;
grant select on public.v_zugang_kontrolle to service_role;


-- ------------------------------------------------------------
-- Der Status "probeschuler" ist abgeschafft. Der eine verbliebene
-- Datensatz steht jetzt auf "registriert" (kein Paket) — am Zugang
-- ändert das nichts, beide Zustände sind gesperrt.
-- ------------------------------------------------------------
-- update profiles set status = 'registriert' where status = 'probeschuler';
