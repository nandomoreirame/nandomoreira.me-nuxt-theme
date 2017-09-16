<template>
  <div class="container">
    <div>
      <h1>About</h1>
      <p>Check the source code to see the custom meta tags added with our custom component <code>twitter-head-card</code></p>
      <twitter-head-card></twitter-head-card>
      <p><nuxt-link to="/">Home page</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import TwitterHeadCard from '~/components/twitter-head-card.vue'

export default {
  head: {
    title: 'About Page',
    meta: [
      { hid: 'description', name: 'description', content: 'About page description' }
    ]
  },
  components: {
    TwitterHeadCard
  }
}
</script>

<style lang="sass">
</style>
