// Offline cache: the app works without internet after the first visit.
const CACHE='bludiste-v4';
const FILES=['./','index.html','jspdf.umd.min.js','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();if(r.ok&&new URL(e.request.url).origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,copy));return r})
    .catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
