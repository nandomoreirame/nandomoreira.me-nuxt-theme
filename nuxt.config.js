const { resolve } = require('path')

module.exports = {
  srcDir: 'src/',
  dev: (process.env.NODE_ENV !== 'production'),
  head: {
    title: 'Fernando Moreira',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    bodyAttrs: {
      class: 'test-class'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fernando Moreira | Front-end / UX Designer' },
      { hid: 'keyword', name: 'keyword', content: 'front-end,front,wordpress,javascript,html,css,desenvolvedor,curitiba,paraná' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/sass/main.sass', lang: 'sass' }
  ],
  loading: {
    color: '#3B8070',
    height: '3px'
  },
  plugins: [
    { src: '~/plugins/disqusLoader.js', ssr: false }
  ],
  modules: [
    'nuxtent',
    [
      '@nuxtjs/google-analytics', { ua: 'UA-52446115-1' }
    ]
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
  }
}
