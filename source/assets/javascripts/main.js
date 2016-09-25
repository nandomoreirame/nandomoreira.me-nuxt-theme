(function() {
  'use strict';

  var titleParallax = {
    textParallax : document.querySelector('.js-text-parallax'),

    init: function() {
      window.addEventListener("scroll", function(event) {
        titleParallax.update(this.scrollY);
      }, false);
    },
    update: function(scroll) {
      if (scroll < 500) {
        this.textParallax.style['-webkit-transform'] = 'translateY('+ (scroll * .5) +'px)';
        this.textParallax.style['-moz-transform'] = 'translateY('+ (scroll * .5) +'px)';
        this.textParallax.style['transform'] = 'translateY('+ (scroll * .5) +'px)';
        this.textParallax.style['opacity'] = (1 - ( scroll * .005 ));
      }
    }
  };

  titleParallax.init();
})();
