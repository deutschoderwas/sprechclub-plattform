// ============================================================
//  api/wochenplan-schueler.js — Sonntagabend: "das hast du gebucht"
//
//  Julia, 31.10.2026: "Ob es eingestellt ist, dass sie jeden Sonntag
//  Abend eine E-Mail bekommen, welche Stunden sie die Woche gebucht
//  haben?" — War es nicht. api/send-weekly-plan.js gibt es zwar, aber
//  das ist der Plan fuer die LEHRKRAEFTE, und im Kopf steht sogar:
//  "Frueher: Wochenplan an alle Schueler -> entfernt". Fuer die
//  Schueler gab es seitdem nur die Erinnerung eine Stunde vorher.
//
//  Diese Mail geht Sonntagabend an jeden, der fuer die kommende Woche
//  (Montag bis Sonntag) etwas gebucht hat: Tag, Uhrzeit, Thema und je
//  Stunde der Link, der direkt in dieses Klassenzimmer fuehrt.
//
//  Wer nichts gebucht hat, bekommt nichts. Eine Mail "du hast nichts
//  gebucht" waere eine Mahnung, keine Hilfe — und Julia hat nicht
//  darum gebeten.
//
//  Eine Mail pro Mensch und Woche: email_log, kind
//  'wochenplan_schueler', ref '<user_id>:<montag>'. Der Eintrag wird
//  VOR dem Senden geschrieben und bei einem Fehlschlag wieder
//  entfernt — dieselbe Reihenfolge wie ueberall sonst.
//
//  Aufruf:
//    GET /api/wochenplan-schueler            echter Versand
//    GET /api/wochenplan-schueler?trocken=1  zaehlt nur, verschickt nichts
// ============================================================
import { createClient } from '@supabase/supabase-js';

const TZ = 'Europe/Berlin';
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tagLang = (iso) => new Intl.DateTimeFormat('de-DE', { timeZone: TZ, weekday: 'long', day: '2-digit', month: '2-digit' }).format(new Date(iso));
const uhr = (iso) => new Intl.DateTimeFormat('de-DE', { timeZone: TZ, hour: '2-digit', minute: '2-digit' }).format(new Date(iso));

/* Die kommende Woche in Berliner Zeit: der naechste Montag 00:00 bis
   den Sonntag darauf, 24:00. Am Sonntagabend ausgefuehrt heisst das:
   die Woche, die morgen beginnt. */
