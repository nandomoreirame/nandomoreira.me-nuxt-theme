import lozad from 'lozad';

const env = (process.env.NODE_ENV === 'production');

/*
** Include Google Analytics Script
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (!env) return;

  /*
  ** Set the current page
  */
  ga('create', 'UA-52446115-1', 'auto');

  /*
  ** Every time the route changes (fired on initialization too)
  */
  app.router.afterEach((to, from) => {
    /*
    ** We tell Google Analytic to add a page view
    */
    ga('set', 'page', to.fullPath);
    ga('send', 'pageview');
  })
}

const trackEvents = e => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (!env) return;

  ga('send', 'event', {
    eventCategory: 'Link',
    eventAction: 'click',
    eventLabel: e.target.innerText
  });
}

document.addEventListener('click', e => trackEvents(e));

lozad('.lozad', {
  load: function(el) {
      el.src = el.dataset.src;
      el.onload = function() {
          el.classList.add('lozad--fade')
      }
  }
}).observe()