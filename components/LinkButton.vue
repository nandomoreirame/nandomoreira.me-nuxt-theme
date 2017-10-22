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

<style lang="sass">
@import "~assets/sass/settings"

.link-button
  display: inline-block
  text-align: center
  margin: 0
  vertical-align: middle
  position: relative
  &:not(:last-child)
    margin-right: $spacing-mini

  &__link
    line-height: 40px
    padding: 0 1.5rem
    border-radius: 3px
    display: inline-block
    border: 3px solid transparent
    transition: .2s background-color ease, .2s color ease
    font-weight: $font-weight-bold
    text-decoration: none
    font-size: $font-size-small

  &--default &__link
    border-color: $mint-color
    background-color: $mint-color
    color: #fff
    &:hover,
    &:focus
      background-color: lighten($mint-color, 10%)
      border-color: lighten($mint-color, 10%)
      color: #fff

  &--ghost &__link
    box-shadow: 0 8px 20px 0 rgba(224, 224, 224, .5)
    border-color: $mint-color
    background-color: transparent
    color: $mint-color
    &:hover,
    &:focus
      background-color: $mint-color
      color: #fff

  &--ghost-white &__link
    box-shadow: 0 2px 10px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .1)
    border-color: #fff
    color: #fff
    &:hover,
    &:focus
      background-color: rgba(#fff, .2)
      outline-color: #fff
      color: #fff

  &--large &__link
    line-height: 56px
    font-size: $font-size-base
</style>
