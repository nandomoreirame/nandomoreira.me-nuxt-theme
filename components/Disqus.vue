<template>
  <aside class="comments">
    <h3>Comentários para: <span>"{{ disqusTitle }}"</span></h3>
    <vue-disqus :shortname="disqusShortname" :title="disqusTitle" :identifier="disqusIdentifier" :url="disqusUrl"></vue-disqus>
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

<style lang="stylus">
.comments
  h3
    font-size 1.2rem
    margin-top 0
    span
      opacity .6
      font-weight fontWeightRegular
</style>
