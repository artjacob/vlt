////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

const static_cache_name = "vlt-cfba2efb";

////////////////////////////////////////////////////////////////////////////////////////////////////
// install /////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil(precache());
});

const precache = () => {
    caches.open(static_cache_name).then((cache) => cache.addAll([
        "/",
        "/manifest.json",
        "/cabin-400.woff2",
        "/cabin-500.woff2",
        "/cabin-700.woff2",
        "/material-icons.woff2",
        "/icon.png",
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
		"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/pt-br.js",
		"https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/es.js"
    ]));
};

////////////////////////////////////////////////////////////////////////////////////////////////////
// fetch ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    if (url.hostname !== "cloudfunctions.net") {
        event.respondWith(fromCache(event.request));

        if (url.hostname === "vltcarioca.web.app" && event.request.destination !== "font") {
            event.waitUntil(update(event.request));
        }
    }
});

const fromCache = (request) => {
    return caches.match(request).then((response) => response || fetch(request))
};

const update = (request) => {
    return caches.open(static_cache_name).then((cache) => {
        return fetch(request).then((response) => {
            return cache.put(request, response);
        });
    });
};
