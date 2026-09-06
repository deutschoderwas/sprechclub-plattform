// Woechentliche Rueckschau aus dem Community-Chat (Brevo).
// Wird sonntagabends per Supabase pg_cron getriggert.
//
// Sie ist bewusst etwas anderes als die Tagesmail: nicht was passiert ist,
// sondern was daraus haengen bleibt. Drei Teile:
//   1. Die Woche in Zahlen
//   2. Die Beitraege, auf die am meisten geantwortet wurde
//   3. Was man mitnehmen kann — die Impulse und Woerter der Woche
//
// Grundsaetze wie bei der Tagesmail: keine leere Mail, hoechstens eine
// pro Mitglied und Woche (email_log, kind 'chat-woche'), Abmeldung moeglich,
// und ?trocken=1 zeigt die Mail an, ohne sie zu verschicken.
import { createClient } from '@supabase/supabase-js';

const FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
const kurz = (t, max = 190) => {
  const s = String(t || '').replace(/\s+/g, ' ').trim();
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
};

function mailHtml({ vorname, zeitraum, zahlen, top, mitnehmen, site }) {
  const kachel = (wert, text) => `
    <td align="center" style="padding:12px 6px;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:14px">
      <div style="font-size:24px;font-weight:800;color:#1A1A1A;line-height:1">${wert}</div>
      <div style="font-size:11.5px;color:#6B7280;margin-top:4px">${esc(text)}</div>
    </td>`;

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#FFF8E0;font-family:${FF}">
 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
  <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
   <tr><td style="height:5px;background:#FFCE00"></td></tr>

   <tr><td style="padding:22px 26px 4px">
     <div style="font-size:12px;font-weight:800;letter-spacing:.06em;color:#9CA3AF;text-transform:uppercase">Die Woche im Club · ${esc(zeitraum)}</div>
     <h1 style="margin:8px 0 0;font-size:21px;line-height:1.25;color:#1A1A1A">Hallo ${esc(vorname)}, das ist diese Woche hängen geblieben</h1>
   </td></tr>

   <tr><td style="padding:16px 26px 0">
     <table role="presentation" width="100%" cellpadding="0" cellspacing="6"><tr>
       ${kachel(zahlen.beitraege, zahlen.beitraege === 1 ? 'Beitrag' : 'Beiträge')}
       ${kachel(zahlen.leute, 'Leute haben geschrieben')}
       ${kachel(zahlen.kanaele, zahlen.kanaele === 1 ? 'Kanal' : 'Kanäle')}
     </tr></table>
   </td></tr>

   ${top.length ? `
   <tr><td style="padding:22px 26px 0">
     <div style="font-size:13px;font-weight:800;color:#1990A4">Darüber wurde am meisten geredet</div>
     ${top.map((t) => `
       <div style="margin-top:11px;padding-left:12px;border-left:2px solid #F0E5D8">
         <div style="font-size:12px;color:#9CA3AF">${esc(t.kanal)} · ${esc(t.wer)}${t.antworten ? ` · ${t.antworten} ${t.antworten === 1 ? 'Antwort' : 'Antworten'}` : ''}</div>
         <div style="font-size:14px;color:#1A1A1A;line-height:1.5;margin-top:2px">${esc(t.text)}</div>
       </div>`).join('')}
   </td></tr>` : ''}

   ${mitnehmen.length ? `
   <tr><td style="padding:22px 26px 0">
     <div style="font-size:13px;font-weight:800;color:#1990A4">Zum Mitnehmen</div>
     <div style="margin-top:8px;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:14px;padding:14px 16px">
       ${mitnehmen.map((m) => `<div style="font-size:14px;color:#1A1A1A;line-height:1.55;margin:6px 0">• ${esc(m)}</div>`).join('')}
     </div>
   </td></tr>` : ''}

   <tr><td style="padding:22px 26px 26px" align="center">
     <a href="${site}/konto.html#community" style="display:inline-block;background:#2DD4BF;color:#06403A;font-weight:700;font-size:15px;text-decoration:none;padding:13px 26px;border-radius:999px">In den Chat gehen</a>
     <div style="font-size:12.5px;color:#6B7280;margin-top:12px;line-height:1.5">Diese Woche noch nichts geschrieben?<br>Ein Satz reicht. Fehler sind ausdrücklich erlaubt.</div>
   </td></tr>

   <tr><td style="padding:0 26px 22px;font-size:11.5px;color:#9CA3AF;line-height:1.6;text-align:center">
     Du bekommst diese Mail, weil du Mitglied im deutschoderwas club bist.<br>
     Keine Lust mehr auf die Wochenmail? <a href="${site}/konto.html#einstellungen" style="color:#0F766E">Hier abstellen</a>.<br>
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

  const jetzt = new Date();
  const ab = new Date(jetzt.getTime() - 7 * 24 * 60 * 60000);
  const fmt = (d) => new Intl.DateTimeFormat('de-DE', { timeZone: 'Europe/Berlin', day: 'numeric', month: 'long' }).format(d);
  const zeitraum = `${fmt(ab)} bis ${fmt(jetzt)}`;
  /* Kalenderwoche als Schluessel, damit die Mail sicher nur einmal geht. */
  const woche = `${jetzt.getUTCFullYear()}-KW${String(Math.ceil(((jetzt - new Date(Date.UTC(jetzt.getUTCFullYear(), 0, 1))) / 86400000 + 1) / 7)).padStart(2, '0')}`;

  const { data: msgs } = await sb.from('community_messages')
    .select('id,channel,body,kind,author_name,antwort_auf,created_at')
    .is('deleted_at', null)
    .gte('created_at', ab.toISOString())
    .order('created_at', { ascending: true });

  if (!msgs || !msgs.length) return res.status(200).json({ ok: true, sent: 0, grund: 'diese Woche nichts geschrieben' });

  const { data: chans } = await sb.from('community_channels').select('slug,name,emoji').eq('is_active', true);
  const chanBy = Object.fromEntries((chans || []).map((c) => [c.slug, c]));
  const echte = msgs.filter((m) => chanBy[m.channel]);
  if (!echte.length) return res.status(200).json({ ok: true, sent: 0, grund: 'nur stillgelegte Kanaele' });

  const zahlen = {
    beitraege: echte.length,
    leute: new Set(echte.map((m) => m.author_name)).size,
    kanaele: new Set(echte.map((m) => m.channel)).size,
  };

  /* Worauf am meisten geantwortet wurde. Wenn niemand geantwortet hat,
     nehmen wir stattdessen die laengsten Beitraege — die sind meistens
     die, in denen jemand etwas von sich erzaehlt hat. */
  const antwZahl = {};
  echte.forEach((m) => { if (m.antwort_auf) antwZahl[m.antwort_auf] = (antwZahl[m.antwort_auf] || 0) + 1; });
  const kandidaten = echte
    .filter((m) => m.kind === 'text' && !m.antwort_auf && String(m.body || '').trim().length > 25)
    .map((m) => ({
      kanal: (chanBy[m.channel].emoji ? chanBy[m.channel].emoji + ' ' : '') + chanBy[m.channel].name,
      wer: String(m.author_name || 'Mitglied').split(' ')[0],
      text: kurz(m.body),
      antworten: antwZahl[m.id] || 0,
      laenge: String(m.body || '').length,
    }))
    .sort((a, b) => (b.antworten - a.antworten) || (b.laenge - a.laenge))
    .slice(0, 3);

  /* Zum Mitnehmen: die Titel der Impulse, die diese Woche gelaufen sind.
     Das sind genau die Sachen, die jemand nachschlagen kann. */
  const abDatum = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(ab).reduce((a, p) => (a[p.type] = p.value, a), {});
  const { data: impulse } = await sb.from('community_impuls')
    .select('titel,art,zuletzt_am')
    .gte('zuletzt_am', `${abDatum.year}-${abDatum.month}-${abDatum.day}`)
    .order('zuletzt_am', { ascending: true });
  const mitnehmen = (impulse || []).filter((i) => i.titel).map((i) => i.titel);

  if (trocken) {
    return res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8')
      .send(mailHtml({ vorname: 'Julia', zeitraum, zahlen, top: kandidaten, mitnehmen, site }));
  }

  const { data: alle } = await sb.from('profiles').select('id,name,email,status,email_optout,chat_wochenmail_aus');
  const ziele = (alle || []).filter((p) => p.email && !p.email_optout && !p.chat_wochenmail_aus && p.status !== 'beendet');
  if (!ziele.length) return res.status(200).json({ ok: true, sent: 0, grund: 'keine Empfaenger' });

  const refs = ziele.map((p) => `${p.id}:${woche}`);
  const { data: schon } = await sb.from('email_log').select('ref').eq('kind', 'chat-woche').in('ref', refs);
  const blockiert = new Set((schon || []).map((r) => r.ref));

  let sent = 0, errors = 0;
  for (const p of ziele) {
    const ref = `${p.id}:${woche}`;
    if (blockiert.has(ref)) continue;
    const { error: logErr } = await sb.from('email_log').insert({ kind: 'chat-woche', ref, user_id: p.id });
    if (logErr) continue;
    const vorname = String(p.name || '').split(' ')[0] || 'du';
    const r = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        replyTo: { name: 'Julia', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
        to: [{ email: p.email, name: p.name || undefined }],
        subject: 'Deine Woche im Club 📬',
        htmlContent: mailHtml({ vorname, zeitraum, zahlen, top: kandidaten, mitnehmen, site }),
      }),
    });
    if (r.ok) sent++;
    else { errors++; await sb.from('email_log').delete().eq('kind', 'chat-woche').eq('ref', ref); }
  }

  return res.status(200).json({ ok: true, sent, errors, beitraege: zahlen.beitraege });
}
