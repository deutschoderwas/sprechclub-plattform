// ============================================================
//  api/freebie.js — eine Adresse eintragen, ein Geschenk bekommen
//
//  Julia, 7.11.2026: "eine kurze Seite ... die ein Wort kommentieren,
//  so dass sie die Email eintragen und dafür ein freebie bekommen
//  (verbunden dann mit Brevo, wo die Email in Brevo landet)".
//
//  GET  ?f=sos        -> die Texte für die Seite (ohne den Dateilink)
//  POST {f, email}    -> Lead speichern, Kontakt in Brevo anlegen,
//                        Mail mit dem Link schicken, Link zurückgeben
//
//  Den Dateilink gibt es erst NACH dem Eintragen. Die Datei selbst
//  liegt offen im Netz — das ist bei jedem Freebie so und auch in
//  Ordnung; wer den Link weitergibt, macht Werbung für uns.
//
//  Zwei Grundsätze, die hier wehtun, wenn man sie vergisst:
//    - Das Geschenk darf NIE an Brevo hängen. Ist Brevo langsam oder
//      kaputt, bekommt die Person das PDF trotzdem.
//    - Zweimal eintragen ist kein Fehler. Wer den Link noch einmal
//      öffnet, bekommt sein PDF wieder, ohne Meckerei.
// ============================================================

import { createClient } from '@supabase/supabase-js';
import { LISTE_WEBSEITE } from './_brevo.js';
import { FREEBIES, UNBEKANNT, freebieVon } from './_freebies.js';

const MAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const esc = (s) => String(s == null ? '' : s)
  .replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

/* Die Seite braucht alles außer dem Dateilink. */
function oeffentlich(f) {
  return {
    augen: f.augen, titel: f.titel, zeile2: f.zeile2, stark: f.stark,
    zitat: f.zitat, unter: f.unter, punkte: f.punkte || [], knopf: f.knopf,
  };
}

