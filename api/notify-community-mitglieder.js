// Benachrichtigt die Mitglieder, wenn im Community-Chat etwas geschrieben wurde.
//
// Bisher ging bei einer neuen Nachricht nur eine Mail an die Adminadresse
// (api/notify-community.js). Die Mitglieder erfuhren nichts — sie mussten
// selbst nachsehen.
//
// Diese Route schreibt stattdessen eine Zeile in `benachrichtigungen` —
// für jedes aktive Mitglied, das nicht selbst geschrieben hat. Damit
// leuchtet die Glocke sofort bei allen, die die Seite offen haben
// (benachrichtigungen.js hört über Realtime mit), und die Meldung wartet,
// wenn jemand später wiederkommt. Keine E-Mail, kein Versanddienst.
//
// „Aktiv" heißt profiles.status = 'aktiv' — mit und ohne Stunden, also
// auch der Tarif „community".
//
// Nicht benachrichtigt wird, wer
//   · selbst geschrieben hat,
//   · den Kanal stummgeschaltet hat (community_abo.stumm),
//   · in den letzten 30 Minuten schon eine Meldung aus diesem Kanal
//     bekommen hat. Sonst macht ein lebhaftes Gespräch aus einer
//     Unterhaltung fünfzig Glockenschläge.
//
// POST { channel, text? } + Authorization: Bearer <Access-Token des Mitglieds>
import { createClient } from '@supabase/supabase-js';

const BUENDEL_MINUTEN = 30;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { channel, text } = req.body || {};
  if (!token || !channel) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: { user }, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !user) return res.status(401).json({ error: 'unauthorized' });

  const seit = new Date(Date.now() - BUENDEL_MINUTEN * 60000).toISOString();

  const [{ data: kanal }, { data: ich }, { data: aktive }, { data: stumm }, { data: schon }] =
    await Promise.all([
      sb.from('community_channels').select('name,emoji').eq('slug', channel).maybeSingle(),
      sb.from('profiles').select('name').eq('id', user.id).maybeSingle(),
      sb.from('profiles').select('id').eq('status', 'aktiv'),
      sb.from('community_abo').select('user_id').eq('channel', channel).eq('stumm', true),
      sb.from('benachrichtigungen').select('user_id')
        .eq('kanal', channel).eq('typ', 'antwort').gte('created_at', seit)
    ]);

  const raus = new Set([user.id]);
  (stumm || []).forEach(r => raus.add(r.user_id));
  (schon || []).forEach(r => raus.add(r.user_id));

  const empfaenger = (aktive || []).map(r => r.id).filter(id => !raus.has(id));
  if (!empfaenger.length) {
    return res.status(200).json({ ok: true, benachrichtigt: 0, grund: 'niemand offen' });
  }

  const chName = (kanal?.emoji ? kanal.emoji + ' ' : '') + (kanal?.name || channel);
  const wer = ich?.name || 'Ein Mitglied';

  // Eine Zeile Vorschau, damit man sieht, worum es geht — aber nicht der
  // ganze Beitrag: die Glocke ist ein Hinweis, kein zweiter Chat.
  const vorschau = String(text || '').replace(/\s+/g, ' ').trim().slice(0, 90);

  const zeilen = empfaenger.map(id => ({
    user_id: id,
    typ: 'antwort',
    titel: 'Neu in ' + chName,
    text: vorschau ? wer + ': ' + vorschau + (String(text || '').length > 90 ? ' …' : '')
                   : wer + ' hat etwas geschrieben.',
    link: '/community.html?k=' + encodeURIComponent(channel),
    von_name: wer,
    kanal: channel
  }));

  // In Häppchen, damit ein großer Kurs die Anfrage nicht sprengt.
  let gesetzt = 0;
  for (let i = 0; i < zeilen.length; i += 200) {
    const { error } = await sb.from('benachrichtigungen').insert(zeilen.slice(i, i + 200));
    if (error) return res.status(500).json({ error: 'insert_failed', detail: error.message, gesetzt });
    gesetzt += Math.min(200, zeilen.length - i);
  }

  return res.status(200).json({ ok: true, benachrichtigt: gesetzt });
}
