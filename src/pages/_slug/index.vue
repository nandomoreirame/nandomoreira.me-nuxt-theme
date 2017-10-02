<template>
  <article class="article" itemscope itemtype="http://schema.org/NewsArticle">
    <page-header :title="post.title" :description="post.description" :date="post.date" :image="post.image" :breadcrumbs="breadcrumbs" :author="true"></page-header>
    <main itemprop="articleBody" role="main">
      <div class="container">
        <nuxtent-body :body="post.body"/>
      </div>
    </main>
    <footer class="article__footer">
      <disqus-comments :disqusTitle="post.title" :disqusIdentifier="splitIdentifier(post.permalink)" :disqusUrl="disqusUrl(post.permalink)"></disqus-comments>
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
      postImage: (data.image) ? `${data.image}` : `${siteUrl}/images/social.jpg`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: false,
          url: '/blog',
          title: 'Blog'
        },
        {
          active: true,
          url: `${data.permalink}`,
          title: `${data.title}`
        }
      ]
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
    DisqusComments: () => import('~/components/DisqusComments'),
    PageHeader: () => import('~/components/PageHeader')
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
@import "~assets/sass/settings"
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
  &__image
    img
      max-width: 100%
      display: block
</style>
