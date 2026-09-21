// ZiZ CDG - Service Worker minimal
// L'app fonctionne uniquement en ligne (Supabase = cloud)
// Ce SW sert juste à rendre l'app installable (PWA)

const VERSION = 'ziz-v1';

self.addEventListener('install', (event) => {
  // Activation immédiate
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Prend le contrôle tout de suite
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Mode "network only" — on passe toujours par le réseau
  // Pas de cache pour garantir données à jour
  event.respondWith(
    fetch(event.request).catch(() => {
      // Si pas de réseau, message simple
      return new Response(
        '<html><body style="font-family:sans-serif;text-align:center;padding:40px;background:#EBF5EE;color:#0D4A2A"><h2>📡 Pas de connexion</h2><p>Cette application nécessite internet pour fonctionner.</p><p>Vérifiez votre connexion et réessayez.</p></body></html>',
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      );
    })
  );
});
