////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

let static_cache_name = "vlt-cfba2efb";
// let expected_caches = [ static_cache_name ];

////////////////////////////////////////////////////////////////////////////////////////////////////
// install /////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(precache());
});

let precache = () => {
    caches.open(static_cache_name).then((cache) => cache.addAll([
        "/",
        "/cabin-400.woff2",
        "/cabin-500.woff2",
        "/cabin-700.woff2",
        "/material-icons.woff2",
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/pt-br.js"
    ]));
};


////////////////////////////////////////////////////////////////////////////////////////////////////
// fetch ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("fetch", (event) => {
    let url = new URL(event.request.url);

    if (url.hostname !== "emitremmus.com") {
        event.respondWith(fromCache(event.request));

        if (url.hostname === "vltcarioca.web.app" && event.request.destination !== "font") {
            event.waitUntil(update(event.request));
        }
    }
});

let fromCache = (request) => {
    return caches.match(request).then((response) => response || fetch(request))
};

let update = (request) => {
    return caches.open(static_cache_name).then((cache) => {
        return fetch(request).then((response) => {
            return cache.put(request, response);
        });
    });
};
