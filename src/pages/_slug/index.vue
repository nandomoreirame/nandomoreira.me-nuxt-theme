<template>
  <main>
    <h1>{{ post.title }}</h1>
    <nuxtent-body :body="post.body"/>
  </main>
</template>

<script>
export default {
  name: 'article',
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/posts').get(route.path)
    }
  }
}
</script>
