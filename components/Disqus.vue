<template>
  <aside class="comments">
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
