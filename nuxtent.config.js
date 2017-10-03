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
        isPost: false
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
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? '' : 'http://localhost:3000'
  }
}
