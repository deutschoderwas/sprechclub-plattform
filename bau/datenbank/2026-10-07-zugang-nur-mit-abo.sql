-- 07.10.2026 — Zugang nur mit gueltigem Abo oder Guthaben
--
-- Hintergrund: Der Stripe-Webhook schloss den Zugang bei einer
-- Kuendigung nur, wenn in den Metadaten der Subscription "tier" auf
-- community oder premium stand. Fehlte das Feld (Premium Plus, alte
-- Paesse, von Hand in Stripe angelegte Abos), blieb die Person auf
-- status='aktiv' und behielt den vollen Zugang. Und wenn der Webhook
-- einmal nicht ankam, hat das hinterher niemand korrigiert.
--
-- 1) Protokoll, damit jede Schliessung nachvollziehbar ist
create table if not exists public.zugang_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  email text,
  aktion text not null,
  grund text,
  vorher jsonb,
  nachher jsonb,
  created_at timestamptz not null default now()
);
create index if not exists zugang_log_user_idx on public.zugang_log(user_id, created_at desc);
alter table public.zugang_log enable row level security;
create policy "Zugang-Log nur Admin" on public.zugang_log for select using (is_admin());

-- 2) Naechtlicher Abgleich gegen Stripe (api/abo-abgleich.js)
--    Erst im Vorschau-Modus laufen lassen und die Liste ansehen,
--    dann auf 'anwenden' stellen.
select cron.schedule(
  'abo-abgleich-naechtlich',
  '20 3 * * *',
  $$ select net.http_post(
       url := 'https://www.deutschoderwas-club.de/api/abo-abgleich?modus=anwenden',
       headers := '{"Content-Type":"application/json"}'::jsonb,
       body := '{}'::jsonb
     ) $$
);

-- ------------------------------------------------------------
-- 07.10.2026 — kein Lead ohne Brevo-Liste
--
-- 83 von 186 Leads standen in Brevo als Kontakt, aber in keiner Liste:
-- die Liste kam aus BREVO_WAITLIST_LIST_ID, und die ist nicht gesetzt.
-- Betroffen vor allem die Leads aus dem Google-Formular. Der Standard
-- steht jetzt im Code (Liste 14), dieser Job traegt die Altlast nach
-- und bleibt als Sicherheitsnetz.
alter table public.leads add column if not exists brevo_liste_at timestamptz;
comment on column public.leads.brevo_liste_at is
  'Wann dieser Lead nachweislich in der Brevo-Liste stand (api/leads-brevo-abgleich.js). NULL = noch nicht geprueft.';

select cron.schedule(
  'leads-brevo-abgleich-stuendlich',
  '40 * * * *',
  $$ select net.http_post(
       url := 'https://www.deutschoderwas-club.de/api/leads-brevo-abgleich',
       headers := '{"Content-Type":"application/json"}'::jsonb,
       body := '{}'::jsonb
     ) $$
);
