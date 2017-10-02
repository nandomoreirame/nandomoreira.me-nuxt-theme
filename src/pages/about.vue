<template>
  <main>
    <page-header title="Sobre" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
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
      pageDescription: `Fugiat deserunt dolore enim qui occaecat esse esse Lorem commodo nostrud cupidatat.`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/about',
          title: 'Sobre mim'
        }
      ]
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
