// ============================================================
//  api/tagesbericht.js — der tägliche Stand, jeden Morgen an Julia
//
//  Julia, 31.10.2026: "Es sind mittlerweile sehr viele Schüler, ich
//  muss mich auf dich verlassen können ... du musst mir jeden Tag
//  berichten per E-Mail, was der Stand der Dinge ist, welche Leute
//  gekündigt haben und welche noch da sind und was aktuell ist, so
//  dass keine Menschen drin bleiben, die nicht bezahlt haben."
//
//  Es gab schon eine Mail aus dem nächtlichen Abgleich — aber nur,
//  WENN etwas passiert ist. An einem ruhigen Tag kam nichts, und dann
//  weiss man nicht, ob nichts passiert ist oder ob der Lauf nicht
//  gelaufen ist. Diese Mail kommt jeden Tag, auch wenn nichts war.
//
//  Sie rechnet nichts mit Stripe nach: eine halbe Stunde vorher hat
//  api/pruefe-mitgliedschaften.js genau das getan und das Ergebnis in
//  die Profile geschrieben. Hier wird nur gelesen und gezählt —
//  deshalb ist der Bericht schnell und kann nichts kaputt machen.
//
//  Aufruf:
//    GET /api/tagesbericht            (aus api/daily.js, mit x-intern)
//    GET /api/tagesbericht?trocken=1  gibt den Text zurueck, verschickt
//                                     nichts — zum Ansehen.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const TIERS = ['community', 'premium', 'premiumplus', 'premium_plus'];
const ZUGANG_STATUS = ['aktiv', 'urlaub', 'pause'];

const tag = (d) => (d ? String(d).slice(0, 10) : '—');
const deTag = (d) => {
  if (!d) return '—';
  const t = new Date(d);
  if (isNaN(t)) return String(d).slice(0, 10);
  return t.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'Europe/Berlin' });
};
const E = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const wer = (p) => E(p.name || p.email || '—') + (p.email && p.name ? ' <span style="color:#888">(' + E(p.email) + ')</span>' : '');
const istJahr = (p) => /year|jahr/i.test(String(p.abo_plan || ''));

