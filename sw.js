/* Open Cocchia: tiene una copia del gioco sul telefono, cosi' parte anche senza rete. */
var V = "open-cocchia-v1";
var CORE = ["./", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(V).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function keep(req, res) { var cp = res.clone(); caches.open(V).then(function (c) { c.put(req, cp); }); return res; }
function saved(req) { return caches.match(req, { ignoreSearch: true }).then(function (h) { return h || caches.match("./"); }); }

self.addEventListener("fetch", function (e) {
  var req = e.request; if (req.method !== "GET") return;
  var u = new URL(req.url), font = u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";
  if (u.origin !== location.origin && !font) return;
  /* i caratteri non cambiano: prima la copia salvata */
  if (font) { e.respondWith(caches.match(req).then(function (h) { return h || fetch(req).then(function (n) { return keep(req, n); }); })); return; }
  /* il gioco: prima la rete, cosi' gli aggiornamenti arrivano subito; se la rete manca o tarda piu' di 3 secondi, la copia salvata */
  e.respondWith(new Promise(function (resolve) {
    var done = false;
    function give(r) { if (!done && r) { done = true; clearTimeout(t); resolve(r); } }
    var t = setTimeout(function () { saved(req).then(give); }, 3000);
    fetch(req).then(function (n) { if (n && n.ok) keep(req, n); give(n); })
      .catch(function () { saved(req).then(function (h) { give(h || Response.error()); }); });
  }));
});
