<template>
  <footer class="footer container">
    <div class="footer__inner">
      <div class="footer__text">
        <small>
          Made with ♥️ by <a href="https://twitter.com/oseunando" target="_blank">@oseunando</a>,
          using <a href="https://vuejs.org/" target="_blank">Vuejs</a> and <a href="https://nuxtjs.org" target="_blank">NuxtJS</a>.
          This is an <a href="https://github.com/nandomoreirame/nandomoreirame.github.io" target="_blank">open source code</a>.
        </small>
      </div>
      <div class="footer__social-icons">
        <social-icons iconColor="#435466"></social-icons>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'pageFooter',
  components: {
    SocialIcons: () => import('~/components/SocialIcons')
  }
}
</script>

<style lang="sass">
@import "~assets/sass/settings"
.footer
  margin-top: $spacing-base
  border-top: 2px solid $mint-color
  @extend %clearfix

  &__inner
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-items: center
    align-content: center

  &__text
    text-align: left
    flex: 0 0 60%

  &__text,
  &__social-icons
    line-height: 60px
    vertical-align: middle

  &__social-icons
    text-align: right
    flex: 0 0 30%
    .social
      margin: 0
      > .social__item
        width: percentage(1/5)
        margin-right: 0
</style>
