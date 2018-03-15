<template>
  <button role="button" tabindex="1" @click="$store.commit('TOGGLE_NAVBAR', !$store.state.showNavbar)"
    class="NavbarToggle" :class="{ 'NavbarToggle--open': $store.state.showNavbar }"
    aria-label="Abrir navegação principal" aria-controls="navigation">
    <span/>
    <span/>
    <span/>
    <span/>
    <span/>
    <span/>
  </button>
</template>

<script>
  export default {
    name: 'NavbarToggle'
  }
</script>

<style lang="stylus">
.NavbarToggle
  position relative
  display block
  z-index 10001
  line-height 1
  vertical-align middle
  width 40px
  height 25px
  margin 0 auto
  transform rotate(0deg)
  cursor pointer
  +above(lg)
    display none
  span
    display block
    position absolute
    height 5px
    width 50%
    background #fff
    opacity 1
    transform rotate(0deg)
    transition .25s ease-in-out
    &:nth-child(even)
      left 50%
      border-radius 0 9px 9px 0
    &:nth-child(odd)
      left 0px
      border-radius 9px 0 0 9px
    &:nth-child(1),
    &:nth-child(2)
      top 0px
    &:nth-child(3),
    &:nth-child(4)
      top 10px
    &:nth-child(5),
    &:nth-child(6)
      top 20px

  &--open span
    &:nth-child(1),
    &:nth-child(6)
      transform rotate(45deg)
    &:nth-child(2),
    &:nth-child(5)
      transform rotate(-45deg)
    &:nth-child(1)
      left 7px
      top 7px
    &:nth-child(2)
      left calc(50% - 5px)
      top 7px
    &:nth-child(3)
      left -50%
      opacity 0
    &:nth-child(4)
      left 100%
      opacity 0
    &:nth-child(5)
      left 7px
      top 15px
    &:nth-child(6)
      left calc(50% - 5px)
      top 15px
</style>
