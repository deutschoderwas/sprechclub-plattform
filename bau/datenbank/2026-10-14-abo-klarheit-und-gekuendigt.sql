-- ============================================================
--  14.10.2026 — Abo-Klarheit und der Status 'gekuendigt'
--
--  Julia: "unter jedem Schueler muss ich sehen von wann bis wann sein
--  Abo geht, ob er sie gekuendigt hat, falls die Abos gekuendigt
--  werden, besteht NACH dem Ablauf kein Zugang mehr. [...] wenn sie
--  nicht mehr bezahlen und das Abo ablaeuft dann muessen sie auch das
--  Abzeichen verlieren und aus der Liste auf [...] GEKUENDIGT gesetzt
--  werden, damit ich das gut nachverfolgen kann"
--
--  Drei Teile, hier ist der Datenbank-Teil:
--    1. profiles.abo_*       — die Stripe-Zahlen pro Schueler
--    2. has_full_access()    — 'gekuendigt' sperrt
--    3. ist_altschueler()    — Materialien bleiben trotzdem
--
--  Wichtig: 'gekuendigt' heisst ABGELAUFEN, nicht "hat gekuendigt".
--  Wer kuendigt und dessen Abo noch bis zum Monatsende laeuft, behaelt
--  tier und damit den Zugang bis dahin — bei Stripe steht die Zahlung
--  dann noch auf 'active', nur mit cancel_at_period_end. Erst wenn
--  kein laufendes Abo mehr da ist, setzt /api/pruefe-mitgliedschaften
--  status='gekuendigt', tier=null, tier_ab=null und schreibt eine
--  Zeile in zugang_log.
-- ============================================================

-- 1) Die Spalten (schon angewandt am 13.10.2026)
alter table public.profiles add column if not exists abo_start         timestamptz;
alter table public.profiles add column if not exists abo_ende          timestamptz;
alter table public.profiles add column if not exists abo_gekuendigt_am timestamptz;
alter table public.profiles add column if not exists abo_stripe_status text;
alter table public.profiles add column if not exists abo_plan          text;
alter table public.profiles add column if not exists abo_geprueft_am   timestamptz;

comment on column public.profiles.abo_start         is 'Beginn der laufenden Stripe-Abrechnungsperiode';
comment on column public.profiles.abo_ende          is 'Ende der laufenden Periode — bis dahin besteht Zugang';
comment on column public.profiles.abo_gekuendigt_am is 'Wann gekuendigt wurde (canceled_at oder cancel_at_period_end)';
comment on column public.profiles.abo_stripe_status is 'active, trialing, past_due, canceled, kein_abo';
comment on column public.profiles.abo_plan          is 'metadata.plan der Subscription';
comment on column public.profiles.abo_geprueft_am   is 'wann der naechtliche Lauf zuletzt bei Stripe geschaut hat';

-- 2) 'gekuendigt' sperrt die Lernplattform
create or replace function public.has_full_access()
returns boolean language sql stable security definer set search_path to 'public' as $function$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and (
      p.is_admin or p.is_teacher or (
        coalesce(p.status,'') not in ('beendet','archiv','inaktiv','geloescht','registriert','probeschuler','gekuendigt')
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

-- 3) Die Materialien bleiben — auch fuer Community-Mitglieder,
--    die nie eine Stunde gebucht haben.
create or replace function public.ist_altschueler()
returns boolean language sql stable security definer set search_path to 'public' as $function$
  select exists (
    select 1 from public.bookings b
    where b.user_id = auth.uid() and b.status = 'booked'
  ) or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and coalesce(p.status,'') = 'gekuendigt'
  );
$function$;

-- Gegenprobe: niemand steht heute auf 'gekuendigt' —
-- der erste naechtliche Lauf nach dem Deploy setzt den Status.
--   select status, count(*) from profiles group by 1;
