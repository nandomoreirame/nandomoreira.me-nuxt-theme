<template>
  <div class="hero">
    <div class="hero__inner" itemscope itemtype="http://schema.org/Person">
      <h1>Olá, <br>Eu sou o <span itemprop="name">Fernando</span>.</h1>
      <h2 role="presentation">
        <strong itemprop="jobTitle">Desenvolvedor front-end</strong> e entusiasta da <strong>experiência do usuário</strong>.
      </h2>
      <navbar></navbar>
      <div class="hero__social-icons">
        <social-icons></social-icons>
      </div>
    </div>
    <meta-tags></meta-tags>
  </div>
</template>

<script>
export default {
  name: 'home',
  layout: 'blank',
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    Navbar: () => import('~/components/Navbar'),
    SocialIcons: () => import('~/components/SocialIcons'),
    SmallBottomText: () => import('~/components/SmallBottomText.vue')
  }
}
</script>

<style lang="sass">
@import "~assets/sass/settings"
#__nuxt,
#__nuxt > div:last-child
  width: 100%
  height: 100%
.navbar
  opacity: 0
  animation: slide-in-fwd-center .6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
  animation-delay: 1.8s
</style>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.hero
  display: table
  width: 100%
  min-height: 100vh
  background-image: $primary-gradient-color
  &__inner
    text-align: left
    padding: 2rem 1rem
    // position: absolute
    // width: 100%
    // height: 100%
    +media($tablet)
      padding: 8rem 10rem
  h2,
  &__avatar,
  &__social-icons
    opacity: 0
    animation: slide-in-fwd-center .6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both
  &__avatar
    border-radius: 50%
    box-shadow: 0 2px 10px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .1)
    animation-delay: .2s
  h1,
  h2
    padding-bottom: $spacing-small
    color: #fff
    margin: 0
  h1
    // font-size: 6rem
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both
    animation-delay: .6s
    text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.2)
    // +media($mobile-large)
    //   font-size: 8vw
    // +media($tablet)
    //   font-size: 7vw
    +media($tablet-large)
      font-size: 7rem
  h2
    font-family: $font-family-base
    font-weight: 300
    animation-delay: 1.2s
    // font-size: 7vw
    strong
      color: $tertiary-color
      text-decoration: underline
    // +media($mobile-large)
    //   font-size: 5vw
    // +media($tablet)
    //   font-size: 4vw
    +media($tablet-large)
      font-size: 1.8rem
  &__social-icons
    animation-delay: 2.2s
</style>
