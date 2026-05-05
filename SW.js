const CACHE_NAME = 'bs-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  'https://github.com/bt0501/BS/blob/main/icob.png?raw=true'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});