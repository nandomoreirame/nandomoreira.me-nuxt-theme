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
          <a :href="project.url" target="_blank">
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

<style lang="sass">
@import "~assets/sass/settings"
.project
  min-height: 450px
  margin-top: $spacing-large
  margin-bottom: $spacing-large
  padding-top: $spacing-large
  padding-bottom: $spacing-large
  @extend %clearfix

  .grid
    align-items: center

  // &:not(:last-child)
    // border-bottom: $border-base

  &__title
    margin-top: 0
  &__content
    padding: 0 $spacing-base
    order: 1
  &__thumbnail
    margin: 0
    order: 2
    img
      display: block
      max-width: 100%
  &__tags
    small
      display: inline-block
      margin-right: 5px
  &--invert
    background-color: #fff
    .project__content
      order: 2
    .project__thumbnail
      order: 1
</style>
