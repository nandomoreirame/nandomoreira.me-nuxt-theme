<template>
  <main>
    <page-header title="Blog" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="article-list">
        <post-item v-for="(post, i) in posts" :key="i" :count="i" :post="post"></post-item>
      </div>
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'blog',
  data () {
    return {
      pageTitle: `Blog | Fernando Moreira`,
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

<style lang="sass" scoped>
@import "~assets/sass/settings"
.article-list
  display: flex
  position: relative
  flex-flow: row
  flex-wrap: wrap
  margin-left: -($spacing-small)
  margin-right: -($spacing-small)
  padding: 40px 0 0
</style>
