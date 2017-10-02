<template>
  <header class="header">
    <h1 class="header__logo"><nuxt-link to="/">n</nuxt-link></h1>
    <nav class="navbar">
      <ul class="navbar__nav">
        <li class="navbar__nav-item"><nuxt-link to="/about">Sobre mim</nuxt-link></li>
        <li class="navbar__nav-item"><nuxt-link to="/projects">Projetos</nuxt-link></li>
        <li class="navbar__nav-item"><nuxt-link to="/blog">Blog</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'pageHeader'
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
    // float: left
    margin: 0
    padding: 0
    line-height: 1
    a
      color: #fff
.navbar
  // float: right
  &__nav
    list-style: none
    padding: 0
    margin: 0
  &__nav-item
    display: inline-block
    text-transform: uppercase
    letter-spacing: .1em
    margin-left: 1rem
    a
      color: #fff
      text-decoration: none
      font-size: .875rem
</style>