function berlinVersatz(d) {
  const f = new Intl.DateTimeFormat('en-US', { timeZone: TZ, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const p = f.formatToParts(d).reduce((a, x) => (a[x.type] = x.value, a), {});
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - d.getTime();
}
function kommendeWoche(jetzt) {
  const bn = new Date(jetzt.getTime() + berlinVersatz(jetzt));
  let plus = ((1 - bn.getUTCDay()) + 7) % 7; if (plus === 0) plus = 7;
  const mo = new Date(Date.UTC(bn.getUTCFullYear(), bn.getUTCMonth(), bn.getUTCDate() + plus, 0, 0, 0));
  const start = new Date(mo.getTime() - berlinVersatz(mo));
  return { start, ende: new Date(start.getTime() + 7 * 24 * 3600 * 1000), montag: mo.toISOString().slice(0, 10) };
}

export default async function handler(req, res) {
  const trockenlauf = String(req.query?.trocken || '') === '1';
  const geheim = process.env.CRON_SECRET || '';
  const kopf = req.headers['x-intern'] || '';
  const ausAdmin = (req.headers.authorization || '').startsWith('Bearer ');
  const vonInnen = (geheim && kopf === geheim) || ausAdmin;

  /* Angestossen wird das von pg_cron, und die Zeitplaene dort schicken
     keinen Schluessel mit (siehe die anderen Jobs). Statt den
     Schluessel in die Datenbank zu schreiben, begrenzt sich dieser
     Endpunkt selbst: ohne Schluessel tut er nur Sonntagabend etwas,
     also genau dann, wenn er ohnehin laufen soll. Ruft ihn jemand von
     aussen auf, passiert zu jeder anderen Zeit nichts — und
     Sonntagabend hoechstens das, was sowieso passiert waere, denn
     jede Person bekommt den Plan pro Woche nur einmal. */
  if (!vonInnen && !trockenlauf) {
    const jetztBerlin = new Intl.DateTimeFormat('en-US', { timeZone: TZ, hourCycle: 'h23', weekday: 'short', hour: '2-digit' })
      .formatToParts(new Date()).reduce((a, x) => (a[x.type] = x.value, a), {});
    const istSonntagabend = jetztBerlin.weekday === 'Sun' && +jetztBerlin.hour >= 17;
    if (!istSonntagabend) {
      return res.status(403).json({ ok: false, grund: 'nur_sonntagabend',
        hinweis: 'Dieser Plan geht Sonntagabend raus. Zum Ansehen: ?trocken=1' });
    }
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(200).json({ ok: false, grund: 'supabase_fehlt' });

  const trocken = trockenlauf;
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const site = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
  const { start, ende, montag } = kommendeWoche(new Date());

  const { data: stunden } = await sb.from('classes')
    .select('id,title,topic,starts_at,is_cancelled')
    .gte('starts_at', start.toISOString()).lt('starts_at', ende.toISOString())
    .eq('is_cancelled', false);
  if (!stunden || !stunden.length) return res.status(200).json({ ok: true, woche: montag, gesendet: 0, grund: 'keine_stunden' });

  const { data: buchungen } = await sb.from('bookings')
    .select('user_id,class_id').eq('status', 'booked').in('class_id', stunden.map(c => c.id));
  if (!buchungen || !buchungen.length) return res.status(200).json({ ok: true, woche: montag, gesendet: 0, grund: 'keine_buchungen' });

  const skarte = Object.fromEntries(stunden.map(c => [c.id, c]));
  const proPerson = {};
  for (const b of buchungen) (proPerson[b.user_id] = proPerson[b.user_id] || []).push(skarte[b.class_id]);

  const { data: profs } = await sb.from('profiles')
    .select('id,name,email,email_optout,status').in('id', Object.keys(proPerson));
  const pkarte = Object.fromEntries((profs || []).map(p => [p.id, p]));

  const bilanz = { ok: true, woche: montag, trocken, gesendet: [], uebersprungen: [], fehler: [] };

  for (const [uid, liste] of Object.entries(proPerson)) {
    const p = pkarte[uid];
    if (!p || !p.email) { bilanz.uebersprungen.push({ id: uid, grund: 'keine Adresse' }); continue; }
    if (p.email_optout) { bilanz.uebersprungen.push({ name: p.name || p.email, grund: 'keine Mails gewuenscht' }); continue; }

    liste.sort((a, b) => Date.parse(a.starts_at) - Date.parse(b.starts_at));
    const vorname = (String(p.name || '').trim().split(/\s+/)[0]) || p.email.split('@')[0];
    const ref = uid + ':' + montag;

    if (trocken) {
      bilanz.gesendet.push({ name: p.name || p.email, stunden: liste.length, hinweis: 'Probelauf — nichts verschickt' });
      continue;
    }
    if (!process.env.BREVO_API_KEY) { bilanz.fehler.push({ name: p.name || p.email, fehler: 'kein Brevo-Schluessel' }); continue; }

    const { data: schon } = await sb.from('email_log')
      .select('id').eq('kind', 'wochenplan_schueler').eq('ref', ref).maybeSingle();
    if (schon) { bilanz.uebersprungen.push({ name: p.name || p.email, grund: 'hatte den Plan schon' }); continue; }

    const { data: notiz, error: notizFehler } = await sb.from('email_log')
      .insert({ user_id: uid, kind: 'wochenplan_schueler', ref }).select('id').maybeSingle();
    if (notizFehler || !notiz) {
      bilanz.fehler.push({ name: p.name || p.email,
        fehler: 'Eintrag ins Mail-Log misslang, deshalb NICHT gesendet: ' + String((notizFehler && notizFehler.message) || 'kein Eintrag') });
      continue;
    }

    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Julia · deutschoderwas club', email: process.env.BREVO_SENDER_EMAIL || 'deutschlernen@deutschoderwas.de' },
          replyTo: { email: 'deutschoderwas@gmail.com', name: 'Julia' },
          to: [{ email: p.email, name: p.name || undefined }],
          subject: liste.length === 1 ? 'Deine Stunde in dieser Woche' : `Deine ${liste.length} Stunden in dieser Woche`,
          htmlContent: planHtml(vorname, liste, site),
        }),
      });
      if (!r.ok) {
        await sb.from('email_log').delete().eq('id', notiz.id);
        bilanz.fehler.push({ name: p.name || p.email, fehler: 'HTTP ' + r.status });
        continue;
      }
    } catch (e) {
      await sb.from('email_log').delete().eq('id', notiz.id);
      bilanz.fehler.push({ name: p.name || p.email, fehler: String((e && e.message) || e) });
      continue;
    }
    bilanz.gesendet.push({ name: p.name || p.email, stunden: liste.length });
  }

  bilanz.anzahl = { gesendet: bilanz.gesendet.length, uebersprungen: bilanz.uebersprungen.length, fehler: bilanz.fehler.length };
  return res.status(200).json(bilanz);
}

