// service-worker.js
const CACHE_NAME = 'Indian-Area-Units';
const CACHE_ASSETS = [
    'index.html',
    'manifest.json',
    'maskable_512.png',
    'calculator192.png',
    'calculator_512.png', // Missing comma added here
    'Screenshot_narrow.png',
    'Screenshot_wide.png' // No trailing comma needed for the last item
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching all assets');
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

// Fetch event to serve cached assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
