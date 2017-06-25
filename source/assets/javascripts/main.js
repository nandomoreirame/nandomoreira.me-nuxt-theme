// = include jquery
// = include barba.min.js

(function (b) {
  'use strict';

  b.Pjax.start();
  b.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {
    var response = newPageRawHTML.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', newPageRawHTML);
    var bodyClasses = $(response).filter('notbody').attr('class');
    $('body').attr('class', bodyClasses);
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/assets/javascripts/service-worker.js')
      .then(function (registration) {
        console.info('Service Worker Registered');
      }).catch(function (e) {
        console.error('Error during service worker registration:', e);
      });
  }
})(Barba);
