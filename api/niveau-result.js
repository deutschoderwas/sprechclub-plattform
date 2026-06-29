// Ergebnis-Mail zum "Teste dein Deutschniveau"-Test (Brevo).
// Wird von der Hauptseite (niveautest.js) nach dem Test aufgerufen.
// POST { email, name?, level, overall?, modules?:[{skill,pct}], mode? }
// Öffentlich (kein Login) – nur E-Mail nötig. Erfasst den Lead in Brevo
// (Attribut NIVEAU) und verschickt das Ergebnis im deutschoderwas-Design.

const SKILL_NAMES = { lesen: 'Leseverstehen', hoeren: 'Hörverstehen', bausteine: 'Sprachbausteine' };

const LEVEL_TEXT = {
  'unter A1': { t: 'Absoluter Anfang', d: 'Du startest gerade erst – der perfekte Moment, um mit den richtigen ersten Schritten schnell ins Sprechen zu kommen.' },
  'A1': { t: 'Anfänger (A1)', d: 'Du verstehst und benutzt einfache, alltägliche Ausdrücke und ganz einfache Sätze. Eine super Basis!' },
  'A2': { t: 'Grundlegende Kenntnisse (A2)', d: 'Du verständigst dich in einfachen, routinemäßigen Situationen und kannst über vertraute Themen sprechen.' },
  'B1': { t: 'Selbstständige Sprachverwendung (B1)', d: 'Du kommst in den meisten Alltagssituationen zurecht und sprichst zusammenhängend über Themen, die dich interessieren.' },
  'B2': { t: 'Fortgeschritten (B2)', d: 'Du verstehst komplexere Texte, sprichst spontan und fließend und kannst deinen Standpunkt klar vertreten.' },
  'C1': { t: 'Kompetente Sprachverwendung (C1)', d: 'Wow! Du verstehst anspruchsvolle Texte, sprichst flüssig und nutzt die Sprache wirksam und differenziert.' }
};
const LEVEL_TIP = {
  'unter A1': 'Starte mit den Grundlagen – im Sprechclub (A2-Gruppe) wirst du sanft abgeholt.',
  'A1': 'Bau Wortschatz und einfache Sätze aus – Aussprache- und Wortschatzclub helfen dir.',
  'A2': 'Jetzt geht es ums freie Sprechen! Die A2-Gruppe im Sprechclub ist genau dein Niveau.',
  'B1': 'Bring deine Fließigkeit aufs nächste Level: Debatten & Rollenspiele (B1/B2).',
  'B2': 'Feile an Nuancen und Idiomatik in der B2/C1-Gruppe.',
  'C1': 'Halte dein Niveau hoch mit anspruchsvollen Diskussionen im B2/C1-Sprechclub.'
};

export default async function handler(req, res) {
  // CORS: erlaubt Aufruf auch von deutschoderwas.de (Test eingebettet auf der Hauptseite)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });

  const { email, name, level, overall, modules, mode } = req.body || {};
  const mail = String(email || '').trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)) return res.status(400).json({ error: 'bad_email' });

  const lv = LEVEL_TEXT[level] ? level : 'A1';
  const vorname = (name || '').trim();
  const site = process.env.SITE_URL || 'https://deutschoderwas-club.de';

  // 1) Lead in Brevo erfassen / aktualisieren (best effort, blockiert die Mail nicht)
  try {
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: mail,
        updateEnabled: true,
        attributes: Object.assign(
          { NIVEAU: lv, NIVEAU_TEST: mode || 'test' },
          vorname ? { VORNAME: vorname } : {}
        ),
        listIds: process.env.BREVO_LIST_ID ? [Number(process.env.BREVO_LIST_ID)] : undefined
      })
    });
  } catch (e) { /* egal – Mail trotzdem senden */ }

  // 2) Ergebnis-Mail verschicken
  const html = brandedResultEmail({ vorname, level: lv, overall, modules: modules || [], site });
  let brevoStatus = 0;
  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: mail, name: vorname || undefined }],
        subject: `Dein Deutschniveau: ${lv} 🎯`,
        htmlContent: html
      })
    });
    brevoStatus = r.status;
    if (!r.ok) return res.status(200).json({ ok: false, brevo: r.status });
  } catch (e) {
    return res.status(200).json({ ok: false, error: 'send_failed' });
  }
  return res.status(200).json({ ok: true, brevo: brevoStatus });
}

