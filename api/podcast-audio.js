// ============================================================
//  Julias 5-Minuten-Podcast — die Stimme
//
//  Holt EINEN fertigen Entwurf aus der Tabelle, spricht ihn mit
//  Julias geklonter Stimme ein, baut daraus das Mitlese-Transkript,
//  lädt MP3 und Cover hoch, setzt die Folge live — und ruft sich
//  danach selbst noch einmal auf, für die nächste Folge.
//
//  Eine Folge pro Aufruf. Damit bleibt jeder Aufruf unter einer
//  Minute, auch wenn an einem Tag vier Folgen anstehen.
//
//  ---------------------------------------------------------------
//  DAS MITLESEN
//
//  ElevenLabs kann nicht nur sprechen, sondern auch sagen, zu
//  welcher Sekunde jeder einzelne Buchstabe gesprochen wird.
//  Genau das nutzen wir: wir schneiden den Text in Sätze und
//  hängen an jeden Satz seine Anfangs- und Endsekunde. Deshalb
//  läuft der Text auf der Podcast-Seite exakt mit der Stimme mit,
//  ohne dass jemand etwas von Hand ausrichten muss.
//
//  ---------------------------------------------------------------
//  WAS PASSIERT, WENN DER SCHLÜSSEL FEHLT
//
//  Ohne ELEVENLABS_API_KEY bleibt die Folge als Entwurf liegen und
//  der Endpoint sagt ehrlich, was fehlt. Es geht nichts kaputt, und
//  sobald der Schlüssel da ist, wird alles Liegengebliebene
//  nachgeholt.
// ============================================================
import { createClient } from '@supabase/supabase-js';

export const maxDuration = 60;

const SUPA    = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SITE    = process.env.SITE_URL || 'https://www.deutschoderwas-club.de';
const BUCKET  = 'podcast';

// Julias geklonte Stimme. Wird in Vercel gesetzt, sobald der Klon steht.
const STIMME  = process.env.ELEVEN_VOICE_JULIA || process.env.ELEVEN_VOICE_F || '';
const MODELL  = process.env.ELEVEN_MODEL || 'eleven_multilingual_v2';

const TEMPO = { A2: 0.88, B1: 0.94, B2: 1.0, C1: 1.0 };

// Die Farben der Niveau-Punkte auf der Podcast-Seite.
const FARBE = {
  A2: ['#5AC8E0', '#2E9BB8'],
  B1: ['#F0C64A', '#D19B18'],
  B2: ['#E8695A', '#C6402F'],
  C1: ['#9B7BD4', '#6F4FB0']
};

