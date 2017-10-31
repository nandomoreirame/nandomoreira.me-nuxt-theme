<template>
  <div :class="className">
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      className: {
        type: String,
        default: 'alert'
      }
    }
  }
</script>

<style lang="stylus" scoped>
.alert
  padding $spacing-small
  margin-bottom $spacing-base
  background-color rgba($ocean-blue-color, .1)
  border-radius $border-radius-base
  box-shadow $box-shadow-base
  text-align center
</style>
