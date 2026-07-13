// Lehrer-Bewerbung: schickt Julia jede Bewerbung als E-Mail (Brevo).
// Wird von der Hauptseite (deutschoderwas.de) UND der Clubseite genutzt -> CORS offen.
// POST { name, email, phone?, experience, availability?, message? }
// Kein Login nötig; nichts wird gespeichert, nur Mail an Admin (Antwort geht an Bewerber).

export default async function handler(req, res) {
  // CORS: Aufruf auch von deutschoderwas.de erlauben
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });

  const b = req.body || {};
  const name = String(b.name || '').trim().slice(0, 120);
  const email = String(b.email || '').trim().toLowerCase().slice(0, 160);
  const phone = String(b.phone || '').trim().slice(0, 60);
  const experience = String(b.experience || '').trim().slice(0, 4000);
  const availability = String(b.availability || '').trim().slice(0, 1000);
  const message = String(b.message || '').trim().slice(0, 4000);

  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !experience) {
    return res.status(400).json({ ok: false, error: 'bad_request' });
  }

  const html = applicationMail({ name, email, phone, experience, availability, message });

  let ok = false;
  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas · Bewerbung', email: process.env.BREVO_SENDER_EMAIL || 'info@deutschoderwas.de' },
        to: [{ email: process.env.ADMIN_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' }],
        replyTo: { email, name: name || undefined },
        subject: `👩‍🏫 Neue Lehrer-Bewerbung: ${name}`,
        htmlContent: html,
      }),
    });
    ok = r.ok;
  } catch (e) { ok = false; }

  return res.status(200).json({ ok });
}

function applicationMail({ name, email, phone, experience, availability, message }) {
  const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const nl = (s) => esc(s).replace(/\n/g, '<br>');
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const row = (label, val) => val ? `<tr><td style="padding:8px 0;border-bottom:1px solid #F0E5D8;font-size:14px;line-height:1.55;color:#1a1a1a"><b style="color:#6B7280">${label}:</b><br>${nl(val)}</td></tr>` : '';
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;background:#FFF8E0;font-family:${ff}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
    <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
      <tr><td style="height:6px;background:linear-gradient(90deg,#161616 0 25%,#DD0000 25% 50%,#FFCE00 50% 75%,#2DD4BF 75% 100%)"></td></tr>
      <tr><td style="padding:24px 28px 6px">
        <div style="font-size:13px;font-weight:800;letter-spacing:.04em;color:#9CA3AF;text-transform:uppercase">deutschoderwas · Lehrer-Bewerbung</div>
        <h1 style="margin:8px 0 0;font-size:22px;color:#1a1a1a">👩‍🏫 Neue Bewerbung von ${esc(name)}</h1>
      </td></tr>
      <tr><td style="padding:14px 28px 22px">
        <table role="presentation" width="100%">
          ${row('Name', name)}
          ${row('E-Mail', email)}
          ${row('Telefon', phone)}
          ${row('Erfahrung / Qualifikation', experience)}
          ${row('Verfügbarkeit', availability)}
          ${row('Nachricht', message)}
        </table>
      </td></tr>
      <tr><td style="padding:0 28px 26px;font-size:12px;color:#9CA3AF;text-align:center">Antworte einfach auf diese Mail, um ${esc(name)} direkt zu schreiben.</td></tr>
    </table>
  </td></tr></table>
</body></html>`;
}
