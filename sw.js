// Service worker mínimo — existe só para o navegador permitir
// "instalar" o JARVIS PRO como app (Add to Home Screen / app de verdade).
// Não guarda nada em cache: toda mensagem sempre vai direto para o servidor.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Passagem direta — sem cache, sem modo offline.
  event.respondWith(fetch(event.request));
});
