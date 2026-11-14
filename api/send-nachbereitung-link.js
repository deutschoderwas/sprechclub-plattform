// Schickt den gebuchten Schülern einer Stunde eine E-Mail mit dem Link zur Nachbereitung
// (material_post = der vom Lehrer hinterlegte Handout-Link). Wird vom Admin per Knopf ausgelöst.
// POST { classId } + Authorization: Bearer <Admin/Lehrer-Token>
// Drosselung über email_log (kind 'nachb_link'): jeder Schüler bekommt pro Stunde nur 1 Mail.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, error: 'brevo_missing' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { classId } = req.body || {};
  if (!token || !classId) return res.status(400).json({ ok: false, error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: { user: caller } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ ok: false, error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin,is_teacher').eq('id', caller.id).maybeSingle();
  if (!me || !(me.is_admin || me.is_teacher)) return res.status(403).json({ ok: false, error: 'not_admin' });

  const { data: cls } = await sb.from('classes').select('id,title,topic,level,material_post').eq('id', classId).maybeSingle();
  if (!cls) return res.status(200).json({ ok: false, error: 'class_not_found' });
  // Link: eigener „Material nach dem Unterricht"-Link, sonst automatisch die interaktive Nachbereitung.
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const link = cls.material_post || `${site}/nachbereitung.html?id=${classId}`;

  const { data: bks } = await sb.from('bookings').select('user_id').eq('class_id', classId).eq('status', 'booked');
  if (!bks || !bks.length) return res.status(200).json({ ok: true, sent: 0, reason: 'keine Schüler gebucht' });
  const ids = [...new Set(bks.map(b => b.user_id))];
  const { data: profs } = await sb.from('profiles').select('id,name,email,email_optout').in('id', ids);

  // Live-Mitschriften der Stunde: alle Gruppen + Hauptraum (grp 0), und wer in welcher Gruppe war.
  const grpNotes = {};
  try { const { data: gnRows } = await sb.from('group_notes').select('grp,notes').eq('class_id', classId);
    (gnRows || []).forEach(r => { grpNotes[String(r.grp)] = r.notes || ''; }); } catch (_) {}
  const memberGrp = {};
  try { const { data: gmRows } = await sb.from('class_group_members').select('user_id,grp').eq('class_id', classId);
    (gmRows || []).forEach(r => { memberGrp[r.user_id] = r.grp; }); } catch (_) {}
  const hauptraum = grpNotes['0'] || '';

  const thema = cls.topic || cls.title || 'deine Stunde';
  let sent = 0, skipped = 0;
  for (const p of (profs || [])) {
    if (!p.email || p.email_optout) { skipped++; continue; }
    const ref = `${classId}:${p.id}`;
    const { error: logErr } = await sb.from('email_log').insert({ kind: 'nachb_link', ref, user_id: p.id });
    if (logErr) { skipped++; continue; } // schon gesendet
    const vorname = (p.name || '').split(' ')[0] || 'du';
    // Mitschrift dieses Schülers: eigene Kleingruppe + Hauptraum, verbatim.
    let mitschrift = '';
    const eigen = memberGrp[p.id];
    if (eigen != null && String(eigen) !== '0' && hatText(grpNotes[String(eigen)])) {
      mitschrift += mitschriftBlock('#138a8a', '👥 Eure Kleingruppe' + (eigen ? ' (Gruppe ' + esc0(eigen) + ')' : ''), grpNotes[String(eigen)]);
    }
    if (hatText(hauptraum)) {
      mitschrift += mitschriftBlock('#DD0000', '🏛️ Aus dem Hauptraum (alle zusammen)', hauptraum);
    }
    const html = mail({ vorname, thema, level: cls.level || '', link, mitschrift });
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: `📝 Deine Mitschrift & Nachbereitung: ${thema}`,
        htmlContent: html,
      }),
    });
    if (r.ok) sent++; else { await sb.from('email_log').delete().eq('kind', 'nachb_link').eq('ref', ref); skipped++; }
  }
  // „Verschickt"-Status auf der Stunde festhalten (für die Anzeige im Admin).
  try {
    const { count: total } = await sb.from('email_log').select('*', { count: 'exact', head: true })
      .eq('kind', 'nachb_link').like('ref', `${classId}:%`);
    await sb.from('classes').update({ nachb_sent_at: new Date().toISOString(), nachb_sent_count: total || sent }).eq('id', classId);
  } catch (_) { /* Status ist nice-to-have */ }
  return res.status(200).json({ ok: true, sent, skipped });
}

function esc0(x){ return String(x==null?'':x).replace(/[<>&]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[c])); }
function sauber(html){
  return String(html||'')
    .replace(/<script[\s\S]*?<\/script>/gi,'')
    .replace(/ on[a-z]+\s*=\s*"[^"]*"/gi,'')
    .replace(/ on[a-z]+\s*=\s*'[^']*'/gi,'')
    .replace(/javascript:/gi,'');
}
function hatText(html){ return sauber(html).replace(/<[^>]+>/g,'').trim().length > 0; }
function mitschriftBlock(farbe, titel, notes){
  return `<div style="margin:12px 0;border:1px solid #eee;border-left:4px solid ${farbe};border-radius:10px;padding:12px 14px;background:#FCFBF8">`
    + `<div style="font-weight:800;font-size:13.5px;color:${farbe};margin-bottom:6px">${titel}</div>`
    + `<div style="font-size:14.5px;line-height:1.7;color:#1a1a1a">${sauber(notes)}</div></div>`;
}
function mail({ vorname, thema, level, link, mitschrift }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FDF8F1;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:520px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(135deg,#DD0000,#FFCE00)"></td></tr>
      <tr><td style="padding:24px 28px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">deutschoderwas club</div>
        <h1 style="margin:8px 0 0;font-size:22px;color:#1a1a1a">📖 Deine Nachbereitung ist da!</h1>
      </td></tr>
      <tr><td style="padding:12px 28px 0;font-size:15px;line-height:1.6;color:#1a1a1a">
        Hallo ${esc(vorname)},<br><br>
        deine Nachbereitung zu <b>${esc(thema)}</b>${level ? ` (${esc(level)})` : ''} ist fertig – mit Zusammenfassung, Vokabeln, Übungen &amp; Fehlerkorrektur. Schau gleich rein und wiederhole die Stunde! 🎯
      </td></tr>
      ${mitschrift ? `<tr><td style="padding:14px 28px 0">
        <div style="font-size:13px;font-weight:800;letter-spacing:.03em;color:#9CA3AF;text-transform:uppercase;margin-bottom:2px">📝 Eure Live-Mitschrift</div>
        <div style="font-size:12.5px;color:#9CA3AF;margin-bottom:6px">Genau das, was im Unterricht live mitgeschrieben wurde — damit nichts verloren geht.</div>
        ${mitschrift}
      </td></tr>` : ''}
      <tr><td align="center" style="padding:22px 28px 6px">
        <a href="${esc(link)}" style="display:inline-block;background:linear-gradient(135deg,#35AFD0,#138a8a);color:#063b35;font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px">📖 Zur vollen Nachbereitung</a>
      </td></tr>
      <tr><td style="padding:18px 28px 26px;font-size:12px;color:#9CA3AF;text-align:center">Üb die neuen Vokabeln auch im Vokabeltrainer im Schülerbereich · deutschoderwas-club.de</td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
