const isProd = process.env.NODE_ENV === 'production'

const baseUrl = isProd ? 'https://nandomoreira.me' : 'http://localhost:3000'

window.baseUrl = baseUrl
