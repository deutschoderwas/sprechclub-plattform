// Synchronisiert ALLE Club-Mitglieder (profiles) nach Brevo.
// Ziel: Ordner "deutschoderwas club" -> Liste "aktive und inaktive Club Mitglieder".
// Jeder Kontakt bekommt Attribute: VORNAME, CLUB_STATUS (aktiv/pause/urlaub/beendet),
// GUTHABEN (Stunden). So hat Julia jederzeit den Überblick, wer schon im Club war.
// Läuft täglich (pg_cron) -> neue Anmeldungen landen automatisch in der Liste.
// Idempotent: Ordner/Liste/Attribut werden nur angelegt, wenn sie fehlen; Kontakte werden aktualisiert.
import { createClient } from '@supabase/supabase-js';

const FOLDER_NAME = 'deutschoderwas club';
const LIST_NAME = 'aktive und inaktive Club Mitglieder';
const BREVO = 'https://api.brevo.com/v3';

export default async function handler(req, res) {
  const KEY = process.env.BREVO_API_KEY;
  if (!KEY) return res.status(200).json({ ok:false, skipped:'BREVO_API_KEY fehlt' });
  const headers = { 'api-key': KEY, 'Content-Type': 'application/json', 'accept': 'application/json' };
  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  try {
    // 1) Ordner finden oder anlegen
    const folderId = await findOrCreateFolder(headers);
    // 2) Liste finden oder anlegen
    const listId = await findOrCreateList(headers, folderId);
    // 3) Custom-Attribut CLUB_STATUS sicherstellen (Text)
    await ensureAttribute(headers, 'CLUB_STATUS', 'text');

    // 4) Alle Mitglieder laden (echte Schüler – Lehrer/Admins optional auch mit aufnehmen)
    const { data: profs } = await sb.from('profiles')
      .select('id,name,email,credits,status,is_admin,is_teacher');
    const members = (profs || []).filter(p => p.email && !p.is_admin && !p.is_teacher);
    if (!members.length) return res.status(200).json({ ok:true, listId, synced:0 });

    // 5) In Brevo importieren (Batches à 100), bestehende Kontakte aktualisieren
    let synced = 0;
    for (let i = 0; i < members.length; i += 100) {
      const batch = members.slice(i, i + 100).map(p => ({
        email: p.email,
        attributes: {
          VORNAME: (p.name || '').split(' ')[0] || '',
          CLUB_STATUS: p.status || 'aktiv',
          GUTHABEN: p.credits || 0,
        },
      }));
      const r = await fetch(`${BREVO}/contacts/import`, {
        method: 'POST', headers,
        body: JSON.stringify({
          listIds: [listId],
          updateExistingContacts: true,
          emptyContactsAttributes: false,
          jsonBody: batch,
        }),
      });
      if (r.ok) synced += batch.length;
    }
    return res.status(200).json({ ok:true, folderId, listId, synced });
  } catch (e) {
    return res.status(200).json({ ok:false, error: String(e && e.message || e) });
  }
}

async function findOrCreateFolder(headers) {
  const r = await fetch(`${BREVO}/contacts/folders?limit=50&offset=0`, { headers });
  const j = await r.json().catch(() => ({}));
  const found = (j.folders || []).find(f => (f.name || '').toLowerCase() === FOLDER_NAME.toLowerCase());
  if (found) return found.id;
  const c = await fetch(`${BREVO}/contacts/folders`, { method:'POST', headers, body: JSON.stringify({ name: FOLDER_NAME }) });
  const cj = await c.json().catch(() => ({}));
  return cj.id;
}

async function findOrCreateList(headers, folderId) {
  const r = await fetch(`${BREVO}/contacts/folders/${folderId}/lists?limit=50&offset=0`, { headers });
  const j = await r.json().catch(() => ({}));
  const found = (j.lists || []).find(l => (l.name || '').toLowerCase() === LIST_NAME.toLowerCase());
  if (found) return found.id;
  const c = await fetch(`${BREVO}/contacts/lists`, { method:'POST', headers, body: JSON.stringify({ name: LIST_NAME, folderId }) });
  const cj = await c.json().catch(() => ({}));
  return cj.id;
}

async function ensureAttribute(headers, name, type) {
  // Legt das Attribut an; existiert es schon, gibt Brevo einen Fehler zurück, den wir ignorieren.
  await fetch(`${BREVO}/contacts/attributes/normal/${encodeURIComponent(name)}`, {
    method: 'POST', headers, body: JSON.stringify({ type }),
  }).catch(() => {});
}
