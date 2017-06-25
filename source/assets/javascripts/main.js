// = include jquery
// = include barba.min.js

(function (b) {
  b.Pjax.start();
  b.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {
    var response = newPageRawHTML.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', newPageRawHTML)
    var bodyClasses = $(response).filter('notbody').attr('class')
    $('body').attr('class', bodyClasses)
  })
})(Barba);
