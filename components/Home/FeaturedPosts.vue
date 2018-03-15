<template>
  <section id="FeaturedPosts" class="FeaturedPosts HomeSection">
    <div class="HomeSection__inner">
      <header class="HomeSection__header">
        <h2>Últimos Artigos</h2>
      </header>
      <div class="container">
        <div class="FeaturedPosts__list">
          <post-item v-for="(post, i) in posts" :key="i" :count="i" :post="post"/>
        </div>
        <div class="HomeSection__button">
          <link-button buttonType="ghost" buttonPermalink="/blog">mais artigos →</link-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'FeaturedPosts',
    props: {
      posts: {
        type: Array,
        require: true
      }
    },
    components: {
      PostItem: () => import('~/components/PostItem'),
      LinkButton: () => import('~/components/LinkButton'),
    }
  }
</script>

<style lang="stylus">
.FeaturedPosts
  &__list
    display flex
    position relative
    flex-flow row
    flex-wrap wrap
    margin-left -(spacingSmall)
    margin-right -(spacingSmall)
    padding 40px 0 0
</style>
