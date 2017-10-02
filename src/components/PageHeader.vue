<template>
  <header class="page__header">
    <div class="container">
      <h1 class="page__title">{{ title }}</h1>
      <p class="page__description">{{ description }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: [
    'title',
    'description'
  ]
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/vars"
@import "~assets/sass/placeholders"

.page
  &__header
    background-color: $color-primary
    padding: 10rem 0 3rem
    max-height: 320px
    @extend %clearfix
  &__title
    text-transform: uppercase
    letter-spacing: .1em
    font-size: 2.5rem
    color: #fff
    margin: 0
  &__description
    color: #fff
    font-size: 1.24rem
    opacity: .8
</style>
