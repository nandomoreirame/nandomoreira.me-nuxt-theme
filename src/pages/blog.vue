<template>
  <main>
    <page-header title="Blog" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="post-list">
        <article class="article" v-for="(post, key) in posts" :key="key">
          <header class="article__header">
            <h2 class="article__title">
              <nuxt-link :to="post.permalink" :title="post.title">{{ post.title }}</nuxt-link>
            </h2>
            <div class="article__meta">
              <span v-if="post.date" itemprop="datePublished" :content="post.date">{{ post.date | moment("MMMM, YYYY") }} </span>
              <span>by <span itemprop="author">Fernando Moreira</span></span>
            </div>
          </header>
          <p v-if="post.description" itemprop="description" class="article__description">
            <nuxt-link :title="post.title" :to="post.permalink">{{ post.description }}</nuxt-link>
          </p>
          <nuxt-link class="article__readmore" :title="post.title" :to="post.permalink">Continue lendo...</nuxt-link>
        </article>
      </div>
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription"></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      pageTitle: `Blog | Fernando Moreira`,
      pageDescription: 'Blog description',
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
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.post-list
  max-width: 32rem
  margin-right: auto
  margin-left: auto
.article
  border-radius: 3px
  background-color: #fff
  text-align: center
  box-shadow: 0 8px 20px 0 rgba(224, 224, 224, 0.5)
  padding: 1rem 1.6rem
  margin: 2rem 0
  @extend %clearfix
  &__description a
    color: $color-base
    text-decoration: none
  &__meta
    text-transform: uppercase
    opacity: .65
    letter-spacing: .1em
    font-size: .8rem
    padding-top: 1rem
    padding-bottom: 1rem
  &__title
    font-size: 2rem
    margin-top: .2em
    margin-bottom: .2em
  &__readmore
    @extend %button
    color: $color-primary
    background-color: #fff
    box-shadow: 0 8px 20px 0 rgba(224, 224, 224, .5)
    border: 3px solid $color-primary
    &:hover,
    &:focus
      background-color: $color-primary
      color: #fff
</style>
