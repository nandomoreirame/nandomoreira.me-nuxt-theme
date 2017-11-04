<template>
  <article class="article" itemscope itemtype="http://schema.org/NewsArticle">
    <page-header :title="post.title" :description="post.description" :date="post.date" :image="post.image" :shareImage="postImage" :breadcrumbs="breadcrumbs" :author="true"></page-header>
    <main itemprop="articleBody" role="main">
      <div class="article__body">
        <nuxtent-body :body="post.body"></nuxtent-body>
      </div>
      <disqus :disqusTitle="post.title" :disqusIdentifier="splitIdentifier(post.permalink)" :disqusUrl="disqusUrl(post.permalink)"></disqus>
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

<style lang="stylus" scoped>
.article
  display block
  margin 0
  padding 0
  main .container
    article()
    max-width lg
    border none
    border-bottom borderBase
    +below(md)
      padding 0 spacingSmall spacingBase
      background transparent none
      box-shadow none
      &:last-child
        padding-top spacingBase
        border-bottom none
</style>

<style lang="stylus">
.article
  &__body
    p, h2, h3, h4, h5,
    blockquote, pre code, ul, ol
      max-width lg
      margin-left auto
      margin-right auto
    p, h2, h3, h4, h5, pre code
      padding-left spacingBase
      padding-right spacingBase
    ul, ol
      padding-left spacingLarge
  img
    width 100%
    height auto
    display block
  pre
    background feldgrauColor
    color honeydewColor
    overflow-x auto
    margin-bottom spacingBase
    code
      background feldgrauColor
      padding-top spacingSmall
      padding-bottom spacingSmall
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
