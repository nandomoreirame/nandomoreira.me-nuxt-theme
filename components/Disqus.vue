<template>
  <aside class="comments">
    <div class="comments__inner container--small">
      <h3>Gostou? Então comenta ae!</h3>
      <vue-disqus :shortname="disqusShortname" :title="disqusTitle" :identifier="disqusIdentifier" :url="disqusUrl"></vue-disqus>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Disqus',
  props: {
    'disqusShortname': {
      type: String,
      default: 'fernandomoreira'
    },
    'disqusTitle': {
      type: String
    },
    'disqusIdentifier': {
      type: String
    },
    'disqusUrl': {
      type: String
    }
  },
  components: {
    VueDisqus: () => import('vue-disqus/VueDisqus.vue')
  }
}
</script>

<style lang="stylus" scoped>
.comments
  padding spacingBase 0
  border-top borderBase
  margin-top spacingBase
  background-color #fff
  @extend $clearfix
  h3
    font-size 1.75rem
    margin-top 0
</style>
