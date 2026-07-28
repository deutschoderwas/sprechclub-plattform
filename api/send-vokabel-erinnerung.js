// Vokabel-Erinnerung per E-Mail (Brevo).
//
// Zielgruppe: Schüler, die schon Vokabeln gesammelt haben, aber seit
//   mindestens zwei Tagen nicht mehr geübt haben. Zwei Tage heißt:
//   gestern war nichts und vorgestern auch nicht — nach einem einzelnen
//   freien Tag schreiben wir noch nicht, das wäre Nörgeln.
//
// Woher die Daten kommen (beides schreibt der Vokabeltrainer,
// vokabeln.js, nach jeder Runde):
//   vokabel_tag     user_id, datum, geschafft  → wann zuletzt geübt
//   vokabel_status  user_id, vok_id, faellig_am → was heute dran wäre
//
// Die vok_id endet auf das Wort selbst ("ws|essen|das Rezept"), daraus
// entstehen die drei Beispielwörter in der Mail.
//
// Wird täglich getriggert (Supabase pg_cron → pg_net POST auf diese Route).
// email_log (kind:'vokabel') verhindert Nachrichtenflut: höchstens eine
// Mail alle fünf Tage pro Schüler.
import { createClient } from '@supabase/supabase-js';

const PAUSE_TAGE   = 2;   // ab so vielen Tagen ohne Üben schreiben wir
const SPERRE_TAGE  = 5;   // so lange danach nicht wieder
const INACTIVE_STATUS = ['pause', 'urlaub', 'beendet'];

export default async function handler(req, res) {
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });
  const sb   = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const url  = `${site}/konto.html#vokabeln`;

  const heute   = new Date();
  const tagText = (d) => d.toISOString().slice(0, 10);
  const grenze  = new Date(heute.getTime() - PAUSE_TAGE * 864e5);   // letzter erlaubter Lerntag
  const sperre  = new Date(heute.getTime() - SPERRE_TAGE * 864e5).toISOString();

  // 1. Wer hat überhaupt schon Vokabeln? Und wann war der letzte Lerntag?
  const { data: tage } = await sb.from('vokabel_tag').select('user_id,datum');
  if (!tage || !tage.length) return res.status(200).json({ ok:true, sent:0, grund:'niemand übt' });

  const letzter = new Map();
  for (const t of tage) {
    const alt = letzter.get(t.user_id);
    if (!alt || t.datum > alt) letzter.set(t.user_id, t.datum);
  }

  // 2. Nur die mit echter Pause
  const pausiert = [...letzter.entries()]
    .filter(([, datum]) => datum <= tagText(grenze))
    .map(([id]) => id);
  if (!pausiert.length) return res.status(200).json({ ok:true, sent:0 });

  // 3. Profile prüfen: kein Opt-out, kein Team, nicht pausiert
  const { data: profs } = await sb.from('profiles')
    .select('id,name,email,email_optout,is_admin,is_teacher,status')
    .in('id', pausiert)
    .eq('email_optout', false).eq('is_admin', false).eq('is_teacher', false);
  let ziele = (profs || []).filter(p => p.email && !INACTIVE_STATUS.includes(p.status));
  if (!ziele.length) return res.status(200).json({ ok:true, sent:0 });

  // 4. Wer hat gerade erst eine solche Mail bekommen? -> raus
  const ids = ziele.map(z => z.id);
  const { data: schonGemailt } = await sb.from('email_log')
    .select('user_id').eq('kind', 'vokabel').gte('sent_at', sperre).in('user_id', ids);
  const gesperrt = new Set((schonGemailt || []).map(r => r.user_id));
  ziele = ziele.filter(p => !gesperrt.has(p.id));
  if (!ziele.length) return res.status(200).json({ ok:true, sent:0 });

  // 5. Was ist bei wem fällig?
  const { data: stat } = await sb.from('vokabel_status')
    .select('user_id,vok_id,faellig_am,stufe')
    .in('user_id', ziele.map(z => z.id))
    .lte('faellig_am', tagText(heute));

  const faellig = new Map();
  for (const s of stat || []) {
    if (!faellig.has(s.user_id)) faellig.set(s.user_id, []);
    faellig.get(s.user_id).push(s.vok_id);
  }

  let sent = 0, errors = 0;
  for (const p of ziele) {
    const woerter = faellig.get(p.id) || [];
    if (!woerter.length) continue;                     // nichts fällig → kein Grund zu schreiben

    const { error: logErr } = await sb.from('email_log')
      .insert({ kind:'vokabel', ref:p.id, user_id:p.id });
    if (logErr) continue;                              // schon protokolliert

    const vorname = (p.name || '').split(' ')[0] || 'du';
    const tage    = tageSeit(letzter.get(p.id));
    const proben  = woerter.slice(0, 3).map(wortAus).filter(Boolean);

    const html = vokabelMail({ vorname, anzahl: woerter.length, tage, proben, url, site });

    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type':'application/json' },
      body: JSON.stringify({
        sender:  { name:'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        replyTo: { name:'Julia', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: `${woerter.length} Wörter warten auf dich 🃏`,
        htmlContent: html,
      }),
    });
    if (r.ok) sent++;
    else { errors++; await sb.from('email_log').delete().eq('kind','vokabel').eq('ref', p.id); }
  }
  return res.status(200).json({ ok:true, sent, errors });
}

