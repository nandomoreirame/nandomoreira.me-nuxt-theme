<template>
  <main>
    <div class="hero">
      <div class="hero__inner">
        <h1>Olá, eu sou o <span>Fernando</span>!</h1>
        <h2>Sou desenvolvedor <strong>Front-end</strong> e entusiasta da <strong>Experiência do Usuário</strong></h2>
        <nav class="hero__buttons">
          <nuxt-link to="/about">Sobre mim</nuxt-link>
          <nuxt-link to="/projects">Projetos</nuxt-link>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </nav>
        <p class="hero__bottom-description">
          <small-bottom-text></small-bottom-text>
        </p>
      </div>
    </div>
    <meta-tags></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'home',
  layout: 'blank',
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    SmallBottomText: () => import('~/components/SmallBottomText.vue')
  }
}
</script>

<style lang="sass">
#__nuxt,
#__nuxt > div:last-child
  width: 100%
  height: 100%

.hero__bottom-description
  &, a
    color: #fff
</style>

<style lang="sass" scoped>
@import "~assets/sass/vars"
@import "~assets/sass/mixins"
@import "~assets/sass/placeholders"

main,
.hero
  width: 100%
  height: 100%
  background-color: $color-primary

.hero
  display: table
  &__buttons a
    margin: 0 10px
    font-size: 1rem
    text-transform: uppercase
    display: inline-block
    text-align: center
    font-weight: bold
    padding: .8rem 0
    width: 200px
    border: 3px solid #fff
    color: #fff
    border-radius: 2px
    position: relative
    box-shadow: 0 2px 10px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .1)
    text-decoration: none
    transition: .2s background-color ease-in-out, .2s color ease-in-out

    &:hover,
    &:active,
    &:focus
      background-color: rgba(#fff, .2)

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

  h1
    font-size: 10vw
    color: #fff

    +media($tablet)
      font-size: 7vw

    +media($tablet-large)
      font-size: 4vw

  h2
    font-family: $font-family-base
    font-weight: 300
    color: #fff
    font-size: 4vw

    +media($tablet)
      font-size: 3vw

    +media($tablet-large)
      font-size: 1.6vw

  &__bottom-description
    position: absolute
    bottom: 1rem
    width: 100%
    right: 0
    left: 0
    z-index: 5
    text-align: center
</style>
