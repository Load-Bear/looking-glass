// Looking Glass service worker: app shell offline, live data always from the network.
const V = 'lg-v1', SHELL = ['./', './index.html', './Looking%20Glass.html', './feeds.json', './manifest.webmanifest', './icons/icon-192.png', './three-d-stage.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).catch(() => {})); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { const u = new URL(e.request.url); if (e.request.method !== 'GET') return;
  const shell = u.origin === location.origin || /unpkg\.com\/three|fonts\.(googleapis|gstatic)\.com/.test(u.href);
  if (!shell) return; // live data: straight to network
  e.respondWith(fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); } return r; }).catch(() => caches.match(e.request))); });
