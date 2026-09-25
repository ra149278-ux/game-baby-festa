const CACHE="merge-repro-v3-menu";
const ASSETS=["./","./index.html","./manifest.webmanifest",
"./assets/icon-192.png","./assets/icon-512.png","./assets/fundo.png","./assets/vitoria.mp4",
"./assets/ovulo.png","./assets/zigoto.png","./assets/morula.png","./assets/blastocisto.png",
"./assets/tuba.png","./assets/ovario.png","./assets/colo.png","./assets/embriao.png",
"./assets/utero.png","./assets/bebe.png","./assets/blastocisto_info.png",
"./assets/acerto.mp3","./assets/fusao.mp3","./assets/vitoria.mp3"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{let cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return resp}).catch(()=>caches.match("./index.html"))))});
