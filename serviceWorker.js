const staticDevCoffee = "examChamp-appswebsolutions-V2";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/engineering.jpg",
  "/images/medical.jpg",
  "/images/polytechnic.jpg",
  "/images/board.jpg",
  "/images/govtJob.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
  "https://fonts.googleapis.com/icon?family=Material+Icons"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
