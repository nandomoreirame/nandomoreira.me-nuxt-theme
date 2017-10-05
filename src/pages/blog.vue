<template>
  <main>
    <page-header title="Blog" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="grid grid--1of2">
        <div class="grid__column" v-for="(post, key) in posts" :key="key">
          <article class="article">
            <header class="article__header">
              <h2 class="article__title">
                <nuxt-link :to="post.permalink" :title="post.title">{{ post.title }}</nuxt-link>
              </h2>
              <div class="article__meta">
                <span v-if="post.date" itemprop="datePublished" :content="post.date">Publicado em {{ post.date | moment("MMMM") }} de {{ post.date | moment("YYYY") }} </span>
                <span>por <span itemprop="author">Fernando Moreira</span></span>
              </div>
            </header>
            <p v-if="post.description" itemprop="description" class="article__description">
              <nuxt-link :title="post.title" :to="post.permalink">{{ post.description }}</nuxt-link>
            </p>
            <nuxt-link-button :title="post.title" buttonType="ghost" :buttonPermalink="post.permalink">Continue lendo</nuxt-link-button>
          </article>
        </div>
      </div>
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle"></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      pageTitle: `Blog | Fernando Moreira`,
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
    NuxtLinkButton: () => import('~/components/NuxtLinkButton')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
@import "~assets/sass/article"
.article
  +article
  text-align: center
</style>
