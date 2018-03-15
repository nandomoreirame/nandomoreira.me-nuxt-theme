<template>
  <div class="Spinner" :class="{ 'Spinner--small': isSmall }">
    <svg class="Spinner__container" viewBox="0 0 52 52">
      <circle class="Spinner__path" cx="26px" cy="26px" r="20px" fill="none" stroke-width="4px"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Spinner',
    props: {
      'isSmall': {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
.Spinner
  position relative
  display block
  margin 0 auto
  &__container
    width 60px
    height 60px
    animation SpinnerRotate 2s linear infinite
  &__path
    stroke rgba(mintColor, .8)
    animation SpinnerDash 1.5s ease-in-out infinite
  &--small
    .Spinner__container
      width 40px
      height 40px

@keyframes SpinnerRotate
  100%
    transform rotate(360deg)

@keyframes SpinnerDash
  0%
    stroke-dasharray 1, 150
    stroke-dashoffset 0
  50%
    stroke-dasharray 90, 150
    stroke-dashoffset -35
  100%
    stroke-dasharray 90, 150
    stroke-dashoffset -124

</style>
