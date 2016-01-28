importScripts('cache-polyfill.js');

self.addEventListener('install', function(e) {
   e.waitUntil(
      caches.open('pwapp').then(function(cache) {
         return cache.addAll([
            '../',
            '../index.html',
            '../css/bundle.css',
            '../css/main.css',
            '../js/main.js',
            '../js/bundle.js',
            'https://api.github.com/users/florianorpeliere/starred?per_page=100'
         ]).then(function() {
            return self.skipWaiting();
         });
      })
   );
});

self.addEventListener('activate', function(event) {
   event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
   console.log(event.request.url);
   event.respondWith(
      caches.match(event.request).then(function(response) {
         return response || fetch(event.request);
      })
   );
});

/*self.addEventListener('fetch', function(event) {
event.respondWith(
caches.open('dynamic').then(function(cache) {
return cache.match(event.request).then(function (response) {
return response || fetch(event.request).then(function(response) {
cache.put(event.request, response.clone());
return response;
});
});
})
);
});*/
