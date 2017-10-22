<template>
  <nuxt-link :class="[
    buttonClass,
    `${buttonClass}--${buttonType ? `${buttonType}` : 'default'}`,
    buttonSize ? `${buttonClass}--${buttonSize}` : ''
  ]" :title="title ? title : ''" :to="buttonPermalink">
    <slot/>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'NuxtLinkButton',
    props: {
      buttonClass: {
        type: String,
        default: 'nuxt-link-button'
      },
      buttonType: String,
      buttonSize: String,
      buttonPermalink: String,
      title: String
    }
  }
</script>

<style lang="sass">
@import "~assets/sass/settings"
.nuxt-link-button
  display: inline-block
  text-align: center
  margin: 0
  line-height: 40px
  padding: 0 1.5rem
  font-size: $font-size-small
  vertical-align: middle
  font-weight: $font-weight-bold
  text-decoration: none
  border-radius: 3px
  border: 3px solid transparent
  position: relative
  transition: .2s background-color ease, .2s color ease
  &:not(:last-child)
    margin-right: $spacing-mini

  &--default
    color: #fff
    background-color: $mint-color
    border-color: $mint-color
    &:hover,
    &:focus
      background-color: lighten($mint-color, 10%)
      border-color: lighten($mint-color, 10%)
      color: #fff

  &--ghost
    color: $mint-color
    background-color: transparent
    box-shadow: 0 8px 20px 0 rgba(224, 224, 224, .5)
    border-color: $mint-color
    &:hover,
    &:focus
      background-color: $mint-color
      color: #fff

    &-white
      box-shadow: 0 2px 10px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .1)
      border-color: #fff
      color: #fff
      &:hover,
      &:focus
        background-color: rgba(#fff, .2)
        outline-color: #fff
        color: #fff

  &--large
    line-height: 56px
    font-size: $font-size-base
</style>
