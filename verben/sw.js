/* Offline-Speicher für den Verben-Trainer.
   Erst die App und die Daten, dann die Bilder im Hintergrund — so ist
   die App sofort da und wird nach und nach vollstaendig offline. */
var SPEICHER = 'dow-verben-v2';
var KERN = ['./', './index.html', './verben-daten.js', './app.webmanifest'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(SPEICHER).then(function (c) { return c.addAll(KERN); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.filter(function (n) { return n !== SPEICHER; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  /* Die Marken-Schriften liegen bei Google. Ohne sie faellt die App
     offline auf die Systemschrift zurueck - dann sieht sie wieder
     aus wie jede andere. Also mitspeichern. */
  var schrift = u.host === 'fonts.googleapis.com' || u.host === 'fonts.gstatic.com';
  if (e.request.method !== 'GET' || (u.origin !== location.origin && !schrift)) return;
  e.respondWith(caches.match(e.request).then(function (treffer) {
    if (treffer) return treffer;
    return fetch(e.request).then(function (antwort) {
      if (antwort && antwort.ok) {
        var kopie = antwort.clone();
        caches.open(SPEICHER).then(function (c) { c.put(e.request, kopie); });
      }
      return antwort;
    }).catch(function () { return treffer; });
  }));
});
