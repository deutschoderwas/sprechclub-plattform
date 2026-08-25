// ============================================================
//  deutschoderwas — Live-Updates für die App
//  Die App fragt hier nach, ob es eine neuere Fassung gibt.
//  POST { platform, version_name, ... }  (vom Bauteil @capgo/capacitor-updater)
//
//  Antwort, wenn es etwas Neues gibt:
//    { "version": "1.0.4", "url": "https://…/app-pakete/1.0.4.zip", "checksum": "…" }
//  Sonst:
//    { "message": "aktuell" }
//
//  Der Stand steht in app-version.json — die schreibt das Bauskript
//  `npm run paket` im Ordner mobil/.
//
//  Wichtig: Beide Stores erlauben das ausdrücklich, solange sich der
//  Zweck der App nicht ändert (Apple-Richtlinie 3.3.2). Neue native
//  Bausteine oder Berechtigungen brauchen weiterhin eine Einreichung.
// ============================================================

export default async function handler(req, res) {
  // Die App fragt per POST, zum Nachsehen im Browser erlauben wir auch GET
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  let stand;
  try {
    const basis = process.env.VERCEL_URL
      ? 'https://' + process.env.VERCEL_URL
      : 'https://www.deutschoderwas-club.de';
    const r = await fetch(basis + '/app-version.json', { cache: 'no-store' });
    if (!r.ok) return res.status(200).json({ message: 'aktuell' });
    stand = await r.json();
  } catch (e) {
    // Im Zweifel nichts ausliefern — eine kaputte Antwort wäre schlimmer
    return res.status(200).json({ message: 'aktuell' });
  }

  const body = req.body || {};
  const plattform = String(body.platform || req.query?.platform || '').toLowerCase();
  const jetzige = String(body.version_name || req.query?.version || '0.0.0');

  // Notbremse: Wenn etwas schiefgegangen ist, in app-version.json
  // einfach "aus": true setzen — dann bekommt niemand mehr ein Update.
  if (stand.aus === true) return res.status(200).json({ message: 'aktuell' });

  // Optional nur für eine Plattform ausrollen
  if (stand.nur && plattform && stand.nur !== plattform) {
    return res.status(200).json({ message: 'aktuell' });
  }

  // Optional stufenweise ausrollen: stand.anteil = 0.2 → nur jede fünfte App
  if (typeof stand.anteil === 'number' && stand.anteil < 1) {
    const kennung = String(body.device_id || body.version_build || Math.random());
    let summe = 0;
    for (let i = 0; i < kennung.length; i++) summe = (summe * 31 + kennung.charCodeAt(i)) >>> 0;
    if ((summe % 1000) / 1000 >= stand.anteil) {
      return res.status(200).json({ message: 'aktuell' });
    }
  }

  if (!stand.version || !stand.url) return res.status(200).json({ message: 'aktuell' });
  if (vergleiche(stand.version, jetzige) <= 0) return res.status(200).json({ message: 'aktuell' });

  return res.status(200).json({
    version: String(stand.version),
    url: String(stand.url),
    checksum: stand.checksum ? String(stand.checksum) : undefined,
    session_key: stand.session_key ? String(stand.session_key) : undefined,
  });
}

// „1.0.10" ist neuer als „1.0.9" — deshalb Zahl für Zahl vergleichen
function vergleiche(a, b) {
  const x = String(a).split('.').map(n => parseInt(n, 10) || 0);
  const y = String(b).split('.').map(n => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const d = (x[i] || 0) - (y[i] || 0);
    if (d !== 0) return d > 0 ? 1 : -1;
  }
  return 0;
}
