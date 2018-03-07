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
          <skills/>
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
    h2
      margin-top 0
    p
      font-size 18px
      +above(md)
        font-size 22px

    &--title-before h2,
    &--title-after h2
      position relative
      &:before,
      &:after
        background-color #4dba87
        display block
        width 100%
        height .25rem
        vertical-align middle
        +below(md)
          margin .3125rem 0
        +above(md)
          display inline-block
          width 12.5rem
    &--title-before h2:before
      content ''
      +above(md)
        margin-right 1.875rem
    &--title-after h2:after
      content ''
      +above(md)
        margin-left 1.875rem

  &__howiam
    .aboutme__thumb
      +above(md)
        flex 0 0 25rem

  &__howiam,
  &__whatIdoToday
    +above(md)
      text-align right

  &__whatIdoToday
    +above(md)
      padding-left spacingBase
      .aboutme__thumb
        margin-right 0
        margin-left (spacingLarge * 2)
  &__thisProject
    +above(md)
      padding-right spacingBase
      .aboutme__thumb
        margin-left 0
        margin-right (spacingLarge * 2)

  &__thisProject,
  &__whatIdoToday
    +above(md)
      .aboutme__content
        flex 0 0 45%
      .aboutme__thumb
        flex 0 0 50%
  &__whatIdoToday
    .aboutme__thumb:before
      transform translate3d(-(spacingSmall/2), (spacingSmall/2), 0)
      +above(md)
        transform translate3d(-(spacingSmall), spacingSmall, 0)
  &__thisProject
    .aboutme__thumb:before
      transform translate3d((spacingSmall/2), (spacingSmall/2), 0)
      +above(md)
        transform translate3d(spacingSmall, spacingSmall, 0)

  &__howiam,
  &__imDoingNow,
  &__professionalHistory,
  &__thisProject,
  &__whatIdoToday
    section
      margin 0 auto
      width 100%
      padding spacingBase spacingSmall
      +above(sm)
        padding spacingLarge spacingBase
      +above(md)
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
      max-width 54rem
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
      +above(md)
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
    +above(md)
      padding (spacingLarge * 2) spacingBase
  h2
    margin 0 0 spacingLarge
</style>
