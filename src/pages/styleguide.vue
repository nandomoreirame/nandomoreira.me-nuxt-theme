<template>
  <main>
    <page-header title="Styleguide" :breadcrumbs="breadcrumbs"></page-header>
    <div class="styleguide container">
      <div class="styleguide__colors">
        <h4>Primary colors</h4>
        <span class="color color--primary"></span>
        <span class="color color--secondary"></span>
        <span class="color color--tertiary"></span>
      </div>
      <div class="styleguide__colors">
        <h4>Gray colors</h4>
        <span class="color color--gray"></span>
        <span class="color color--base"></span>
        <span class="color color--border"></span>
        <span class="color color--silver"></span>
      </div>
    </div>
    <meta-tags></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
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
  &__colors
  .color
    width: 150px
    height: 150px
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
      background-color: $color-primary
      &:after
        content: '#{$color-primary}'
    &--secondary
      background-color: $color-secondary
      &:after
        content: '#{$color-secondary}'
    &--tertiary
      background-color: $color-tertiary
      &:after
        content: '#{$color-tertiary}'
    &--silver
      background-color: $color-silver
      &:after
        content: '#{$color-silver}'
    &--gray
      background-color: $color-gray
      &:after
        content: '#{$color-gray}'
    &--border
      background-color: $border-color-base
      &:after
        content: '#{$border-color-base}'
    &--base
      background-color: $color-base
      &:after
        content: '#{$color-base}'
</style>
