<template>
  <div class="hero">
    <div class="hero__inner" itemscope itemtype="http://schema.org/Person">
      <h1>Olá, <br>Eu sou o <span itemprop="name">Fernando</span>.</h1>
      <h2 role="presentation">
        <strong itemprop="jobTitle">Desenvolvedor front-end</strong> e <strong>WordPress</strong> na <strong><a href="https://onedevstudio.github.io/" target="_blank">Onedev Studio</a></strong> em Curitiba/PR.
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
  name: 'Home',
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
#__nuxt > div:last-child,
.hero
  width: 100%
  height: 100%

.hero
  display: table
  background: $primary-color

  &__inner
    text-align: left
    padding: 2rem 1rem
    +media($tablet)
      padding: 8rem 10rem

  &__avatar
    border-radius: 50%
    box-shadow: 0 2px 10px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .1)

  h1,
  h2
    padding-bottom: $spacing-small
    color: #fff
    margin: 0

  h1
    text-shadow: 0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.2)
    +media($tablet-large)
      font-size: 7rem

  h2
    font-family: $font-family-base
    font-weight: 300
    strong
      color: $tertiary-color
      text-decoration: underline
    +media($tablet-large)
      font-size: 1.8rem

  &__social-icons
    animation-delay: 2.2s
</style>
