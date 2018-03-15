<template>
  <span v-if="false"></span>
</template>

<script>
export default {
  name: 'MetaTags',
  props: {
    title: {
      type: String,
      default: process.env.baseTitle
    },
    description: {
      type: String,
      default: process.env.baseDescription
    },
    keywords: {
      type: String,
      default: process.env.baseKeywords
    },
    url: {
      type: String,
      default: process.env.baseUrl
    },
    image: {
      type: String,
      default: process.env.imageDefault
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
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'keyword', name: 'keyword', content: this.keywords },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.image },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.title },
        { hid: 'canonical', rel: 'canonical', href: this.url }
      ]
    }
  }
}
</script>
