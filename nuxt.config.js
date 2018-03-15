const axios = require('axios')
const { resolve } = require('path')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? `https://nandomoreira.me` : 'http://localhost:3000'
const baseTitle = 'Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR'
const baseDescription = 'Desenvolvedor front-end e entusiasta da experiência do usuário | Desenvolvedor Front-end em Curitiba | Desenvolvedor WordPress em Curitiba | UX Designer em Curitiba'
const baseKeywords = 'front-end, front, wordpress, javascript, html, css, desenvolvedor, curitiba, ux, uxdesigner, designer'
const imageDefault = `${baseUrl}/images/uploads/social.jpg`

module.exports = {
  dev: !isProduction,
  env: {
    isProduction,
    baseUrl,
    baseTitle,
    baseDescription,
    baseKeywords,
    imageDefault
  },
  head: {
    title: baseTitle,
    htmlAttrs: {
      dir: 'ltr',
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'theme-color', content: '#4dba87' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@oseunando' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: baseTitle },
      { name: 'generator', content: 'Visual Studio Code v1.17' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'ICBM', content: '-25.4284,-49.2733' },
      { name: 'geo.position', content: 'latitude;longitude' },
      { name: 'geo.region', content: 'pt_BR-PR' },
      { name: 'geo.placename', content: 'Curitiba/Paraná' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: `${baseUrl}/favicon-16x16.ico` },
      { rel: 'apple-touch-icon', sizes: '57x57', href: `${baseUrl}/apple-icon-57x57.png` },
      { rel: 'apple-touch-icon', sizes: '60x60', href: `${baseUrl}/apple-icon-60x60.png` },
      { rel: 'apple-touch-icon', sizes: '72x72', href: `${baseUrl}/apple-icon-72x72.png` },
      { rel: 'apple-touch-icon', sizes: '76x76', href: `${baseUrl}/apple-icon-76x76.png` },
      { rel: 'apple-touch-icon', sizes: '114x114', href: `${baseUrl}/apple-icon-114x114.png` },
      { rel: 'apple-touch-icon', sizes: '120x120', href: `${baseUrl}/apple-icon-120x120.png` },
      { rel: 'apple-touch-icon', sizes: '144x144', href: `${baseUrl}/apple-icon-144x144.png` },
      { rel: 'apple-touch-icon', sizes: '152x152', href: `${baseUrl}/apple-icon-152x152.png` },
      { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}/apple-icon-180x180.png` },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${baseUrl}/android-icon-192x192.png` },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: `${baseUrl}/favicon-96x96.png` },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}/favicon-32x32.png` },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}/favicon-16x16.png` },
      { rel: 'icon', type: 'image/x-icon', href: `${baseUrl}/favicon.ico` },
      { rel: 'author', href: `${baseUrl}/humans.txt` },
      { rel: 'me', href: `${baseUrl}/about/`, type: 'text/html' },
      { rel: 'me', href: 'mailto:nandomoreira.me@gmail.com' },
      { rel: 'me', href: 'sms:+5541984401163' },
      { rel: 'index', href: `${baseUrl}/` },
      { rel: 'archives', href: `${baseUrl}/blog/` },
      { rel: 'license', href: 'https://github.com/nandomoreirame/nandomoreira.me/blob/master/LICENSE' },
      { rel: 'dns-prefetch', href: `${baseUrl}/` },
      { rel: 'preconnect', href: `${baseUrl}/` },
      { rel: 'prefetch', href: `${baseUrl}/` },
      { rel: 'prerender', href: `${baseUrl}/` }
    ],
    script: [
      { src: (isProduction ? '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5869919cdfa51391' : ''), async: true }
    ]
  },
  manifest: {
    name: 'Fernando Moreira',
    description: baseDescription,
    theme_color: '#4dba87',
    background_color: '#4dba87',
    lang: 'pt_BR'
  },
  css: [
    { src: 'normalize.css/normalize.css', lang: 'css' },
    { src: '~stylus/index.styl', lang: 'stylus' }
  ],
  loading: { color: '#435466' },
  plugins: [
    { src: '~/plugins/browser.js', ssr: false },
    { src: '~/plugins/plugins.js', ssr: false },
    { src: '~/plugins/moment.js' }
  ],
  modules: [
    ['@nuxtjs/browserconfig', { TileColor: '#4dba87' }],
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/manifest',
    '@nuxtjs/pwa',
    'nuxtent'
  ],
  build: {
    vendor: [
      'axios',
      'moment',
      'v-tooltip',
      'vue-moment'
    ],
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          stylus: {
            use: [ require('rupture')() ],
            preferPathResolver: 'webpack',
            import: [
              '~stylus/variables.styl',
              '~stylus/mixins.styl',
              '~stylus/placeholders.styl'
            ]
          },
          context: '/'
        }
      })
    ],
    extend (config, { isDev, isClient }) {
      config.devtool = 'source-map'

      config.resolve.alias['~modules'] = resolve(__dirname, 'node_modules')
      config.resolve.alias['stylus'] = resolve(__dirname, 'stylus')

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://nandomoreira.me',
    cacheTime: 1000 * 60 * 150,
    generate: true,
    routes () {
      return axios.get('https://nandomoreira.me/_nuxt/content/posts/_all.json').then(res => {
        return res.data.map(post => post.permalink)
      })
    }
  }
}
