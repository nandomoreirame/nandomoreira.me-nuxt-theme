<template>
  <footer class="footer">
    <cta-whatsapp></cta-whatsapp>
    <div class="footer__inner">
      <small>
        Made with
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        by <a href="https://twitter.com/oseunando" target="_blank">@oseunando</a>,
        using <a href="https://vuejs.org/" target="_blank">Vuejs</a> and <a href="https://nuxtjs.org" target="_blank">NuxtJS</a>.
        This is an <a href="https://github.com/nandomoreirame/nandomoreira.me" target="_blank">open source code</a>.
      </small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'pageFooter',
  components: {
    CtaWhatsapp: () => import('~/components/CtaWhatsApp')
  }
}
</script>

<style lang="stylus">
.footer
  background-color feldgrauColor
  margin 0 0 spacingLarge
  @extend $clearfix
  +above(md)
    margin-bottom 0
  &__inner
    text-align center
    padding-top spacingSmall
    padding-bottom spacingSmall
    max-width lg
    margin-left auto
    margin-right auto
  small,
  small a
    color honeydewColor
    opacity .75
  svg
    display inline-block
    vertical-align middle
</style>
