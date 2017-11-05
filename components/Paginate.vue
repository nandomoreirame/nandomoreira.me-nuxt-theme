<template>
  <div class="paginate">
    <ul class="paginate__list">
      <li v-for="page in paginate" :key="page.id">
        <nuxt-link :to="`/blog?page=${page}`">{{ page }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Paginate',
    data () {
      return {
        paginate: {
          0: '1',
          1: '2',
          2: '3'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.paginate
  list-style none
  padding 0
  margin spacingBase 0
  text-align center
  li
    display inline-block
    margin-right 5px
  a
    text-decoration none
    display block
    padding 0 spacingMini
    border 1px solid mintColor
    line-height 32px
    border-radius borderRadiusBase
    background-color #fff
    &:hover,
    &.nuxt-link-exact-active
      background-color mintColor
      color #fff
</style>
