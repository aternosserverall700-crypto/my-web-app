const cacheName = 'belrhazi-v2';
const assets = [
  './',
  './index.html',
  'https://cdn.tailwindcss.com' // هادي ضرورية باش الألوان والتصميم يبقاو خدامين بلا انترنيت
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
