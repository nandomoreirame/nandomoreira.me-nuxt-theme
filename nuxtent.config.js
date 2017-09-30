module.exports = {
  content: [
    [
      'posts',
      {
        page: '/posts/_slug',
        permalink: '/:slug',
        generate: ['get', 'getAll'],
        isPost: false
      }
    ],
    [
      'projects',
      {
        page: '/projects/_slug',
        permalink: '/projects/:slug',
        generate: ['get', 'getAll'],
        isPost: false
      }
    ]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://nandomoreira.me'
      : 'http://localhost:3000'
  }
}
