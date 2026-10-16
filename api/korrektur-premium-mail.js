// ============================================================
//  /api/korrektur-premium-mail — einmalige Richtigstellung
//
//  Am 13.10.2026 kam heraus: Die Bestaetigungsmail nach dem
//  Premium-Kauf sprach von "8 LIVE-Stunden". Premium ist aber
//  eine Mitgliedschaft mit unbegrenztem Buchen ab dem 1. November.
//  27 Leute haben die falsche Mail bekommen.
//
//  Dieser Endpunkt schickt ihnen die Richtigstellung. Er ist
//  bewusst eng gebaut:
//
//    · nur mit x-intern: CRON_SECRET aufrufbar
//    · nur an Profile mit tier premium* und tier_ab = 2026-11-01,
//      also genau an die Gruppe, die die falsche Mail bekam
//    · jeder Versand wird in zugang_log vermerkt; wer dort schon
//      steht, bekommt beim zweiten Aufruf nichts mehr. Eine
//      Entschuldigung zweimal zu schicken ist schlimmer als sie
//      gar nicht zu schicken.
//    · ?trocken=1 zeigt nur, wer drankaeme, und verschickt nichts
//
//  Nach dem Lauf kann die Datei weg. Sie steht im Verlauf, falls
//  so etwas noch einmal noetig wird.
// ============================================================
import { createClient } from '@supabase/supabase-js';

const ABSENDER = { name: 'Julia · deutschoderwas', email: 'deutschoderwas@gmail.com' };
const BETREFF = 'Kleine Korrektur zu deiner Premium-Mitgliedschaft';
const BUCHEN = 'https://www.deutschoderwas-club.de/schuelerbereich#kalender';

