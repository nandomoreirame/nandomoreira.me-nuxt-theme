(function($) {
  'use strict';

  var $body = $('body'),
      $doc  = $(document);

  $doc.on('click', '[data-toggle="nav"], .nav-opened .site-main', function(e) {
    e.preventDefault();
    $body.toggleClass('nav-opened');
  });

  $doc.on('click', '[data-toggle="search"]', function(e) {
    e.preventDefault();
    $body.toggleClass('search-opened');
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

$(function() {
  var $results = $('.search__results'),
      $input = $('.search__input'),
      search_term;

  $input.on('keypress', function() {
    search_term = $(this).val().toLowerCase();
    return $.getJSON('/search.json', function(data) {
      var i, j, k, len, len1, result, results, results1, value;
      results = [];
      $results.html('');

      for (j = 0, len = data.length; j < len; j++) {
        i = data[j];
        value = 0;
        if (i.title.toLowerCase().split(search_term).length - 1 !== 0) {
          value = 10;
        }
        if (value !== 0) {
          i.value = value;
          results.push(i);
        }
      }

      if (results.length > 0) {
        results1 = [];
        for (k = 0, len1 = results.length; k < len1; k++) {
          result = results[k];
          results1.push($results.append('<li><a href="' + result.url + '" title="' + result.title + '">' + result.title + '</a></li>'));
        }
        return results1;
      } else {
        $results.append('<li>No results found. Sorry.</li>');
      }
    });
  });
});
