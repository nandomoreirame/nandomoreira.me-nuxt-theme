const isProduction = (process.env.NODE_ENV === 'production');
const redirPathUrl = 'https://nandomoreirame.github.io';
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
  if (!isProduction) return;
  app.router.afterEach((to, from) => {
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
