<template>
  <label tabindex="1" class="navbar-toggle" aria-label="Abrir navegação principal" aria-controls="navigation" for="ToggleNavbar" role="button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </label>
</template>

<script>
  export default {
    name: 'NavbarToggle'
  }
</script>

<style lang="stylus">
.navbar-toggle
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
</style>
