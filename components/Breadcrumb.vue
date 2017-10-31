<template>
  <ol v-if="breadcrumbs" class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
    <li class="breadcrumb__item" v-for="(item, key) in breadcrumbs" :key="key" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
      <nuxt-link class="breadcrumb__link" v-bind:class="{ 'breadcrumb__link--active': item.active }" :to="item.url" :title="item.title" itemprop="item">
        <span itemprop="name">{{ item.title }}</span>
        <meta itemprop="position" :content="`${position = (key+1)}`"/>
      </nuxt-link>
      <span class="breadcrumb__divider">&raquo;</span>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: [
    'breadcrumbs'
  ]
}
</script>

<style lang="stylus" scoped>
.breadcrumb
  margin .2rem 0 1rem
  list-style none
  padding 0
  &__item
    display inline-block
    font-size .85ren
    &:first-child a
      padding-left 0
    &:last-child > span
      display none
  &__link,
  &__divider
    color #fff
    opacity .8
  &__link
    text-decoration none
    padding-left .5rem
    padding-right .5rem
    &--active,
    &:hover
      color $khaki-color
      text-decoration underline
    &--active
      pointer-events none
</style>
