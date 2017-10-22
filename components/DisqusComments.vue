<template>
  <aside class="comments">
    <h3>Comentários para: <span>"{{ disqusTitle }}"</span></h3>
    <disqus :shortname="disqusShortname" :title="disqusTitle" :identifier="disqusIdentifier" :url="disqusUrl"></disqus>
  </aside>
</template>

<script>
export default {
  name: 'DisqusComments',
  props: {
    'disqusShortname': {
      type: String,
      default: 'fernandomoreira',
      required: true
    },
    'disqusTitle': {
      type: String,
      required: true
    },
    'disqusIdentifier': {
      type: String,
      required: true
    },
    'disqusUrl': {
      type: String,
      required: true
    }
  },
  components: {
    VueDisqus: () => import('vue-disqus/VueDisqus.vue')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.comments
  background-color: #fff
  border-top: $border-base
  padding: $spacing-base 0 0
  margin-top: $spacing-base
  h3
    font-size: 1.2rem
    margin-top: 0
    span
      opacity: 0.6
      font-weight: 500
</style>
