<template>
  <main>
    <page-header title="Blog" :breadcrumbs="breadcrumbs" :description="pageDescription" :author="false"/>
    <div class="container">
      <div class="article-list">
        <post-item v-for="(post, i) in posts" :key="+i" :count="+i" :post="post" :class="`p${i}`"></post-item>
      </div>
      <paginate />
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
        pageDescription: `Olá, esse é o meu blog! Escrevo sobre desenvolvimento web, front-end, HTML, CSS, JavaScript, design, PHP, WordPress e outras coisas malucas.`,
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
    async asyncData ({ app, store, route }) {
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
