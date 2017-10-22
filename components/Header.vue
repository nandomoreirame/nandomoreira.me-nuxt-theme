<template>
  <header class="header">
    <nuxt-link tabindex="-1" role="button" to="/" class="header__back">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#435466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
        <line x1="20" y1="12" x2="4" y2="12"/>
        <polyline points="10 18 4 12 10 6"/>
      </svg>
      <span>Ir para Home</span>
    </nuxt-link>
    <navbar></navbar>
  </header>
</template>

<script>
export default {
  name: 'pageHeader',
  components: {
    Navbar: () => import('~/components/Navbar.vue')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.header
  background-color: #fff
  box-shadow: $box-shadow-base
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-items: center
  align-content: center
  position: fixed
  top: 0
  right: 0
  left: 0
  z-index: 10
  min-height: 80px
  padding: 0 2rem
  &__back
    margin: 0
    padding: 0
    position: relative
    overflow: hidden
    opacity: 1
    transform: translate3d(0,0,0)
    transition: opacity .2s ease, transform .2s ease
    &.nuxt-link-exact-active
      opacity: 0
      transform: translate3d(-100%,0,0)
      pointer-events: none
    svg, span
      line-height: 1
      vertical-align: middle
      display: inline-block
    span
      opacity: 0
      color: #435466
      margin-left: .8rem
      transform: translate3d(-100%, 0, 0)
      transition: .2s transform cubic-bezier(0.29, 0.18, 0.26, 0.83), .2s opacity cubic-bezier(0.29, 0.18, 0.26, 0.83)
    &:hover,
    &:focus
      span
        opacity: 1
        transform: translate3d(0, 0, 0)
</style>
