// Schüler als Admin löschen.
// POST { user_id } + Authorization: Bearer <Admin-Access-Token>
//
// WAS VORHER SCHIEFGING
//
// Hier stand: Profil löschen (CASCADE), dann den Auth-User löschen.
// Zwei Dinge hielten nicht, was der Knopf verspricht:
//
//   · Drei Tabellen blockieren das Löschen eines Profils, weil ihr
//     Fremdschlüssel weder CASCADE noch SET NULL sagt (class_log,
//     community_corrections, fehler_trainer). Der Fehler der
//     Profil-Löschung wurde nie geprüft — die Antwort meldete
//     trotzdem "profile_deleted: true". Im Test am 12.09.2026
//     blieb das Profil stehen, während die Oberfläche "gelöscht"
//     sagte.
//   · pending_purchases hat gar keinen Fremdschlüssel und überlebte
//     jede Löschung. Über diese Zeile konnte sich ein gelöschter
//     Schüler sofort wieder registrieren.
//
// Jetzt macht die Datenbankfunktion schueler_loeschen() die ganze
// Arbeit in EINER Transaktion: Käufe ins Storno-Archiv, alles ohne
// Fremdschlüssel weg, die Blockierer auflösen, dann auth.users
// löschen — profiles hängt mit CASCADE daran. Entweder ist der
// Schüler ganz weg oder gar nicht.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

  const token = (req.headers.authorization || '').replace('Bearer ', '');
  const { user_id } = req.body || {};
  if (!token || !user_id) return res.status(400).json({ error: 'bad_request' });

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // Aufrufer muss Admin sein
  const { data: { user: caller } = {}, error: uerr } = await sb.auth.getUser(token);
  if (uerr || !caller) return res.status(401).json({ error: 'unauthorized' });
  const { data: me } = await sb.from('profiles').select('is_admin').eq('id', caller.id).maybeSingle();
  if (!me || !me.is_admin) return res.status(403).json({ error: 'not_admin' });

  // Sicherheitsnetz: nicht sich selbst. Team fängt die Funktion selbst ab.
  if (user_id === caller.id) return res.status(400).json({ error: 'cannot_delete_self' });

  const { data, error } = await sb.rpc('schueler_loeschen', { p_user_id: user_id });

  // Ein Fehler wird jetzt gemeldet, statt als Erfolg durchzugehen.
  if (error) {
    console.error('schueler_loeschen', error);
    return res.status(500).json({ ok: false, error: 'loeschen_fehlgeschlagen', detail: error.message });
  }
  if (!data || data.ok !== true) {
    const grund = (data && data.grund) || 'unbekannt';
    const status = grund === 'kein_profil' ? 404 : 400;
    return res.status(status).json({ ok: false, error: grund });
  }

  return res.status(200).json({
    ok: true,
    name: data.name,
    email: data.email,
    kaeufe_storniert: data.kaeufe_storniert,
    hinweis: 'Zugang sofort weg. Neuanmeldung erst wieder nach einem neuen Kauf.'
  });
}
