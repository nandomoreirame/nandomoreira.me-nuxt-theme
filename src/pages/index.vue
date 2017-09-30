<template>
  <section class="container">
    <div>
      <h1>Hello!</h1>
      <nuxt-link to="/about">About page</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  head: {
    title: 'Home page',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ]
  }
}
</script>

<style lang="sass">
</style>
