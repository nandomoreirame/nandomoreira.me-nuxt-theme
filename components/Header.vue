<template>
  <header class="header header--fixed">
    <a tabindex="1" class="skippy sr-only sr-only-focusable" href="#content">
      <div class="container">
        <span class="skiplink-text">Ir para o conteúdo principal</span>
      </div>
    </a>
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
  },
  data () {
    return {
      classFixedScrolling: 'header--scrolling',
      classFixedUp: 'header--up',
      classFixedDown: 'header--down',
      headerHeight: null,
      headerBottomPos: null,
      headerRect: null,
      currentScrollAffix: null,
      distanceFromTop: null,
      lastDistanceFromTop: null,
      scrollingUp: null,
      scrollingDown: null
    }
  },
  methods: {
    setDynamicVariables () {
      this.distanceFromTop = window.pageYOffset
      this.headerHeight = this.$el.offsetHeight
      this.headerRect = this.$el.getBoundingClientRect()
      this.headerBottomPos = this.distanceFromTop + this.headerRect.bottom
      this.screenBottomPos = this.distanceFromTop + window.innerHeight

      if (this.distanceFromTop > this.lastDistanceFromTop) {
        this.scrollingDown = true
        this.scrollingUp = false
      } else {
        this.scrollingUp = true
        this.scrollingDown = false
      }
    },
    onScroll () {
      this.setDynamicVariables()
      this.lastDistanceFromTop = this.distanceFromTop

      if (this.lastDistanceFromTop > 0) {
        this.$el.classList.add(this.classFixedScrolling)
        if (this.scrollingUp) {
          this.$el.classList.add(this.classFixedUp)
          this.$el.classList.remove(this.classFixedDown)
        } else {
          this.$el.classList.remove(this.classFixedUp)
        }

        if (this.scrollingDown && this.lastDistanceFromTop > 0) {
          this.$el.classList.add(this.classFixedDown)
          this.$el.classList.remove(this.classFixedUp)
        } else {
          this.$el.classList.remove(this.classFixedDown)
        }
      } else {
        this.$el.classList.remove(this.classFixedScrolling)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="stylus">
.skippy
  display block
  padding 1em
  color #fff
  position absolute
  background-color feldgrauColor
  outline 0
.header
  display flex
  flex-direction row
  flex-wrap nowrap
  justify-content space-between
  align-items center
  align-content center
  min-height 80px
  padding 0 spacingSmall
  transition all .25s timingFunction
  background-color #fff
  box-shadow boxShadowBase
  &--fixed
    position fixed
    top 0
    right 0
    left 0
    z-index 10
  // &--scrolling
  //   background-color #fff
  //   box-shadow boxShadowBase
  &--down
    transform translate3d(0, -150%, 0)
  &--up
    transform translate3d(0, 0, 0)
  &__back
    margin 0
    padding 0
    position relative
    overflow hidden
    opacity 1
    transform translate3d(0,0,0)
    transition opacity .2s timingFunction, transform .2s timingFunction
    &.nuxt-link-exact-active
      opacity 0
      transform translate3d(-100%,0,0)
      pointer-events none
    svg, span
      line-height 1
      vertical-align middle
      display inline-block
    span
      opacity 0
      color #435466
      margin-left .8rem
      transform translate3d(-100%, 0, 0)
      transition .2s transform cubic-bezier(0.29, 0.18, 0.26, 0.83), .2s opacity cubic-bezier(0.29, 0.18, 0.26, 0.83)
    &:hover,
    &:focus
      span
        opacity 1
        transform translate3d(0, 0, 0)
</style>
