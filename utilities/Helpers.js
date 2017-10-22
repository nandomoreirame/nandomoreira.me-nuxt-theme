export const isProd = process.env.NODE_ENV === 'production'
export const siteUrl = isProd ? 'https://nandomoreira.me' : 'http://localhost:3000'
