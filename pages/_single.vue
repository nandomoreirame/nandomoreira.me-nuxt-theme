<template>
  <article class="Single" itemscope itemtype="http://schema.org/NewsArticle">
    <page-header :image="post.image">
      <div slot="inner">
        <figure v-if="post.image" class="pageHeader__image" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
          <meta itemprop="url" :content="post.image">
          <img v-if="post.image" :src="post.image" :alt="`Imagem de: ${post.title}`">
        </figure>
        <div v-if="post.title" class="container">
          <h1 class="pageHeader__title" itemprop="headline" v-html="post.title"/>
          <breadcrumb :breadcrumbs="breadcrumbs"/>
          <p v-if="post.description" itemprop="description" class="pageHeader__description" v-html="post.description"/>
          <div class="pageHeader__meta">
            <span v-if="post.date" itemprop="datePublished" :content="post.date">Publicado em {{ post.date | moment("MMMM") }} de {{ post.date | moment("YYYY") }} </span>
            <span v-if="post.author">por <span itemprop="author">Fernando Moreira</span></span>
          </div>
        </div>
      </div>
    </page-header>

    <main itemprop="articleBody" role="main">
      <div class="Single__body" v-html="post.body"/>
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
        postImage: state => (state.article.image) ? `${process.env.baseUrl}${state.article.image}` : state.imageDefault,
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
      Disqus: () => import('~/components/Disqus'),
      Breadcrumb: () => import('~/components/Breadcrumb')
    },
    methods: {
      splitIdentifier: identifier =>
        identifier.slice(-1) !== '/' ? `${identifier}/` : `${identifier}`,
      disqusUrl: permalink => `${process.env.baseUrl}${permalink}`
    },
    mounted () {
      const video = document.querySelector('[data-video]')
      if (null !== video) {
        video.addEventListener('click', e => {
          e.preventDefault()
          const videoID = e.currentTarget.getAttribute('data-video-id')
          this.$store.commit('SET_VIDEO', videoID)
        })
      }
    }
  }
</script>

<style lang="stylus">
.Single
  display block
  margin 0
  padding 0
  main
    .container
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

.Single__body
  p, h2, h3, h4, h5, figure,
  blockquote, pre code, ul, ol
    display block
    max-width containerWidthSmall
    margin-left auto
    margin-right auto
  p, h2, h3, h4, h5, pre code
    padding-left spacingBase
    padding-right spacingBase
  ul, ol
    padding-left spacingLarge
  img
    display block
    margin 0 auto spacingMini
  figure
    margin-bottom spacingSmall
  figure, p
    img
      height auto
      width 100%
    +above(md)
      img
        left 50%
        transform translate3d(-50%, 0, 0)
        width 150%
        position relative
  pre
    background baseColor
    color silverColor
    overflow-x auto
    margin-bottom spacingBase
    code
      background baseColor
      padding-top spacingMini
      padding-bottom spacingMini
</style>
