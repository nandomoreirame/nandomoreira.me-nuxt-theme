<template>
  <span role="button" :class="[
      buttonClass,
      `${buttonClass}--${buttonType ? `${buttonType}` : 'default'}`,
      buttonSize ? `${buttonClass}--${buttonSize}` : ''
    ]" :title="title ? title : ''">
    <nuxt-link v-if="nuxtLink" :class="`${buttonClass}__link`" :to="buttonPermalink" :target="linkTarget">
      <slot/>
    </nuxt-link>
    <a v-if="!nuxtLink" :class="`${buttonClass}__link`" :href="buttonPermalink" :target="linkTarget">
      <slot/>
    </a>
  </span>
</template>

<script>
  export default {
    name: 'LinkButton',
    props: {
      nuxtLink: {
        type: Boolean,
        default: true
      },
      buttonClass: {
        type: String,
        default: 'link-button'
      },
      linkTarget: {
        type: String,
        default: '_self'
      },
      buttonType: String,
      buttonSize: String,
      buttonPermalink: String,
      title: String
    }
  }
</script>

<style lang="stylus">
.link-button
  display inline-block
  text-align center
  margin 0
  vertical-align middle
  position relative
  &:not(:last-child)
    margin-right $spacing-mini
  svg
    position relative
    top -2px
  svg, span
    margin-right 5px
    display inline-block
    vertical-align middle
    transition .1s fill ease, .1s color ease, .1s stroke ease
  &__link
    line-height 40px
    padding 0 1.5rem
    border-radius 3px
    display inline-block
    border 3px solid transparent
    transition .2s background-color ease-in-out, .2s color ease-in-out
    font-weight $font-weight-bold
    text-decoration none
    font-size $font-size-small
  &--default &__link
    border-color $mint-color
    background-color $mint-color
    color #fff
    &:hover,
    &:focus
      background-color lighten($mint-color, 10%)
      border-color lighten($mint-color, 10%)
      color #fff
  &--ghost &__link
    border-color $mint-color
    background-color transparent
    color $mint-color
    &:hover,
    &:focus
      background-color $mint-color
      color #fff
  &--ghost-white &__link
    border-color #fff
    color #fff
    &:hover,
    &:focus
      background-color rgba(#fff, .2)
      outline-color #fff
      color #fff
  &--large &__link
    border-radius 8px
    line-height 56px
    font-size $font-size-base
  &--small &__link
    border-radius 30px
    line-height 26px
    font-size .8rem
    padding 0 1rem
</style>
