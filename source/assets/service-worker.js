////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

const staticCacheName = "vlt-cfba2efb";
const expectedCaches = [
    staticCacheName
];

////////////////////////////////////////////////////////////////////////////////////////////////////
// install /////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("install", (event) => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => cache.addAll([
                "/",
                "/cabin-400.woff2",
                "/cabin-500.woff2",
                "/cabin-700.woff2",
                "/material-icons.woff2",
                "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
                "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
                "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/pt-br.js"
            ]))
    );
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// fetch ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
self.addEventListener("fetch", (event) => {
    // const url = new URL(event.request.url);

    // if (url.origin === location.origin) {
    // 	// home or article pages
    // 	if (url.pathname === "/" || /^\/20\d\d\/[a-z0-9-]+\/$/.test(url.pathname)) {
    // 		event.respondWith(createPageStream(event.request));
    // 		return;
    // 	}
    // }

    // console.log(event);

    // cache-first for the rest
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
