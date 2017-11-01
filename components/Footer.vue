<template>
  <footer class="footer container">
    <div class="footer__inner">
      <div class="footer__text">
        <small>
          Made with
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          by <a href="https://twitter.com/oseunando" target="_blank">@oseunando</a>,
          using <a href="https://vuejs.org/" target="_blank">Vuejs</a> and <a href="https://nuxtjs.org" target="_blank">NuxtJS</a>.
          This is an <a href="https://github.com/nandomoreirame/nandomoreira.me" target="_blank">open source code</a>.
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

<style lang="stylus">
.footer
  margin-top $spacing-base
  margin-bottom $spacing-large
  border-top $border-base
  @extend $clearfix
  +above($tablet)
    margin-bottom 0
  &__inner
    display flex
    flex-wrap wrap
    text-align center
    align-items center
    align-content center
    justify-content space-between
    flex-direction row
    +above($tablet)
      flex-wrap nowrap
  &__text
    order 2
    flex 0 0 100%
    +above($tablet)
      order 1
      text-align left
      flex 0 0 60%
    svg
      display inline-block
      vertical-align middle
  &__text,
  &__social-icons
    padding-top $spacing-small
    padding-bottom $spacing-small
    +above($tablet)
      line-height 60px
      vertical-align middle
  &__social-icons
    order 1
    flex 0 0 100%
    +above($tablet)
      order 2
      text-align right
      flex 0 0 30%
    .social
      margin 0
      > .social__item
        width percentage(1/5)
        margin-right 0
</style>
