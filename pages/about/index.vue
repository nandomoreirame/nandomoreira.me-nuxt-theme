<template>
  <main>
    <page-header title="Sobre" :breadcrumbs="breadcrumbs" :description="pageDescription"></page-header>
    <div class="aboutme">
      <div class="aboutme__section aboutme__section--title-before aboutme__howiam" v-html="howiam"></div>
      <div class="aboutme__section aboutme__professionalHistory aboutme__section--title-after" v-html="professionalHistory"></div>
      <div class="aboutme__section aboutme__whatIdoToday aboutme__section--title-before" v-html="whatIdoToday"></div>
      <div class="aboutme__section aboutme__section--title-after aboutme__section--title-before aboutme__imDoingNow" v-html="imDoingNow"></div>
      <div class="aboutme__section aboutme__thisProject aboutme__section--title-after" v-html="thisProject"></div>
      <div class="aboutme__section aboutme__skills aboutme__section--title-after aboutme__section--title-before">
        <section>
          <h2>Minhas Habilidades</h2>
          <skills></skills>
        </section>
      </div>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

import howiam from '~/content/pages/about/howiam.md'
import imDoingNow from '~/content/pages/about/im-doing-now.md'
import professionalHistory from '~/content/pages/about/professional-history.md'
import thisProject from '~/content/pages/about/this-project.md'
import whatIdoToday from '~/content/pages/about/what-ido-today.md'

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
    howiam: () => howiam,
    imDoingNow: () => imDoingNow,
    professionalHistory: () => professionalHistory,
    thisProject: () => thisProject,
    whatIdoToday: () => whatIdoToday
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    Skills: () => import('~/components/Skills'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="stylus">
.aboutme
  &__section
    @extend $clearfix
    p
      font-size 18px
      +above(sm)
        font-size 22px

    &--title-before h2,
    &--title-after h2
      position relative
      margin-top 0
      &:before,
      &:after
        background-color #4dba87
        display block
        width 100%
        height 4px
        vertical-align middle
        +above(sm)
          display inline-block
          width 200px
    &--title-before h2:before
      content ''
      +above(sm)
        margin-right 30px
    &--title-after h2:after
      content ''
      +above(sm)
        margin-left 30px

  &__howiam
    .aboutme__thumb
      +above(sm)
        flex 0 0 400px

  &__howiam,
  &__whatIdoToday
    +above(sm)
      text-align right

  &__whatIdoToday
    +above(sm)
      padding-left spacingBase
    .aboutme__thumb
      margin-right 0
      margin-left (spacingLarge * 2)
  &__thisProject
    +above(sm)
      padding-right spacingBase
    .aboutme__thumb
      margin-left 0
      margin-right (spacingLarge * 2)

  &__thisProject,
  &__whatIdoToday
    +above(sm)
      .aboutme__content
        flex 0 0 45%
      .aboutme__thumb
        flex 0 0 50%
  &__whatIdoToday
    .aboutme__thumb:before
      transform translate3d(-(spacingSmall/2), (spacingSmall/2), 0)
      +above(sm)
        transform translate3d(-(spacingSmall), spacingSmall, 0)
  &__thisProject
    .aboutme__thumb:before
      transform translate3d((spacingSmall/2), (spacingSmall/2), 0)
      +above(sm)
        transform translate3d(spacingSmall, spacingSmall, 0)

  &__howiam,
  &__imDoingNow,
  &__professionalHistory,
  &__thisProject,
  &__whatIdoToday
    section
      padding spacingLarge spacingBase
      margin 0 auto
      width 100%
      +above(sm)
        padding (spacingLarge * 2) spacingBase
        display flex
        align-items center
        justify-content space-around

  &__howiam,
  &__imDoingNow,
  &__professionalHistory
    section
      max-width containerWidth

  &__professionalHistory,
  &__imDoingNow
    background-color rgba(#fff, .6)

  &__imDoingNow
    text-align center
    p
      max-width 864px
      margin-right auto
      margin-left auto

  &__thumb
    position relative
    display block
    margin spacingSmall 0 spacingLarge
    line-height 1
    width 100%
    +above(sm)
      margin spacingSmall 0 spacingLarge spacingLarge
      display inline-block
      margin-right spacingBase
    +above(md)
      // max-width 20rem
      margin-right spacingBase
    &:before
      content ''
      display block
      z-index 1
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      background-color mintColor
      transform translate3d((spacingSmall/2), -(spacingSmall/2), 0)
      +above(sm)
        transform translate3d(spacingSmall, -(spacingSmall), 0)
    img
      position relative
      z-index 2
      max-width 100%
      width 100%
      height auto
      display inline-block
</style>

<style lang="stylus" scoped>
.aboutme__skills
  background-color rgba(#fff, .6)
  section
    max-width xlg
    text-align center
    padding spacingLarge spacingBase
    margin 0 auto
    +above(sm)
      padding (spacingLarge * 2) spacingBase
  h2
    margin 0 0 spacingLarge
</style>
