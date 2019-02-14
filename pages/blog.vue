<template>
  <main>
    <page-header>
      <div slot="inner">
        <div class="container">
          <h1 class="pageHeader__title" itemprop="headline">Blog</h1>
          <breadcrumb :breadcrumbs="breadcrumbs"/>
          <p v-if="pageDescription" itemprop="description" class="pageHeader__description" v-html="pageDescription"/>
        </div>
      </div>
    </page-header>
    <div class="container">
      <div class="article-list">
        <post-item v-for="(post, i) in posts" :key="+i" :count="+i" :post="post" :class="`p${i}`"/>
      </div>
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
  </main>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'blog',
    data () {
      return {
        pageTitle: `Blog | Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
        pageDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu`,
        pageUrl: `${process.env.baseUrl}/blog`,
        breadcrumbs: [
          {
            active: false,
            url: '/',
            title: 'Home'
          },
          {
            active: true,
            url: '/blog',
            title: 'Blog'
          }
        ]
      }
    },
    async asyncData ({ app, store }) {
      if (!store.state.posts.length) {
        const posts = await app.$content('/posts').getAll()
        store.commit('SET_POSTS', posts)
      }
    },
    computed: {
      ...mapState({
        posts: state => state.posts
      })
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      PageHeader: () => import('~/components/PageHeader'),
      PostItem: () => import('~/components/PostItem'),
      LinkButton: () => import('~/components/LinkButton'),
      Breadcrumb: () => import('~/components/Breadcrumb')
    }
  }
</script>

<style lang="stylus" scoped>
.article-list
  display flex
  position relative
  flex-flow row
  flex-wrap wrap
  margin-left -(spacingSmall)
  margin-right -(spacingSmall)
  padding 40px 0 0
</style>
