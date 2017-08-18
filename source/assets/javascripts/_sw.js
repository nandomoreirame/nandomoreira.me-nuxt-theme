(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/assets/javascripts/service-worker.js')
      .then(function (registration) {
        console.info('Service Worker Registered');
      }).catch(function (e) {
        console.error('Error during service worker registration:', e);
      });
  }
})();
