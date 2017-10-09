<template>
  <main>
    <page-header title="Projetos" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="alert">
        <p>Oops, essa página ainda está sendo construida, por favor entre mas não repare na bagunça.</p>
      </div>
      <div class="project-list">
        <article class="project grid grid--1of2" v-for="(project, key) in projects" :key="key" :class="(key % 2 !== 0) ? 'project--invert' : ''">
          <div class="project__content grid__column">
            <h2 class="project__title"><a :href="project.url" target="_blank">{{ project.name }}</a></h2>
            <p class="project__description">{{ project.description }}</p>
            <div class="project__meta">
              <span class="project__url"><strong>URL: </strong><a :href="project.url" target="_blank">{{ humanizeUrl(project.url) }}</a></span><br>
              <span class="project__date"><strong>Data: </strong>{{ project.date | moment('MMMM') }} de {{ project.date | moment('YYYY') }}</span><br>
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
              <img :data-src="project.thumbnail" :alt="`Thumbnail de: ${project.name}`" class="lozad">
            </a>
          </figure>
        </article>
      </div>
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'projects',
  data () {
    return {
      pageTitle: `Projetos - Fernando Moreira | Front-end / UX Designer`,
      pageUrl: `${siteUrl}/projects`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/projects',
          title: 'Projetos'
        }
      ]
    }
  },
  async asyncData ({ app }) {
    return {
      projects: await app.$content('/projects').getAll()
    }
  },
  methods: {
    humanizeUrl: url =>
      url
        .replace(/(http:|https:)/g, '')
        .replace(/(www.)/g, '')
        .replace(/(\/\/)/g, '')
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.alert
  padding: $spacing-small
  margin-bottom: $spacing-base
  background-color: $silver-color
  text-align: center
.project
  align-items: center
  min-height: 450px
  padding-top: $spacing-small
  border-bottom: $border-base
  padding-bottom: $spacing-base
  &:not(:last-child)
    margin-bottom: $spacing-large
  &__content
    padding: 0 $spacing-base
    order: 1
  &__thumbnail
    order: 2
    img
      display: block
      max-width: 100%
  &__tags
    small
      display: inline-block
      margin-right: 5px
  &--invert
    .project__content
      order: 2
    .project__thumbnail
      order: 1
</style>
