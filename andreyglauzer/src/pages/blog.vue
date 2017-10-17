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
            <div class="article__button">
              <nuxt-link-button :title="post.title" buttonType="ghost" :buttonPermalink="post.permalink">Continue lendo</nuxt-link-button>
            </div>
            <figure class="article__image" v-if="post.image">
              <img :src="post.image" :alt="`imagem de ${post.title}`">
            </figure>
          </article>
        </div>
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
  position: relative
  overflow: hidden
  &__button
    display: inline-block
    margin: 0 auto
  &__title,
  &__meta,
  &__button,
  &__description
    position: relative
    z-index: 2
  &__button:hover ~ .article__image
    display: block
  &__image
    display: none
    position: absolute
    top: 0
    left: 0
    width: 100%
    opacity: 0.2
    z-index: 1
    img
      width: 150%
      height: auto
      display: block
</style>
