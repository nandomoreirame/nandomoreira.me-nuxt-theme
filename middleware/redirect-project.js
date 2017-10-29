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
]

export default function ({ route }) {
  console.log(route)
  console.log(route.path)
  if (arrPages.includes(route.path.replace(/\//g, ''))) {
    window.location = `${redirPathUrl}${route.path}`
  }
}
