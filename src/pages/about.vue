<template>
  <main>
    <div class="container">
      <h1>About</h1>
      <p>Check the source code to see the custom meta tags added with our custom component <code>twitter-head-card</code></p>
      <p><nuxt-link to="/">Home page</nuxt-link></p>
    </div>
  </main>
</template>

<script>
export default {
  head: {
    title: 'About Page',
    meta: [
      { hid: 'description', name: 'description', content: 'About page description' }
    ]
  }
}
</script>

<style lang="sass">
</style>
