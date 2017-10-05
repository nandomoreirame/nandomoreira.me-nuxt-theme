<template>
  <span v-if="false"></span>
</template>

<script>
export default {
  name: 'MetaTags',
  props: [
    'title',
    'description',
    'image'
  ],
  head () {
    const pageTitle = (this.title) ? this.title : 'Fernando Moreira | Front-end / UX Designer'
    const pageDesc = (this.description) ? this.description : 'Fernando Moreira | Desenvolvedor front-end e entusiasta da experiência do usuário | Curitiba/PR'
    const pageKeywords = (this.keywords) ? this.keywords : 'front-end,front,wordpress,javascript,html,css,desenvolvedor,curitiba,paraná'
    const pageUrl = (this.url) ? this.url : 'https://nandomoreira.me'
    const pageImage = (this.image) ? this.image : 'https://nandomoreira.me/images/social.jpg'

    return {
      title: pageTitle,
      meta: [
        { property: 'og:type', content: 'profile' },
        { property: 'og:title', content: pageTitle },
        { property: 'og:url', content: pageUrl },
        { property: 'og:image', content: pageImage },
        { name: 'description', pageDesc },
        { name: 'keyword', content: pageKeywords },
        { name: 'twitter:title', content: pageTitle },
        { name: 'twitter:description', pageDesc },
        { name: 'twitter:image', content: pageImage },
        { name: 'twitter:image:alt', content: pageTitle }
      ]
    }
  }
}
</script>
