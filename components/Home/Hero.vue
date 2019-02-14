<template>
  <page-header :isHero="true" :image="`https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9`">
    <div slot="inner" class="container" itemscope itemtype="http://schema.org/Person">
      <h1>Oi, eu sou o <span><nuxt-link title="Meu nome é Fernando Moreira Costa (muito prazer)" to="/about" itemprop="name">Fernando</nuxt-link></span>!</h1>
      <h2 role="presentation">
        Sou <strong itemprop="jobTitle">desenvolvedor front-end</strong> na localizado em <strong>Curitiba/PR</strong>.
        <small>Se você está em busca de um programador freelancer front-end, WordPress, PHP ou JavaScript entre em contato: <a href="mailto:nandomoreira.me@gmail.com">nandomoreira.me[arroba]gmail.com</a> ou através das redes sociais abaixo.</small>
      </h2>
      <div class="pageHeader__social-icons">
        <social-icons iconColor="#435466"/>
      </div>
    </div>
  </page-header>
</template>

<script>
  export default {
    name: 'HomeHero',
    components: {
      PageHeader: () => import('~/components/PageHeader'),
      SocialIcons: () => import('~/components/SocialIcons')
    }
  }
</script>

<style lang="stylus">
.pageHeader
  &.pageHeader--hero
    text-align center
    background-color #f7f9fb
    width 100%
    clip-path initial
    margin 0
    background-repeat no-repeat
    background-size cover
    &:before
      content ''
      display block
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      background-color rgba(#fff, .5)
    .pageHeader__inner
      padding-top 3.75rem
      background none transparent
      &:before
        display none
    +above(md)
      display flex
      align-items center
      justify-content center
      min-height 70vh
      .pageHeader__inner
        padding-top 7.5rem
    h1, h2
      display block
      max-width 64rem
      padding-left spacingSmall
      padding-right spacingSmall
      margin spacingSmall auto
      line-height 1.35
    h1
      font-size 2.6rem
      +above(sm)
        font-size 3.8rem
      +above(md)
        font-size 5.6rem
      span
        color primaryColor
      &::after
        content ''
        overflow hidden
        background-color primaryColor
        height 20px
        width 100%
        clip-path polygon(0 0, 100% 0, 100% 100%, 0 5%)
        display block
    h2
      font-family fontFamilyBase
      font-weight fontWeightLight
      color grayColor
      font-size 1.8rem
      +above(md)
        font-size 2.4rem
      a
        color linkColor
        text-decoration underline
      small
        display block
        font-size 1.4rem
        margin-top  spacingMini
        +above(md)
          font-size 1.8rem
  &__social-icons
    padding-top spacingSmall
</style>
