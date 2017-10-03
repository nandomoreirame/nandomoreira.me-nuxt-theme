<template>
  <main>
    <page-header title="Styleguide" :breadcrumbs="breadcrumbs"></page-header>
    <div class="styleguide container">
      <div class="styleguide__colors">
        <h4>Primary colors</h4>
        <span class="styleguide__color" v-for="color in colors.primary" :key="color" v-bind:class="`styleguide__color--${color}`"></span>
      </div>
      <div class="styleguide__colors">
        <h4>Gray colors</h4>
        <span class="styleguide__color" v-for="color in colors.grays" :key="color" v-bind:class="`styleguide__color--${color}`"></span>
      </div>
    </div>
    <meta-tags></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'Styleguide',
  data () {
    return {
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
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.styleguide
  // &__colors
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
      padding: 12px
      font-size: 13px
      font-weight: 500
      line-height: 1.23
      text-align: left
      color: #4c484c
    &--primary
      background-color: $primary-color
      &:after
        content: '#{$primary-color} - $primary-color'
    &--secondary
      background-color: $secondary-color
      &:after
        content: '#{$secondary-color} - $secondary-color'
    &--tertiary
      background-color: $tertiary-color
      &:after
        content: '#{$tertiary-color} - $tertiary-color'
    &--silver
      background-color: $silver-color
      &:after
        content: '#{$silver-color} - $silver-color'
    &--gray
      background-color: $gray-color
      &:after
        content: '#{$gray-color} - $gray-color'
    &--border
      background-color: $border-color
      &:after
        content: '#{$border-color} - $border-color'
    &--base
      background-color: $text-color
      &:after
        content: '#{$text-color} - $text-color'
    &--background
      background-color: $bg-base-color
      &:after
        content: '#{$bg-base-color} - $bg-base-color'
</style>
