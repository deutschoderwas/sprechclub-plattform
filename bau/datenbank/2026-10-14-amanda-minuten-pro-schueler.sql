-- ============================================================
--  14.10.2026 — Amandas Monatsminuten pro Schueler
--
--  Julia: "Mach bei Kadriye mehr"
--
--  Vorgeschichte: Kadriye (cetinbey38@outlook.de) hatte am 10.10. genau
--  60,0 von 60 Minuten verbraucht — zehn echte Gespraeche, keine
--  Fehlbuchung. Danach war Amanda fuer sie zu, und das sah fuer sie aus
--  wie ein Defekt. Die Grenze stand aber nur global in Vercel
--  (AMANDA_MINUTEN=60, AMANDA_MINUTEN_PREMIUM=180): Julia konnte sie nur
--  fuer ALLE anheben oder fuer niemanden. Bei 8 bis 10 Cent pro Minute
--  ist das keine Kleinigkeit.
--
--  Deshalb eine Grenze pro Person.
-- ============================================================

alter table public.profiles add column if not exists amanda_minuten integer;
comment on column public.profiles.amanda_minuten is
  'Eigene Monatsgrenze fuer Amanda in Minuten. Leer = normale Regel (60, Premium 180). 0 = kein Amanda. In der Schuelerkarte setzbar.';

-- Setzen nur fuer Julia, und jede Aenderung ins Protokoll. Der erste
-- Versuch hatte das update VOR dem Lesen des alten Werts — dann steht
-- im Protokoll unter 'vorher' der neue Wert, und das Protokoll luegt.
create or replace function public.admin_set_amanda_minuten(p_user_id uuid, p_minuten integer)
returns void language plpgsql security definer set search_path to 'public' as $$
declare v_vorher integer; v_mail text;
begin
  if not exists (select 1 from public.profiles where id = auth.uid() and is_admin) then
    raise exception 'nur_admin';
  end if;
  if p_minuten is not null and (p_minuten < 0 or p_minuten > 1200) then
    raise exception 'minuten_ausserhalb_0_1200';
  end if;
  select amanda_minuten, email into v_vorher, v_mail from public.profiles where id = p_user_id;
  update public.profiles set amanda_minuten = p_minuten where id = p_user_id;
  insert into public.zugang_log (user_id, email, aktion, grund, vorher, nachher)
  values (p_user_id, v_mail, 'amanda_minuten', 'von Julia im Admin gesetzt',
          jsonb_build_object('amanda_minuten', v_vorher),
          jsonb_build_object('amanda_minuten', p_minuten));
end $$;
grant execute on function public.admin_set_amanda_minuten(uuid, integer) to authenticated;

-- Kadriye: 180 Minuten (wie Premium), dazu der Vorname statt der
-- E-Mail-Adresse im Namensfeld. Beides steht in zugang_log.
--   update profiles set amanda_minuten = 180, name = 'Kadriye'
--   where email = 'cetinbey38@outlook.de';   -- am 14.10.2026 ausgefuehrt

-- Gegenprobe:
--   select email, name, amanda_minuten from profiles where amanda_minuten is not null;
