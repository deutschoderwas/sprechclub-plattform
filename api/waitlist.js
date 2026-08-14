// Warteliste: schickt Julia jede Eintragung sofort als E-Mail (Brevo).
// Wird von der Clubseite (index.html) aufgerufen -> CORS offen.
// POST { name, email, whatsapp?, tarif?, niveau?, schwierigkeiten?, mehr? }
// Kein Login nötig. Die Liste selbst läuft weiter über das Google-Formular.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });

  const b = req.body || {};
  const name = String(b.name || '').trim().slice(0, 120);
  const email = String(b.email || '').trim().toLowerCase().slice(0, 160);
  const whatsapp = String(b.whatsapp || '').trim().slice(0, 60);
  const tarif = String(b.tarif || '').trim().slice(0, 40);
  const niveau = String(b.niveau || '').trim().slice(0, 20);
  const schwierigkeiten = String(b.schwierigkeiten || '').trim().slice(0, 2000);
  const mehr = String(b.mehr || '').trim().slice(0, 2000);

  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'bad_request' });
  }

  const istPlus = /plus/i.test(tarif);
  const betreff = istPlus
    ? `👑 PREMIUM PLUS · Warteliste: ${name}`
    : `🔔 Warteliste: ${name}${tarif ? ' · ' + tarif : ''}`;

  let ok = false;
  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas · Warteliste', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' }],
        replyTo: { email, name: name || undefined },
        subject: betreff,
        htmlContent: wartelisteMail({ name, email, whatsapp, tarif, niveau, schwierigkeiten, mehr, istPlus }),
      }),
    });
    ok = r.ok;
  } catch (e) { ok = false; }

  return res.status(200).json({ ok });
}

function wartelisteMail({ name, email, whatsapp, tarif, niveau, schwierigkeiten, mehr, istPlus }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const nl = (s) => esc(s).replace(/\n/g, '<br>');
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const row = (label, val) => val ? `<tr><td style="padding:9px 0;border-bottom:1px solid #F0E5D8;font-size:14.5px;line-height:1.55;color:#1a1a1a"><b style="color:#6B7280">${label}:</b><br>${nl(val)}</td></tr>` : '';
  const plusHinweis = istPlus
    ? `<div style="background:#161616;color:#FFCE00;border-radius:12px;padding:13px 16px;font-size:14px;font-weight:700;margin-bottom:16px">👑 Interesse an <b>Premium Plus</b> — nur wenige Plätze. Melde dich zuerst bei dieser Person.</div>`
    : '';
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(90deg,#161616 0 25%,#DD0000 25% 50%,#FFCE00 50% 75%,#7ED8EA 75% 100%)"></td></tr>
      <tr><td style="padding:24px 28px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">deutschoderwas club · Warteliste</div>
        <h1 style="margin:8px 0 0;font-size:22px;color:#1a1a1a">🎉 ${esc(name)} steht auf der Warteliste</h1>
      </td></tr>
      <tr><td style="padding:18px 28px 4px">${plusHinweis}
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${row('Interesse', tarif)}
          ${row('Niveau', niveau)}
          ${row('E-Mail', email)}
          ${row('WhatsApp', whatsapp)}
          ${row('Wo hakt es noch?', schwierigkeiten)}
          ${row('Fragen', mehr)}
        </table>
      </td></tr>
      <tr><td align="center" style="padding:20px 28px 8px">
        <a href="mailto:${esc(email)}" style="display:inline-block;background:#7ED8EA;color:#10627A;font-weight:800;font-size:15px;text-decoration:none;padding:13px 28px;border-radius:50px">✉️ Direkt antworten</a>
      </td></tr>
      <tr><td style="padding:14px 28px 26px;font-size:12px;color:#9CA3AF;text-align:center">Antworten geht direkt an ${esc(email)} · deutschoderwas-club.de</td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
