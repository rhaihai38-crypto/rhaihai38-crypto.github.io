/* 推播用的背景執行緒。它只負責在 app 沒開著的時候接住通知。 */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
importScripts('./config.js');

if (FIREBASE_CONFIG && FIREBASE_CONFIG.projectId) {
  firebase.initializeApp(FIREBASE_CONFIG);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function (payload) {
    const n = payload.notification || {};
    self.registration.showNotification(n.title || 'OJ book', {
      body: n.body || '',
      icon: './icon-192.png',
      badge: './icon-192.png',
      tag: 'junou'
    });
  });
}

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (const c of list) { if ('focus' in c) return c.focus(); }
    if (clients.openWindow) return clients.openWindow('./');
  }));
});
