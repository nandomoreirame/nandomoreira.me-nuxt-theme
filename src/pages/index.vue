<template>
  <main>
    <div class="container">
      <h1>Hello!</h1>
      <ul>
        <li><nuxt-link to="/about">About page</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'home',
  head () {
    return {
      title: `Home page | Fernando Moreira`,
      meta: [
        { hid: 'description', name: 'description', content: 'Home page description' }
      ]
    }
  }
}
</script>

<style lang="sass">
</style>
