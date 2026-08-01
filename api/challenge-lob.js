// Lob-Nachricht nach dem Unterricht — nur für Challenger.
// Wird von admin.html aufgerufen, sobald die Anwesenheit auf "da" gesetzt wird.
// POST { class_id, user_id } + Authorization: Bearer <Access-Token der Lehrkraft>
// Schickt eine E-Mail im Marken-Design UND legt die Nachricht ins Postfach
// auf der Plattform. email_log (kind:'challenge_lob') verhindert Doppelversand.
import { createClient } from '@supabase/supabase-js';

const FMT = new Intl.DateTimeFormat('de-DE', { timeZone:'Europe/Berlin', weekday:'long', day:'numeric', month:'long' });

// Abwechselnde Formulierungen, damit es nicht nach Maschine klingt.
const LOB = [
  { kopf:'Das war stark!',        text:'Du warst heute im Unterricht — und hast gesprochen. Genau darum geht es in diesen acht Wochen. Sei stolz auf dich.' },
  { kopf:'Wieder eine geschafft!', text:'Du hast dir die Zeit genommen und bist gekommen. Das ist der Teil, den die meisten auslassen. Du nicht.' },
  { kopf:'Stark durchgezogen!',   text:'Reden lernt man nur durch Reden — und du hast es heute wieder getan. Das zahlt sich aus, auch wenn du es noch nicht merkst.' },
  { kopf:'Weiter so!',            text:'Jede Stunde bringt dich näher an den Moment, in dem Deutsch einfach aus dir herauskommt. Heute warst du wieder dran.' },
  { kopf:'Respekt!',              text:'Sprechen kostet Überwindung, jedes Mal. Du hast sie heute aufgebracht — darauf kannst du wirklich stolz sein.' }
];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error:'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { class_id, user_id } = req.body || {};
  if (!token || !class_id || !user_id) return res.status(400).json({ error:'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Nur Lehrkraft oder Admin darf das auslösen
  const { data:{ user }, error:uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error:'unauthorized' });
  const { data:me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', user.id).maybeSingle();
  if (!me || (!me.is_admin && !me.is_teacher)) return res.status(403).json({ error:'not_allowed' });

  // Nur Challenger, und nur wenn sie wirklich da waren
  const { data:prof } = await sb.from('profiles')
    .select('name,email,email_optout,is_challenger').eq('id', user_id).maybeSingle();
  if (!prof || !prof.is_challenger) return res.status(200).json({ ok:true, skipped:'kein Challenger' });

  const { data:bk } = await sb.from('bookings')
    .select('attendance').eq('class_id', class_id).eq('user_id', user_id).maybeSingle();
  if (!bk || bk.attendance !== 'present') return res.status(200).json({ ok:true, skipped:'nicht anwesend' });

  // Nicht zweimal für dieselbe Stunde
  const ref = `${class_id}:${user_id}`;
  const { error:logErr } = await sb.from('email_log')
    .insert({ kind:'challenge_lob', ref, user_id });
  if (logErr) return res.status(200).json({ ok:true, already_sent:true });

  const { data:cls } = await sb.from('classes').select('title,level,topic,starts_at').eq('id', class_id).single();
  const vorname = (prof.name || '').split(' ')[0] || 'du';
  const wann = cls ? FMT.format(new Date(cls.starts_at)) : '';
  // Variante stabil aus der Stunden-Kennung ableiten -> gleiche Stunde, gleicher Text
  const idx = Math.abs([...String(class_id)].reduce((a,c)=>a+c.charCodeAt(0),0)) % LOB.length;
  const lob = LOB[idx];

  // Nachricht ins Postfach auf der Plattform
  const postfach = `${lob.kopf} ${lob.text}${cls ? `\n\n(${cls.title} — ${wann})` : ''}`;
  try { await sb.from('messages').insert({ user_id, sender:'teacher', body: postfach }); } catch (e) {}

  if (!prof.email || prof.email_optout) return res.status(200).json({ ok:true, nur_postfach:true });

  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const html = lobEmail({ vorname, lob, cls, wann, site });

  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method:'POST',
    headers:{ 'api-key':process.env.BREVO_API_KEY, 'Content-Type':'application/json' },
    body: JSON.stringify({
      sender:{ name:'Julia | deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
      to:[{ email: prof.email, name: prof.name || undefined }],
      subject: `🏆 ${lob.kopf} — deine Challenge-Stunde`,
      htmlContent: html,
    }),
  });
  if (!r.ok) {
    await sb.from('email_log').delete().eq('kind','challenge_lob').eq('ref', ref);
    return res.status(200).json({ ok:false, brevo:r.status });
  }
  return res.status(200).json({ ok:true });
}

// Gleiches Markendesign wie die Buchungsbestätigung, nur in Gold statt Petrol.
function lobEmail({ vorname, lob, cls, wann, site }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const karte = cls ? `
        <tr><td style="padding:18px 30px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #FFCE00;border-radius:16px">
            <tr><td style="padding:18px 20px;font-family:${ff}">
              <span style="display:inline-block;background:#FFCE00;color:#1A1A1A;font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;padding:4px 11px;border-radius:30px">🏆 8-Wochen-Challenge</span>
              <div style="font-size:18px;font-weight:800;color:#1A1A1A;margin:10px 0 2px">${esc(cls.title)}</div>
              <div style="font-size:14px;color:#6B7280">${esc(cls.level || '')}${cls.topic ? ' · '+esc(cls.topic) : ''}</div>
              <div style="font-size:15px;font-weight:700;color:#1A1A1A;margin-top:9px">🗓️ ${esc(wann)}</div>
            </td></tr>
          </table>
        </td></tr>` : '';

  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(lob.kopf)} Du warst heute im Unterricht. 🏆</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">

        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>

        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">🏆</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">${esc(lob.kopf)}</h1>
        </td></tr>

        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 4px">Hallo ${esc(vorname)},</p>
          <p style="margin:0">${esc(lob.text)}</p>
        </td></tr>

        ${karte}

        <tr><td align="center" style="padding:16px 30px 4px">
          <a href="${esc(site)}/schuelerbereich" style="display:inline-block;background:#1A1A1A;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(26,26,26,.22)">📋 Nächste Stunde buchen</a>
        </td></tr>

        <tr><td style="padding:14px 30px 4px;font-family:${ff};font-size:13px;line-height:1.6;color:#6B7280">
          Die Nachbereitung zur Stunde findest du in deinem Schülerbereich. Und wenn du zwischendurch üben willst: der Vokabeltrainer wartet.
        </td></tr>

        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Bis zur nächsten Stunde!<br><b>Julia</b>
        </td></tr>

        <tr><td style="padding:20px 30px 26px">
          <div style="border-top:1px solid #F0E5D8;padding-top:14px;font-family:${ff};font-size:12px;color:#9CA3AF;text-align:center">
            <a href="${esc(site)}" style="color:#9CA3AF;text-decoration:none">deutschoderwas-club.de</a> · Deutsch lernen, das Spaß macht 🇩🇪
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}
