const hljs = require('highlight.js')

module.exports = {
  content: [
    [
      'posts',
      {
        page: '/_single',
        permalink: ':slug',
        generate: ['get', 'getAll'],
        isPost: true
      }
    ],
    [
      'projects',
      {
        page: '/projects/_slug',
        generate: ['getAll'],
        isPost: true
      }
    ],
    [
      'open-source',
      {
        page: '/open-source/_slug',
        generate: ['getAll'],
        isPost: true
      }
    ],
    [
      'lab',
      {
        page: '/lab/_slug',
        generate: ['getAll'],
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
