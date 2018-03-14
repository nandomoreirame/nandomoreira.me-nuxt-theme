<template>
  <article class="article" itemscope itemtype="http://schema.org/NewsArticle">
    <page-header :title="post.title" :description="post.description" :date="post.date" :image="post.image" :shareImage="postImage" :breadcrumbs="breadcrumbs" :author="true"/>
    <main itemprop="articleBody" role="main">
      <div class="article__body">
        <nuxtent-body :body="post.body"/>
      </div>
      <user-info/>
      <disqus :disqusTitle="post.title" :disqusIdentifier="splitIdentifier(post.permalink)" :disqusUrl="disqusUrl(post.permalink)"/>
    </main>
    <meta-tags :title="postTitle" :url="postUrl" ogType="article" :description="postDesc"/>
  </article>
</template>

<script>
  import { mapState } from 'vuex'
  import('highlight.js/styles/tomorrow-night.css')

  export default {
    name: 'SinglePost',
    async asyncData ({ app, store, route }) {
      const data = await app.$content('/posts').get(route.path)
      store.commit('SET_ARTICLE', data)
    },
    computed: {
      ...mapState({
        post: state => state.article,
        postImage: state => (state.article.image) ? `${process.env.baseUrl}${state.article.image}` : `${process.env.baseUrl}/images/social.jpg`,
        postTitle: state => state.article.title,
        postDesc: state => state.description ? `${state.article.description}` : `${state.article.title} Fernando Moreira | Desenvolvedor front-end e WordPress na Onedev.studio em Curitiba/PR`,
        postSlug: state => state.article.permalink,
        postUrl: state => `${process.env.baseUrl}${state.article.permalink}`,
        breadcrumbs: state => [
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
            url: `${state.article.permalink}`,
            title: `${state.article.title}`
          }
        ]
      })
    },
    head () {
      return {
        title: `${this.postTitle}`
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      PageHeader: () => import('~/components/PageHeader'),
      UserInfo: () => import('~/components/UserInfo'),
      Disqus: () => import('~/components/Disqus')
    },
    methods: {
      splitIdentifier: identifier =>
        identifier.slice(-1) !== '/' ? `${identifier}/` : `${identifier}`,
      disqusUrl: permalink => `${process.env.baseUrl}${permalink}`
    }
  }
</script>

<style lang="stylus" scoped>
.article
  display block
  margin 0
  padding 0
  main .container
    @extend $article
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
      max-width containerWidthSmall
      margin-left auto
      margin-right auto
    p, h2, h3, h4, h5, pre code
      padding-left spacingBase
      padding-right spacingBase
    ul, ol
      padding-left spacingLarge
  img
    height auto
    display block
    width 100%
    +above(lg)
      left 50%
      transform translate3d(-50%, 0, 0)
      width 150%
      position relative
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
