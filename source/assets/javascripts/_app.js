/* eslint no-use-before-define: 0  */
var app = app || {};

app = (function ($, b) {
  'use strict';

  function attrBlank () {
    var _article = document.getElementById('article');
    if (typeof _article !== 'undefined' && _article !== null) {
      var _links = _article.getElementsByTagName('a');

      for (var i = 0; i < _links.length; i++) {
        var _elem = _links[i];
        _elem.setAttribute("target", "_blank");
        _elem.setAttribute("class", "article-link article-link--external");
      }
    }
  }

  function setupDisqus () {
    var _disqus_thread = document.getElementById('disqus_thread');
    if (typeof _disqus_thread !== 'undefined' && _disqus_thread !== null) {
      var disqus_shortname = $body.data('disqus-shortname');
      var options = {
        scriptUrl: '//' + disqus_shortname + '.disqus.com/embed.js',
        laziness: 1,
        throttle: 250,
        disqusConfig: function() {
          this.page.title = $body.data('disqus-title');
          this.page.url = $body.data('disqus-url');
          this.page.identifier = $body.data('disqus-identifier');
        }
      };

      disqusLoader('#disqus_thread', options);
    }
  }

  function barba () {
    // b.Pjax.start();
    b.Pjax.init();
    b.Prefetch.init();

    b.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {
      var _response = newPageRawHTML.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', newPageRawHTML);
      var $body = $(_response).filter('notbody');
      var _bodyClasses = $body.attr('class');
      $('body').attr('class', _bodyClasses);
      attrBlank();
      setupDisqus();
    });
  }

  function init () {
    attrBlank();
    setupDisqus();
    barba();
  }

  return {
    init: init
  };
})(jQuery, Barba);

app.init();
