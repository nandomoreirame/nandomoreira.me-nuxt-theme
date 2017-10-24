<template>
  <div>
    <input type="checkbox" id="ToggleNavbar">
    <label tabindex="-1" class="navbar-toggle" for="ToggleNavbar" role="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#435466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </label>
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
          <nuxt-link :to="item.link" :title="item.title" role="link" class="navbar__nav-link">
            {{ item.title }}
          </nuxt-link>
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
        // },
        // {
        //   link: '/styleguide',
        //   title: 'Styleguide'
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
  +media(max-width $tablet-large)
    position: fixed
    z-index: 1000
    width: 100%
    height: 100vh
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba($feldgrau-color, .95)
    display: none

  +media($tablet-large)
    display: block
    position: relative

  &__nav
    list-style: none
    padding: 0
    margin: 0
    display: table-cell
    vertical-align: middle

    +media($tablet-large)
      display: inline-block

  &__nav-item
    font-weight: $font-weight-bold
    letter-spacing: -.01em
    +media($tablet-large)
      display: inline-block

    &:not(:first-child)
      margin-left: 1rem

    &:not(:last-child):after
      content: '•'
      color: #435466
      margin-left: 15px

    &--search
      display: none
      +media($tablet-large)
        display: inline-block
        svg
          position: relative
          top: 2px

  &__nav-link
    color: #fff
    font-size: 2rem
    text-decoration: none
    letter-spacing: .05rem
    position: relative
    text-transform: uppercase

    +media($tablet-large)
      font-size: $font-size-small
      color: $feldgrau-color

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

.navbar-toggle
  position: relative
  display: inline-block
  z-index: 10001
  line-height: 1
  vertical-align: middle

  +media($tablet-large)
    display: none

  .feather-x
    display: none

#ToggleNavbar
  position: absolute
  border: 0
  clip: rect(0,0,0,0)
  width: 1px
  height: 1px
  margin: -1px
  padding: 0
  overflow: hidden

  +media(max-width $tablet-large)
    &:checked
      ~ .navbar
        display: table
      ~ .navbar-toggle
        .feather-x
          display: block
        .feather-menu
          display: none
</style>
