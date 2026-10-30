const CACHE_NAME = "shadrach-portfolio-v3";
const APP_SHELL = ["/", "/offline.html", "/manifest.webmanifest", "/logo.webp", "/portfolio-preview.webp"];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);

    // Save the built entry files and their local media on the first online visit.
    const html = await (await cache.match("/")).text();
    const entries = [...html.matchAll(/(?:src|href)=["']([^"']+\.(?:m?js|css))(?:\?[^"']*)?["']/g)].map((match) => new URL(match[1], self.location.origin).href);
    const loaded = await Promise.all(entries.map(async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) return "";
        await cache.put(url, response.clone());
        return await response.text();
      } catch { return ""; }
    }));
    const media = new Set();
    for (const source of loaded) {
      for (const match of source.matchAll(/(?:\/assets\/)[^"'\s)]+\.(?:webp|png|jpe?g|svg|woff2?)/g)) {
        media.add(new URL(match[0], self.location.origin).href);
      }
      for (const match of source.matchAll(/url\(["']?(\/assets\/[^)"']+)["']?\)/g)) {
        media.add(new URL(match[1], self.location.origin).href);
      }
    }
    await Promise.all([...media].map((url) => cache.add(url).catch(() => undefined)));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("shadrach-portfolio-") && key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    if (request.mode === "navigate") {
      try {
        const response = await fetch(request);
        if (response.ok) await (await caches.open(CACHE_NAME)).put("/", response.clone());
        else return (await caches.match("/")) || response;
        return response;
      } catch {
        return (await caches.match(request)) || (await caches.match("/")) || (await caches.match("/offline.html"));
      }
    }
    const cached = await caches.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok && response.type === "basic") await (await caches.open(CACHE_NAME)).put(request, response.clone());
    return response;
  })());
});
