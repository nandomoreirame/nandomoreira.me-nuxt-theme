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
        <nuxt-link-button buttonPermalink="#">default</nuxt-link-button>
        <nuxt-link-button buttonSize="large" buttonPermalink="#">default large</nuxt-link-button>
        <nuxt-link-button buttonType="ghost" buttonPermalink="#">ghost</nuxt-link-button>
        <nuxt-link-button buttonType="ghost" buttonSize="large" buttonPermalink="#">ghost large</nuxt-link-button>
        <div class="buttons__ghost-white bgcolor--primary">
          <nuxt-link-button buttonType="ghost-white" buttonPermalink="#">ghost white</nuxt-link-button>
          <nuxt-link-button buttonType="ghost-white" buttonSize="large" buttonPermalink="#">ghost white large</nuxt-link-button>
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
      pageTitle: `Styleguide - Fernando Moreira | Front-end / UX Designer`,
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
    NuxtLinkButton: () => import('~/components/NuxtLinkButton'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.styleguide
  &__section
    padding-bottom: $spacing-large
    margin-bottom: $spacing-large
    border-bottom: $border-base
  &__color
    width: 220px
    height: 160px
    border-radius: 10px
    position: relative
    box-shadow: 0 2px 6px 0 rgba(32, 31, 32, 0.14)
    display: inline-block
    overflow: hidden
    &:not(:last-child)
      margin-right: 15px
    &:after
      content: ''
      display: block
      position: absolute
      bottom: 0
      right: 0
      left: 0
      background-color: #fff
      width: 100%
      padding: 15px
      font-size: .7rem
      font-weight: 500
      line-height: 1.23
      text-align: left
      color: #4c484c
    &--primary:after
      content: '#{$primary-color} - $primary-color'
    &--secondary:after
      content: '#{$secondary-color} - $secondary-color'
    &--tertiary:after
      content: '#{$tertiary-color} - $tertiary-color'
    &--silver:after
      content: '#{$silver-color} - $silver-color'
    &--gray:after
      content: '#{$gray-color} - $gray-color'
    &--border:after
      content: '#{$border-color} - $border-color'
    &--base:after
      content: '#{$text-color} - $text-color'
    &--background:after
      content: '#{$bg-base-color} - $bg-base-color'

  .bgcolor
    &--primary
      background-color: $primary-color
    &--secondary
      background-color: $secondary-color
    &--tertiary
      background-color: $tertiary-color
    &--silver
      background-color: $silver-color
    &--gray
      background-color: $gray-color
    &--border
      background-color: $border-color
    &--base
      background-color: $text-color
    &--background
      background-color: $bg-base-color

.buttons__ghost-white
  padding: $spacing-base
  margin: $spacing-small 0

.typography
  &__fonts
    // min-width: 430px
    min-height: 146px
    border-radius: 10px
    text-align: center
    background-color: #fff
    padding: $spacing-small $spacing-base
    display: inline-block
    margin-right: $spacing-small
    box-shadow: 0 2px 6px 0 rgba(32, 31, 32, 0.14)
    &--suez
      &, h2
        font-family: $font-family-heading
    &--ubuntu
      &, h2
        font-family: $font-family-base
    h2
      font-size: 90px
      line-height: 0.78
      color: $text-color
      margin: 0 0 15px
    span
      span
        display: inline-block
        &:not(:last-child)
          margin-right: 5px
      &.l
        font-weight: $font-weight-light
      &.n
        font-weight: $font-weight-normal
      &.r
        font-weight: $font-weight-regular
      &.b
        font-weight: $font-weight-bold
</style>
