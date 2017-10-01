<template>
  <main>
    <div class="container">
      <h1>{{ pageTitle }}</h1>
      <p>{{ pageDescription }}</p>
      <p><nuxt-link to="/">Home page</nuxt-link></p>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription"></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      pageTitle: `About | Fernando Moreira`,
      pageDescription: `Fugiat deserunt dolore enim qui occaecat esse esse Lorem commodo nostrud cupidatat.`
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags')
  }
}
</script>

<style lang="sass">
</style>
