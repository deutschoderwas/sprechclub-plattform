// Abendliche Zusammenfassung aus dem Community-Chat (Brevo).
// Wird per Supabase pg_cron getriggert und schickt am Abend an alle
// aktiven Mitglieder eine Mail mit dem, was heute geschrieben wurde.
//
// Grundsaetze:
//  - Nur wenn es wirklich etwas zu erzaehlen gibt. Kein Beitrag, keine Mail.
//  - Hoechstens eine Mail pro Mitglied und Tag (email_log, kind 'chat-tag').
//  - Wer email_optout hat oder den Status 'beendet', bekommt nichts.
//  - Der Vorschau-Modus (?trocken=1) verschickt nichts, sondern gibt
//    die fertige Mail zurueck. Damit kann man sie ansehen, bevor sie rausgeht.
import { createClient } from '@supabase/supabase-js';

const FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

/* Ein Beitrag in einer Zeile: fuer die Mail gekuerzt, ohne Zeilenumbrueche. */
function kurz(m, max = 150) {
  if (m.kind === 'audio') return '🎧 Sprachnachricht';
  if (m.kind === 'image') return '📷 Bild' + (m.body ? ' · ' + m.body : '');
  const t = String(m.body || '').replace(/\s+/g, ' ').trim();
  return t.length > max ? t.slice(0, max - 1) + '…' : t;
}

/* Beitraege eines Kanals in Zeilen fuer die Mail.
   Wenn jemand mehrere Sachen direkt hintereinander schreibt — bei
   Ankuendigungen passiert das staendig —, wuerden diese Zeilen sonst den
   ganzen Kanalblock fuellen und die anderen Kanaele nach unten druecken.
   Darum: die ersten zwei stehen ausgeschrieben da, der Rest wird gezaehlt.
   Jede Zeile merkt sich in „zaehlt", fuer wie viele Beitraege sie steht,
   damit die Restangabe am Ende des Blocks stimmt. */
function zeilenBauen(alle) {
  const zeilen = [];
  let i = 0;
  while (i < alle.length) {
    const wer = String(alle[i].author_name || 'Mitglied').split(' ')[0];
    let bis = i;
    while (bis + 1 < alle.length
      && String(alle[bis + 1].author_name || 'Mitglied').split(' ')[0] === wer) bis++;
    const lauf = alle.slice(i, bis + 1);
    /* Zweimal dasselbe direkt hintereinander ist ein Versehen — das kommt
       vor, wenn jemand zweimal auf Senden tippt. In der Mail steht es
       einmal, gezaehlt wird es trotzdem richtig. */
    const stuecke = [];
    for (const m of lauf) {
      const t = kurz(m);
      const letzt = stuecke[stuecke.length - 1];
      if (letzt && letzt.text === t) letzt.zaehlt++;
      else stuecke.push({ text: t, zaehlt: 1 });
    }
    const zeigen = stuecke.slice(0, 2);
    zeigen.forEach((s) => zeilen.push({ wer, text: s.text, zaehlt: s.zaehlt }));
    const rest = lauf.length - zeigen.reduce((n, s) => n + s.zaehlt, 0);
    if (rest > 0) zeilen.push({ wer, mehr: rest, zaehlt: rest });
    i = bis + 1;
  }
  return zeilen;
}

/* Aus den Rohbeitraegen die fertigen Kanalbloecke: zusammengefasst,
   auf fuenf Zeilen je Kanal gekuerzt, mit ehrlicher Restangabe. */
function gruppenBauen(msgs, chanBy) {
  const roh = [];
  for (const m of msgs) {
    const c = chanBy[m.channel];
    if (!c) continue;
    let g = roh.find((x) => x.slug === m.channel);
    if (!g) { g = { slug: m.channel, name: c.name, emoji: c.emoji, pos: c.sort_order || 99, alle: [] }; roh.push(g); }
    g.alle.push(m);
  }
  /* In der Reihenfolge der Kanalleiste, damit die Mail jeden Tag
     gleich gelesen wird und nicht danach, wer zufaellig zuerst schrieb. */
  roh.sort((a, b) => a.pos - b.pos);
  return roh.map((g) => {
    const sichtbar = zeilenBauen(g.alle).slice(0, 5);
    const gezeigt = sichtbar.reduce((n, z) => n + z.zaehlt, 0);
    return { slug: g.slug, name: g.name, emoji: g.emoji, msgs: sichtbar, rest: g.alle.length - gezeigt };
  });
}

