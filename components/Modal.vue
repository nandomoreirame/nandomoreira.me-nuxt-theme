<template>
  <transition name="Modal">
    <div class="Modal">
      <spinner/>
      <button class="Modal__close" @click="toggleModal()">&times;</button>
      <div class="Modal__overlay" @click="toggleModal()"/>
      <div class="Modal__wrapper">
        <div class="Modal__inner">
          <div class="Modal__container">
            <div class="Modal__header">
              <slot name="header"/>
            </div>
            <div class="Modal__body">
              <slot name="body"/>
            </div>
            <div class="Modal__footer">
              <slot name="footer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Modal',
    mounted () {
      document.body.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
          this.toggleModal()
        }
      })
    },
    methods: {
      ...mapActions([
        'toggleModal'
      ])
    },
    components: {
      Spinner: () => import('~/components/Spinner')
    }
  }
</script>

<style lang="stylus">
.Modal
  z-index 9996
  &, &__overlay, &__wrapper
    position fixed
    top 0
    left 0
    width 100%
    height 100%
  &__overlay
    background-color rgba(#000, .8)
    transition opacity .3s ease
    z-index 9997
  &__wrapper
    display table
    position relative
    z-index 9998
    pointer-events none
  &__inner
    display table-cell
    vertical-align middle
  &__container
    z-index 9999
    pointer-events all
    max-width 1300px
    margin 0 auto
    padding 0
    background-color transparent
    border-radius 0
    box-shadow 0 2px 8px rgba(#000, .33)
    transition all .3s ease
  &__body
    margin 20px 0
  &__close
    position fixed
    z-index 10000
    top 20px
    right 20px
    background none transparent
    border none
    color #fff
    font-size 3rem
    cursor pointer
  .Spinner
    position fixed
    left 50%
    top 50%
    margin-left -40px
    margin-top -40px
    z-index 9998
  &-enter
    opacity 0
  &-leave-active
    opacity 0
  &-enter .Modal__container,
  &-leave-active .Modal__container
    transform scale(1.1)
  &-enter .Modal__overlay
    opacity .5
  &-leave-active .Modal__overlay
    opacity 1
</style>
