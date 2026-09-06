// Abendliche Zusammenfassung aus dem Community-Chat (Brevo).
// Wird per Supabase pg_cron getriggert und schickt am Abend an alle
// aktiven Mitglieder eine Mail mit dem, was heute geschrieben wurde.
//
// Grundsaetze:
//  - Die Mail ist ein Anreisser, kein Ersatz fuer den Chat. Jeder Beitrag
//    steht angeschnitten da, und „weiterlesen“ fuehrt in genau den Kanal,
//    in dem er steht. Wer die Mail liest, soll hineingehen.
//  - Nur wenn es wirklich etwas zu erzaehlen gibt: kein Beitrag und keine
//    neue Podcastfolge, keine Mail.
//  - Hoechstens eine Mail pro Mitglied und Tag (email_log, kind 'chat-tag').
//  - Wer email_optout hat oder den Status 'beendet', bekommt nichts.
//  - Der Vorschau-Modus (?trocken=1) verschickt nichts, sondern gibt
//    die fertige Mail zurueck. Damit kann man sie ansehen, bevor sie rausgeht.
import { createClient } from '@supabase/supabase-js';

const FF = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const esc = (s) => String(s == null ? '' : s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

/* Ein Beitrag als Anreisser. Rund hundert Zeichen sind genug, um neugierig
   zu machen, und zu wenig, um die Sache erledigt zu haben. Ob gekuerzt
   wurde, gibt die Funktion mit zurueck — nur dann steht „weiterlesen“ da. */
function anreissen(m, max = 100) {
  if (m.kind === 'audio') return { text: '🎧 Sprachnachricht', gekuerzt: true };
  if (m.kind === 'image') return { text: '📷 Bild' + (m.body ? ' · ' + m.body : ''), gekuerzt: true };
  const t = String(m.body || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return { text: t, gekuerzt: false };
  /* An der letzten Wortgrenze schneiden, nicht mitten im Wort. */
  const roh = t.slice(0, max);
  const schnitt = roh.lastIndexOf(' ');
  return { text: (schnitt > max * 0.6 ? roh.slice(0, schnitt) : roh).replace(/[,;:.\-–—]$/, '') + ' …', gekuerzt: true };
}

/* Aus den Rohbeitraegen die fertigen Kanalbloecke.
   Zweimal exakt dasselbe hintereinander ist ein Doppeltipp auf Senden und
   steht einmal da; gekuerzt wird sonst nichts — jeder Beitrag bekommt
   seine eigene Zeile, damit die Mail zeigt, wie viel wirklich los war. */
function gruppenBauen(msgs, chanBy, proKanal = 5) {
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
    const zeilen = [];
    for (const m of g.alle) {
      const wer = String(m.author_name || 'Mitglied').split(' ')[0];
      const a = anreissen(m);
      const letzt = zeilen[zeilen.length - 1];
      if (letzt && letzt.wer === wer && letzt.text === a.text) { letzt.zaehlt++; continue; }
      zeilen.push({ wer, text: a.text, gekuerzt: a.gekuerzt, zaehlt: 1 });
    }
    const sichtbar = zeilen.slice(0, proKanal);
    const gezeigt = sichtbar.reduce((n, z) => n + z.zaehlt, 0);
    return { slug: g.slug, name: g.name, emoji: g.emoji, msgs: sichtbar, rest: g.alle.length - gezeigt };
  });
}

