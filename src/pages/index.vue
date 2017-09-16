<template>
  <section class="container">
    <div>
      <h1 class="red">Hello {{ name }}!</h1>
      <nuxt-link to="/about">About page</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return { name: 'world' }
  },
  head: {
    title: 'Home page',
    meta: [
      { hid: 'description', name: 'description', content: 'Home page description' }
    ]
  }
}
</script>

<style lang="sass">
.red
  color: #f00
</style>
