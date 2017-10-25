<template>
  <article class="project" :class="(count % 2 !== 0) ? 'project--invert' : ''">
    <div class="container">
      <div class="grid grid--1of2">
        <div class="project__content grid__column">
          <h2 class="project__title"><a :href="project.url" target="_blank">{{ project.name }}</a></h2>
          <p class="project__description">{{ project.description }}</p>
          <div class="project__meta">
            <span class="project__date"><strong>Data: </strong>{{ project.date | moment('MMMM') }} de {{ project.date | moment('YYYY') }}</span><br>
            <span class="project__url"><strong>URL: </strong><a :href="project.url" target="_blank">{{ humanizeUrl(project.url) }}</a></span><br>
            <span class="project__tags">
              <small v-for="(tag, tagKey) in project.tags" :key="tagKey">
                <a :href="`https://twitter.com/intent/tweet?text=Veja o projeto: ${project.name} feito por @oseunando em:&url=https://nandomoreira.me/projects/&hashtags=${tag}`" target="_blank">
                  #{{ tag }}
                </a>
              </small>
            </span>
          </div>
        </div>
        <figure class="project__thumbnail grid__column">
          <a class="project__thumbnail-browser" :href="project.url" target="_blank">
            <span class="project__thumbnail-browser-bar"><small>{{ project.url }}</small></span>
            <img :src="project.thumbnail" :alt="`Thumbnail de: ${project.name}`">
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
    }
  }
</script>

<style lang="sass" scoped>
@import "~sass/settings"
.project
  min-height: 450px
  margin-top: $spacing-large
  padding-top: $spacing-large
  padding-bottom: $spacing-large
  @extend %clearfix

  .grid
    align-items: center

  &:not(:last-child)
    margin-bottom: $spacing-large

  &__title
    margin-top: 0
  &__content
    padding: 0 $spacing-base
    order: 1
  &__thumbnail
    margin: 0
    order: 2
    &-browser
      display: inline-block
      background-color: #fff
      box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)
      transition: box-shadow .2s ease, transform .2s ease
      &:hover,
      &:focus
        box-shadow: 0 0 1px rgba(39, 44, 49, .1), 0 3px 16px rgba(39, 44, 49, .07)
        transform: translate3D(0, -1px, 0)
      &-bar
        display: block
        width: 100%
        height: 26px
        background: url("/images/browser.svg") no-repeat 50%
        background-size: 100% 28px
        position: relative
        overflow: hidden
        small
          position: absolute
          left: 25%
          opacity: .8
          color: $feldgrau-color
          display: inline-block
          vertical-align: top
          line-height: 25px
          font-size: .5rem
    img
      display: block
      max-width: 100%
  &__tags
    small
      display: inline-block
      margin-right: 5px
  &--invert
    background-color: lighten($border-color, 5%)
    +media($tablet)
      margin: 0
      .project__content
        order: 2
      .project__thumbnail
        order: 1
</style>
