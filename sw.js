// Minimal service worker: lets Chrome install the app with its own icon. It does not cache anything,
// so you always get the newest version of the app.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