export function planHtml(vorname, liste, site) {
  const ff = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const zeilen = liste.map((c) => {
    const raum = site + '/klassenraum.html?stunde=' + encodeURIComponent(c.id) + '&titel=' + encodeURIComponent(c.title || '');
    return `<tr><td style="padding:12px 0;border-bottom:1px solid #F0E5D8">
      <div style="font-family:${ff};font-size:13px;font-weight:700;color:#0F766E;text-transform:uppercase;letter-spacing:.04em">${esc(tagLang(c.starts_at))} · ${esc(uhr(c.starts_at))} Uhr</div>
      <div style="font-family:${ff};font-size:16px;font-weight:700;color:#1A1A1A;margin:3px 0 6px">${esc(c.title || 'Sprechclub')}</div>
      ${c.topic ? `<div style="font-family:${ff};font-size:14px;color:#5C4E3E;margin-bottom:8px">${esc(c.topic)}</div>` : ''}
      <a href="${esc(raum)}" style="font-family:${ff};font-size:14px;font-weight:700;color:#0F766E;text-decoration:none">Zum Klassenzimmer →</a>
    </td></tr>`;
  }).join('');

  return `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FFF8E0">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:26px 14px"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:20px;overflow:hidden">

  <tr><td style="padding:24px 30px 0">
    <span style="font-family:${ff};font-weight:800;font-size:20px;color:#1A1A1A">deutsch<span style="color:#14B8A6">oderwas</span></span>
  </td></tr>

  <tr><td style="padding:16px 30px 0">
    <h1 style="font-family:${ff};font-weight:800;font-size:24px;line-height:1.25;margin:0 0 10px;color:#1A1A1A">Deine Woche, ${esc(vorname)}</h1>
    <p style="font-family:${ff};font-size:16px;line-height:1.6;margin:0 0 6px;color:#1A1A1A">
      ${liste.length === 1 ? 'Eine Stunde hast du dir vorgenommen:' : 'Das hast du dir für diese Woche vorgenommen:'}
    </p>
  </td></tr>

  <tr><td style="padding:6px 30px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${zeilen}</table>
  </td></tr>

  <tr><td align="center" style="padding:20px 30px 4px">
    <a href="${esc(site)}/schuelerbereich" style="display:inline-block;background:#2DD4BF;color:#06403A;font-family:${ff};font-weight:800;font-size:16px;text-decoration:none;padding:14px 30px;border-radius:999px">Noch eine Stunde dazubuchen</a>
  </td></tr>

  <tr><td style="padding:14px 30px 4px;font-family:${ff};font-size:13.5px;line-height:1.6;color:#6B7280">
    Eine Stunde vorher bekommst du noch einmal eine Erinnerung mit dem Link.
    Klappt es doch nicht? Bis zwei Stunden vor Beginn kannst du im Schülerbereich stornieren.
  </td></tr>

  <tr><td style="padding:16px 30px 24px;font-family:${ff};font-size:15.5px;line-height:1.6;color:#1A1A1A">
    Bis bald im Club,<br><b>Julia &amp; Team</b> 💛
  </td></tr>

  <tr><td style="background:#1A1A1A;padding:16px 30px;text-align:center">
    <p style="font-family:${ff};font-size:11.5px;line-height:1.6;color:#b9b9b9;margin:0">
      deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen, Deutschland · deutschoderwas@gmail.com
    </p>
  </td></tr>

</table></td></tr></table></body></html>`;
}
