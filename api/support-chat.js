// ============================================================
//  deutschoderwas club — Hilfe-Chat unten rechts
//
//  POST { verlauf:[{wer:'bot'|'du', text}], email?, name?, seite? }
//       + optional Header: Authorization: Bearer <access_token>
//
//  Der Bot beantwortet die immer gleichen Fragen selbst. Jede Frage
//  geht zusaetzlich per E-Mail an Julia — mit der Antwort des Bots
//  dabei und der Adresse des Fragenden als Antwortadresse, damit ein
//  Klick auf "Antworten" direkt beim Schueler landet.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const MODELL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';

function system(kontext) {
  return `Du bist der Hilfe-Chat des "deutschoderwas club", einer Lernplattform fuer Deutsch als Fremdsprache von Julia Karackov.

Du hilfst bei Fragen zur Plattform: Guthaben, Stunden buchen und stornieren, Klassenraum, Login und Passwort, Uebungen, Rechnungen.

So antwortest du:
- Kurz. Zwei bis vier Saetze, keine Aufzaehlungen, kein Fettdruck.
- In der Sprache, in der gefragt wurde. Bei Deutsch: einfaches, klares Deutsch (etwa B1), weil die Leute Deutsch lernen.
- Freundlich und direkt, so wie Julia schreibt: warm, ohne Werbesprache.
- Du bist ein Hilfe-Chat, kein Deutschlehrer. Wer eine Sprachfrage hat, den schickst du freundlich zu Amanda im Schuelerbereich oder in den Sprechclub.

Was du sicher weisst:
- Eine gebuchte Stunde kostet eine Stunde Guthaben. Das Guthaben steht im Schuelerbereich unter "Guthaben".
- Stornieren geht bis sechs Stunden vor Beginn, dann kommt die Stunde zurueck aufs Guthaben. Danach nicht mehr.
- Die eigenen gebuchten Stunden stehen im Schuelerbereich unter "Meine Stunden", der Link in den Klassenraum steht direkt bei der Buchung.
- Neues Guthaben gibt es ueber die Preisseite: https://www.deutschoderwas-club.de/preise
- Passwort vergessen: auf der Startseite ueber "Passwort vergessen" eine neue E-Mail anfordern.

Was du NICHT tust:
- Keine Preise, Termine, Zahlen oder Fristen erfinden. Wenn du etwas nicht sicher weisst, sag genau das und dass Julia sich per E-Mail meldet.
- Nichts ueber das Konto einer anderen Person sagen.
- Nie behaupten, du haettest etwas veraendert, storniert oder ueberwiesen. Du kannst nur Auskunft geben.

Wenn die Frage etwas betrifft, das nur Julia entscheiden oder nachsehen kann (Geld zurueck, Sonderfaelle, Beschwerden, technische Fehler), dann sag freundlich, dass du die Frage an Julia weitergegeben hast und sie sich per E-Mail meldet. Das stimmt: jede Frage geht automatisch an sie.

${kontext}`;
}

async function mailAnJulia({ frage, antwort, name, email, seite, angemeldet }) {
  if (!process.env.BREVO_API_KEY) return false;
  const an = process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com';
  const e = s => String(s || '').replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:19px">Frage aus dem Hilfe-Chat</h2>
      <p style="margin:0 0 14px;color:#666;font-size:13px">
        ${e(name) || 'Ohne Namen'}${email ? ' &middot; ' + e(email) : ' &middot; keine Adresse angegeben'}
        ${angemeldet ? '&middot; angemeldet' : '&middot; nicht angemeldet'}${seite ? ' &middot; ' + e(seite) : ''}
      </p>
      <div style="background:#FFF8E0;border-radius:12px;padding:12px 14px;margin-bottom:12px">
        <b>Frage</b><br>${e(frage).replace(/\n/g, '<br>')}
      </div>
      <div style="background:#F2FBFA;border:1px solid #CFEFEA;border-radius:12px;padding:12px 14px">
        <b>Der Bot hat geantwortet</b><br>${e(antwort).replace(/\n/g, '<br>')}
      </div>
      <p style="margin:14px 0 0;color:#666;font-size:13px">
        ${email ? 'Auf diese E-Mail antworten geht direkt an den Fragenden.' : 'Keine Adresse hinterlassen — eine Antwort ist nicht möglich.'}
      </p>
    </div>`;
  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { email: 'deutschoderwas@gmail.com', name: 'deutschoderwas club' },
        to: [{ email: an, name: 'Julia' }],
        replyTo: email ? { email, name: name || undefined } : undefined,
        subject: `Frage im Hilfe-Chat${name ? ' von ' + name : ''}`,
        htmlContent: html,
      }),
    });
    return r.ok;
  } catch { return false; }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  let { verlauf, email, name, seite } = req.body || {};
  if (!Array.isArray(verlauf)) verlauf = [];
  verlauf = verlauf.slice(-12);
  const frage = [...verlauf].reverse().find(z => z.wer !== 'bot')?.text || '';
  if (!String(frage).trim()) return res.status(400).json({ error: 'keine_frage' });

  // Angemeldete Person erkennen — dann kennen wir Name, Adresse und Guthaben
  let angemeldet = false, guthaben = null;
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (token && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const admin = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
      const { data: u } = await admin.auth.getUser(token);
      if (u?.user) {
        angemeldet = true;
        email = u.user.email || email;
        const { data: p } = await admin.from('profiles').select('name,credits').eq('id', u.user.id).single();
        if (p) { name = p.name || name; guthaben = p.credits; }
      }
    } catch { /* ohne Anmeldung weiter */ }
  }

  const kontext = angemeldet
    ? `Die Person ist angemeldet. Sie heisst ${name || 'unbekannt'} und hat aktuell ${guthaben ?? '?'} Stunden Guthaben. Diese Zahl darfst du nennen.`
    : 'Die Person ist NICHT angemeldet — vermutlich jemand, der die Plattform noch nicht kennt. Sprich sie mit "Sie" an und erklaere gern, wie der Club funktioniert.';

  let antwort = '';
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODELL,
        max_tokens: 400,
        system: system(kontext),
        messages: verlauf
          .map(z => ({ role: z.wer === 'bot' ? 'assistant' : 'user', content: String(z.text || '').slice(0, 900) }))
          .filter(m => m.content),
      }),
    });
    if (r.ok) {
      const j = await r.json();
      antwort = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('').trim();
    }
  } catch { /* faellt unten auf die Ersatzantwort zurueck */ }

  if (!antwort) {
    antwort = 'Da bin ich gerade überfragt — ich habe deine Frage aber an Julia weitergegeben. Sie meldet sich per E-Mail bei dir.';
  }

  const zugestellt = await mailAnJulia({ frage, antwort, name, email, seite, angemeldet });
  return res.status(200).json({ ok: true, text: antwort, weitergeleitet: zugestellt });
}
