const axios = require('axios')

const { resolve } = require('path')

module.exports = {
  srcDir: 'src/',
  dev: (process.env.NODE_ENV !== 'production'),
  head: {
    title: 'Fernando Moreira | Front-end / UX Designer',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    // bodyAttrs: {
    //   class: 'test-class'
    // },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'theme-color', content: '#0c59a0' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@oseunando' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon-16x16.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: 'nandomoreira.me@gmail.com' }
    ]
  },
  manifest: {
    name: 'Fernando Moreira',
    lang: 'pt_BR'
  },
  css: [
    { src: '~assets/sass/main.sass', lang: 'sass' }
  ],
  loading: {
    color: '#0c59a0',
    height: '3px'
  },
  plugins: [],
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-52446115-1' }],
    ['@nuxtjs/browserconfig', { TileColor: '#0c59a0' }],
    '@nuxtjs/sitemap',
    '@nuxtjs/optimize',
    // '@nuxtjs/manifest',
    // '@nuxtjs/workbox',
    // '@nuxtjs/icon',
    'nuxtent'
  ],
  build: {
    extend (config, ctx) {
      config.resolve.alias['~utilities'] = resolve(__dirname, 'utilities')
      if (ctx.dev && ctx.isClient) {
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
      return axios.get('http://localhost:3000/content-api')
        .then(res => res.data.map(page => page.path))
    }
  }
}
