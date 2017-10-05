<template>
  <nav class="navbar" role="navigation">
    <ul class="navbar__nav" role="menu">
      <li v-for="(item, key) in navItems" :key="key" class="navbar__nav-item" role="menuitem">
        <nuxt-link :to="item.link" :title="item.title" role="link" class="navbar__nav-link">{{ item.title }}</nuxt-link>
      </li>
      <li class="navbar__nav-item">
        <a href="#" @click="toggleSearch(true)" role="link" class="navbar__nav-link">Search</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      navItems: [
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
  },
  methods: {
    ...mapMutations({
      toggleSearch: 'showSearch'
    })
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
    font-weight: $font-weight-bold
    // text-transform: uppercase
    letter-spacing: -.01em
    margin-left: 1rem
    &:not(:last-child):after
      content: '•'
      color: #fff
      margin-left: 15px
  &__nav-link
    color: #fff
    text-decoration: none
    font-size: $font-size-base
    &.nuxt-link-exact-active,
    &:hover
      color: $tertiary-color
      text-decoration: underline
    &.nuxt-link-exact-active
      pointer-events: none
</style>
