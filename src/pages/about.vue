<template>
  <main>
    <page-header title="Sobre" description="Um pouco sobre mim"></page-header>
    <div class="container">
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
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass">
</style>
