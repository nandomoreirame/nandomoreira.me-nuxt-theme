<template>
  <header class="pageHeader" :class="{ 'pageHeader--background': image }">
    <figure v-if="image" class="pageHeader__image" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
      <meta itemprop="url" :content="image">
      <img :src="image" :alt="`Imagem de: ${title}`">
    </figure>
    <div class="container">
      <h1 class="pageHeader__title">{{ title }}</h1>
      <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
      <p v-if="description" itemprop="description" class="pageHeader__description">{{ description }}</p>
      <div class="pageHeader__meta">
        <span v-if="author">by <span itemprop="author">Fernando Moreira</span></span>
        <span v-if="date" itemprop="datePublished" :content="date">{{ date | moment("MMMM, YYYY") }} </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    'title': {
      type: String,
      required: true
    },
    'description': {
      type: String
    },
    'image': {
      type: String
    },
    'author': {
      type: Boolean,
      default: false
    },
    'date': {
      type: [String, Date]
    },
    'breadcrumbs': {
      type: Array
    }
  },
  components: {
    Breadcrumb: () => import('~/components/Breadcrumb')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.pageHeader
  background-color: $primary-color
  padding: 10rem 0 1rem
  margin-bottom: 3rem
  min-height: 320px
  @extend %clearfix
  &--background
    position: relative
    overflow: hidden
    .container
      position: relative
      z-index: 2
  &__image
    position: absolute
    width: 100%
    top: 20%
    left: 50%
    right: 0
    transform: translate3d(-50%, -20%, 0)
    z-index: 1
    opacity: .1
    &, img
      width: 100%
  &__title
    text-transform: uppercase
    letter-spacing: .1em
    font-size: 2.5rem
    color: #fff
    margin: 0
  &__description
    font-weight: 300
    font-style: 400
    font-size: 1.25rem
    line-height: 1.4
    color: #fff
  &__meta
    color: #fff
    text-transform: uppercase
    opacity: .65
    letter-spacing: .1em
    font-size: .8rem
    padding-top: 1rem
    padding-bottom: 1rem
    span
      display: inline-block
      margin-right: 0.5rem
</style>
