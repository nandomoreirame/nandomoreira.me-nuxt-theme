<template>
  <main>
    <page-header title="Sobre" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="aboutme" v-html="aboutme"></div>
      <hr>
      <h3>Entre em contato</h3>
      <social-icons iconColor="#404756"></social-icons>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription"></meta-tags>
  </main>
</template>

<script>
import aboutme from '~/content/aboutme.md'

export default {
  name: 'About',
  data () {
    return {
      pageTitle: `Sobre | Fernando Moreira`,
      pageDescription: `Hoje sou especializado em desenvolvimento web usando WordPress com foco em front-end eu sempre cuido da usabilidade e performance de um site.`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/about',
          title: 'Sobre'
        }
      ]
    }
  },
  computed: {
    aboutme () {
      return aboutme
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    SocialIcons: () => import('~/components/SocialIcons'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
@import "~assets/sass/article"
main .container
  max-width: $tablet
  +article
</style>
