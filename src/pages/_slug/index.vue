<template>
  <article class="article container">
    <header>
      <h1>{{ post.title }}</h1>
    </header>
    <main>
      <nuxtent-body :body="post.body"/>
    </main>
    <comments></comments>
  </article>
</template>

<script>
export default {
  name: 'article',
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/posts').get(route.path)
    }
  },
  head () {
    return {
      title: `${this.post.title} | Fernando Moreira`
    }
  },
  components: {
    Comments: () => import('~/components/Comments')
  }
}
</script>

<style lang="sass">
.article
  .image
    display: block
    margin: 15px 0
    img
      width: 100%
      display: block
</style>
