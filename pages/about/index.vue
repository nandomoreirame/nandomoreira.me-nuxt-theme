<template>
  <main>
    <page-header title="Sobre" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="aboutme" v-html="aboutme" data-autotarget></div>
      <hr>
      <h3>Entre em contato</h3>
      <social-icons iconColor="#435466"></social-icons>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import aboutme from '~/content/pages/about.md'
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'About',
  data () {
    return {
      pageTitle: `Sobre | Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Hoje sou especializado em desenvolvimento web usando WordPress com foco em front-end eu sempre cuido da usabilidade e performance de um site.`,
      pageUrl: `${siteUrl}/about`,
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

<style lang="stylus">
.avatar
  width 280px
  float left
  display inline-block
  position relative
  margin-right $spacing-large
  line-height 1
  &:before
    content ''
    display block
    z-index 1
    position absolute
    width 100%
    height 100%
    top 15px
    left 15px
    background-color rgba($feldgrau-color, .9)
  img
    position relative
    z-index 2
    max-width 100%
    width 100%
    height auto
    display inline-block
</style>

<style lang="stylus" scoped>
main .container
  max-width $tablet
  article()
</style>
