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
            <span v-if="post.date" itemprop="datePublished" :content="post.date">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <strong>Publicado em {{ post.date | moment("MMMM") }} de {{ post.date | moment("YYYY") }}</strong>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <strong>por <span itemprop="author">Fernando Moreira</span></strong>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              <strong class="disqus-comment-count" :data-disqus-identifier="splitIdentifier(post.permalink)">Carregando comentários...</strong>
            </span>
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
      splitIdentifier: i => i.slice(-1) !== '/' ? `${i}/` : `${i}`,
      disqusUrl: link => `${process.env.baseUrl}${link}`
    },
    mounted () {
      const video = document.querySelector('[data-video]')
      if (null !== video) {
        video.addEventListener('click', e => {
          e.preventDefault()
          const videoID = e.currentTarget.getAttribute('data-video-id')
          this.$store.commit('SET_VIDEO', videoID)
          this.$store.commit('TOGGLE_MODAL', true)
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
  blockquote, pre, ul, ol
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
