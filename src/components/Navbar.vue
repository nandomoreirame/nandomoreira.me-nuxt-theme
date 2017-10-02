<template>
  <nav class="navbar" role="navigation">
    <ul class="navbar__nav">
      <li class="navbar__nav-item" role="menuitem">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="navbar__nav-item" role="menuitem">
        <nuxt-link to="/about">Sobre</nuxt-link>
      </li>
      <li class="navbar__nav-item" role="menuitem">
        <nuxt-link to="/projects">Projetos</nuxt-link>
      </li>
      <li class="navbar__nav-item" role="menuitem">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li class="navbar__nav-item" role="menuitem">
        <nuxt-link to="/styleguide">Styleguide</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass" scoped>
.navbar
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
