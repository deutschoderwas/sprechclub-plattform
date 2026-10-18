-- ============================================================
--  niveau_setzen — eine Lehrkraft darf ein Niveau eintragen
--
--  Julia, 18.10.2026: "ganz wichtig, dass JEDER ein Niveau bei sich
--  eintraegt. Damit wir wenn wir in den Klassenraeumen sind jeder ein
--  Niveau da hat, so dass die Lehrer die Schueler zusammentun koennen
--  je nach Niveau" — und: "oder der Lehrer kann es auch selbst per
--  hand machen."
--
--  Stand am 18.10.2026: von 77 Konten mit Zugang hatten 23 ueberhaupt
--  kein Niveau (weder level noch stufe noch target_level). Die landen
--  im Klassenraum beim Zuteilen im Rest-Band und lassen sich nicht
--  sinnvoll gruppieren.
--
--  Setzen konnte es bisher nur ein Admin, ueber admin_set_student_card
--  — und die ueberschreibt nebenbei notes und started_at. Im
--  Klassenraum braucht es etwas Schmaleres: eine Lehrkraft, ein Feld,
--  ein Wert.
--
--  Wer darf:
--    Admins und Lehrkraefte     fuer jeden
--    alle anderen               nur fuer sich selbst
--  Angenommen wird nur A1 bis C2 (gross/klein egal), oder NULL zum
--  Leeren.
--
--  Gegengeprueft am 18.10.2026 in zurueckgerollten Transaktionen:
--    Lehrkraft setzt bei Schueler  -> 'b2' wird zu 'B2'
--    Schueler setzt bei Fremdem    -> nicht_erlaubt
--    Schueler setzt bei sich       -> erlaubt
--    unsinniges Niveau 'Z9'        -> niveau_unbekannt
--
--  Angewandt am 18.10.2026.
-- ============================================================

create or replace function public.niveau_setzen(p_user_id uuid, p_level text)
returns text
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_level text := nullif(upper(trim(coalesce(p_level,''))), '');
begin
  if not exists (
    select 1 from public.profiles
     where id = auth.uid() and (is_admin or is_teacher)
  ) and auth.uid() is distinct from p_user_id then
    raise exception 'nicht_erlaubt';
  end if;

  if v_level is not null and v_level not in ('A1','A2','B1','B2','C1','C2') then
    raise exception 'niveau_unbekannt';
  end if;

  update public.profiles set level = v_level where id = p_user_id;
  return v_level;
end; $function$;