function seite(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'deutschoderwas-club.de';
  return 'https://' + String(host).replace(/^https?:\/\//, '');
}

function mailHtml(vorname, f, link) {
  return `<!doctype html><html><body style="margin:0;background:#FFF8E0;font-family:Inter,'Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<div style="max-width:560px;margin:0 auto;padding:28px 22px">
  <p style="font-size:17px;line-height:1.6;margin:0 0 14px">Hallo ${esc(vorname)},</p>
  <p style="font-size:17px;line-height:1.6;margin:0 0 18px">hier ist dein Geschenk: <b>${esc(f.titel)} ${esc(f.zeile2 || '')} ${esc(f.stark || '')}</b></p>
  <p style="margin:0 0 26px">
    <a href="${esc(link)}" style="display:inline-block;background:#2DD4BF;color:#06403A;font-weight:700;
       font-size:17px;text-decoration:none;padding:15px 26px;border-radius:999px">PDF öffnen</a>
  </p>
  <p style="font-size:16px;line-height:1.6;margin:0 0 14px">Unser Tipp: druck es aus und leg es neben dich.
     Sprich jeden Satz einmal laut — erst dann bleibt er im Kopf.</p>
  <p style="font-size:16px;line-height:1.6;margin:0 0 6px">Wir lesen alle Nachrichten und beantworten sie.</p>
  <p style="font-size:16px;line-height:1.6;margin:0">Julia &amp; Team</p>
  <p style="font-size:12px;line-height:1.6;color:#6B7280;margin:26px 0 0">
    deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen ·
    <a href="https://deutschoderwas-club.de/datenschutz.html" style="color:#0F766E">Datenschutz</a>
  </p>
</div></body></html>`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const schluessel = String((req.query && req.query.f) || (req.body && req.body.f) || '')
    .trim().toLowerCase().slice(0, 60);
  const f = freebieVon(schluessel);

  /* ---------- Die Seite holt ihre Texte ---------- */
  if (req.method === 'GET') {
    /* Kurzer Blick von aussen, ob alles eingerichtet ist - ohne dass
       irgendein Schluessel die Maschine verlaesst. Nur ja oder nein. */
    if (String(req.query?.pruefen || '') === '1') {
      return res.status(200).json({
        ok: true,
        brevo_schluessel: !!process.env.BREVO_API_KEY,
        brevo_liste: Number(process.env.BREVO_FREEBIE_LIST_ID || 0) || null,
        datenbank: !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
        freebies: Object.keys(FREEBIES),
      });
    }
    if (String(req.query?.alle || '') === '1') {
      return res.status(200).json({ ok: true, schluessel: Object.keys(FREEBIES) });
    }
    if (!f) return res.status(200).json({ ok: false, unbekannt: true, freebie: oeffentlich(UNBEKANNT) });
    return res.status(200).json({ ok: true, schluessel, freebie: oeffentlich(f) });
  }

  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!f) return res.status(404).json({ ok: false, error: 'unbekannt' });

  const email = String((req.body && req.body.email) || '').trim().toLowerCase().slice(0, 160);
  if (!MAIL.test(email)) return res.status(400).json({ ok: false, error: 'bad_email' });

  const vorname = email.split('@')[0].replace(/[._-]+/g, ' ').trim().slice(0, 60) || 'du';
  const link = seite(req) + f.datei;
  const quelle = 'freebie';

  /* 1) In die Lead-Liste — da sieht Julia sie im Admin-Bereich. */
  let gespeichert = false;
  let sb = null;
  if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
      /* Wer schon einmal da war, kommt nicht doppelt in die Liste. */
      const { data: da } = await sb.from('leads').select('id').ilike('email', email).limit(1);
      if (da && da.length) gespeichert = true;
      else {
        const { error } = await sb.from('leads').insert({
          name: '', email, quelle, mehr: 'Freebie: ' + schluessel,
        });
        gespeichert = !error;
      }
    } catch (e) { gespeichert = false; }
  }

  /* 2) Kontakt in Brevo. Die Liste kommt aus der Umgebung
        (BREVO_FREEBIE_LIST_ID) oder steht am Freebie selbst. */
  let inBrevo = false;
  /* Ohne gesetzte Einstellung landete der Kontakt frueher in Brevo ohne
     Liste - vorhanden, aber von keiner Kampagne erreichbar. Darum faellt
     es jetzt auf die Webseiten-Liste zurueck statt auf gar keine. */
  const listenId = Number(f.liste || process.env.BREVO_FREEBIE_LIST_ID || 0) || LISTE_WEBSEITE;
  if (process.env.BREVO_API_KEY) {
    try {
      const r = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({
          email,
          updateEnabled: true,
          attributes: { VORNAME: vorname, QUELLE: quelle, FREEBIE: schluessel },
        }, listenId ? { listIds: [listenId] } : {})),
      });
      inBrevo = r.ok;
      /* Festhalten, dass Brevo die Adresse hat. Bleibt brevo_at leer,
         holt api/leads-nach-brevo.js sie taeglich nach. */
      if (inBrevo && sb) {
        try {
          await sb.from('leads').update({ brevo_at: new Date().toISOString() })
            .ilike('email', email).is('brevo_at', null);
        } catch (e) { /* der Nachholer findet sie wieder */ }
      }
    } catch (e) { inBrevo = false; }
  }

  /* 3) Die Mail mit dem Link. Scheitert sie, ist das nicht schlimm —
        die Seite zeigt den Knopf ohnehin sofort an. */
  let gemailt = false;
  if (process.env.BREVO_API_KEY) {
    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Julia · deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          replyTo: { email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' },
          to: [{ email, name: vorname }],
          subject: 'Dein Geschenk: ' + f.titel + ' ' + (f.zeile2 || ''),
          htmlContent: mailHtml(vorname, f, link),
        }),
      });
      gemailt = r.ok;
    } catch (e) { gemailt = false; }
  }

  /* Der Link geht IMMER zurück — auch wenn oben etwas schiefging.
     Das Geschenk ist das Versprechen, nicht die Technik dahinter. */
  return res.status(200).json({ ok: true, datei: f.datei, gespeichert, inBrevo, gemailt });
}
