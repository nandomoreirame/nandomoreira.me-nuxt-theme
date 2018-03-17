<template>
  <transition name="shots">
    <ul class="shots">
      <li v-for="(shot, i) in shots" :key="i" class="shot">
        <a :href="shot.html_url" :title="`link para o shot ${shot.title} - Irá abrir em uma nova aba`" target="_blank">
          <figure class="shot__figure">
            <img :alt="`Imagem do shot ${shot.title}`" :src="shot.images.hidpi">
          </figure>
          <h2 class="shot__title">{{ shot.title }}</h2>
          <!-- <div class="shot__description" v-html="shot.description"></div> -->
          <div class="shot__meta">
            <div class="shot__likes">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="entypo-heart" width="18" height="18" fill="#ababab">
                <g>
                  <path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197 8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z"/>
                </g>
              </svg>
              <span>{{ shot.likes_count }}</span>
            </div>
            <div class="shot__views">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="entypo-eye" width="18" height="18" fill="#ababab">
                <g>
                  <path d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307 0-2.379 1.99-4.309 4.445-4.309s4.444 1.93 4.444 4.309c0 2.379-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"/>
                </g>
              </svg>
              <span>{{ shot.views_count }}</span>
            </div>
            <!-- <div class="shot__comments">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="entypo-message" width="18" height="18" fill="#ababab">
                <g>
                  <path d="M18 6v7c0 1.1-.9 2-2 2h-4v3l-4-3H4c-1.101 0-2-.9-2-2V6c0-1.1.899-2 2-2h12c1.1 0 2 .9 2 2z"/>
                </g>
              </svg>
              <span>{{ shot.comments_count }}</span>
            </div> -->
            <!-- <div class="shot__tags">
              <span v-for="(tag, i) in shot.tags" :key="i" class="tag">{{ tag }} </span>
            </div> -->
          </div>
        </a>
      </li>
    </ul>
  </transition>
</template>

<script>
  export default {
    name: 'Dribbble',
    props: {
      'shots': {
        required: true
      }
    }
  }
</script>

<style lang="stylus">
.shots
  list-style none
  display flex
  position relative
  flex-flow row
  flex-wrap wrap
  margin-left -(spacingSmall)
  margin-right -(spacingSmall)
  padding 40px 0 0
  &-enter-active,
  &-leave-active
    transition: opacity .5s
  &-enter,
  &-leave-active
    opacity: 0

.shot
  display flex
  flex 1 1 300px
  flex-direction column
  overflow hidden
  margin 0 spacingSmall spacingBase
  min-height 300px
  background #fff 50%
  background-size cover
  border-radius 5px
  box-shadow boxShadowBase
  transition box-shadow .2s timingFunction, transform .2s timingFunction
  text-align center
  a
    text-decoration none
  &__title
    font-size 1.2rem
    padding spacingSmall spacingSmall spacingMini
    margin 0
  &__figure
    margin 0
    img
      display block
      max-width 100%
      height auto
  &:hover,
  &:focus
    box-shadow boxShadowHover
    transform translate(0, -10px)
  &__meta
    display block
    text-align center
    font-size 14px
    margin-bottom spacingSmall
  &__likes,
  &__views,
  &__comments
    &,
    span,
    svg
      color #ababab
      display inline-block
      vertical-align middle
      line-height 1
    span
      margin 0 5px
</style>
