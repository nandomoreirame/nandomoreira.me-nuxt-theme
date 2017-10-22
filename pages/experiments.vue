<template>
  <main>
    <page-header title="Meus experimentos" :breadcrumbs="breadcrumbs"></page-header>
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
    <meta-tags :title="pageTitle" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'Experiments',
  data () {
    return {
      pageTitle: `Meus experimentos | Fernando Moreira`,
      pageUrl: `${siteUrl}/experiments`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/experiments',
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

<style lang="sass" scoped>
@import "~assets/sass/settings"
.experiments-list
  display: flex
  flex-flow: row wrap
  margin-left: -($spacing-small)
  margin-right: -($spacing-small)
.experiment
  border-radius: 3px
  background-color: #fff
  text-align: center
  box-shadow: 0 8px 20px 0 rgba(224, 224, 224, 0.5)
  padding: 0
  margin: 2rem 0
  flex: 1 0 1
  width: 100%
  margin: 0 $spacing-small $spacing-base
  display: inline-block
  border: 1px solid #eee
  position: relative
  text-decoration: none
  @extend %clearfix
  +media($tablet)
    flex: 1 0 ($container-width/2)-60px
  &__image
    position: relative
    width: 100%
    height: 280px
    overflow: hidden
    img
      width: 100%
    a
      position: absolute
      width: 100%
      top: 0
      right: 0
  &__description a
    color: $feldgrau-color
    text-decoration: none
  &__header
    padding: $spacing-small $spacing-base
  &__meta
    text-transform: uppercase
    opacity: .65
    letter-spacing: .1em
    font-size: .8rem
    padding-top: $spacing-small
    padding-bottom: $spacing-small
  &__title
    font-size: 1.8rem
    margin-top: .2em
    margin-bottom: .2em
</style>
