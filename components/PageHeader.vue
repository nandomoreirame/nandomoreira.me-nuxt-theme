<template>
  <header class="pageHeader" :class="{ 'pageHeader--background': image }" :style="(image ? `background-image: url(${image})` : '')">
    <div class="pageHeader__inner">
      <figure v-if="image || shareImage" class="pageHeader__image" itemprop="image" itemscope itemtype="http://schema.org/ImageObject">
        <meta itemprop="url" :content="shareImage">
        <img v-if="image" :src="image" :alt="`Imagem de: ${title}`">
      </figure>
      <div class="container">
        <h1 class="pageHeader__title" itemprop="headline">{{ title }}</h1>
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
        <p v-if="description" itemprop="description" class="pageHeader__description">{{ description }}</p>
        <div class="pageHeader__meta">
          <span v-if="date" itemprop="datePublished" :content="date">Publicado em {{ date | moment("MMMM") }} de {{ date | moment("YYYY") }} </span>
          <span v-if="author">por <span itemprop="author">Fernando Moreira</span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const { siteUrl } = require('~/utilities/Helpers')

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
    'shareImage': {
      type: String,
      default: `${siteUrl}/images/social.jpg`
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
@import "~sass/settings"
.pageHeader
  padding: 0
  margin-bottom: 3rem
  min-height: 320px
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%)
  overflow: hidden
  position: relative
  @extend %clearfix
  &:before
    content: ''
    display: block
    position: absolute
    width: 100%
    height: 50px
    background-color: $feldgrau-color
    animation: bounceIn 1s both
    animation-delay: .2s
    bottom: 0
    left: 0
    right: 0

  &--background
    overflow: hidden
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 100%
    .container
      position: relative
      z-index: 2

  &__inner
    padding: 10rem 0 5rem
    background-color: rgba($mint-color, .95)

  &__image
    opacity: 0
    visibility: hidden
    display: none

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

@keyframes bounceIn
  0%
    transform: translateY(500px)
    animation-timing-function: ease
  66%
    transform: translateY(-5px)
    animation-timing-function: ease
  100%
    transform: translateY(5px)
    animation-timing-function: ease

</style>
