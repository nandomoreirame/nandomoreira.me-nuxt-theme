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

<style lang="stylus">
.alert
  padding spacingSmall
  margin-bottom spacingBase
  background-color rgba(oceanBlueColor, .1)
  border-radius borderRadiusBase
  box-shadow boxShadowBase
  text-align center
</style>