function html(vorname) {
  const hallo = vorname ? `Hallo ${vorname},` : 'Hallo,';
  return `<!DOCTYPE html><html lang="de"><body style="margin:0;padding:0;background:#FFF8E0;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#1A1A1A">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FFF8E0;padding:28px 12px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFCF5;border:1px solid #F0E5D8;border-radius:18px;overflow:hidden">

  <tr><td style="padding:26px 30px 6px">
    <div style="font-family:'Space Grotesk','Inter',sans-serif;font-weight:700;font-size:19px">deutsch<span style="color:#14B8A6">oderwas</span></div>
  </td></tr>

  <tr><td style="padding:10px 30px 0">
    <h1 style="font-family:'Space Grotesk','Inter',sans-serif;font-size:25px;line-height:1.25;margin:0 0 16px">
      Eine <span style="color:#DD0000">Korrektur</span> — und eine gute Nachricht
    </h1>
    <p style="font-size:16px;line-height:1.6;margin:0 0 14px">${hallo}</p>
    <p style="font-size:16px;line-height:1.6;margin:0 0 14px">
      in der Bestätigungsmail nach deinem Kauf stand „8 LIVE-Stunden“. Das war falsch,
      und es tut mir leid — ich möchte das sofort geraderücken.
    </p>
    <p style="font-size:16px;line-height:1.6;margin:0 0 18px">
      Richtig ist: Deine Premium-Mitgliedschaft ist <b>unbegrenzt</b>. Ab dem
      <b>1. November</b> buchst du im Sprechclub so viele Stunden, wie du willst —
      jeden Tag von Montag bis Sonntag, ohne Stundenkonto, ohne Limit. Es gibt keine
      8 Stunden, die irgendwann aufgebraucht sind.
    </p>
  </td></tr>

  <tr><td style="padding:0 30px">
    <div style="background:#A7F3D0;border-radius:14px;padding:16px 18px;margin-bottom:12px">
      <div style="font-weight:700;color:#06403A;margin-bottom:4px">Deine Stunden ab dem 1. November kannst du dir ab sofort sichern</div>
      <div style="font-size:15px;line-height:1.55;color:#06403A">
        Geh in den Stundenplan und reservier dir deine Plätze. Stunden im Oktober sind
        noch nicht dabei — die Mitgliedschaft startet am 1. November.
      </div>
    </div>
    <div style="background:#FFF8E0;border:1px solid #F0E5D8;border-radius:14px;padding:16px 18px;margin-bottom:18px">
      <div style="font-weight:700;margin-bottom:4px">Die Lernplattform steht dir ab sofort offen</div>
      <div style="font-size:15px;line-height:1.55;color:#6B7280">
        Kursbibliothek von A1 bis C1, Vokabeltrainer, regelmäßiger Podcast und Amanda.
      </div>
    </div>
  </td></tr>

  <tr><td align="center" style="padding:4px 30px 20px">
    <a href="${BUCHEN}" style="display:inline-block;background:#2DD4BF;color:#06403A;font-weight:700;font-size:16px;text-decoration:none;border-radius:999px;padding:15px 32px">
      Stundenplan ansehen
    </a>
  </td></tr>

  <tr><td style="padding:0 30px 20px">
    <p style="font-size:15px;line-height:1.6;margin:0 0 14px;color:#6B7280">
      Falls in deinem Konto eine Stundenzahl stand: Die ist jetzt weg, und das ist
      richtig so. Du brauchst sie nicht — unbegrenzt heißt unbegrenzt.
    </p>
    <p style="font-size:16px;line-height:1.6;margin:0 0 6px">
      Entschuldige den Fehler. Wenn etwas unklar ist, antworte einfach auf diese Mail.
    </p>
    <p style="font-size:16px;line-height:1.6;margin:0">Von Julia, für Deutschlernende weltweit 💛</p>
  </td></tr>

  <tr><td style="padding:16px 30px 24px;border-top:1px solid #F0E5D8">
    <p style="font-size:12px;line-height:1.5;color:#6B7280;margin:0">
      deutschoderwas · Julia Karackov · Wiesenstraße 38, 58119 Hagen, Deutschland<br>
      deutschoderwas@gmail.com · USt-ID: DE676677898
    </p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'supabase_env_missing' });
  }
  if (!process.env.BREVO_API_KEY) return res.status(500).json({ error: 'brevo_key_missing' });

  const trocken = !!(req.query && req.query.trocken);
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } });

  /* Zwei Wege herein, beide gleich eng:
     · x-intern mit dem CRON_SECRET (vom Server aus)
     · Authorization: Bearer <Session> einer angemeldeten Admin-Person
       — damit Julia im Admin-Bereich einen Knopf hat und nirgends
       einen Schluessel eintippen muss. */
  const geheim = process.env.CRON_SECRET;
  let erlaubt = !!geheim && req.headers['x-intern'] === geheim;
  if (!erlaubt) {
    const token = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
    if (token) {
      const { data: u } = await sb.auth.getUser(token);
      if (u && u.user) {
        const { data: prof } = await sb.from('profiles')
          .select('is_admin').eq('id', u.user.id).maybeSingle();
        erlaubt = !!(prof && prof.is_admin);
      }
    }
  }
  if (!erlaubt) return res.status(401).json({ error: 'nicht_erlaubt' });

  /* 16.10.2026 — Stichtag dazu. Ohne ihn waechst diese Gruppe mit
     jedem neuen Premium-Kauf weiter, und die Karte im Admin bot an,
     jemandem eine Entschuldigung fuer eine Mail zu schicken, die er nie
     bekommen hat. Aufgefallen an Nounagnon Romaric Tochoedo: gekauft am
     14.10. um 23:30, also lange nach dem Fix — seine Bestaetigung war
     von Anfang an richtig. Der letzte der 27 Betroffenen hat am 13.10.
     um 15:24 gekauft; der Stichtag liegt sauber dazwischen. */
  const FALSCHE_MAIL_BIS = '2026-10-14T00:00:00Z';
  const { data: leute, error } = await sb
    .from('profiles')
    .select('id, email, name')
    .in('tier', ['premium', 'premiumplus', 'premium_plus'])
    .eq('tier_ab', '2026-11-01')
    .lt('created_at', FALSCHE_MAIL_BIS);
  if (error) return res.status(500).json({ error: 'abfrage_fehlgeschlagen', detail: error.message });

  const { data: schon } = await sb
    .from('zugang_log').select('user_id').eq('aktion', 'korrektur_mail');
  const fertig = new Set((schon || []).map(z => z.user_id));

  const offen = (leute || []).filter(p => p.email && !fertig.has(p.id));
  if (trocken) {
    return res.status(200).json({ ok: true, trocken: true, offen: offen.length,
      schon_verschickt: fertig.size, adressen: offen.map(p => p.email) });
  }

  const bericht = { verschickt: [], fehler: [] };
  for (const p of offen) {
    const vorname = String(p.name || '').trim().split(' ')[0] || '';
    try {
      const r = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'api-key': process.env.BREVO_API_KEY, 'Content-Type': 'application/json', accept: 'application/json' },
        body: JSON.stringify({
          sender: ABSENDER,
          to: [{ email: p.email, name: p.name || undefined }],
          replyTo: ABSENDER,
          subject: BETREFF,
          htmlContent: html(vorname),
        }),
      });
      if (!r.ok) { bericht.fehler.push({ email: p.email, status: r.status, text: (await r.text()).slice(0, 160) }); continue; }
      /* Erst eintragen, wenn Brevo die Mail angenommen hat. Schlaegt der
         Eintrag fehl, ist eine doppelte Mail das kleinere Uebel als eine
         Entschuldigung, die nie ankommt — deshalb kein Abbruch. */
      await sb.from('zugang_log').insert({
        user_id: p.id, email: p.email, aktion: 'korrektur_mail',
        grund: 'Premium unbegrenzt statt 8 Live-Stunden (Mail vom 13.10.2026)',
      });
      bericht.verschickt.push(p.email);
    } catch (e) {
      bericht.fehler.push({ email: p.email, text: String(e).slice(0, 160) });
    }
  }

  return res.status(200).json({ ok: true, ...bericht,
    anzahl: bericht.verschickt.length, uebersprungen: fertig.size });
}
