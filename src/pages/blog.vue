<template>
  <main>
    <page-header title="Blog"></page-header>
    <div class="container">
      <div class="post-list">
        <article class="article" v-for="(post, key) in posts" :key="key">
          <header class="article__header">
            <h2 class="article__title">
              <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
            </h2>
            <div class="article__meta">
              <span v-if="post.date" itemprop="datePublished" :content="post.date">{{ post.date | moment("MMMM, YYYY") }} </span>
              <span>by <span itemprop="author">Fernando Moreira</span></span>
            </div>
          </header>
          <p v-if="post.description" itemprop="description" class="article__description">
            {{ post.description }}
            <nuxt-link :to="post.permalink">Read More</nuxt-link>
          </p>
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
      pageDescription: 'Blog description'
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
.post-list
  max-width: 600px
  margin-right: auto
  margin-left: auto

.article
  padding-top: 1rem
  padding-bottom: 1rem
  margin-bottom: 1rem
  &__meta
    text-transform: uppercase
    letter-spacing: .1em
    font-size: .875rem
    padding-top: 1rem
    padding-bottom: 1rem
  &__title
    font-size: 2rem
    margin-top: .2em
    margin-bottom: .2em
</style>
