// Offline: the app works without internet once it has been opened.
// App files are served from the cache first and refreshed in the background.
const CACHE='bludiste-v15';
const CORE=['./','index.html','jspdf.umd.min.js','manifest.webmanifest','icon-192.png','icon-512.png'];
const MP=['selfie_segmentation.js','selfie_segmentation.binarypb','selfie_segmentation.tflite','selfie_segmentation_solution_simd_wasm_bin.js','selfie_segmentation_solution_simd_wasm_bin.wasm','selfie_segmentation_solution_simd_wasm_bin.data'].map(f=>'mediapipe/'+f);
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(async c=>{await c.addAll(CORE);try{await c.addAll(MP)}catch(err){}}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(req,{ignoreSearch:true})||(req.mode==='navigate'?await c.match('index.html'):null);
    const net=fetch(req).then(r=>{if(r.ok)c.put(req,r.clone());return r}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit}
    return (await net)||new Response('Offline',{status:503});
  }));
});
