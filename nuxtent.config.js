const hljs = require('highlight.js')

module.exports = {
  content: [
    [
      'posts',
      {
        page: '/posts/_slug',
        permalink: '/:slug',
        generate: ['get', 'getAll'],
        isPost: true
      }
    ],
    [
      'projects',
      {
        page: '/projects/_slug',
        permalink: '/project/:slug',
        generate: ['get', 'getAll'],
        isPost: true
      }
    ],
    [
      'lab',
      {
        page: '/lab/_slug',
        permalink: '/experiment/:slug',
        generate: ['get', 'getAll'],
        isPost: false
      }
    ]
  ],
  parsers: {
    md: {
      highlight: (code, lang) => {
        if (!(lang && hljs.getLanguage(lang))) return
        return hljs.highlight(lang, code, true).value
      }
    }
  }
  // api: {
  //   baseURL: process.env.NODE_ENV === 'production'
  //     ? '' : 'http://localhost:3000'
  // }
}
