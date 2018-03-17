const isProduction = (process.env.NODE_ENV === 'production');

/*
** Include Google Analytics Script
*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

const redirPathUrl = 'https://nandomoreirame.github.io'
const arrPages = [
  'dotX',
  'lora',
  'lorem-gemidao-do-zap-ipsum',
  'end2end',
  'mix-buttons',
  'mug',
  'nandomoreira-jekyll-theme',
  'simplest',
  'zetsu',
  'middleman-blog',
  'chucknorris-jokes',
  'wololooooo',
  'simplegallery',
  'signature',
  'chef',
  'stormipsum',
  'bs4-grid',
  'gridfy',
  'hexo-blog',
  'jekyll-powerful',
  'bs4-alpha-login',
  'fmc-simple-modal',
  'Kanban-Projects',
  'menu-dropdown',
  'jogo-de-dados-canvas-html5',
  'canvas_menino',
  'bandeira-do-brasil',
  'simple.parallax',
  'uikit',
  'scrolltoo',
  'faisca-css',
  'projeto-final-web',
  'exemplos'
];

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (!isProduction) return;

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

    if (arrPages.includes(to.path.replace(/\//g,''))) {
      window.location = `${redirPathUrl}${to.path}`;
    }
  });
}

(function () {
  const disqusReset = document.createElement('script')

  disqusReset.async = true
  disqusReset.id = 'dsq-count-scr-reset'
  disqusReset.innerHTML = `DISQUSWIDGETS.getCount({ reset: true });`

  setTimeout(() => {
    document.getElementsByTagName('BODY')[0].appendChild(disqusReset)
  }, 1000);
}());
