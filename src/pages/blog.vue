<template>
  <main>
    <div class="container">
      <h1>Blog</h1>
      <ul>
        <li v-for="(post, key) in posts" :key=key>
          <article>
            <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
          </article>
        </li>
      </ul>
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
    MetaTags: () => import('~/components/MetaTags')
  }
}
</script>
