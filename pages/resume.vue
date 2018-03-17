<template>
  <main>
    <div class="resume" v-html="resume"/>
    <blockquote>
      “I have no special talent. I am only passionately curious.” ⏤ Albert Einstein
    </blockquote>
    <meta-tags/>
  </main>
</template>

<script>
  import resume from '~/content/pages/resume.md'

  export default {
    name: 'Resume',
    layout: 'blank',
    computed: {
      resume () {
        return resume
      }
    },
    components: {
      MetaTags: () => import('~/components/MetaTags')
    }
  }
</script>

<style lang="stylus">
body
  background-color #f1f8f9
  border none
.resume,
blockquote
  max-width md
  margin spacingBase auto
.resume
  @extend $article
  h1
    font-size 3rem
    margin-top 0
  .avatar
    float left
    width 220px
    display inline-block
    position relative
    margin spacingSmall spacingBase spacingBase 0
    line-height 1
    &:before
      content ''
      display block
      z-index 3
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      border 4px solid primaryColor
      transform translate3d(-5%, -5%, 0)
      transition border-color .2s timingFunction, transform .2s timingFunction
    &:hover:before
      border-color baseColor
      transform translate3d(5%, 5%, 0)
    img
      position relative
      z-index 2
      max-width 100%
      width 100%
      height auto
      display inline-block
</style>
