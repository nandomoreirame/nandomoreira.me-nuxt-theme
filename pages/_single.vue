<template>
  <article class="article" itemscope itemtype="http://schema.org/NewsArticle">
    <page-header :title="post.title" :description="post.description" :date="post.date" :image="post.image" :shareImage="postImage" :breadcrumbs="breadcrumbs" :author="true"></page-header>
    <main itemprop="articleBody" role="main">
      <div class="container">
        <nuxtent-body :body="post.body"></nuxtent-body>
      </div>
      <aside class="container">
        <disqus :disqusTitle="post.title" :disqusIdentifier="splitIdentifier(post.permalink)" :disqusUrl="disqusUrl(post.permalink)"></disqus>
      </aside>
    </main>
    <meta-tags :title="postTitle" :url="postUrl" ogType="article"></meta-tags>
  </article>
</template>

<script>
const { siteUrl } = require('~/utilities/Helpers')

export default {
  name: 'SinglePost',
  async asyncData ({ app, route }) {
    const data = await app.$content('/posts').get(route.path)
    return {
      post: data,
      postTitle: `${data.title} - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      postDesc: data.description ? `${data.description}` : `${data.title} Fernando Moreira | Desenvolvedor front-end e WordPress na Onedev Studio em Curitiba/PR`,
      postImage: (data.image) ? `${siteUrl}${data.image}` : `${siteUrl}/images/social.jpg`,
      postUrl: `${siteUrl}${data.permalink}`,
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
      title: `${this.postTitle}`
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader'),
    Disqus: () => import('~/components/Disqus')
  },
  methods: {
    splitIdentifier: identifier =>
      identifier.slice(-1) !== '/' ? `${identifier}/` : `${identifier}`,
    disqusUrl: permalink => `${siteUrl}${permalink}`
  }
}
</script>

<style lang="stylus">
.article
  display block
  margin 0
  main .container
    max-width $tablet
    article()
  img
    width 100%
    display block
  pre
    background #232e23
    color honeydewColor
    overflow-x auto
    margin-bottom spacingBase
    code
      background #232e23
  .video
    position relative
    padding-bottom 56.25%
    padding-top 25px
    height 0
    margin-bottom spacingBase
    iframe,
    object,
    embed
      position absolute
      top 0
      left 0
      width 100%
      height 100%
</style>
