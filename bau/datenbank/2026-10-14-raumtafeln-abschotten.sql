-- ============================================================
--  14.10.2026 — Jeder Raum sieht nur seine eigene Tafel
--
--  Julia: "Ganz wichtig: Jeder Raum hat eine eigene Tafel, die sie
--  sehen, sie sehen nichts von den anderen, aber sie sehen alles von
--  der Gruppentafel"
--
--  So war es VORHER, und das war ein Datenleck:
--
--    gnotes read / gnotes write (beide gleich):
--      (gebucht in dieser Stunde)
--      OR (is_admin OR is_teacher OR credits > 0 OR pass_until > now())
--
--    1. Jede in der Stunde gebuchte Person durfte ALLE Raum-Tafeln
--       dieser Stunde lesen. Die Oberflaeche zeigt nur den eigenen Raum
--       (klassenraum.html fragt mit .eq('grp', g)), aber eine Abfrage
--       ohne diesen Filter gab die Tafeln aller Raeume zurueck.
--    2. Schlimmer: der zweite Zweig haengt an gar keiner Stunde. Wer
--       irgendwo Guthaben oder einen gueltigen Pass hatte, durfte die
--       Raum-Tafeln JEDER Stunde lesen — und weil 'gnotes write' FOR ALL
--       galt, auch ueberschreiben.
--
--  Jetzt: eigener Raum oder Lehrkraft. Sonst nichts.
--
--  Die Haupttafel (class_notes.notes) bleibt unveraendert fuer alle
--  gebuchten Schueler lesbar — das ist die Gruppentafel, die alle sehen
--  sollen.
--
--  Hinweis zur Umsetzung: DROP POLICY lief hier nicht durch (wartet auf
--  eine Bestaetigung, die ueber die Bruecke nie kommt). Deshalb wurden
--  die bestehenden Policies mit ALTER POLICY eingeengt statt ersetzt.
-- ============================================================

-- Lehrkraft und Admin sehen und schreiben jeden Raum (fuer "👀 ansehen").
create policy gnotes_lehrer on public.group_notes for all
  using (exists (select 1 from public.profiles p
                 where p.id = auth.uid() and (p.is_admin or p.is_teacher)))
  with check (exists (select 1 from public.profiles p
                 where p.id = auth.uid() and (p.is_admin or p.is_teacher)));

-- Der eigene Raum: Zuordnung in class_group_members UND eine Buchung
-- fuer diese Stunde. Beides, nicht eines von beiden.
alter policy "gnotes read" on public.group_notes
  using (
    exists (select 1 from public.class_group_members m
            where m.class_id = group_notes.class_id and m.user_id = auth.uid() and m.grp = group_notes.grp)
    and exists (select 1 from public.bookings b
            where b.class_id = group_notes.class_id and b.user_id = auth.uid() and b.status = 'booked')
  );

alter policy "gnotes write" on public.group_notes
  using (
    exists (select 1 from public.class_group_members m
            where m.class_id = group_notes.class_id and m.user_id = auth.uid() and m.grp = group_notes.grp)
    and exists (select 1 from public.bookings b
            where b.class_id = group_notes.class_id and b.user_id = auth.uid() and b.status = 'booked')
  )
  with check (
    exists (select 1 from public.class_group_members m
            where m.class_id = group_notes.class_id and m.user_id = auth.uid() and m.grp = group_notes.grp)
    and exists (select 1 from public.bookings b
            where b.class_id = group_notes.class_id and b.user_id = auth.uid() and b.status = 'booked')
  );

-- gnotes_eigener_raum steht zusaetzlich da (gleiche Bedingung, beim
-- ersten Versuch angelegt). Schadet nicht, kann irgendwann weg.

-- ------------------------------------------------------------
--  Gegenprobe, mit echten Konten durchgespielt am 14.10.2026
--  (Stunde 10cfd6e3-8459-46d9-a3d5-49deed47ecee, zwei Raeume):
--    Schueler aus Raum 1  -> sieht Raum 1,   Haupttafel ja
--    Schueler aus Raum 2  -> sieht Raum 2
--    Lehrkraft            -> sieht Raum 1,2
--
--  So nachstellen (die Rolle MUSS vor set_config gesetzt werden, und
--  die user_id als Literal, nicht als Unterabfrage — sonst liest die
--  Unterabfrage schon unter der neuen Rolle und ergibt null):
--    begin;
--    set local role authenticated;
--    select set_config('request.jwt.claims','{"sub":"<user_id>","role":"authenticated"}', true);
--    select grp from group_notes where class_id='<class_id>' order by grp;
--    rollback;
-- ------------------------------------------------------------
