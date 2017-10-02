<template>
  <header class="header">
    <h1 class="header__logo"><nuxt-link to="/">n</nuxt-link></h1>
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
.header
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between
  align-items: center
  align-content: center
  position: absolute
  top: 0
  right: 0
  left: 0
  z-index: 10
  min-height: 100px
  padding: 0 2rem
  &__logo
    margin: 0
    padding: 0
    line-height: 1
    a
      color: #fff
</style>
