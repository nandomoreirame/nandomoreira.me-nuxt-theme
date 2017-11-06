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
  text-align center
  box-shadow boxShadowBase
  transition box-shadow .2s timingFunction, transform .2s timingFunction
  &:hover,
  &:focus
    box-shadow boxShadowHover
    transform translate(0, -10px)
</style>
