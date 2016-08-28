(function($) {
  'use strict';

  var $doc = $(document),
      $body = $('body'),
      $navbar = $('#navbar');

  $(function() {
    $doc.on('click', '.js-navbar-toggle', function(e) {
      e.preventDefault();
      $body.toggleClass('navbar-open');
    });
  });

  var titleParallax = {
    textParallax : document.querySelector('.js-text-parallax'),

    init: function() {
      window.addEventListener("scroll", function(event) {
        titleParallax.update(this.scrollY);
      }, false);
    },
    update: function(scroll) {
      this.textParallax.style['-webkit-transform'] = 'translateY('+ (scroll * .5) +'px)';
      this.textParallax.style['-moz-transform'] = 'translateY('+ (scroll * .5) +'px)';
      this.textParallax.style['transform'] = 'translateY('+ (scroll * .5) +'px)';
      this.textParallax.style['opacity'] = (1 - ( scroll * .005 ));
    }
  };

  titleParallax.init();

})(jQuery);


var feed = new Instafeed({
  get: 'user',
  userId: '304341723',
  accessToken: '304341723.1677ed0.f0b18c8c229540d59454f6afd802c25d',
  resolution: 'low_resolution',
  template: '<a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" width="{{width}}px" height="{{height}}px"></a>',
  limit: 30
});
// feed.run();
