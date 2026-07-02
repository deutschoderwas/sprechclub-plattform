// deutschoderwas club — Service Worker
// Zweck: App installierbar machen (PWA). Bewusst KEIN aggressives Caching von
// HTML/API, damit Buchung, Guthaben & Material immer aktuell aus dem Netz kommen.
const VERSION = 'doc-v17';
const APP_SHELL = [
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(VERSION).then((c) => c.addAll(APP_SHELL)).catch(() => {})
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Nur statische Icons/Manifest aus Cache bedienen (offline-tauglich).
  // Alles andere (HTML, /api, Supabase, Stripe) immer frisch aus dem Netz.
  const isStatic = url.origin === self.location.origin &&
    (url.pathname.startsWith('/icons/') || url.pathname === '/manifest.webmanifest');
  if (!isStatic) return;
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(VERSION).then((c) => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => hit))
  );
});
