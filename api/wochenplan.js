// ============================================================
//  /api/wochenplan — die naechsten Sprechclub-Termine, oeffentlich
//
//  Die Verkaufsseite soll zeigen, wann der Sprechclub wirklich
//  stattfindet. Direkt aus der Datenbank geht das nicht: Die
//  Tabelle classes ist per RLS nur fuer Mitglieder lesbar
//  ("Stunden komplett nur fuer Aktive"), und genau das ist auch
//  richtig so. Wer noch nicht gebucht hat, soll die Raumlinks
//  und die Teilnehmer nicht sehen.
//
//  Dieser Endpunkt gibt deshalb nur das heraus, was auf einem
//  Aushang stehen duerfte: Tag, Uhrzeit, Titel, Niveau und wie
//  viele Plaetze noch frei sind. Keine Links, keine Namen, keine
//  Kennungen.
//
//  Warum ueberhaupt live statt fest ins HTML geschrieben: Der
//  Plan aendert sich. Eine Tabelle im HTML stimmt nach drei
//  Wochen nicht mehr, und nichts kostet mehr Vertrauen als eine
//  Uhrzeit, zu der niemand da ist.
//
//  GET /api/wochenplan            -> die naechsten 7 Tage
//  GET /api/wochenplan?tage=14    -> laenger, hoechstens 28
//
//  Antwort: { ok, stand, termine: [{ tag, tag_kurz, datum, zeit,
//             titel, niveau, plaetze, frei }] }
// ============================================================
import { createClient } from '@supabase/supabase-js';

const TAGE = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
const KURZ = ['So','Mo','Di','Mi','Do','Fr','Sa'];

/* Berliner Zeit, ohne Bibliothek: Intl kennt die Zeitzone und
   die Sommerzeit, und mehr brauchen wir hier nicht. */
function inBerlin(iso) {
  const d = new Date(iso);
  const teile = new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin', weekday: 'short', day: '2-digit', month: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false
  }).formatToParts(d).reduce((a, t) => (a[t.type] = t.value, a), {});
  /* Wochentag ueber die Zeitzone bestimmen, nicht ueber getDay():
     um 23:30 UTC ist in Berlin schon der naechste Tag. */
  const nr = ['So','Mo','Di','Mi','Do','Fr','Sa']
    .indexOf(String(teile.weekday || '').replace('.', '').slice(0, 2));
  return {
    tagNr: nr < 0 ? d.getUTCDay() : nr,
    datum: teile.day + '.' + teile.month + '.',
    zeit: teile.hour + ':' + teile.minute
  };
}

/* topic steht in der Datenbank als "Art · Thema", zum Beispiel
   "Wortschatzfokus · Im Restaurant: Suchbild, Wo?/Wohin? & Tabu".
   Fuer einen Aushang reicht der Teil vor dem Doppelpunkt — der Rest
   sind Uebungsnamen, die ohne Zusammenhang nichts sagen.
   Steht gar keine Art davor, ist der Eintrag noch nicht beschriftet
   ("Teil 1"); dann gibt es kein Thema zurueck und die Seite laesst
   die Stunde weg, statt eine leere Karte zu zeigen. */
function teile(topic, titel) {
  const roh = String(topic || '').trim();
  if (!roh) return { art: '', thema: '' };
  const i = roh.indexOf('\u00b7');
  if (i < 0) return { art: '', thema: '' };
  const art = roh.slice(0, i).trim();
  let thema = roh.slice(i + 1).trim();
  const d = thema.indexOf(':');
  if (d > 0) thema = thema.slice(0, d).trim();
  if (!thema) thema = String(titel || '').trim();
  return { art, thema };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  /* Eine Minute Zwischenspeicher am Rand: Die Seite wird von vielen
     geoeffnet, der Plan aendert sich selten. stale-while-revalidate
     haelt die Antwort schnell, auch wenn sie gerade erneuert wird. */
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY)
    return res.status(200).json({ ok: false, grund: 'nicht_konfiguriert', termine: [] });

  const tage = Math.min(28, Math.max(1, Number(req.query && req.query.tage) || 7));
  const bis = new Date(Date.now() + tage * 24 * 60 * 60 * 1000).toISOString();

  const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } });

  try {
    const { data: stunden, error } = await sb
      .from('classes')
      .select('id, starts_at, title, level, capacity, topic, teacher_id')
      .gt('starts_at', new Date().toISOString())
      .lt('starts_at', bis)
      .eq('is_cancelled', false)
      .order('starts_at', { ascending: true })
      .limit(120);
    if (error) throw error;

    /* Namen der Lehrkraefte. Julia wollte sie auf der Startseite
       sehen: "Lehrernamen zeigen" — es sind Vornamen, die ohnehin
       im Team-Abschnitt stehen. Mehr als Name und Farbe geht hier
       nicht heraus. */
    const lehrer = {};
    const lids = [...new Set((stunden || []).map(s => s.teacher_id).filter(Boolean))];
    if (lids.length) {
      const { data: tn } = await sb.from('teachers').select('id, name, color').in('id', lids);
      (tn || []).forEach(t => { lehrer[t.id] = { name: t.name || '', farbe: t.color || '' }; });
    }

    /* Freie Plaetze: eine Abfrage fuer alle Stunden statt eine pro
       Stunde. Bei vierzig Terminen sind das vierzig Abfragen
       weniger. */
    const ids = (stunden || []).map(s => s.id);
    const belegt = {};
    if (ids.length) {
      const { data: buchungen } = await sb
        .from('bookings').select('class_id').in('class_id', ids).eq('status', 'booked');
      (buchungen || []).forEach(b => { belegt[b.class_id] = (belegt[b.class_id] || 0) + 1; });
    }

    const termine = (stunden || []).map(s => {
      const z = inBerlin(s.starts_at);
      const plaetze = Number(s.capacity || 0);
      const g = teile(s.topic, s.title);
      const l = lehrer[s.teacher_id] || {};
      return {
        tag: TAGE[z.tagNr], tag_kurz: KURZ[z.tagNr], datum: z.datum, zeit: z.zeit,
        titel: s.title || 'Sprechclub',
        niveau: s.level || '',
        art: g.art,
        thema: g.thema,
        lehrer: l.name || '',
        lehrer_farbe: l.farbe || '',
        plaetze,
        frei: Math.max(0, plaetze - (belegt[s.id] || 0))
      };
    });

    return res.status(200).json({ ok: true, stand: new Date().toISOString(), tage, termine });
  } catch (e) {
    console.error('wochenplan', e);
    /* Lieber eine leere Liste als eine Fehlermeldung auf der
       Verkaufsseite: Die Seite blendet den Plan dann einfach aus
       und zeigt den festen Text darunter. */
    return res.status(200).json({ ok: false, grund: 'fehler', termine: [] });
  }
}
