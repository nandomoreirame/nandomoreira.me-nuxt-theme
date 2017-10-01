module.exports = {
  srcDir: 'src/',
  head: {
    title: '%s - Fernando Moreira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
  plugins: [],
  modules: [
    'nuxtent',
    [
      '@nuxtjs/google-analytics', { ua: 'UA-52446115-1' }
    ]
  ],
  build: {
    extend (config, ctx) {
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
