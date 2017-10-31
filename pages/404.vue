<template>
  <div class="error404">
    <div class="error404__inner">
      <h1>Oops, nada por aqui.</h1>
      <h2 role="presentation">
        Esse é o terrível erro <strong>404</strong>.
        <span>Infelizmente a página que você está tentando acessar não foi localizada.</span>
      </h2>
      <link-button buttonType="ghost-white" buttonPermalink="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left">
          <line x1="20" y1="12" x2="4" y2="12"/>
          <polyline points="10 18 4 12 10 6"/>
        </svg>
        <span>Voltar para home</span>
      </link-button>
      <div class="error404__social-icons">
        <social-icons></social-icons>
      </div>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription"></meta-tags>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  layout: 'blank',
  data () {
    return {
      pageTitle: `Erro 404 | Fernando Moreira`,
      pageDescription: `Infelizmente a página que você está tentando acessar não foi localizada.`
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    LinkButton: () => import('~/components/LinkButton'),
    SocialIcons: () => import('~/components/SocialIcons')
  }
}
</script>

<style lang="stylus">
#__nuxt,
#__nuxt > div:last-child
  width 100%
  height 100%
.error404
  display table
  width 100%
  height 100%
  background-color $mint-color
  &__inner
    display table-cell
    vertical-align middle
    text-align center
    padding-right 2rem
    padding-left 2rem
    +above($tablet)
      padding-right 5rem
      padding-left 5rem
    +above($desktop)
      padding-right 10rem
      padding-left 10rem
  h1,
  h2
    padding-bottom $spacing-small
    color #fff
    margin 0
  h1
    font-size 10vw
    +above($mobile-large)
      font-size 8vw
    +above($tablet)
      font-size 7vw
    +above($tablet-large)
      font-size 4vw
  h2
    font-family $font-family-base
    font-weight 300
    font-size 7vw
    span
      display block
    strong
      color $khaki-color
      text-decoration underline
    +above($mobile-large)
      font-size 5vw
    +above($tablet)
      font-size 4vw
    +above($tablet-large)
      font-size 2vw
  &__social-icons
  &__bottom-description
    position absolute
    bottom 1rem
    width 100%
    right 0
    left 0
    z-index 5
    text-align center
    &, a
      color #fff
</style>
