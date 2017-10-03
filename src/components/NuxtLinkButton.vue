<template>
  <nuxt-link :class="[
    buttonClass,
    `${buttonClass}--${buttonType ? `${buttonType}` : 'default'}`,
    buttonSize ? `${buttonClass}--${buttonSize}` : ''
  ]" :title="title ? title : ''" :to="buttonPermalink">
    <slot></slot>
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
  transition: .2s background-color ease-in-out, .2s color ease-in-out
  &:not(:last-child)
    margin-right: $spacing-mini

  &--default
    color: #fff
    background-color: $primary-color
    border-color: $primary-color
    &:hover,
    &:focus
      background-color: lighten($primary-color, 10%)
      border-color: lighten($primary-color, 10%)
      color: #fff

  &--ghost
    color: $primary-color
    background-color: transparent
    box-shadow: 0 8px 20px 0 rgba(224, 224, 224, .5)
    border-color: $primary-color
    &:hover,
    &:focus
      background-color: $primary-color
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
    text-transform: uppercase
    font-size: $font-size-base
</style>
