<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'layoutBlank'
  }
</script>

<style lang="stylus">
.page-enter-active,
.page-leave-active
  transition: opacity .5s, transform .5s
.page-enter,
.page-leave-active
  opacity: 0
  transform translate3d(-10px, 0, 0)
</style>
