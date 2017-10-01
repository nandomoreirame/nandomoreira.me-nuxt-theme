<template>
  <aside class="comments">
    <h3>Comentários</h3>
    <div id="disqus_thread"></div>
  </aside>
</template>

<script>
/* eslint no-unused-vars: 0, camelcase: 0, no-undef: 0, wrap-iife: 0, func-call-spacing: 0, no-unexpected-multiline: 0 */
export default {
  name: 'comments',
  mounted () {
    this.disqus()
  },
  methods: {
    disqus () {
      const _disqus_thread = document.getElementById('disqus_thread')
      if (typeof _disqus_thread !== 'undefined' && _disqus_thread !== null) {
        const options = {
          scriptUrl: '//fernandomoreira.disqus.com/embed.js',
          laziness: 1,
          throttle: 250,
          disqusConfig: function () {
            this.page.title = `${this.post.title}`
            this.page.url = `${baseUrl}${this.post.permalink}`
            this.page.identifier = `${this.post.permalink}`
          }
        }

        disqusLoader('#disqus_thread', options)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.comments
  background-color: #f8f9f8
  padding: 15px
  margin: 15px 0

  h3
    font-size: 2.2rem
</style>
