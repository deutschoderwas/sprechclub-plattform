// api/_testzeit-mail.js - Mails zur 3-Tage-Testzeit Sprechclub (ab 1.12.2026).
// Julia, 26.11.2026: "Das muss ganz klar vermerkt werden, so dass die Schueler
// wissen, dass sie nur 3 Tage kostenlosen Zugang haben." Darum steht das
// Abbuchungsdatum in jeder Mail ausgeschrieben, dazu der Weg zum Kuendigen.
// Unterstrich am Anfang: Vercel macht daraus keine eigene Adresse.
import Stripe from 'stripe';
import { testzeitAktiv } from './_tueren.js';

export const KUENDIGEN_LINK = 'https://www.deutschoderwas-club.de/konto.html#abo';
export const KUENDIGEN_PORTAL = 'https://billing.stripe.com/p/login/cNi8wP2DQcez5av6Yd5Rm00';

export function datumLang(sek) {
  try {
    return new Date(sek * 1000).toLocaleDateString('de-DE',
      { timeZone: 'Europe/Berlin', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  } catch (e) { return ''; }
}

export function testzeitMailHtml({ hallo, kicker, titel, absaetze, knopfText, knopfLink }) {
  const p = absaetze.map(t => `<p style="font-size:16px;line-height:1.6;margin:0 0 12px;color:#14181B">${t}</p>`).join('');
  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"></head><body style="margin:0;padding:0;background:#FAF6EC;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#14181B">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FAF6EC;padding:24px 12px"><tr><td align="center">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1.5px solid #14181B;border-radius:18px;overflow:hidden">
      <tr><td style="height:6px;background:#14181B;font-size:0;line-height:0">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
          <td style="height:6px;background:#14181B"></td><td style="height:6px;background:#D42A21"></td><td style="height:6px;background:#FFCE00"></td><td style="height:6px;background:#1B9BC0"></td>
        </tr></table></td></tr>
      <tr><td style="padding:22px 30px 4px">
        <span style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:20px">deutschoderwas club</span>
      </td></tr>
      <tr><td style="padding:14px 30px 4px">
        <span style="font-weight:700;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#0E6D85">${kicker}</span>
        <h1 style="font-family:'Space Grotesk','Segoe UI',sans-serif;font-weight:700;font-size:25px;line-height:1.25;margin:8px 0 14px">${titel}</h1>
        <p style="font-size:16px;line-height:1.6;margin:0 0 12px">${hallo}</p>
        ${p}
      </td></tr>
      <tr><td style="padding:6px 30px 8px">
        <a href="${knopfLink}" style="display:inline-block;background:#FFCE00;color:#14181B;border:1.5px solid #14181B;font-weight:700;font-size:16px;text-decoration:none;padding:13px 24px;border-radius:14px">${knopfText}</a>
      </td></tr>
      <tr><td style="padding:10px 30px 22px">
        <p style="font-size:14px;line-height:1.6;margin:0;color:#5F6B76">Kündigen geht auch direkt hier: <a href="${KUENDIGEN_PORTAL}" style="color:#0E6D85">Abo bei Stripe verwalten</a> (mit deiner E-Mail-Adresse anmelden).</p>
        <p style="font-size:15px;line-height:1.6;margin:14px 0 0">Bis bald im Sprechclub,<br><strong>Julia</strong></p>
      </td></tr>
      <tr><td style="background:#14181B;padding:16px 30px;text-align:center">
        <p style="font-size:12px;line-height:1.6;color:#b9b9b9;margin:0">deutschoderwas · <a href="https://deutschoderwas.de/#impressum" style="color:#FFCE00;text-decoration:none">Impressum</a></p>
      </td></tr>
    </table>
  </td></tr></table></body></html>`;
}


/* art: 'start' (direkt nach dem Abschluss) oder 'erinnerung' (24 h vor der Abbuchung).
   to: { email, name }   daten: { trialEndSek, preis, monate } */
export async function testzeitMail(art, to, daten) {
  try {
    if (!to || !to.email || !process.env.BREVO_API_KEY) return false;
    const vorname = ((to.name || '').trim().split(' ')[0]) || '';
    const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
    const datum = datumLang(daten.trialEndSek);
    const preis = daten.preis || 139;
    const rhythmus = daten.monate === 6 ? 'danach alle 6 Monate' : 'danach jeden Monat';
    const start = art === 'start';
    const html = testzeitMailHtml(start ? {
      hallo,
      kicker: 'Deine 3 Tage sind gestartet',
      titel: 'Willkommen im Sprechclub!',
      absaetze: [
        `schön, dass du dabei bist! Du kannst den Sprechclub jetzt <b>3 Tage kostenlos</b> testen: Stunden buchen, live sprechen, alles ausprobieren.`,
        `<b>Wichtig:</b> Am <b>${datum}</b> buchen wir automatisch <b>${preis} &euro;</b> ab, ${rhythmus}.`,
        `Du willst weitermachen? Dann musst du nichts tun. Du willst aufhören? Dann kündige <b>vor dem ${datum}</b> in deinem Schülerbereich unter „Mein Abo“. Dann zahlst du nichts.`,
        `Am besten buchst du jetzt gleich deine erste Stunde.`
      ],
      knopfText: 'Erste Stunde buchen',
      knopfLink: 'https://www.deutschoderwas-club.de/konto.html#kalender'
    } : {
      hallo,
      kicker: 'Deine Testzeit endet morgen',
      titel: `Morgen buchen wir ${preis} € ab`,
      absaetze: [
        `deine 3 kostenlosen Tage im Sprechclub sind fast vorbei.`,
        `<b>Morgen, am ${datum}, buchen wir ${preis} &euro; ab</b>, ${rhythmus}.`,
        `Du willst weitermachen? Dann musst du nichts tun.`,
        `Du willst aufhören? Dann kündige jetzt, vor dem ${datum}:`
      ],
      knopfText: 'Hier kündigen',
      knopfLink: KUENDIGEN_LINK
    });
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [ { email: to.email, name: to.name || undefined } ],
        subject: start
          ? `Deine 3 Tage Sprechclub laufen – Abbuchung am ${datum}`
          : `Morgen am ${datum}: Abbuchung ${preis} € für den Sprechclub`,
        htmlContent: html,
      }),
    });
    if (!r.ok) { console.error('testzeit mail fail', art, r.status, await r.text()); return false; }
    return true;
  } catch (e) { console.error('testzeit mail err', art, e); return false; }
}

/* Erinnerung 24 Stunden vor der ersten Abbuchung. Laeuft stuendlich mit
   api/send-reminders (dort ganz oben aufgerufen) und ist zusaetzlich unter
   /api/testzeit-erinnerung erreichbar. Jede Person bekommt sie genau einmal
   (Merker testzeit_erinnert=1 in den Abo-Metadaten bei Stripe). Wer schon
   gekuendigt hat, bekommt nichts. Vor dem 1.12.2026 passiert gar nichts. */
export async function erinnerungenSenden() {
  const ergebnis = { geprueft: 0, gesendet: 0, uebersprungen: 0 };
  if (!testzeitAktiv() || !process.env.STRIPE_SECRET_KEY) return ergebnis;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const jetzt = Math.floor(Date.now() / 1000);
  const FENSTER = 25 * 3600;
  for await (const sub of stripe.subscriptions.list({ status: 'trialing', limit: 100 })) {
    ergebnis.geprueft++;
    const md = sub.metadata || {};
    if (!md.testzeit || md.testzeit_erinnert === '1') continue;
    if (sub.cancel_at_period_end || sub.cancel_at) { ergebnis.uebersprungen++; continue; }
    const rest = (sub.trial_end || 0) - jetzt;
    if (rest <= 0 || rest > FENSTER) continue;
    let email = '', name = '';
    try {
      const kunde = await stripe.customers.retrieve(sub.customer);
      email = kunde && kunde.email; name = (kunde && kunde.name) || '';
    } catch (e) { console.error('testzeit kunde', e && e.message); }
    const it = sub.items && sub.items.data && sub.items.data[0];
    const preis = (it && it.price && it.price.unit_amount) ? Math.round(it.price.unit_amount / 100) : 139;
    const monate = (it && it.price && it.price.recurring && it.price.recurring.interval_count) || 1;
    if (await testzeitMail('erinnerung', { email, name }, { trialEndSek: sub.trial_end, preis, monate })) {
      await stripe.subscriptions.update(sub.id, { metadata: { testzeit_erinnert: '1' } });
      ergebnis.gesendet++;
    }
  }
  return ergebnis;
}
