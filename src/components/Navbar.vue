<template>
  <nav class="navbar" role="navigation">
    <ul class="navbar__nav" role="menu">
      <li v-for="(item, key) in navItems" :key="key" class="navbar__nav-item" role="menuitem">
        <nuxt-link :to="item.link" :title="item.title" role="link">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      navItems: [
        {
          link: '/',
          title: 'Home'
        },
        {
          link: '/about',
          title: 'Sobre'
        },
        {
          link: '/blog',
          title: 'Blog'
        },
        {
          link: '/projects',
          title: 'Projetos'
        },
        {
          link: '/experiments',
          title: 'Experimentos'
        },
        {
          link: '/styleguide',
          title: 'Styleguide'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.navbar
  &__nav
    list-style: none
    padding: 0
    margin: 0
  &__nav-item
    display: inline-block
    // text-transform: uppercase
    font-weight: $font-weight-regular
    letter-spacing: .1em
    margin-left: 1rem
    &:not(:last-child):after
      content: '•'
      color: #fff
      margin-left: 15px
    a
      color: #fff
      text-decoration: none
      font-size: .875rem
      &.nuxt-link-exact-active,
      &:hover
        color: $tertiary-color
        text-decoration: underline
      &.nuxt-link-exact-active
        pointer-events: none
</style>
