<template>
  <article>
    <header>
      <h1>{{ post.title }}</h1>
    </header>
    <main>
      <nuxtent-body :body="post.body"/>
    </main>
    <aside class="comments">
      <div id="disqus_thread"></div>
    </aside>
  </article>
</template>

<script>
/* eslint no-unused-vars: 0, camelcase: 0, no-undef: 0, wrap-iife: 0, func-call-spacing: 0, no-unexpected-multiline: 0 */
export default {
  name: 'article',
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/posts').get(route.path)
    }
  },
  mounted () {
    this.disqus()
  },
  methods: {
    disqus () {
      console.log(this.post)
      var _disqus_thread = document.getElementById('disqus_thread')
      if (typeof _disqus_thread !== 'undefined' && _disqus_thread !== null) {
        var options = {
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
