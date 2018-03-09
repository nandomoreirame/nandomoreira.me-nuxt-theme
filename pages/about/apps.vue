<template>
  <main>
    <page-header title="Apps que uso" :breadcrumbs="breadcrumbs" :description="pageDescription"></page-header>
    <div class="container--small">
      <div class="apps" v-html="apps" data-autotarget></div>
      <hr>
      <div class="about__skills">
        <h3>Habilidades</h3>
        <skills/>
      </div>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
  </main>
</template>

<script>
import apps from '~/content/pages/apps.md'

export default {
  name: 'Apps',
  data () {
    return {
      pageTitle: `Apps que uso | Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Segue uma lista de alguns apps que utilizo no meu dia a dia e considero como essenciais.`,
      pageUrl: `${process.env.baseUrl}/about/apps`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: false,
          url: '/about',
          title: 'Sobre'
        },
        {
          active: true,
          url: '/about/apps',
          title: 'Apps que uso'
        }
      ]
    }
  },
  computed: {
    apps () {
      return apps
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    Skills: () => import('~/components/Skills'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="stylus">
.avatar
  max-width 180px
  position relative
  display block
  margin-top spacingSmall
  margin-bottom spacingLarge
  line-height 1
  +above(sm)
    display inline-block
    margin-right spacingBase
    float left
  +above(md)
    max-width 280px
    margin-right spacingBase
  &:before
    content ''
    display block
    z-index 3
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    border 4px solid mintColor
    transform translate3d(-5%, -5%, 0)
    transition border-color .2s timingFunction, transform .2s timingFunction
  &:hover:before
    border-color feldgrauColor
    transform translate3d(5%, 5%, 0)
  img
    position relative
    z-index 2
    max-width 100%
    width 100%
    height auto
    display inline-block
</style>

<style lang="stylus" scoped>
.about__skills
  text-align center
</style>
