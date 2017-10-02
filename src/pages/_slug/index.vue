<template>
  <article class="article" itemscope itemtype="http://schema.org/NewsArticle">
    <header class="article__header">
      <div class="container">
        <h1 class="article__title" itemprop="headline">{{ post.title }}</h1>
        <p v-if="post.description" itemprop="description" class="article__description">{{ post.description }}</p>
        <div class="article__meta">
          <span v-if="post.date" itemprop="datePublished" :content="post.date">{{ post.date | moment("MMMM, YYYY") }} </span>
          <span>by <em itemprop="author">Fernando Moreira</em></span>
        </div>
        <figure v-if="post.image" class="article__image" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
          <meta itemprop="url" :content="post.image">
          <img :src="post.image" :alt="`Imagem de: ${post.title}`">
        </figure>
      </div>
    </header>
    <main itemprop="articleBody" role="main">
      <div class="container">
        <nuxtent-body :body="post.body"/>
      </div>
    </main>
    <footer class="article__footer">
      <comments :disqusTitle="post.title" :disqusIdentifier="splitIdentifier(post.permalink)" :disqusUrl="disqusUrl(post.permalink)"></comments>
    </footer>
  </article>
</template>

<script>
const { siteUrl } = require('~/utilities/Helpers')

export default {
  name: 'article',
  async asyncData ({ app, route }) {
    const data = await app.$content('/posts').get(route.path)
    return {
      post: data,
      postTitle: `${data.title} - Fernando Moreira | Front-end / UX Designer`,
      postDesc: data.description ? `${data.description}` : `${data.title} Fernando Moreira | Desenvolvedor Front-end e UX Designer em Curitiba/PR`,
      postImage: (data.image) ? `${data.image}` : `${siteUrl}/images/social.jpg`
    }
  },
  head () {
    return {
      title: `${this.postTitle}`,
      meta: [
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: `${this.postTitle}` },
        { property: 'og:site_name', content: 'nandomoreira.me' },
        { property: 'og:url', content: `${this.post.permalink}` },
        { property: 'og:image', content: `${this.postImage}` },
        { property: 'article:author', content: 'Fernando Moreira' },
        { name: 'twitter:title', content: `${this.postTitle}` },
        { name: 'twitter:description', content: `${this.postDesc}` },
        { name: 'twitter:image', content: `${this.postImage}` },
        { name: 'twitter:image:alt', content: `${this.postTitle}` }
      ]
    }
  },
  components: {
    Comments: () => import('~/components/Comments')
  },
  methods: {
    splitIdentifier: identifier =>
      identifier.slice(-1) !== '/' ? `${identifier}/` : `${identifier}`,
    disqusUrl: permalink => `${siteUrl}${permalink}`
  }
}
</script>

<style lang="sass">
.article .image
  display: block
  margin: 15px 0
  img
    width: 100%
    display: block
</style>

<style lang="sass" scoped>
@import "~assets/sass/vars"
@import "~assets/sass/mixins"
@import "~assets/sass/placeholders"
.article
  &__header
    text-align: center
    padding: 2.5rem 0
  &__title
    font-size: 2.6rem
    +media($tablet)
      font-size: 3rem
    +media($tablet-large)
      font-size: 4rem
  &__description
    font-weight: 300
    font-style: 400
    font-size: 1.25rem
  &__image
    img
      max-width: 100%
      display: block
  &__meta
    margin-bottom: 15px
    padding-bottom: 15px
    border-bottom: 1px solid #dedede
    span
      display: block
</style>
