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
            '../js/bundle.js'
         ]);
      })
   );
});

self.addEventListener('fetch', function(event) {
   console.log(event.request.url);
   event.respondWith(
       caches.open('github').then(function(cache) {
         return cache.match(event.request).then(function (response) {
           return response || fetch(event.request).then(function(response) {
             cache.put(event.request, response.clone());
             return response;
           });
         });
       })
   );
});
