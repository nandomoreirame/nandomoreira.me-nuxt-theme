<template>
  <a href="#MainContent" tabindex="1" class="SkipToContent sr-only sr-only-focusable">
    <span class="skiplink-text">Pular para o conteúdo principal</span>
  </a>
</template>

<script>
  export default {
    name: 'SkipToContent'
  }
</script>

<style lang="stylus">
.SkipToContent
  display block
  margin 0
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)
  width 0
  height 0
  &:focus
    line-height 80px
    font-size 1.125rem
    text-align center
    background-color baseColor
    color #fff
    width auto
    height auto
    clip auto
    position fixed
    z-index 20000
    top 5px
    left 5px
    right 5px
    outline 3px #fff solid
</style>
