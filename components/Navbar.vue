<template>
  <div>
    <navbar-toggle/>
    <nav class="Navbar" role="navigation" id="navigation" :class="{ 'Navbar--open': $store.state.showNavbar }">
      <ul class="Navbar__nav" role="menu">
        <li v-for="(item, key) in navItems" :key="key" class="Navbar__nav-item" role="menuitem" v-on:click="closeNavbar">
          <nuxt-link :to="item.link" :title="item.title" role="link" class="Navbar__nav-link">
            {{ item.title }}
          </nuxt-link>
          <ul v-if="item.subitems" class="Navbar__dropdown">
            <li v-for="(subitem, i) in item.subitems" :key="i" class="Navbar__dropdown-item" v-on:click="closeNavbar">
              <nuxt-link :to="subitem.link" :title="subitem.title" role="link" class="Navbar__dropdown-link">
                {{ subitem.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
        <li class="Navbar__nav-item" v-on:click="closeNavbar">
          <link-button buttonType="ghost" buttonSize="small" buttonPermalink="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5541984401163" :nuxtLink="false" linkTarget="_blank">
            <svg aria-labelledby="whatsapp-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
              <title id="whatsapp-icon">WhatsApp icon</title>
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
            </svg>
            Fale comigo pelo WhatsApp
          </link-button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    head () {
      return {
        bodyAttrs: {
          class: this.$store.state.showNavbar ? 'noscroll' : ''
        }
      }
    },
    data () {
      return {
        navItems: [
          {
            link: '/about',
            title: 'Sobre'
          },
          {
            link: '/about/apps',
            title: 'Apps'
          },
          {
            link: '/about/now',
            title: 'Now'
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
            link: '/projects/open-source',
            title: 'Open Source'
          },
          {
            link: '/projects/experiments',
            title: 'Experimentos'
          }
        ]
      }
    },
    methods: {
      closeNavbar () {
        this.$store.commit('toggleNavbar', false)
      }
    },
    components: {
      LinkButton: () => import('~/components/LinkButton'),
      NavbarToggle: () => import('~/components/NavbarToggle')
    }
  }
</script>

<style lang="stylus">
.Navbar
  +below(lg)
    position fixed
    z-index 1000
    width 100%
    height 100vh
    top 0
    left 0
    right 0
    bottom 0
    background-color rgba(feldgrauColor, .95)
    display none
    &--open
      display table
  +above(lg)
    display block
    position relative

  .link-button--ghost .link-button__link
    border-color #fff
    background-color #fff
    color mintColor
    &:hover,
    &:focus
      background-color feldgrauColor
      border-color feldgrauColor
      color #fff

  &__nav
    list-style none
    margin 0
    display table-cell
    vertical-align middle
    padding spacingSmall
    +below(lg)
      .link-button__link
        color #fff
        border-color #fff
    +above(lg)
      padding 0
      display inline-block

  &__nav-item
    font-weight fontWeightRegular
    letter-spacing -.01em
    line-height 1
    text-align center
    position relative
    margin 0
    +above(lg)
      text-align left
      display inline-block
    iframe
      display inline-block
      vertical-align middle
    &:not(:first-child)
      margin-left 1rem
    +above(lg)
      &:not(:last-child):after
        content '•'
        color #fff
        opacity 0.75
        margin-left 15px
    &:not(:last-child) .Navbar__nav-link
      padding 5% 0
      +above(lg)
        padding 1.8rem 0
    &:hover,
    &:focus
      .Navbar__dropdown
        display block
    // a.nuxt-link-active,
    // a.nuxt-link-exact-active,
    &:hover .Navbar__nav-link,
    &:focus .Navbar__nav-link,
    .nuxt-link-exact-active
      color #fff
      &:after
        width 50%
        left 0
        background khakiColor

  &__nav-link
    color #fff
    font-size 1.625rem
    text-decoration none
    letter-spacing .05rem
    position relative
    text-transform lowercase
    display block
    &.nuxt-link-exact-active,
    &:hover,
    &:focus
      opacity .75
      color #fff
    +above(lg)
      font-size fontSizeSmall
      // color feldgrauColor
      display inline-block
      padding 0
      &:after
        z-index 3
        left 0
        transition all .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)
        content ''
        display block
        position absolute
        bottom 20px
        width 0
        height 3px

  &__dropdown
    display none
    list-style none
    padding .9375rem 0 0
    margin 0
    width 100%
    +above(lg)
      width 180px
      position absolute
      left 0
      top 100%
      &:after, &:before
        display block
        top -2px
        left 12%
        border solid transparent
        content ''
        height 0
        width 0
        position absolute
        pointer-events none
      &:after
        border-color rgba(#fff, 0)
        border-bottom-color #fff
        border-width 10px
        margin-left -10px
      &:before
        border-color rgba(194, 225, 245, 0)
        border-bottom-color rgba(#000, .1)
        border-width 9px
        margin-left -9px
    &-item
      display block
      padding .3125rem 0
      margin 0
      +above(lg)
        background-color #fff
        border-left 1px solid rgba(#000, .1)
        border-right 1px solid rgba(#000, .1)
        &:first-child
          border-top 1px solid rgba(#000, .1)
        &:last-child
          margin-bottom 0
          border-bottom 1px solid rgba(#000, .1)
    &-link
      text-transform lowercase
      text-decoration none
      display block
      padding .625rem 0
      font-size 1.4rem
      &:hover
        color mintColor
      +above(lg)
        font-size 14px
        padding .625rem .9375rem
        color feldgrauColor
</style>
