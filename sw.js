/* Open Cocchia: tiene una copia del gioco sul telefono, cosi' parte anche senza rete.
   Record, livelli e partite NON stanno qui ma nel localStorage del browser: cambiare o svuotare questa copia non li tocca. */
var V = "open-cocchia-v2";
var CORE = ["./", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  /* cache "reload": la copia nuova si prende dal sito, non dalla cache HTTP del browser */
  e.waitUntil(caches.open(V).then(function (c) {
    return c.addAll(CORE.map(function (u) { return new Request(u, { cache: "reload" }); }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* salva la risposta nella copia; restituisce la promessa del salvataggio, cosi' il service worker resta sveglio finche' non ha finito */
function store(req, res) { return caches.open(V).then(function (c) { return c.put(req, res); }).catch(function () {}); }
function keep(req, res) { store(req, res.clone()); return res; }
function saved(req) { return caches.match(req, { ignoreSearch: true }).then(function (h) { return h || caches.match("./"); }); }

self.addEventListener("fetch", function (e) {
  var req = e.request; if (req.method !== "GET") return;
  var u = new URL(req.url), font = u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";
  if (u.origin !== location.origin && !font) return;
  /* i caratteri non cambiano: prima la copia salvata */
  if (font) { e.respondWith(caches.match(req).then(function (h) { return h || fetch(req).then(function (n) { return keep(req, n); }); })); return; }
  /* tutto il resto: prima la rete, cosi' gli aggiornamenti arrivano subito; se la rete manca, la copia salvata */
  if (req.mode !== "navigate") {
    var got = fetch(req);
    e.waitUntil(got.then(function (n) { return n && n.ok ? store(req, n.clone()) : null; }).catch(function () {}));
    e.respondWith(got.catch(function () { return saved(req).then(function (h) { return h || Response.error(); }); }));
    return;
  }
  /* la pagina del gioco: "no-cache" chiede sempre al sito se c'e' una versione nuova (se non c'e' risponde in pochi byte).
     Se la rete tarda piu' di 3 secondi parte la copia salvata, e intanto quella nuova si salva per la volta dopo;
     la pagina poi se ne accorge da sola e si aggiorna (vedi "aggiornamenti" in index.html).
     redirect "manual" come la navigazione vera: un eventuale rimando (indirizzo senza / finale) lo segue il browser. */
  var net = fetch(req.url, { cache: "no-cache", credentials: "same-origin", redirect: "manual" });
  e.waitUntil(net.then(function (n) { return n && n.ok ? store(req, n.clone()) : null; }).catch(function () {}));
  e.respondWith(new Promise(function (resolve) {
    var done = false;
    function give(r) { if (!done && r) { done = true; clearTimeout(t); resolve(r); } }
    var t = setTimeout(function () { saved(req).then(give); }, 3000);
    net.then(give).catch(function () { saved(req).then(function (h) { give(h || Response.error()); }); });
  }));
});