export default async function handler(req, res) {
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  if (geheim && kopf !== geheim && !ausAdmin) {
    return res.status(401).json({ ok: false, error: 'nicht erlaubt' });
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(200).json({ ok: false, grund: 'supabase_fehlt' });
  }
  const trocken = String(req.query?.trocken || '') === '1';
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const jetzt = Date.now();
  const inTagen = (n) => jetzt + n * 86400000;
  const seit24h = new Date(jetzt - 26 * 3600 * 1000).toISOString();   // etwas Luft, damit nichts durchfaellt

  const { data: alle, error } = await sb.from('profiles')
    .select('id,name,email,tier,status,credits,pass_until,abo_start,abo_ende,abo_plan,abo_stripe_status,'
          + 'abo_gekuendigt_am,bezahlt_von,bezahlt_email,bezahlt_hinweis,stripe_customer_id,is_admin,is_teacher,created_at');
  if (error) return res.status(500).json({ ok: false, error: error.message });

  const leute = (alle || []).filter(p => !p.is_admin && !p.is_teacher);

  /* --- Wer ist drin? Dieselbe Regel wie api/_zugang.js: gesperrte
     Status zaehlen nicht, Guthaben oeffnet, ein laufender Pass auch. */
  const GESPERRT = ['beendet', 'archiv', 'inaktiv', 'geloescht', 'registriert', 'probeschuler', 'gekuendigt'];
  const drin = leute.filter(p => {
    if (GESPERRT.includes(p.status || '')) return false;
    if (p.tier && ZUGANG_STATUS.includes(p.status || '')) return true;
    if ((p.credits || 0) > 0) return true;
    if (p.pass_until && Date.parse(p.pass_until) > jetzt) return true;
    return false;
  });

  const zaehl = {
    premium_monat: drin.filter(p => /premium/.test(p.tier || '') && !istJahr(p)).length,
    premium_jahr:  drin.filter(p => /premium/.test(p.tier || '') && istJahr(p)).length,
    community:     drin.filter(p => p.tier === 'community').length,
    von_hand:      drin.filter(p => p.abo_stripe_status === 'von_hand' || p.bezahlt_von).length,
    ohne_stufe:    drin.filter(p => !p.tier).length,
  };

  /* --- Gekuendigt, laeuft noch aus */
  const gekuendigt = drin
    .filter(p => p.abo_gekuendigt_am && p.abo_ende && Date.parse(p.abo_ende) >= jetzt)
    .sort((a, b) => Date.parse(a.abo_ende) - Date.parse(b.abo_ende));

  /* --- Laeuft in den naechsten 14 Tagen ab, ohne dass gekuendigt wurde:
     die von Hand gesetzten Fristen. */
  const faellig = drin
    .filter(p => (p.abo_stripe_status === 'von_hand' || p.bezahlt_von)
              && p.abo_ende && Date.parse(p.abo_ende) >= jetzt && Date.parse(p.abo_ende) <= inTagen(14))
    .sort((a, b) => Date.parse(a.abo_ende) - Date.parse(b.abo_ende));

  /* --- Der Punkt, um den es Julia geht: drin, aber nichts deutet auf
     eine Zahlung hin. Kein Stripe-Abo, kein Von-Hand-Vermerk, kein
     fremder Zahler.

     Zwei Gruppen muessen hier ausdruecklich heraus, sonst steht die
     Liste jeden Morgen voll mit Leuten, bei denen alles stimmt:
       - wer gekuendigt hat und seine Restzeit abwohnt. Der steht schon
         eine Liste weiter oben, mit Datum.
       - wer gerade gekauft hat. Zwischen Kauf und erstem Abgleich mit
         Stripe steht im Profil noch nichts; die geparkte Kaufzeile ist
         der Beleg, dass gezahlt wurde. Am 31.10.2026 waren das acht
         Menschen an einem Nachmittag — ohne diese Ausnahme haette die
         erste Mail acht Fehlalarme gehabt und man haette aufgehoert,
         sie zu lesen.
     Uebrig bleibt genau das, was Julia sucht: Zugang ohne Spur einer
     Zahlung. */
  let bezahlteAdressen = new Set();
  try {
    const { data: kaeufe } = await sb.from('pending_purchases').select('email').limit(5000);
    bezahlteAdressen = new Set((kaeufe || []).map(k => String(k.email || '').toLowerCase()));
  } catch (e) { /* im Zweifel lieber melden als verschweigen */ }

  const ohneZahlung = drin.filter(p =>
    p.tier
    && !['active', 'trialing'].includes(p.abo_stripe_status || '')
    && p.abo_stripe_status !== 'von_hand'
    && !p.bezahlt_von && !p.bezahlt_email
    && !(p.abo_gekuendigt_am && p.abo_ende && Date.parse(p.abo_ende) >= jetzt)
    && !bezahlteAdressen.has(String(p.email || '').toLowerCase()));

  /* --- Guthaben-Schueler aus der alten Zeit, die noch Zugang haben */
  const altMitGuthaben = drin.filter(p => !p.tier && (p.credits || 0) > 0);

  /* --- Was hat sich seit gestern bewegt? */
  let zugemacht = [], neu = [];
  try {
    const { data: log } = await sb.from('zugang_log')
      .select('email,aktion,grund,created_at').gte('created_at', seit24h)
      .order('created_at', { ascending: false }).limit(50);
    zugemacht = (log || []).filter(z => z.aktion === 'gekuendigt' || z.aktion === 'archiv');
  } catch (e) { /* ohne Protokoll geht der Bericht trotzdem raus */ }
  neu = leute.filter(p => p.created_at && p.created_at >= seit24h);

  const abschnitt = (titel, zeilen, farbe) => zeilen.length
    ? `<h3 style="font-size:15px;margin:22px 0 6px;color:${farbe || '#1A1A1A'}">${titel}</h3><ul style="margin:0;padding-left:20px;font-size:14.5px;line-height:1.7">${zeilen.join('')}</ul>`
    : '';

  const heute = new Date().toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' });

  const html = `<!doctype html><html lang="de"><body style="margin:0;padding:0;background:#ffffff">
<div style="max-width:620px;margin:0 auto;padding:24px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1A1A1A">

  <p style="margin:0 0 4px;font-size:13px;color:#888">Stand ${E(heute)}</p>
  <h1 style="margin:0 0 16px;font-size:22px">Der Club heute</h1>

  <table role="presentation" width="100%" style="border-collapse:collapse;font-size:15px">
    <tr><td style="padding:7px 0;border-bottom:1px solid #eee">Premium, monatlich</td><td align="right" style="padding:7px 0;border-bottom:1px solid #eee"><b>${zaehl.premium_monat}</b></td></tr>
    <tr><td style="padding:7px 0;border-bottom:1px solid #eee">Premium, jährlich</td><td align="right" style="padding:7px 0;border-bottom:1px solid #eee"><b>${zaehl.premium_jahr}</b></td></tr>
    <tr><td style="padding:7px 0;border-bottom:1px solid #eee">Community</td><td align="right" style="padding:7px 0;border-bottom:1px solid #eee"><b>${zaehl.community}</b></td></tr>
    <tr><td style="padding:7px 0;border-bottom:1px solid #eee">davon von Hand eingetragen</td><td align="right" style="padding:7px 0;border-bottom:1px solid #eee">${zaehl.von_hand}</td></tr>
    <tr><td style="padding:7px 0;border-bottom:1px solid #eee">ohne Stufe, noch mit Guthaben</td><td align="right" style="padding:7px 0;border-bottom:1px solid #eee">${zaehl.ohne_stufe}</td></tr>
    <tr><td style="padding:9px 0"><b>Menschen mit Zugang</b></td><td align="right" style="padding:9px 0"><b style="font-size:18px">${drin.length}</b></td></tr>
  </table>

  ${abschnitt('⚠️ Zugang, aber keine erkennbare Zahlung', ohneZahlung.map(p =>
      `<li>${wer(p)} — ${E(p.tier || '—')}, Status ${E(p.status || '—')}${p.abo_ende ? ', Eintrag lief bis ' + deTag(p.abo_ende) : ''}</li>`), '#B3241C')}

  ${abschnitt('Gekündigt — der Zugang läuft noch', gekuendigt.map(p => {
      const ende = Date.parse(p.abo_ende);
      return `<li>${wer(p)} — gekündigt am ${deTag(p.abo_gekuendigt_am)}, Zugang bis <b>${deTag(p.abo_ende)}</b>`
           + ` <span style="color:#888">· Erinnerung ${deTag(new Date(ende - 7 * 86400000))} · Verabschiedung ${deTag(new Date(ende + 86400000))}</span></li>`;
    }))}

  ${abschnitt('Von Hand eingetragen — läuft in den nächsten 14 Tagen ab', faellig.map(p =>
      `<li>${wer(p)} — bis <b>${deTag(p.abo_ende)}</b> (${Math.round((Date.parse(p.abo_ende) - jetzt) / 86400000)} Tage)${p.bezahlt_hinweis ? ' · ' + E(p.bezahlt_hinweis) : ''}</li>`))}

  ${abschnitt('Seit gestern zugemacht', zugemacht.map(z =>
      `<li>${E(z.email || '—')} — ${E(z.aktion)}${z.grund ? ': ' + E(z.grund) : ''}</li>`))}

  ${abschnitt('Seit gestern dazugekommen', neu.map(p =>
      `<li>${wer(p)} — ${E(p.tier || 'ohne Stufe')}, Status ${E(p.status || '—')}</li>`))}

  ${abschnitt('Alte Schüler mit Restguthaben', altMitGuthaben.map(p =>
      `<li>${wer(p)} — ${p.credits} Stunde(n)${p.pass_until ? ', Zugang bis ' + deTag(p.pass_until) : ''}</li>`))}

  ${(!ohneZahlung.length && !gekuendigt.length && !faellig.length && !zugemacht.length && !neu.length)
      ? '<p style="margin:22px 0 0;font-size:15px;color:#2d7a4f">Heute gibt es nichts zu tun: niemand hat gekündigt, niemand läuft demnächst ab, und alle, die drin sind, haben eine Zahlung hinter sich.</p>'
      : ''}

  <p style="margin:26px 0 0;padding-top:12px;border-top:1px solid #eee;font-size:12px;line-height:1.5;color:#999">
    Dieser Bericht läuft jeden Morgen um 6 Uhr, direkt nach dem Abgleich mit Stripe.
    Er zählt nur, was in der Datenbank steht — Stripe selbst wird eine halbe Stunde vorher geprüft.
    Kommt er einmal nicht, ist der tägliche Lauf ausgefallen.
  </p>

</div></body></html>`;

  const bilanz = {
    ok: true,
    stand: tag(new Date().toISOString()),
    zugang: drin.length,
    ...zaehl,
    gekuendigt: gekuendigt.map(p => ({ name: p.name || p.email, bis: tag(p.abo_ende) })),
    ohne_zahlung: ohneZahlung.map(p => ({ name: p.name || p.email, email: p.email, tier: p.tier })),
    faellig: faellig.map(p => ({ name: p.name || p.email, bis: tag(p.abo_ende) })),
    zugemacht: zugemacht.length,
    neu: neu.length,
  };

  if (trocken) return res.status(200).json({ ...bilanz, trocken: true, html });
  if (!process.env.BREVO_API_KEY) return res.status(200).json({ ...bilanz, grund: 'kein_brevo_schluessel' });

  try {
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email: process.env.JULIA_EMAIL || 'deutschoderwas@gmail.com', name: 'Julia' }],
        subject: `Club heute: ${drin.length} drin`
          + (gekuendigt.length ? ` · ${gekuendigt.length} gekündigt` : '')
          + (ohneZahlung.length ? ` · ⚠️ ${ohneZahlung.length} ohne Zahlung` : ''),
        htmlContent: html,
      }),
    });
    if (!r.ok) return res.status(200).json({ ...bilanz, ok: false, grund: 'brevo_' + r.status });
  } catch (e) {
    return res.status(200).json({ ...bilanz, ok: false, grund: 'netz', detail: String(e).slice(0, 160) });
  }
  return res.status(200).json(bilanz);
}