// ---- deutschoderwas-Markendesign (Türkis #2DD4BF · Rot #DD0000 · Gold #FFCE00 · Creme #FFF8E0) ----
function brandedResultEmail({ vorname, level, overall, modules, site }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const info = LEVEL_TEXT[level] || LEVEL_TEXT['A1'];
  const tip = LEVEL_TIP[level] || LEVEL_TIP['A1'];

  const modRows = (modules || []).map((m) => {
    const nm = SKILL_NAMES[m.skill] || m.skill;
    const pct = Math.max(0, Math.min(100, Math.round(m.pct || 0)));
    const ok = pct >= 60;
    return `
      <tr><td style="padding:6px 0;font-family:${ff};font-size:14px;color:#1A1A1A">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-weight:700">${esc(nm)}</td>
            <td align="right" style="font-weight:800;color:${ok ? '#0a7a5c' : '#B30000'}">${pct} / 100</td>
          </tr>
        </table>
        <div style="margin-top:5px;height:8px;background:#F0E5D8;border-radius:20px">
          <div style="height:8px;width:${pct}%;border-radius:20px;background:${ok ? '#2DD4BF' : '#DD0000'}"></div>
        </div>
      </td></tr>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:#FFF8E0;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">Dein Deutschniveau steht fest: ${esc(level)}. Schau dir deine Auswertung an! 🎯</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 14px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 12px 36px rgba(26,26,26,.10)">

        <!-- Deutschland-Streifen -->
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#1A1A1A">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#DD0000">&nbsp;</td></tr>
        <tr><td style="height:6px;line-height:6px;font-size:0;background:#FFCE00">&nbsp;</td></tr>

        <!-- Kopf -->
        <tr><td align="center" style="padding:26px 28px 4px">
          <div style="font-family:${ff};font-weight:800;font-size:15px;letter-spacing:.04em;color:#1A1A1A">deutschoderwas</div>
          <div style="font-family:${ff};font-size:13px;color:#6B7280;margin-top:2px">Dein Niveau-Test-Ergebnis</div>
        </td></tr>

        <!-- Niveau-Badge -->
        <tr><td align="center" style="padding:14px 28px 2px">
          <div style="display:inline-block;background:#FFF8E0;border:2px solid #2DD4BF;border-radius:20px;padding:16px 34px">
            <div style="font-family:${ff};font-size:13px;color:#6B7280;text-transform:uppercase;letter-spacing:.08em;font-weight:700">Dein Niveau</div>
            <div style="font-family:${ff};font-size:46px;font-weight:800;color:#14B8A6;line-height:1.05">${esc(level)}</div>
          </div>
        </td></tr>

        <!-- Text -->
        <tr><td style="padding:14px 30px 0;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          <p style="margin:0 0 6px">Hallo${vorname ? ' ' + esc(vorname) : ''},</p>
          <p style="margin:0 0 4px"><b>${esc(info.t)}</b></p>
          <p style="margin:0;color:#374151">${esc(info.d)}</p>
        </td></tr>

        ${modRows ? `
        <!-- Module -->
        <tr><td style="padding:16px 30px 0">
          <div style="font-family:${ff};font-size:13px;font-weight:800;color:#1A1A1A;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px">Deine Auswertung</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${modRows}</table>
          ${overall != null ? `<div style="font-family:${ff};font-size:13px;color:#6B7280;margin-top:8px">Gesamt: <b>${Math.round(overall)}%</b> richtig · bestanden ab 60% (wie bei Goethe &amp; telc).</div>` : ''}
        </td></tr>` : ''}

        <!-- Tipp -->
        <tr><td style="padding:18px 30px 0">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,206,0,.16);border:1px solid rgba(255,206,0,.55);border-radius:14px">
            <tr><td style="padding:14px 18px;font-family:${ff};font-size:14px;line-height:1.5;color:#1A1A1A">
              💡 <b>Dein nächster Schritt:</b> ${esc(tip)}
            </td></tr>
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td align="center" style="padding:20px 30px 6px">
          <a href="${esc(site)}/#preise" style="display:inline-block;background:linear-gradient(135deg,#2DD4BF,#14B8A6);color:#06403A;font-family:${ff};font-weight:800;font-size:15px;text-decoration:none;padding:14px 30px;border-radius:50px;box-shadow:0 6px 16px rgba(45,212,191,.32)">🚀 Zum passenden Sprechclub</a>
        </td></tr>

        <!-- Gruß -->
        <tr><td style="padding:16px 30px 4px;font-family:${ff};font-size:15px;line-height:1.6;color:#1A1A1A">
          Viel Erfolg beim Deutschlernen!<br><b>Julia</b> &amp; das deutschoderwas-Team
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:18px 30px 26px">
          <div style="border-top:1px solid #F0E5D8;padding-top:14px;font-family:${ff};font-size:12px;color:#9CA3AF;text-align:center;line-height:1.6">
            deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen<br>
            Du bekommst diese E-Mail, weil du den Niveau-Test gemacht hast. Du kannst dich jederzeit abmelden.
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body></html>`;
}
