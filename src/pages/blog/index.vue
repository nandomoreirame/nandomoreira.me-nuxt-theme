<template>
  <main>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in posts">
        <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </main>
</template>

<script>
export default {
  name: 'blog',
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/posts').getAll()
    }
  }
}
</script>
