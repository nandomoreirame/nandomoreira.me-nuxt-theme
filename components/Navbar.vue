<template>
  <div>
    <nav class="navbar" role="navigation">
      <ul class="navbar__nav" role="menu">
        <li class="navbar__nav-item navbar__nav-item--search">
          <a href="#" @click="toggleSearch(true)" role="link" class="navbar__nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#435466">
              <title id="search-icon">Search icon</title>
              <path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/>
            </svg>
          </a>
        </li>
        <li v-for="(item, key) in navItems" :key="key" class="navbar__nav-item" role="menuitem">
          <nuxt-link :to="item.link" :title="item.title" role="link" class="navbar__nav-link">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
    <site-search></site-search>
  </div>
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
  },
  components: {
    SiteSearch: () => import('~/components/Search')
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
    letter-spacing: -.01em
    &--search svg
      position: relative
      top: 2px
    &:not(:first-child)
      margin-left: 1rem
    &:not(:last-child):after
      content: '•'
      color: #435466
      margin-left: 15px
  &__nav-link
    color: #435466
    text-decoration: none
    letter-spacing: .05rem
    font-size: $font-size-small
    position: relative
    text-transform: uppercase
    &:after
      z-index: 3
      left: 0
      transition: all .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)
      content: ''
      display: block
      position: absolute
      top: calc(100% + 5px)
      width: 0
      height: 3px
    &.nuxt-link-exact-active,
    &:hover
      color: $mint-color
      &:after
        width: 50%
        left: 0
        background: $khaki-color
    &.nuxt-link-exact-active
      pointer-events: none
</style>
