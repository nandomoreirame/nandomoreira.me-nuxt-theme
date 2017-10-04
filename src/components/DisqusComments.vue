<template>
  <aside class="comments">
    <div class="container">
      <h3>Comentários para: <span>"{{disqusTitle}}"</span></h3>
      <vue-disqus shortname="fernandomoreira" :title="disqusTitle" :identifier="disqusIdentifier" :url="disqusUrl"></vue-disqus>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'DisqusComments',
  props: [
    'disqusTitle',
    'disqusIdentifier',
    'disqusUrl'
  ],
  components: {
    VueDisqus: () => import('vue-disqus/VueDisqus.vue')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.comments
  background-color: #fff
  padding: 30px 0
  margin-top: 15px
  .container
    max-width: $tablet
  h3
    font-size: 1.2rem
    span
      opacity: 0.6
      font-weight: 500
</style>
