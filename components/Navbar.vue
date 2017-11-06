<template>
  <div>
    <input type="checkbox" id="ToggleNavbar">
    <label tabindex="1" class="navbar-toggle" aria-label="Abrir navegação principal" aria-controls="navigation" for="ToggleNavbar" role="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
        <path fill="none" stroke="currentColor" stroke-width="4" d="M10 20h47" class="top-line" stroke-linecap="round"/>
        <path fill="none" stroke="currentColor" stroke-width="4" d="M30 30h27" class="middle-line" stroke-linecap="round"/>
        <path fill="none" stroke="currentColor" stroke-width="4" d="M10 40h47" class="bottom-line" stroke-linecap="round"/>
      </svg>
    </label>
    <nav class="navbar" role="navigation" id="navigation">
      <ul class="navbar__nav" role="menu">
        <li v-for="(item, key) in navItems" :key="key" class="navbar__nav-item" role="menuitem">
          <nuxt-link :to="item.link" :title="item.title" role="link" class="navbar__nav-link">
            {{ item.title }}
          </nuxt-link>
        </li>
        <li class="navbar__nav-item">
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
  data () {
    return {
      navItems: [
        {
          link: '/about',
          title: 'Sobre'
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
          link: '/experiments',
          title: 'Experimentos'
        },
        {
          link: '/blog',
          title: 'Blog'
        },
        {
          link: '/mental-spark',
          title: 'Faísca mental'
        }
      ]
    }
  },
  components: {
    LinkButton: () => import('~/components/LinkButton')
  }
}
</script>

<style lang="stylus">
.navbar
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
  +above(lg)
    display block
    position relative
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
    font-weight fontWeightBold
    letter-spacing -.01em
    line-height 1
    text-align right
    +above(lg)
      text-align left
      display inline-block
    iframe
      display inline-block
      vertical-align middle
    &:not(:first-child)
      margin-left 1rem
    &:not(:last-child):after
      content '•'
      color #435466
      margin-left 15px
  &__nav-link
    color #fff
    font-size 2rem
    text-decoration none
    letter-spacing .05rem
    position relative
    text-transform uppercase
    padding 5px 0
    display block
    +above(lg)
      font-size fontSizeSmall
      color feldgrauColor
      display inline-block
      padding 0
      &:after
        z-index 3
        left 0
        transition all .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)
        content ''
        display block
        position absolute
        top calc(100% + 5px)
        width 0
        height 3px
    &.nuxt-link-exact-active,
    &:hover
      color mintColor
      &:after
        width 50%
        left 0
        background khakiColor
    &.nuxt-link-exact-active
      pointer-events none

.navbar-toggle
  position relative
  display block
  z-index 10001
  line-height 1
  vertical-align middle
  svg
    width 46px
    path
      transition transform .2s timingFunction
  +above(lg)
    display none

#ToggleNavbar
  position absolute
  border 0
  clip rect(0, 0, 0, 0)
  width 1px
  height 1px
  margin -1px
  padding 0
  overflow hidden
  +below(lg)
    &:checked
      ~ .navbar
        display table
      ~ .navbar-toggle
        path
          stroke #fff
        .top-line
          transform rotate(-45deg) translate3d(0, -10px, 0)
          transform-origin bottom right
          width 45px
        .bottom-line
          transform rotate(45deg) translate3d(0, 10px, 0)
          transform-origin bottom right
          width 45px
        .middle-line
          transform translate3d(200%, 0, 0)
</style>
