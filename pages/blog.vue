<template>
  <main>
    <page-header title="Blog" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="article-list">
        <post-item v-for="(post, i) in paginatePosts(posts, page)" :key="+i" :count="+i" :post="post" :class="`p${i}`"></post-item>
      </div>
      <paginate />
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'blog',
  data () {
    return {
      pageTitle: `Blog | Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Olá, esse é o meu blog! Escrevo sobre desenvolvimento web, front-end, HTML, CSS, JavaScript, design, PHP, WordPress e outras coisas malucas.`,
      pageUrl: `${siteUrl}/blog`,
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
  async asyncData ({ app, route }) {
    const posts = await app.$content('/posts').getAll()
    return {
      page: route.query.page || 1,
      posts
    }
  },
  methods: {
    paginatePosts (posts, currentPage = 1, pageSize = 12) {
      --currentPage
      let newPosts = {}
      let index = (currentPage === 0) ? currentPage : (currentPage * pageSize)
      for (let i = index; i < ((currentPage + 1) * pageSize); i++) {
        if (typeof posts[i] !== 'undefined') {
          newPosts[i] = posts[i]
        }
      }

      return newPosts
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader'),
    PostItem: () => import('~/components/PostItem'),
    Paginate: () => import('~/components/Paginate'),
    LinkButton: () => import('~/components/LinkButton')
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
