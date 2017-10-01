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
    <meta-tags></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'home',
  components: {
    MetaTags: () => import('~/components/MetaTags')
  }
}
</script>

<style lang="sass">
</style>
