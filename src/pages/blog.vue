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
              <span v-if="post.date" itemprop="datePublished" :content="post.date">Publicado em {{ post.date | moment("MMMM") }} de {{ post.date | moment("YYYY") }} </span>
              <span>por <span itemprop="author">Fernando Moreira</span></span>
            </div>
          </header>
          <p v-if="post.description" itemprop="description" class="article__description">
            <nuxt-link :title="post.title" :to="post.permalink">{{ post.description }}</nuxt-link>
          </p>
          <nuxt-link-button :title="post.title" :buttonPermalink="post.permalink">Continue lendo</nuxt-link-button>
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
    PageHeader: () => import('~/components/PageHeader'),
    NuxtLinkButton: () => import('~/components/NuxtLinkButton')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.post-list
  display: flex
  flex-flow: row wrap
  margin-left: -($spacing-small)
  margin-right: -($spacing-small)

.article
  border-radius: 3px
  background-color: #fff
  text-align: center
  box-shadow: 0 8px 20px 0 rgba(224, 224, 224, 0.5)
  padding: $spacing-small $spacing-base
  margin: 2rem 0
  flex: 1 0 1
  width: 100%
  margin: 0 $spacing-small $spacing-base
  display: inline-block
  border: 1px solid #eee
  position: relative
  @extend %clearfix
  +media($tablet)
    flex: 1 0 ($container-width/2)-60px
  &__description a
    color: $text-color
    text-decoration: none
  &__meta
    text-transform: uppercase
    opacity: .65
    letter-spacing: .1em
    font-size: .8rem
    padding-top: $spacing-small
    padding-bottom: $spacing-small
  &__title
    font-size: 2rem
    margin-top: .2em
    margin-bottom: .2em
</style>
