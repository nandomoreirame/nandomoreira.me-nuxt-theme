<template>
  <header class="pageHeader" :class="{ 'pageHeader--background': image, 'pageHeader--hero': isHero }" :style="(image ? `background-image: url(${image})` : '')">
    <div class="pageHeader__inner">
      <slot name="inner"/>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'PageHeader',
    props: {
      'image': {
        type: String
      },
      'isHero': {
        type: Boolean,
        default: false
      }
    },
    methods: {
      fixHeader (header) {
        if (!header.classList.contains('header--up')) {
          this.$store.commit('SET_HEADER_UP', true)
        }
      }
    },
    mounted () {
      this.$store.commit('SET_HEADER_UP', false)
      this.fixHeader(document.querySelector('.header'));
    }
  }
</script>

<style lang="stylus">
.pageHeader
  padding 0
  margin-bottom spacingBase
  clip-path polygon(0 0, 100% 0, 100% 100%, 0 85%)
  overflow hidden
  position relative
  @extend $clearfix
  +above(md)
    min-height 18.75rem
  &--background
    overflow hidden
    background-position 50% 50%
    background-repeat no-repeat
    background-size cover
    .pageHeader__inner
      background-color transparent
      &:before
        content ''
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        background-color rgba(primaryColor, .8)
    .container
      position relative
      z-index 2
  &__inner
    background-color primaryColor
    padding 8rem 0 5rem
    position relative
    z-index 5
    +above(md)
      padding 8rem 0
  &__image
    opacity 0
    visibility hidden
    display none
  &__title
    text-transform uppercase
    letter-spacing .1em
    font-size 1.8rem
    color #fff
    margin 0
    +above(md)
      font-size 2.5rem
  &__description
    font-weight fontWeightLight
    font-style 400
    font-size 1.25rem
    line-height 1.4
    color #fff
    margin 0
    +above(md)
      font-size 1.375rem
  &__meta
    color #fff
    text-transform uppercase
    opacity .65
    letter-spacing .1em
    font-size .8rem
    padding-top 1rem
    padding-bottom 1rem
    span
      display inline-block
      margin-right 0.5rem
</style>
