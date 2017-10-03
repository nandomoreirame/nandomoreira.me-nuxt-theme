<template>
  <div class="hero">
    <div class="hero__inner" itemscope itemtype="http://schema.org/Person">
      <figure>
        <img class="hero__avatar" src="~/assets/images/avatar.png" width="120px" height="120px" itemprop="image" alt="Foto de Fernando">
      </figure>
      <h1>Olá, eu sou o <span itemprop="name">Fernando</span>!</h1>
      <h2 role="presentation">Sou <strong itemprop="jobTitle">desenvolvedor Front-end</strong> e entusiasta da <strong>Experiência do Usuário</strong></h2>
      <nav class="hero__buttons">
        <nuxt-link-button buttonType="ghost-white" buttonSize="large" buttonPermalink="/about">Sobre</nuxt-link-button>
        <!-- <nuxt-link-button buttonType="ghost-white" buttonSize="large" buttonPermalink="/projects">Projetos</nuxt-link-button> -->
        <nuxt-link-button buttonType="ghost-white" buttonSize="large" buttonPermalink="/blog">Blog</nuxt-link-button>
        <nuxt-link-button buttonType="ghost-white" buttonSize="large" buttonPermalink="/experiments">Experimentos</nuxt-link-button>
      </nav>
      <p class="hero__bottom-description">
        <small-bottom-text></small-bottom-text>
      </p>
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
    NuxtLinkButton: () => import('~/components/NuxtLinkButton'),
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
  h2,
  &__avatar,
  &__buttons
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
    font-size: 10vw
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both
    animation-delay: .6s
    +media($tablet)
      font-size: 7vw
    +media($tablet-large)
      font-size: 4vw
  h2
    font-family: $font-family-base
    font-weight: 300
    animation-delay: 1.2s
    font-size: 4vw
    +media($tablet)
      font-size: 3vw
    +media($tablet-large)
      font-size: 1.6vw
  &__bottom-description
    animation-delay: 1.6s
    position: absolute
    bottom: 1rem
    width: 100%
    right: 0
    left: 0
    z-index: 5
    text-align: center
    &, a
      color: #fff
  &__buttons
    animation-delay: 2s
    padding: $spacing-small 0
    @extend %clearfix
    // .nuxt-link-button
    //   width: 200px
</style>
