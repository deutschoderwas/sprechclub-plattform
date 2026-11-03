// ============================================================
//  /api/notify-message — die Nachricht aus dem Admin als E-Mail
//
//  Julia, 3.11.2026: "Ich moechte, dass die Mail die ich schicke ganz
//  normal direkt an die Email geschickt wird ohne dass sie irgendwo
//  hin druecken muessen."
//
//  Bis dahin ging hier eine Benachrichtigung raus: "Julia hat dir eine
//  Nachricht geschrieben", die ersten 300 Zeichen als Vorschau und ein
//  Knopf "Nachricht oeffnen". Wer die Mail las, hatte den Text also
//  nur halb und musste sich einloggen, um den Rest zu sehen.
//
//  Jetzt steht der ganze Text in der Mail. Kein Knopf, keine
//  Vorschau, kein Umweg — eine Mail wie jede andere. Im Schuelerbereich
//  steht die Nachricht weiterhin auch (das macht admin.html, bevor es
//  hierher ruft), aber niemand MUSS mehr dorthin.
//
//  POST { user_ids:[...], text, betreff? } + Authorization: Bearer <Admin-Token>
//  'preview' wird weiter angenommen und wie 'text' behandelt, damit
//  aeltere Aufrufe nicht ins Leere laufen.
// ============================================================
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const koerper = req.body || {};
  /* 'text' ist der ganze Text. 'preview' hiess dasselbe Feld frueher,
     als nur ein Ausschnitt verschickt wurde. */
  const text = String(koerper.text || koerper.preview || '').trim();
  const user_ids = koerper.user_ids;
  if (!token || !Array.isArray(user_ids) || !user_ids.length || !text)
    return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Nur Admin darf Massen-Mails ausloesen
  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', user.id).maybeSingle();
  if (!me || !me.is_admin) return res.status(403).json({ error: 'not_admin' });

  const { data: recipients } = await sb.from('profiles')
    .select('name,email,email_optout').in('id', user_ids);
  const list = (recipients || []).filter(r => r.email && !r.email_optout);
  if (!list.length) return res.status(200).json({ ok:true, sent:0 });

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const sender = { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' };

  /* Betreff: was Julia eintippt. Schreibt sie keinen, nehmen wir die
     erste Zeile ihres Textes — die sagt immer noch mehr als "Neue
     Nachricht". Erst wenn auch die fehlt, greift der feste Satz. */
  const ersteZeile = text.split('\n').map(z => z.trim()).find(Boolean) || '';
  const betreff = String(koerper.betreff || '').trim()
    || (ersteZeile.length > 68 ? ersteZeile.slice(0, 65).trim() + '\u2026' : ersteZeile)
    || 'Nachricht vom deutschoderwas club';

  const results = await Promise.all(list.map(r => {
    const vorname = (r.name || '').split(' ')[0] || 'du';
    const html = messageEmail({ vorname, text, site });
    return fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender,
        to: [{ email: r.email, name: r.name || undefined }],
        subject: betreff,
        htmlContent: html,
      }),
    }).then(x => x.ok).catch(() => false);
  }));
  const sent = results.filter(Boolean).length;
  return res.status(200).json({ ok: true, sent, total: list.length, betreff });
}

function messageEmail({ vorname, text, site }) {
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  /* Leerzeilen trennen Absaetze, einfache Zeilenumbrueche bleiben
     Umbrueche — so sieht die Mail aus wie das, was Julia getippt hat. */
  const absaetze = esc(text).split(/\n\s*\n/).map(a => a.trim()).filter(Boolean)
    .map(a => `<p style="margin:0 0 14px">${a.replace(/\n/g, '<br>')}</p>`).join('');
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:28px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:540px;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
      <tr><td style="height:6px;background:#1A1A1A"></td></tr>
      <tr><td style="height:6px;background:#DD0000"></td></tr>
      <tr><td style="height:6px;background:#FFCE00"></td></tr>
      <tr><td align="center" style="padding:22px 28px 0">
        <div style="font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
      </td></tr>
      <tr><td style="padding:18px 30px 0;font-size:16px;line-height:1.65;color:#1A1A1A">
        <p style="margin:0 0 14px">Hallo ${esc(vorname)},</p>
        ${absaetze}
      </td></tr>
      <tr><td style="padding:4px 30px 24px;font-size:16px;line-height:1.65;color:#1A1A1A">
        Wir lesen alle Nachrichten und beantworten sie.<br><b>Julia &amp; Team</b>
      </td></tr>
      <tr><td style="padding:0 30px 26px"><div style="border-top:1px solid #F0E5D8;padding-top:14px;font-size:12px;color:#9CA3AF;text-align:center"><a href="${esc(site)}" style="color:#9CA3AF;text-decoration:none">deutschoderwas-club.de</a></div></td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
