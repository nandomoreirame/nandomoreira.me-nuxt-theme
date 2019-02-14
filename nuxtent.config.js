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
}
