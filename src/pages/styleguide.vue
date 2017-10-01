<template>
  <main>
    <div class="styleguide container">
      <h1>Styleguide</h1>
      <div class="styleguide__colors">
        <h4>Primary colors</h4>
        <span class="color color--primary"></span>
        <span class="color color--secondary"></span>
        <span class="color color--tertiary"></span>
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
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags')
  }
}
</script>

<style lang="sass" scoped>
.styleguide
  max-width: 1300px

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
      background-color: #2296F4
      &:after
        content: '#2296F4'
    &--secondary
      background-color: #78AFF7
      &:after
        content: '#78AFF7'
    &--tertiary
      background-color: #AAC8FA
      &:after
        content: '#AAC8FA'
    &--silver
      background-color: #E8E8E8
      &:after
        content: '#E8E8E8'
    &--gray
      background-color: #201F20
      &:after
        content: '#201F20'
    &--border
      background-color: #9F9E9F
      &:after
        content: '#9F9E9F'
    &--base
      background-color: #5B5B5B
      &:after
        content: '#5B5B5B'
</style>
