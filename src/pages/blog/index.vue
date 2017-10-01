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
  </main>
</template>

<script>
export default {
  name: 'blog',
  head () {
    return {
      title: `Blog | Fernando Moreira`,
      meta: [
        { hid: 'description', name: 'description', content: 'Blog description' }
      ]
    }
  },
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/posts').getAll()
    }
  }
}
</script>