function tageSeit(datum) {
  if (!datum) return 2;
  const d = Math.round((Date.now() - new Date(datum + 'T00:00:00Z').getTime()) / 864e5);
  return Math.max(2, d);
}
// "ws|essen|das Rezept" -> "das Rezept"
function wortAus(vokId) {
  const teile = String(vokId || '').split('|');
  const w = teile[teile.length - 1];
  return (w && w.length < 40) ? w : null;
}

// ---- deutschoderwas-Markendesign (Rot #DD0000 · Gold #FFCE00 · Creme #FFF8E0 · Türkis #7ED8EA) ----
function vokabelMail({ vorname, anzahl, tage, proben, url, site }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<':'&lt;','>':'&gt;','&':'&amp;' }[c]));
  const ff  = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const karten = proben.map(w =>
    `<span style="display:inline-block;background:#FFF8E0;border:1px solid #F0E5D8;border-radius:999px;padding:8px 16px;margin:4px 3px;font-family:${ff};font-size:15px;font-weight:700;color:#1A1A1A">${esc(w)}</span>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Deine Wörter verblassen gerade – zehn Minuten reichen, um sie zu behalten.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#7ED8EA">&nbsp;</td></tr>

        <tr><td align="center" style="padding:26px 28px 6px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas <span style="color:#DD0000">club</span></div>
          <div style="font-size:46px;line-height:1;margin:14px 0 4px">🃏</div>
          <h1 style="margin:6px 0 0;font-family:${ff};font-size:25px;font-weight:800;color:#1A1A1A">${anzahl} Wörter warten auf dich</h1>
        </td></tr>

        <tr><td style="padding:10px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 10px">Hallo ${esc(vorname)},</p>
          <p style="margin:0 0 10px">seit <b>${tage} Tagen</b> warst du nicht mehr bei deinen Vokabeln. Das ist nicht schlimm – aber genau jetzt fangen Wörter an zu verblassen. Deshalb melde ich mich.</p>
        </td></tr>

        ${proben.length ? `<tr><td align="center" style="padding:6px 24px 2px">${karten}</td></tr>
        <tr><td align="center" style="padding:0 30px 4px;font-family:${ff};font-size:13px;color:#6B7280">… und ${Math.max(0, anzahl - proben.length)} weitere</td></tr>` : ''}

        <tr><td style="padding:12px 30px 4px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;border:1px solid #F0E5D8;border-left:5px solid #7ED8EA;border-radius:16px">
            <tr><td style="padding:16px 20px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
              <b>Zehn Minuten reichen.</b><br>
              Acht Wörter aus einem Thema, mit Bild, Ton und Beispielsatz – danach sitzen sie wieder.
            </td></tr>
          </table>
        </td></tr>

        <tr><td align="center" style="padding:18px 30px 6px">
          <a href="${esc(url)}" style="display:inline-block;background:#DD0000;color:#ffffff;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(221,0,0,.28)">🃏 Jetzt wiederholen</a>
        </td></tr>

        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Und wenn heute keine Zeit ist: auch drei Wörter sind besser als keins. 💛<br><br>
          <b>Julia</b> &amp; das deutschoderwas-Team
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
