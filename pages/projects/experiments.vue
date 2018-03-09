<template>
  <main>
    <page-header title="Meus experimentos" :breadcrumbs="breadcrumbs" :description="pageDescription"></page-header>
    <div class="container">
      <div class="experiments-list">
        <a class="experiment" v-for="(experiment, key) in experiments" :key="key" :href="`https://codepen.io/nandomoreirame/details/${experiment.pen}`" target="_blank" :title="experiment.title">
          <figure class="experiment__image">
            <img :src="`https://codepen.io/oknoblich/pen/${experiment.pen}/image/small.png`" :alt="`Imagem do pen: ${experiment.pen}`">
          </figure>
          <header class="experiment__header">
            <h2 class="experiment__title">{{ experiment.title }}</h2>
            <span class="experiment__meta">ver no codepen.io</span>
          </header>
        </a>
      </div>
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle" :url="pageUrl"/>
  </main>
</template>

<script>
export default {
  name: 'Experiments',
  data () {
    return {
      pageTitle: `Meus experimentos | Fernando Moreira`,
      pageDescription: `Alguns experimentos legais que fiz no Codepen.io`,
      pageUrl: `${process.env.baseUrl}/projects/experiments`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/projects/experiments',
          title: 'Meus experimentos'
        }
      ]
    }
  },
  async asyncData ({ app }) {
    return {
      experiments: await app.$content('/lab').getAll()
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader'),
    LinkButton: () => import('~/components/LinkButton')
  }
}
</script>

<style lang="stylus">
.experiments-list
  display flex
  flex-flow row wrap
  margin-left -(spacingSmall)
  margin-right -(spacingSmall)
.experiment
  border-radius 3px
  background-color #fff
  text-align center
  box-shadow boxShadowBase
  transition box-shadow .2s timingFunction, transform .2s timingFunction
  padding 0
  margin 2rem 0
  flex 1 0 1
  width 100%
  margin 0 spacingSmall spacingBase
  display inline-block
  border 1px solid #eee
  position relative
  text-decoration none
  @extend $clearfix
  &:hover,
  &:focus
    box-shadow boxShadowHover
    transform translate(0, -10px)
  +above(md)
    flex 1 0 ((containerWidth / 2) - 60px)
  &__image
    position relative
    width 100%
    height 280px
    overflow hidden
    img
      width 100%
    a
      position absolute
      width 100%
      top 0
      right 0
  &__description a
    color feldgrauColor
    text-decoration none
  &__header
    padding spacingSmall spacingBase
  &__meta
    text-transform uppercase
    opacity .65
    letter-spacing .1em
    font-size .8rem
    padding-top spacingSmall
    padding-bottom spacingSmall
  &__title
    font-size 1.8rem
    margin-top .2em
    margin-bottom .2em
</style>