// ---------------------------------------------------------------
//  Text in Sätze schneiden
// ---------------------------------------------------------------
function inSaetze(text) {
  const roh = text.replace(/\s+/g, ' ').trim();
  const teile = roh.match(/[^.!?…]+[.!?…]+["»']?\s*|[^.!?…]+$/g) || [roh];
  const out = [];
  for (let s of teile) {
    s = s.trim();
    if (!s) continue;
    // Sehr lange Sätze am Komma teilen, damit keine Zeile die halbe Seite füllt.
    if (s.length > 170) {
      const st = s.split(/(?<=,)\s+/);
      let puffer = '';
      for (const t of st) {
        if ((puffer + ' ' + t).trim().length > 170 && puffer) { out.push(puffer.trim()); puffer = t; }
        else puffer = (puffer + ' ' + t).trim();
      }
      if (puffer) out.push(puffer.trim());
    } else if (out.length && s.length < 12 && !/[?!]$/.test(s)) {
      // Winzige Fetzen an den Satz davor hängen. Kurze Fragen und
      // Ausrufe bleiben eigene Zeilen — die will man beim Mitlesen sehen.
      out[out.length - 1] += ' ' + s;
    } else out.push(s);
  }
  return out;
}

// ---------------------------------------------------------------
//  Wortzeiten innerhalb eines Satzes
//
//  Der Bereich von..bis zeigt auf die Buchstaben dieses Satzes in der
//  Liste von ElevenLabs. Wir laufen ihn Wort für Wort ab: Beim ersten
//  Buchstaben eines Wortes steht die Startzeit, beim letzten die
//  Endzeit. Leerzeichen trennen.
// ---------------------------------------------------------------
function worteMitZeit(satz, zeichen, start, ende, von, bis) {
  if (!zeichen.length || von < 0 || bis < von) return [];
  const worte = [];
  let aktuell = '', wT = null, wE = null;

  for (let i = von; i <= bis && i < zeichen.length; i++) {
    const c = zeichen[i] || '';
    if (/\s/.test(c)) {
      if (aktuell) { worte.push({ x: aktuell, t: +Number(wT || 0).toFixed(2), e: +Number(wE || 0).toFixed(2) }); }
      aktuell = ''; wT = null; wE = null;
      continue;
    }
    if (!aktuell) wT = start[i];
    aktuell += c;
    wE = ende[i];
  }
  if (aktuell) worte.push({ x: aktuell, t: +Number(wT || 0).toFixed(2), e: +Number(wE || 0).toFixed(2) });

  // Nur behalten, wenn die Wörter auch zum Satz passen — sonst lieber
  // gar keine Wortzeiten als falsche.
  const ausSatz = satz.split(/\s+/).filter(Boolean).length;
  if (!worte.length || Math.abs(worte.length - ausSatz) > 2) return [];
  return worte;
}

// ---------------------------------------------------------------
//  Sätze + Buchstaben-Zeitstempel -> Mitlese-Transkript
// ---------------------------------------------------------------
function transkriptBauen(text, alignment) {
  const saetze = inSaetze(text);
  const zeichen = (alignment && alignment.characters) || [];
  const start   = (alignment && alignment.character_start_times_seconds) || [];
  const ende    = (alignment && alignment.character_end_times_seconds) || [];
  const gesamt  = ende.length ? ende[ende.length - 1] : 0;

  if (!zeichen.length) {
    // Notfall: gleichmäßig verteilen, damit das Mitlesen wenigstens grob passt.
    const proZeichen = gesamt / Math.max(1, text.length);
    let pos = 0;
    return saetze.map(x => {
      const t = pos * proZeichen; pos += x.length + 1;
      return { t: +t.toFixed(2), e: +(pos * proZeichen).toFixed(2), x };
    });
  }

  // Zeiger läuft durch die Zeichenliste von ElevenLabs und sucht
  // jeden Satz der Reihe nach. Leerzeichen werden übersprungen,
  // damit kleine Abweichungen nichts kaputt machen.
  let i = 0;
  const norm = c => (c || '').replace(/\s/g, '');
  const out = [];

  for (const satz of saetze) {
    const ziel = norm(satz);
    let gefunden = 0, von = -1, bis = -1;
    while (i < zeichen.length && gefunden < ziel.length) {
      const c = norm(zeichen[i]);
      if (c) {
        if (von === -1) von = i;
        if (c === ziel[gefunden]) gefunden++;
        else if (c === ziel[0]) gefunden = 1;
        bis = i;
      }
      i++;
    }
    const t = von >= 0 ? start[von] : (out.length ? out[out.length - 1].e : 0);
    const e = bis >= 0 ? ende[bis] : gesamt;
    out.push({
      t: +Number(t || 0).toFixed(2),
      e: +Number(e || 0).toFixed(2),
      x: satz,
      // Wortzeiten fürs Mitlesen: Beim Hören soll das Wort leuchten,
      // das gerade gesprochen wird — nicht nur der Satz. ElevenLabs
      // liefert die Zeit je Buchstabe, daraus lässt sich das genau
      // ableiten. Fällt es aus, rechnet die Seite es aus der
      // Satzdauer, dann sitzt es ungefähr statt genau.
      w: worteMitZeit(satz, zeichen, start, ende, von, bis)
    });
  }

  // Lücken schließen, damit die Zeile nicht kurz "aus" ist.
  for (let k = 0; k < out.length - 1; k++) if (out[k].e < out[k + 1].t) out[k].e = out[k + 1].t;
  if (out.length) out[out.length - 1].e = Math.max(out[out.length - 1].e, gesamt);
  return out;
}

// ---------------------------------------------------------------
//  Cover: schlicht, im Farbton des Niveaus, mit dem Titel
// ---------------------------------------------------------------
function coverSvg(level, titel, tag) {
  const [a, b] = FARBE[level] || FARBE.A2;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Titel auf höchstens drei Zeilen umbrechen.
  const w = [], zeilen = [];
  for (const wort of String(titel).split(/\s+/)) {
    if ((w.join(' ') + ' ' + wort).trim().length > 15 && w.length) { zeilen.push(w.join(' ')); w.length = 0; }
    w.push(wort);
    if (zeilen.length === 2) break;
  }
  if (w.length) zeilen.push(w.join(' '));
  const text = zeilen.slice(0, 3).map((z, i) =>
    `<text x="46" y="${372 + i * 54}" font-family="Verdana,DejaVu Sans,sans-serif" font-size="44" font-weight="700" fill="#fff">${esc(z)}</text>`
  ).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
<rect width="600" height="600" fill="url(#g)"/>
<circle cx="500" cy="120" r="150" fill="#fff" opacity=".10"/>
<text x="46" y="70" font-family="Verdana,DejaVu Sans,sans-serif" font-size="24" font-weight="700" fill="#fff" opacity=".85">deutschoderwas</text>
<rect x="42" y="104" width="118" height="62" rx="18" fill="#1A1A1A" opacity=".82"/>
<text x="101" y="147" text-anchor="middle" font-family="Verdana,DejaVu Sans,sans-serif" font-size="34" font-weight="700" fill="#fff">${esc(level)}</text>
${text}
<text x="46" y="552" font-family="Verdana,DejaVu Sans,sans-serif" font-size="21" fill="#fff" opacity=".8">${esc(tag)} · 5 Minuten Deutsch</text>
</svg>`;
}

// ---------------------------------------------------------------
//  Handler
// ---------------------------------------------------------------
export default async function handler(req, res) {
  if (!SUPA || !SERVICE) return res.status(500).json({ error: 'supabase_fehlt' });

  const geheim = process.env.CRON_SECRET;
  const erlaubt = !geheim
    || req.headers['x-vercel-cron']
    || req.headers['x-intern'] === geheim
    || (req.query && req.query.key === geheim);
  if (!erlaubt) return res.status(401).json({ error: 'nicht_erlaubt' });

  const schluessel = process.env.ELEVENLABS_API_KEY;
  if (!schluessel) return res.status(503).json({ error: 'eleven_key_fehlt', info: 'Entwürfe bleiben liegen und werden nachgeholt, sobald der Schlüssel gesetzt ist.' });
  if (!STIMME) return res.status(503).json({ error: 'stimme_fehlt', info: 'ELEVEN_VOICE_JULIA in Vercel setzen.' });

  const db = createClient(SUPA, SERVICE, { auth: { persistSession: false } });

  /* Nur nachsehen, was offen ist, ohne etwas zu tun: ?stand=1
     Ohne das merkt niemand, dass die Schlange steht. */
  if (req.query && req.query.stand) {
    const { data: offen } = await db.from('podcasts')
      .select('id,datum,level,status,fehler')
      .neq('status', 'live').order('datum', { ascending: false }).limit(50);
    return res.status(200).json({ ok: true, offen: offen || [] });
  }

  /* Ältester Entwurf zuerst — aber nur aus den letzten Tagen.
     Vorher stand hier kein Zeitfilter, und das hatte zwei Folgen:
     Ein Entwurf, der einmal nicht durchlief, stand ab da für immer
     vorn in der Schlange und blockierte alles dahinter. Und würde man
     ihn irgendwann doch abarbeiten, ginge zwei Wochen alter Inhalt
     ohne Nachfrage live. Beides will man nicht.
     Altes holt man deshalb bewusst nach: ?tage=30 */
  const tage = Math.max(1, Math.min(365, Number((req.query && req.query.tage) || 3)));
  const ab = new Date(Date.now() - tage * 86400000).toISOString().slice(0, 10);
  const nur = req.query && req.query.id;
  let q = db.from('podcasts').select('*').eq('status', 'entwurf').gte('datum', ab)
            .order('datum').order('level').limit(1);
  if (nur) q = db.from('podcasts').select('*').eq('id', nur).limit(1);
  const { data, error } = await q;
  if (error) return res.status(500).json({ error: error.message });
  if (!data || !data.length) {
    /* Ehrlich mitzählen, was älter ist als das Fenster — sonst sieht
       „nichts offen“ nach Ordnung aus, obwohl noch Entwürfe liegen. */
    const { count } = await db.from('podcasts')
      .select('id', { count: 'exact', head: true }).eq('status', 'entwurf').lt('datum', ab);
    return res.status(200).json({ ok: true, info: 'nichts offen', aeltere_entwuerfe: count || 0 });
  }

  const folge = data[0];
  const roh = (folge.transkript && folge.transkript[0] && folge.transkript[0].roh) || '';
  if (!roh) {
    await db.from('podcasts').update({ status: 'fehler', fehler: 'kein Skripttext' }).eq('id', folge.id);
    return res.status(200).json({ ok: false, id: folge.id, error: 'kein Skripttext' });
  }

  try {
    // --- Sprechen lassen, mit Zeitstempeln ---
    const r = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${STIMME}/with-timestamps?output_format=mp3_44100_128`,
      {
        method: 'POST',
        headers: { 'xi-api-key': schluessel, 'content-type': 'application/json' },
        body: JSON.stringify({
          text: roh,
          model_id: MODELL,
          voice_settings: {
            stability: 0.45,
            similarity_boost: 0.85,
            style: 0.25,
            use_speaker_boost: true,
            speed: TEMPO[folge.level] || 1.0
          }
        })
      }
    );
    if (!r.ok) throw new Error('ElevenLabs ' + r.status + ' ' + (await r.text()).slice(0, 300));
    const j = await r.json();

    const mp3 = Buffer.from(j.audio_base64, 'base64');
    const transkript = transkriptBauen(roh, j.alignment || j.normalized_alignment);
    const sek = transkript.length ? transkript[transkript.length - 1].e : 0;

    // --- MP3 hochladen ---
    const pfad = `${folge.datum}/${folge.level.toLowerCase()}.mp3`;
    const up = await db.storage.from(BUCKET).upload(pfad, mp3, { contentType: 'audio/mpeg', upsert: true });
    if (up.error) throw new Error('Upload MP3: ' + up.error.message);

    // --- Cover hochladen ---
    const tag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][new Date(folge.datum + 'T12:00:00Z').getUTCDay()];
    const cPfad = `${folge.datum}/${folge.level.toLowerCase()}.svg`;
    await db.storage.from(BUCKET).upload(cPfad, Buffer.from(coverSvg(folge.level, folge.titel, tag), 'utf8'),
      { contentType: 'image/svg+xml', upsert: true });

    const url = p => `${SUPA}/storage/v1/object/public/${BUCKET}/${p}`;

    const { error: uErr } = await db.from('podcasts').update({
      datei: url(pfad),
      bild: url(cPfad),
      transkript,
      dauer_sek: sek,
      dauer: Math.floor(sek / 60) + ':' + String(Math.round(sek % 60)).padStart(2, '0'),
      stimme: STIMME,
      status: 'live',
      fehler: null
    }).eq('id', folge.id);
    if (uErr) throw new Error('Speichern: ' + uErr.message);

    /* Nächste Folge anstoßen, ohne auf sie zu warten.
       Achtung: Der Abbruch darf nicht zu kurz sein. Bei 1,2 Sekunden
       wurde die Anfrage abgebrochen, bevor der nächste Aufruf richtig
       stand — und die Kette riss ab. Acht Sekunden reichen, um sie
       anzustoßen, und blockieren diesen Aufruf trotzdem nicht. */
    fetch(SITE + '/api/podcast-audio', {
      method: 'POST',
      headers: { 'x-intern': geheim || '' },
      signal: AbortSignal.timeout(8000)
    }).catch(() => {});

    return res.status(200).json({ ok: true, id: folge.id, dauer: Math.round(sek), saetze: transkript.length });
  } catch (err) {
    const meldung = String(err && err.message || err).slice(0, 400);
    await db.from('podcasts').update({ status: 'fehler', fehler: meldung }).eq('id', folge.id);
    return res.status(500).json({ error: meldung, id: folge.id });
  }
}
