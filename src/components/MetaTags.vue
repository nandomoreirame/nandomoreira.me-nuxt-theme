<template>
  <span v-if="false"></span>
</template>

<script>
export default {
  name: 'MetaTags',
  props: {
    title: {
      type: String,
      default: 'Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR'
    },
    description: {
      type: String,
      default: 'Desenvolvedor front-end e entusiasta da experiência do usuário | Desenvolvedor Front-end em Curitiba | Desenvolvedor WordPress em Curitiba | UX Designer em Curitiba'
    },
    keywords: {
      type: String,
      default: 'front-end,front,wordpress,javascript,html,css,desenvolvedor,curitiba,paraná'
    },
    url: {
      type: String,
      default: 'https://nandomoreira.me'
    },
    image: {
      type: String,
      default: 'https://nandomoreira.me/images/social.jpg'
    },
    ogType: {
      type: String,
      default: 'profile'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: this.ogType },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'og:image', property: 'og:image', content: this.image },
        { hid: 'description', name: 'description', content: `${this.title} | ${this.description}` },
        { hid: 'keyword', name: 'keyword', content: this.keywords },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: `${this.title} | ${this.description}` },
        { hid: 'twitter:image', name: 'twitter:image', content: this.image },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.title },
        { hid: 'canonical', rel: 'canonical', href: this.url }
      ]
    }
  }
}
</script>
