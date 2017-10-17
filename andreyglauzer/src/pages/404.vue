<template>
  <div class="hero">
    <div class="hero__inner">
      <h1>Oops, nada por aqui.</h1>
      <h2 role="presentation">
        Esse é o terrível erro <strong>404</strong>.
        <span>Infelizmente a página que você está tentando acessar não foi localizada.</span>
      </h2>
      <navbar></navbar>
      <div class="hero__social-icons">
        <social-icons></social-icons>
      </div>
    </div>
    <meta-tags :title="pageTitle"></meta-tags>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  layout: 'blank',
  data () {
    return {
      pageTitle: `Erro 404 | Fernando Moreira`
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    Navbar: () => import('~/components/Navbar'),
    SocialIcons: () => import('~/components/SocialIcons')
  }
}
</script>

<style lang="sass">
@import "~assets/sass/settings"
#__nuxt,
#__nuxt > div:last-child
  width: 100%
  height: 100%
.hero
  display: table
  width: 100%
  height: 100%
  background-color: $primary-color
  &__inner
    display: table-cell
    vertical-align: middle
    text-align: center
    padding-right: 2rem
    padding-left: 2rem
    +media($tablet)
      padding-right: 5rem
      padding-left: 5rem
    +media($desktop)
      padding-right: 10rem
      padding-left: 10rem
  &__avatar
    border-radius: 50%
    box-shadow: 0 2px 10px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .1)
  h1,
  h2
    padding-bottom: $spacing-small
    color: #fff
    margin: 0
  h1
    font-size: 10vw
    text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.2)
    +media($mobile-large)
      font-size: 8vw
    +media($tablet)
      font-size: 7vw
    +media($tablet-large)
      font-size: 4vw
  h2
    font-family: $font-family-base
    font-weight: 300
    font-size: 7vw
    span
      display: block
    strong
      color: $tertiary-color
      text-decoration: underline
    +media($mobile-large)
      font-size: 5vw
    +media($tablet)
      font-size: 4vw
    +media($tablet-large)
      font-size: 2vw
  .navbar
  &__social-icons
  &__bottom-description
    position: absolute
    bottom: 1rem
    width: 100%
    right: 0
    left: 0
    z-index: 5
    text-align: center
    &, a
      color: #fff
</style>
