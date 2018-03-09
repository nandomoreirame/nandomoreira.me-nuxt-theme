<template>
  <div class="UserInfo container--small" itemscope itemtype="http://schema.org/Person">
    <figure class="UserInfo__figure">
      <img src="/images/about/avatar.jpg" alt=""/>
    </figure>
    <div class="UserInfo__bio">
      <h4>O autor</h4>
      <p>Meu nome é <strong><nuxt-link title="Meu nome é Fernando Moreira Costa (muito prazer)" to="/about" itemprop="name">Fernando Moreira Costa</nuxt-link></strong>, sou <strong itemprop="jobTitle">desenvolvedor front-end</strong> e especialista em <strong>WordPress</strong> na <a href="https://onedev.studio" target="_blank">Onedev.studio</a> em <strong>Curitiba/PR</strong>.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo'
  }
</script>

<style lang="stylus" scoped>
.UserInfo
  display flex
  flex-flow row wrap
  background #fff
  border-radius 5px
  padding spacingBase
  box-shadow boxShadowHover
  margin spacingBase auto spacingSmall
  &__bio
    width 100%
    margin-top spacingSmall
    +above(sm)
      padding-left spacingSmall
      margin-top 0
    h4
      margin 0 0 spacingMini
      font-size 2rem
    p
      margin 0
  &__figure
    width 100%
    padding 0
    margin 0
    img
      display block
      height auto
      width 100%
  +above(sm)
    &__figure
      flex 1 0 20%
    &__bio
      flex 1 0 80%
</style>