function mailHtml({ vorname, datum, kanaele, gesamt, leute, site }) {
  const wortBeitrag = (n) => n === 1 ? 'weiterer Beitrag' : 'weitere Beiträge';
  const bloecke = kanaele.map((k) => `
    <tr><td style="padding:18px 26px 0">
      <div style="font-size:13px;font-weight:800;color:#1990A4">${esc(k.emoji || '')} ${esc(k.name)}</div>
      ${k.msgs.map((m) => m.mehr ? `
        <div style="margin-top:7px;padding-left:14px;font-size:12.5px;color:#9CA3AF;font-style:italic">
          … und ${m.mehr} ${wortBeitrag(m.mehr)} von ${esc(m.wer)}
        </div>` : `
        <div style="margin-top:9px;padding-left:12px;border-left:2px solid #F0E5D8">
          <div style="font-size:12.5px;font-weight:700;color:#6B7280">${esc(m.wer)}</div>
          <div style="font-size:14px;color:#1A1A1A;line-height:1.5">${esc(m.text)}</div>
        </div>`).join('')}
      ${k.rest > 0 ? `
        <div style="margin-top:9px;padding-left:14px;font-size:12.5px;color:#9CA3AF">
          + ${k.rest} ${wortBeitrag(k.rest)} in diesem Kanal
        </div>` : ''}
    </td></tr>`).join('');

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#FFF8E0;font-family:${FF}">
 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
  <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
   <tr><td style="height:5px;background:#2DD4BF"></td></tr>
   <tr><td style="padding:22px 26px 4px">
     <div style="font-size:12px;font-weight:800;letter-spacing:.06em;color:#9CA3AF;text-transform:uppercase">Heute im Club · ${esc(datum)}</div>
     <h1 style="margin:8px 0 0;font-size:21px;line-height:1.25;color:#1A1A1A">Hallo ${esc(vorname)}, das war heute los</h1>
     <p style="margin:8px 0 0;font-size:14.5px;color:#5C4E3E;line-height:1.55">
       ${gesamt} ${gesamt === 1 ? 'Beitrag' : 'Beiträge'} von ${leute} ${leute === 1 ? 'Person' : 'Leuten'}. Schau rein — eine Antwort dauert eine Minute und macht für den anderen den ganzen Tag.
     </p>
   </td></tr>
   ${bloecke}
   <tr><td style="padding:22px 26px 26px" align="center">
     <a href="${site}/konto.html#community" style="display:inline-block;background:#2DD4BF;color:#06403A;font-weight:700;font-size:15px;text-decoration:none;padding:13px 26px;border-radius:999px">Im Chat antworten</a>
   </td></tr>
   <tr><td style="padding:0 26px 22px;font-size:11.5px;color:#9CA3AF;line-height:1.6;text-align:center">
     Du bekommst diese Mail, weil du Mitglied im deutschoderwas club bist.<br>
     Keine Lust mehr auf die Tagesmail? <a href="${site}/konto.html#einstellungen" style="color:#0F766E">Hier abstellen</a>.<br>
     deutschoderwas · Julia Karackov · Wiesenstraße 38 · 58119 Hagen
   </td></tr>
  </table>
 </td></tr></table>
</body></html>`;
}

export default async function handler(req, res) {
  const trocken = String(req.query?.trocken || '') === '1';
  if (!trocken && !process.env.BREVO_API_KEY) return res.status(200).json({ ok: false, skipped: 'BREVO_API_KEY fehlt' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';

  /* Der Tag laeuft von 00:00 bis jetzt, in Berliner Zeit gerechnet. */
  const jetzt = new Date();
  const teile = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(jetzt).reduce((a, p) => (a[p.type] = p.value, a), {});
  const heute = `${teile.year}-${teile.month}-${teile.day}`;
  const abTag = new Date(`${heute}T00:00:00+02:00`);   // Sommerzeit; im Winter eine Stunde frueher, das schadet nicht
  const datumText = new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', weekday: 'long', day: 'numeric', month: 'long' }).format(jetzt);

  const { data: msgs } = await sb.from('community_messages')
    .select('id,channel,body,kind,author_name,created_at')
    .is('deleted_at', null)
    .gte('created_at', abTag.toISOString())
    .order('created_at', { ascending: true });

  if (!msgs || !msgs.length) return res.status(200).json({ ok: true, sent: 0, grund: 'heute nichts geschrieben' });

  const { data: chans } = await sb.from('community_channels').select('slug,name,emoji,sort_order').eq('is_active', true);
  const chanBy = Object.fromEntries((chans || []).map((c) => [c.slug, c]));

  const gruppen = gruppenBauen(msgs, chanBy);
  if (!gruppen.length) return res.status(200).json({ ok: true, sent: 0, grund: 'nur Beitraege in stillgelegten Kanaelen' });

  const gesamt = msgs.length;
  const leute = new Set(msgs.map((m) => m.author_name)).size;

  if (trocken) {
    return res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8')
      .send(mailHtml({ vorname: 'Julia', datum: datumText, kanaele: gruppen, gesamt, leute, site }));
  }

  const { data: alle } = await sb.from('profiles').select('id,name,email,status,email_optout,chat_mail_aus');
  const ziele = (alle || []).filter((p) => p.email && !p.email_optout && !p.chat_mail_aus && p.status !== 'beendet');
  if (!ziele.length) return res.status(200).json({ ok: true, sent: 0, grund: 'keine Empfaenger' });

  const refs = ziele.map((p) => `${p.id}:${heute}`);
  const { data: schon } = await sb.from('email_log').select('ref').eq('kind', 'chat-tag').in('ref', refs);
  const blockiert = new Set((schon || []).map((r) => r.ref));

  let sent = 0, errors = 0;
  for (const p of ziele) {
    const ref = `${p.id}:${heute}`;
    if (blockiert.has(ref)) continue;
    const { error: logErr } = await sb.from('email_log').insert({ kind: 'chat-tag', ref, user_id: p.id });
    if (logErr) continue;                       // gleichzeitiger Lauf hat sie schon
    const vorname = String(p.name || '').split(' ')[0] || 'du';
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: `Heute im Club: ${gesamt} ${gesamt === 1 ? 'Beitrag' : 'Beiträge'} 💬`,
        htmlContent: mailHtml({ vorname, datum: datumText, kanaele: gruppen, gesamt, leute, site }),
      }),
    });
    if (r.ok) sent++;
    else { errors++; await sb.from('email_log').delete().eq('kind', 'chat-tag').eq('ref', ref); }
  }

  return res.status(200).json({ ok: true, sent, errors, beitraege: gesamt });
}

/* Damit man die Mail ansehen kann, ohne sie zu verschicken. */
export { mailHtml, gruppenBauen };
