const CACHE_NAME = "jmp-harmonics-v12";
const FILES = [
  "./",
  "index.html",
  "manifest.json",
  "jmp-logo.png",
  "icon-192.png",
  "icon-512.png",
  "tuner-measure-info.png",
  "tube-measure-info.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
