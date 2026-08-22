// ============================================================
//  api/hausaufgabe.js — Hausaufgabe abgeben
//
//  POST { class_id, text, datei?: { name, typ, inhalt } }
//       + Authorization: Bearer <Supabase-Access-Token>
//
//  Die Hausaufgabe geht per E-Mail an Julia — mit dem Text im
//  Postfach und der Datei im Anhang. Antwortadresse ist die des
//  Schuelers, ein Klick auf "Antworten" landet also direkt bei ihm.
//  Zusaetzlich wird sie als Nachricht gespeichert, damit der
//  Schueler in seinem Bereich sieht, was er abgegeben hat.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const FMT = new Intl.DateTimeFormat('de-DE', {
  timeZone: 'Europe/Berlin', weekday: 'long', day: 'numeric', month: 'long',
  hour: '2-digit', minute: '2-digit',
});

const MAX_BYTES = 8 * 1024 * 1024;          // 8 MB — reicht fuer Foto oder PDF
const ERLAUBT = /^(image\/(jpeg|png|heic|webp|gif)|application\/pdf|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|application\/msword|text\/plain)$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id, text, datei, art } = req.body || {};
  // Zwei Anlaesse, ein Weg: eine Hausaufgabe oder eine kurze Nachricht
  // zur Stunde. Julia soll in der Betreffzeile sofort sehen, was es ist.
  const istNachricht = art === 'nachricht';
  const WORT = istNachricht ? 'Nachricht' : 'Hausaufgabe';
  if (!token || !class_id) return res.status(400).json({ error: 'bad_request' });

  const sauber = String(text || '').trim().slice(0, 8000);
  if (!sauber && !datei) return res.status(400).json({ error: 'leer' });

  if (datei) {
    if (!ERLAUBT.test(String(datei.typ || ''))) return res.status(400).json({ error: 'dateityp' });
    const bytes = Math.ceil((String(datei.inhalt || '').length * 3) / 4);
    if (bytes > MAX_BYTES) return res.status(413).json({ error: 'zu_gross' });
  }

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  const [{ data: cls }, { data: prof }] = await Promise.all([
    sb.from('classes').select('title,level,starts_at').eq('id', class_id).single(),
    sb.from('profiles').select('name,email').eq('id', user.id).single(),
  ]);
  if (!cls) return res.status(404).json({ error: 'stunde_unbekannt' });

  const wann = FMT.format(new Date(cls.starts_at));
  const name = prof?.name || 'Ein Schüler';
  const mail = prof?.email || '';

  // 1) In den eigenen Bereich: als Nachricht, damit der Schueler sieht,
  //    dass es angekommen ist — und was er geschickt hat.
  try {
    await sb.from('messages').insert({
      user_id: user.id,
      sender: 'student',
      body: (istNachricht ? '✉️ Nachricht zu „' : '📮 Hausaufgabe zu „') + cls.title + '" (' + wann + ')'
        + (sauber ? '\n\n' + sauber : '')
        + (datei ? '\n\n📎 ' + (datei.name || 'Datei') : ''),
    });
  } catch (e) { /* die E-Mail ist wichtiger als der Eintrag */ }

  // 2) An Julia
  let gemailt = false;
  if (process.env.BREVO_API_KEY) {
    const an = process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com';
    const e = s => String(s || '').replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
    const koerper = {
      sender: {
        name: 'deutschoderwas club',
        email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de',
      },
      to: [{ email: an }],
      subject: (istNachricht ? '✉️ Nachricht von ' : '📮 Hausaufgabe von ') + name + ' — ' + cls.title,
      htmlContent: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;color:#20211F">
          <h2 style="margin:0 0 2px;font-size:20px">${istNachricht ? 'Nachricht zur Stunde' : 'Hausaufgabe abgegeben'}</h2>
          <p style="margin:0 0 16px;color:#54594A;font-size:14px">
            <b>${e(name)}</b>${mail ? ' · ' + e(mail) : ''}
          </p>
          <div style="background:#FFF8E0;border:1px solid #E7DFC7;border-radius:12px;padding:12px 14px;margin-bottom:16px">
            <div style="font-size:13px;color:#54594A">Zur Stunde</div>
            <div style="font-weight:700;font-size:15px">${e(cls.title)}${cls.level ? ' · ' + e(cls.level) : ''}</div>
            <div style="font-size:13px;color:#54594A">${e(wann)}</div>
          </div>
          ${sauber ? `<div style="white-space:pre-wrap;font-size:14.5px;line-height:1.6;background:#FFFDF3;border:1px solid #E7DFC7;border-radius:12px;padding:14px 16px">${e(sauber)}</div>` : ''}
          ${datei ? `<p style="margin-top:14px;font-size:14px;color:#54594A">📎 Im Anhang: <b>${e(datei.name || 'Datei')}</b></p>` : ''}
          <p style="margin-top:18px;font-size:13px;color:#8C8574">
            Antworten geht direkt${mail ? ' an ' + e(mail) : ''} — einfach auf „Antworten" klicken.
          </p>
        </div>`,
    };
    if (mail) koerper.replyTo = { email: mail, name };
    if (datei && datei.inhalt) {
      koerper.attachment = [{ name: String(datei.name || 'hausaufgabe'), content: String(datei.inhalt) }];
    }
    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify(koerper),
      });
      gemailt = r.ok;
    } catch (e) { gemailt = false; }
  }

  return res.status(200).json({ ok: true, gemailt });
}
