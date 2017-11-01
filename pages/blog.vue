<template>
  <main>
    <page-header title="Blog" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="article-list">
        <post-item v-for="(post, i) in posts" :key="i" :count="i" :post="post"></post-item>
      </div>
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
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/posts').getAll()
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader'),
    PostItem: () => import('~/components/PostItem'),
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