function mailHtml({ vorname, datum, kanaele, gesamt, leute, podcasts = [], podcastKopf = 'Neu im Podcast', site }) {
  const wortBeitrag = (n) => n === 1 ? 'weiterer Beitrag' : 'weitere Beiträge';
  const chatLink = (slug) => `${site}/konto.html?kanal=${encodeURIComponent(slug)}#community`;

  const bloecke = kanaele.map((k) => `
    <tr><td style="padding:18px 26px 0">
      <a href="${chatLink(k.slug)}" style="font-size:13px;font-weight:800;color:#1990A4;text-decoration:none">${esc(k.emoji || '')} ${esc(k.name)}</a>
      ${k.msgs.map((m) => `
        <div style="margin-top:9px;padding-left:12px;border-left:2px solid #F0E5D8">
          <div style="font-size:12.5px;font-weight:700;color:#6B7280">${esc(m.wer)}</div>
          <div style="font-size:14px;color:#1A1A1A;line-height:1.5">${esc(m.text)}${m.gekuerzt ? `
            <a href="${chatLink(k.slug)}" style="color:#0F766E;font-weight:700;text-decoration:none;white-space:nowrap">weiterlesen&nbsp;›</a>` : ''}</div>
        </div>`).join('')}
      ${k.rest > 0 ? `
        <div style="margin-top:9px;padding-left:14px;font-size:12.5px">
          <a href="${chatLink(k.slug)}" style="color:#0F766E;font-weight:700;text-decoration:none">+ ${k.rest} ${wortBeitrag(k.rest)} in diesem Kanal ›</a>
        </div>` : ''}
    </td></tr>`).join('');

  /* Jeden Tag vier neue Folgen, eine je Niveau. Titel und Thema stehen
     hier, damit man am Betreff und an der Mail sieht, ob es sich lohnt —
     angehoert wird auf der Podcastseite.
     Bei manchen Folgen ist das Thema fast der Titel noch einmal. Dann
     steht darunter lieber der Anreisser, sonst liest man dasselbe zweimal. */
  const untertitel = (p) => {
    const kern = String(p.titel || '').split(/[–—:]/)[0].trim().toLowerCase();
    const thema = String(p.thema || '').trim();
    if (thema && kern && thema.toLowerCase().indexOf(kern) !== 0) return thema;
    const k = String(p.kurz || '').replace(/\s+/g, ' ').trim();
    if (k) return k.length > 95 ? k.slice(0, 94).replace(/\s\S*$/, '') + ' …' : k;
    return thema;
  };
  const podcastBlock = podcasts.length ? `
   <tr><td style="padding:24px 26px 0">
     <div style="background:#FFFCF5;border:1px solid #F0E5D8;border-radius:16px;padding:16px 18px">
       <div style="font-size:13px;font-weight:800;color:#1A1A1A">🎧 ${esc(podcastKopf)}: ${podcasts.length} ${podcasts.length === 1 ? 'Folge' : 'Folgen'}</div>
       <div style="font-size:12.5px;color:#6B7280;margin-top:3px;line-height:1.5">Für jedes Niveau eine — such dir deins aus und hör rein.</div>
       ${podcasts.map((p) => `
         <div style="margin-top:12px">
           <span style="display:inline-block;background:#FFCE00;color:#1A1A1A;font-size:11px;font-weight:800;border-radius:999px;padding:2px 9px">${esc(p.level)}</span>
           <span style="font-size:14px;font-weight:700;color:#1A1A1A"> ${esc(p.titel)}</span>
           <span style="font-size:12px;color:#9CA3AF">${p.dauer ? ' · ' + esc(p.dauer) : ''}</span>
           ${untertitel(p) ? `<div style="font-size:13px;color:#5C4E3E;line-height:1.5;margin-top:1px">${esc(untertitel(p))}</div>` : ''}
         </div>`).join('')}
       <div style="margin-top:14px">
         <a href="${site}/podcast.html" style="display:inline-block;background:#1A1A1A;color:#fff;font-weight:700;font-size:13.5px;text-decoration:none;padding:9px 18px;border-radius:999px">Zum Podcast</a>
       </div>
     </div>
   </td></tr>` : '';

  const kopfText = gesamt
    ? `${gesamt} ${gesamt === 1 ? 'Beitrag' : 'Beiträge'} von ${leute} ${leute === 1 ? 'Person' : 'Leuten'}. Schau rein — eine Antwort dauert eine Minute und macht für den anderen den ganzen Tag.`
    : 'Im Chat war es heute still. Ein Satz von dir reicht, damit morgen etwas dasteht.';

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;background:#FFF8E0;font-family:${FF}">
 <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 14px"><tr><td align="center">
  <table role="presentation" width="100%" style="max-width:560px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 8px 26px rgba(0,0,0,.08)">
   <tr><td style="height:5px;background:#2DD4BF"></td></tr>
   <tr><td style="padding:22px 26px 4px">
     <div style="font-size:12px;font-weight:800;letter-spacing:.06em;color:#9CA3AF;text-transform:uppercase">Heute im Club · ${esc(datum)}</div>
     <h1 style="margin:8px 0 0;font-size:21px;line-height:1.25;color:#1A1A1A">Hallo ${esc(vorname)}, das war heute los</h1>
     <p style="margin:8px 0 0;font-size:14.5px;color:#5C4E3E;line-height:1.55">${esc(kopfText)}</p>
   </td></tr>
   ${bloecke}
   ${podcastBlock}
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

  const { data: chans } = await sb.from('community_channels').select('slug,name,emoji,sort_order').eq('is_active', true);
  const chanBy = Object.fromEntries((chans || []).map((c) => [c.slug, c]));
  const gruppen = gruppenBauen(msgs || [], chanBy);

  /* Die neuen Folgen, eine je Niveau, in fester Reihenfolge.
     Nicht nach Datum gefiltert, sondern danach, wann sie live gegangen
     sind: Eine Folge, die gestern um 20:45 fertig wurde, hat die Mail von
     gestern (20 Uhr) nicht mehr erwischt und gehoert in die von heute.
     Sechsundzwanzig Stunden decken den Abstand zweier Mails ab, ohne dass
     dieselbe Folge zweimal angekuendigt wird. */
  const REIHE = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const seit = new Date(jetzt.getTime() - 26 * 60 * 60000).toISOString();
  const { data: pods } = await sb.from('podcasts')
    .select('level,titel,thema,kurz,dauer,datum,status,created_at')
    .eq('status', 'live').gte('created_at', seit);
  const podcasts = (pods || []).slice()
    .sort((a, b) => REIHE.indexOf(a.level) - REIHE.indexOf(b.level));
  /* „Heute neu“ nur schreiben, wenn es auch stimmt. */
  const podcastKopf = podcasts.length && podcasts.every((p) => p.datum === heute)
    ? 'Heute neu im Podcast' : 'Neu im Podcast';

  const gesamt = (msgs || []).length;
  const leute = new Set((msgs || []).map((m) => m.author_name)).size;

  /* Ohne Beitraege und ohne neue Folge gibt es nichts zu erzaehlen. */
  if (!gruppen.length && !podcasts.length)
    return res.status(200).json({ ok: true, sent: 0, grund: 'heute nichts geschrieben und keine neue Folge' });

  const inhalt = (vorname) => mailHtml({ vorname, datum: datumText, kanaele: gruppen, gesamt, leute, podcasts, podcastKopf, site });
  const folgenText = `${podcasts.length} neue ${podcasts.length === 1 ? 'Folge' : 'Folgen'}`;
  const betreff = gesamt
    ? `Heute im Club: ${gesamt} ${gesamt === 1 ? 'Beitrag' : 'Beiträge'} 💬${podcasts.length ? ` und ${folgenText} 🎧` : ''}`
    : `${folgenText} im Podcast 🎧`;

  if (trocken) {
    return res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(inhalt('Julia'));
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
        subject: betreff,
        htmlContent: inhalt(vorname),
      }),
    });
    if (r.ok) sent++;
    else { errors++; await sb.from('email_log').delete().eq('kind', 'chat-tag').eq('ref', ref); }
  }

  return res.status(200).json({ ok: true, sent, errors, beitraege: gesamt, folgen: podcasts.length });
}

/* Damit man die Mail ansehen kann, ohne sie zu verschicken. */
export { mailHtml, gruppenBauen };
