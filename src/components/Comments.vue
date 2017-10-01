<template>
  <aside class="comments">
    <div class="container">
      <h3>Comentários para: <span>"{{disqusTitle}}"</span></h3>
      <vue-disqus shortname="fernandomoreira" :title="disqusTitle" :identifier="disqusIdentifier" :url="disqusUrl"></vue-disqus>
    </div>
  </aside>
</template>

<script>
/* eslint no-unused-vars: 0, camelcase: 0, no-undef: 0, wrap-iife: 0, func-call-spacing: 0, no-unexpected-multiline: 0 */
export default {
  name: 'Comments',
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
.comments
  background-color: #f8f9f8
  padding: 30px 0
  margin-top: 15px

  h3
    font-size: 1.2rem

    span
      opacity: 0.6
      font-weight: 500
</style>
