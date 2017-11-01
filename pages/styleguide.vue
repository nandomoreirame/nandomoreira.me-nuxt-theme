<template>
  <main>
    <page-header title="Styleguide" :breadcrumbs="breadcrumbs"></page-header>
    <div class="styleguide container">
      <section class="styleguide__section">
        <h2>Primary colors</h2>
        <span class="styleguide__color" v-for="color in colors.primary" :key="color" v-bind:class="`bgcolor--${color} styleguide__color--${color}`"></span>
        <h2>Gray colors</h2>
        <span class="styleguide__color" v-for="color in colors.grays" :key="color" v-bind:class="`bgcolor--${color} styleguide__color--${color}`"></span>
      </section>
      <section class="styleguide__section">
        <h2>Typography</h2>
        <div class="typography">
          <div class="typography__fonts typography__fonts--suez">
            <h2>AaBb</h2>
            <span>
              <span>Suez One</span>
              <span> - </span>
              <span>Regular</span>
            </span>
          </div>
          <div class="typography__fonts typography__fonts--ubuntu">
            <h2>AaBb</h2>
            <span>
              <span>Ubuntu</span>
              <span> - </span>
              <span class="r">Regular</span>
              <span class="l">Light</span>
              <span class="n">Medium</span>
              <span class="b">Bold</span>
            </span>
          </div>
        </div>
      </section>
      <section class="styleguide__section">
        <h2>Buttons</h2>
        <link-button buttonPermalink="#">default</link-button>
        <link-button buttonSize="large" buttonPermalink="#">default large</link-button>
        <link-button buttonType="ghost" buttonPermalink="#">ghost</link-button>
        <link-button buttonType="ghost" buttonSize="large" buttonPermalink="#">ghost large</link-button>
        <div class="buttons__ghost-white bgcolor--primary">
          <link-button buttonType="ghost-white" buttonPermalink="#">ghost white</link-button>
          <link-button buttonType="ghost-white" buttonSize="large" buttonPermalink="#">ghost white large</link-button>
        </div>
      </section>
    </div>
    <meta-tags :title="pageTitle" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'Styleguide',
  data () {
    return {
      pageTitle: `Styleguide - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageUrl: `${siteUrl}/styleguide`,
      colors: {
        primary: [
          'primary',
          'secondary',
          'tertiary'
        ],
        grays: [
          'gray',
          'base',
          'border',
          'silver',
          'background'
        ]
      },
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/styleguide',
          title: 'Styleguide'
        }
      ]
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    LinkButton: () => import('~/components/LinkButton'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="stylus">
.styleguide
  &__section
    padding-bottom spacingLarge
    margin-bottom spacingLarge
    border-bottom borderBase
  &__color
    width 220px
    height 160px
    border-radius 10px
    position relative
    box-shadow boxShadowBase
    display inline-block
    overflow hidden
    &:not(:last-child)
      margin-right 15px
    &:after
      content ''
      display block
      position absolute
      bottom 0
      right 0
      left 0
      background-color #fff
      width 100%
      padding 15px
      font-size .7rem
      font-weight fontWeightRegular
      line-height 1.23
      text-align left
      color #4c484c
    &--primary:after
      content '#{mintColor} - mintColor'
    &--secondary:after
      content '#{oceanBlueColor} - oceanBlueColor'
    &--tertiary:after
      content '#{khakiColor} - khakiColor'
    &--silver:after
      content '#{honeydewColor} - honeydewColor'
    &--gray:after
      content '#{davysGreyColor} - davysGreyColor'
    &--border:after
      content '#{borderColor} - borderColor'
    &--base:after
      content '#{feldgrauColor} - feldgrauColor'
    &--background:after
      content '#{snowColor} - snowColor'

  .bgcolor
    &--primary
      background-color mintColor
    &--secondary
      background-color oceanBlueColor
    &--tertiary
      background-color khakiColor
    &--silver
      background-color honeydewColor
    &--gray
      background-color davysGreyColor
    &--border
      background-color borderColor
    &--base
      background-color feldgrauColor
    &--background
      background-color snowColor

.buttons__ghost-white
  padding spacingBase
  margin spacingSmall 0

.typography
  &__fonts
    min-height 146px
    border-radius 10px
    text-align center
    background-color #fff
    padding spacingSmall spacingBase
    display inline-block
    margin-right spacingSmall
    box-shadow boxShadowBase
    &--suez
      &, h2
        font-family fontFamilyHeading
    &--ubuntu
      &, h2
        font-family fontFamilyBase
    h2
      font-size 90px
      line-height 0.78
      color feldgrauColor
      margin 0 0 15px
    span
      span
        display inline-block
        &:not(:last-child)
          margin-right 5px
      &.l
        font-weight fontWeightLight
      &.n
        font-weight fontWeightNormal
      &.r
        font-weight fontWeightRegular
      &.b
        font-weight fontWeightBold
</style>
