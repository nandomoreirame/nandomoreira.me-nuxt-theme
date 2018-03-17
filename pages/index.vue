<template>
  <div class="home">
    <home-hero/>
    <featured-posts :posts="featuredPosts"/>
    <last-project :project="lastProject"/>
    <last-shots/>
    <home-skills/>
    <meta-tags/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    async asyncData ({ app, store }) {
      if (!store.state.featuredPosts.length) {
        const posts = await app.$content('/posts').getAll()
        store.commit('SET_FEATURED_POSTS', posts.filter((post, i) => i < 3))
      }

      if (!store.state.lastProject) {
        const projects = await app.$content('/projects').getAll()
        store.commit('SET_LAST_PROJECT', projects[0])
      }
    },
    computed: {
      ...mapState({
        featuredPosts: state => state.featuredPosts,
        lastProject: state => state.lastProject
      })
    },
    components: {
      MetaTags: () => import('~/components/MetaTags'),
      HomeHero: () => import('~/components/Home/Hero'),
      FeaturedPosts: () => import('~/components/Home/FeaturedPosts'),
      LastProject: () => import('~/components/Home/LastProject'),
      LastShots: () => import('~/components/Home/LastShots'),
      HomeSkills: () => import('~/components/Home/HomeSkills')
    }
  }
</script>

<style lang="stylus">
.HomeSection
  width 100%
  position relative
  overflow hidden
  @extend $clearfix
  &__inner
    padding 0
    margin-bottom spacingLarge
    +above(md)
      padding 8rem 0
      margin-bottom 0
  &__button
    text-align center
    +above(md)
      position absolute
      bottom spacingBase
      left 0
      right 0
    a
      text-transform uppercase
  &__header
    text-align center
    background-color baseColor
    padding spacingSmall
    margin-bottom spacingBase
    position relative
    +above(md)
      position absolute
      top 0
      left 0
      right 0
    h2
      color #fff
      margin 0
    &:before
      position absolute
      content ''
      top 100%
      left 50%
      width 0
      height 0
      border-top 20px baseColor solid
      border-right 20px solid transparent
      border-bottom 20px solid transparent
      border-left 20px solid transparent
      margin-left -20px
</style>
