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
    margin-right spacingMini
  svg
    position relative
    top -2px
  svg, span
    margin-right 5px
    display inline-block
    vertical-align middle
    transition .1s fill timingFunction, .1s color timingFunction, .1s stroke timingFunction
  &__link
    line-height 40px
    padding 0 1.5rem
    border-radius 3px
    display inline-block
    border 3px solid transparent
    transition .2s background-color timingFunction, .2s color timingFunction
    font-weight fontWeightBold
    text-decoration none
    font-size fontSizeSmall
  &--default &__link
    border-color mintColor
    background-color mintColor
    color #fff
    &:hover,
    &:focus
      background-color lighten(mintColor, 10%)
      border-color lighten(mintColor, 10%)
      color #fff
  &--ghost &__link
    border-color mintColor
    background-color transparent
    color mintColor
    &:hover,
    &:focus
      background-color mintColor
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
    font-size fontSizeBase
  &--small &__link
    border-radius 30px
    line-height 26px
    font-size .8rem
    padding 0 1rem
</style>
