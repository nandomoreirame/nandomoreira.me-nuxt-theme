<template>
  <nuxt-link :class="[
    buttonClass,
    buttonType ? `${buttonClass}--${buttonType}` : '',
    buttonSize ? `${buttonClass}--${buttonSize}` : ''
  ]" :title="title" :to="buttonPermalink">
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

<style lang="sass" scoped>
@import "~assets/sass/settings"
.nuxt-link-button
  @extend %button
  color: $primary-color
  background-color: #fff
  box-shadow: 0 8px 20px 0 rgba(224, 224, 224, .5)
  border: 3px solid $primary-color
  &:hover,
  &:focus
    background-color: $primary-color
    color: #fff
</style>
