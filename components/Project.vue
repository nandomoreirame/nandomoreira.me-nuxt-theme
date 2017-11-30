<template>
  <article class="project" :class="(count % 2 !== 0) ? 'project--invert' : ''">
    <div class="container">
      <div class="grid grid--1of2">
        <div class="project__content grid__column">
          <h2 class="project__title">
            <a :href="project.url" :target="`${project.online ? '_blank' : '_self'}`">{{ project.name }}</a>
          </h2>
          <p class="project__description">{{ project.description }}</p>
          <div class="project__meta">
            <span class="project__date">
            <strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </strong>
            {{ project.date | moment('MMMM') }} de {{ project.date | moment('YYYY') }}</span><br>
            <span class="project__url">
              <strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </strong>
              <a :href="project.url" v-if="project.online" :target="`${project.online ? '_blank' : '_self'}`">{{ humanizeUrl(project.url) }}</a>
              <span v-if="!project.online" class="project__url-off">(Projeto em construção ou fora do ar)</span>
            </span><br>
            <span class="project__tags">
              <strong>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7" y2="7"/></svg>
              </strong>
              <small v-for="(tag, tagKey) in project.tags" :key="tagKey">
                <a :href="`https://twitter.com/intent/tweet?text=Veja o projeto: ${project.name} feito por @oseunando em:&url=https://nandomoreira.me/projects/&hashtags=${tag}`" target="_blank">
                  #{{ tag }}
                </a>
              </small>
            </span>
          </div>
        </div>
        <figure class="project__thumbnail grid__column">
          <a class="project__thumbnail-browser" :href="project.url" :target="`${project.online ? '_blank' : '_self'}`">
            <span class="project__thumbnail-browser-bar"><small>{{ project.url }}</small></span>
            <img :src="project.thumbnail" :alt="`Thumbnail do projeto: ${project.name}`">
          </a>
        </figure>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Project',
    props: {
      'project': {
        required: true
      },
      'count': {
        type: Number
      }
    },
    methods: {
      humanizeUrl: url =>
        url
          .replace(/(http:|https:)/g, '')
          .replace(/(www.)/g, '')
          .replace(/(\/\/)/g, '')
          .trim()
    }
  }
</script>

<style lang="stylus" scoped>
.project
  min-height 450px
  margin-top spacingLarge
  padding-top spacingBig
  padding-bottom spacingBig
  overflow hidden
  @extend $clearfix
  .grid
    align-items center
  &:not(:last-child)
    margin-bottom spacingLarge
  &__title
    margin-top 0
  &__content
    padding 0 spacingBase
    order 1
  &__meta
    strong
      margin-right 5px
  &__url-off
    opacity .5
  &__url,
  &__tags
    strong
      margin-right 10px
  &__thumbnail
    margin 0
    order 2
    &-browser
      display inline-block
      background-color #fff
      box-shadow boxShadowBase
      transition box-shadow .2s timingFunction, transform .2s timingFunction
      &:hover,
      &:focus
        box-shadow boxShadowHover
        transform translate(0, -10px)
      &-bar
        display block
        width 100%
        height 26px
        background url("/images/browser.svg") no-repeat 50%
        background-size 100% 28px
        position relative
        overflow hidden
        small
          position absolute
          left 25%
          opacity .8
          color feldgrauColor
          display inline-block
          vertical-align top
          line-height 25px
          font-size .5rem
    img
      display block
      max-width 100%
  &__tags
    small
      display inline-block
      margin-right 5px
  &--invert
    background-color lighten(borderColor, 5%)
    +above(md)
      margin 0
      .project__content
        order 2
      .project__thumbnail
        order 1
a[href="#"]
  pointer-events none
</style>
