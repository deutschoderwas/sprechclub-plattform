// deutschoderwas club — Service Worker
// Zweck: App installierbar und offline nutzbar machen.
// Wichtig: KEIN Caching von Buchung, Guthaben, Material oder API —
// das muss immer frisch aus dem Netz kommen.
const VERSION = 'doc-v50';

// Die App selbst und ihre Daten dürfen offline liegen.
const APP_SHELL = [
  '/app.html',
  '/app.webmanifest',
  '/config.js',
  '/dialoge.js',
  '/pruefung.js',
  '/vokabeln-pool.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
  '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(VERSION).then((c) =>
      // einzeln, damit eine fehlende Datei nicht alles verhindert
      Promise.all(APP_SHELL.map((u) => c.add(u).catch(() => {})))
    )
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Was darf aus dem Zwischenspeicher kommen?
function darfInDenSpeicher(url) {
  if (url.origin !== self.location.origin) return false;
  const p = url.pathname;
  if (p.startsWith('/api/')) return false;          // nie: Server-Funktionen
  return p === '/app.html'
      || p === '/app.webmanifest'
      || p === '/manifest.webmanifest'
      || p.startsWith('/icons/')
      || p.startsWith('/vok-tr/')
      || p.startsWith('/vok-bild/')
      || p === '/vokabeln-pool.js'
      || p === '/dialoge.js'
      || p === '/pruefung.js'
      || p === '/mundbild.js'
      || p === '/config.js';
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }

  // Seitenaufrufe: erst Netz, bei Ausfall die App aus dem Speicher.
  // So sieht niemand eine Fehlerseite, wenn die Bahn durch den Tunnel fährt.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(() =>
        caches.match('/app.html').then((hit) => hit || new Response(
          '<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">'
          + '<meta name="viewport" content="width=device-width,initial-scale=1">'
          + '<title>Keine Verbindung</title><style>body{margin:0;display:flex;align-items:center;'
          + 'justify-content:center;height:100vh;background:#FBF9F5;font-family:system-ui,sans-serif;'
          + 'text-align:center;padding:24px;color:#171717}p{color:#6E6A63;line-height:1.6}</style></head>'
          + '<body><div><div style="font-size:52px">📡</div>'
          + '<h1 style="font-size:22px;margin:12px 0 8px">Keine Verbindung</h1>'
          + '<p>Sobald du wieder online bist, geht es weiter.</p></div></body></html>',
          { headers: { 'content-type': 'text/html; charset=utf-8' }, status: 200 }
        ))
      )
    );
    return;
  }

  if (!darfInDenSpeicher(url)) return;

  // Erst aus dem Speicher (schnell), im Hintergrund auffrischen.
  e.respondWith(
    caches.match(req).then((hit) => {
      const frisch = fetch(req).then((res) => {
        if (res && res.status === 200) {
          const kopie = res.clone();
          caches.open(VERSION).then((c) => c.put(req, kopie)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
      return hit || frisch;
    })
  );
});

// Nachrichten aus der App — z.B. „lade dich neu"
self.addEventListener('message', (e) => {
  if (e.data === 'neu-laden') self.skipWaiting();
});
