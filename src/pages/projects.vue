<template>
  <main>
    <page-header title="Projetos" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <div class="alert">
        <p>Oops, essa página ainda está sendo construida, por favor entre mas não repare na bagunça.</p>
      </div>
      <!-- <div class="project-list">
        <article class="project" v-for="(project, key) in projects" :key="key">
          <nuxt-link :to="project.permalink">{{ project.name }}</nuxt-link>
        </article>
      </div> -->
      <nuxt-child />
    </div>
    <meta-tags :title="pageTitle"></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      pageTitle: `Projetos - Fernando Moreira | Front-end / UX Designer`,
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
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
.project-list
  display: flex
  flex-flow: row wrap
  margin-left: -($spacing-small)
  margin-right: -($spacing-small)

.alert
  padding: $spacing-small
  margin-bottom: $spacing-base
  background-color: $silver-color
  text-align: center

.project
  border-radius: 3px
  background-color: #fff
  text-align: center
  box-shadow: 0 8px 20px 0 rgba(224, 224, 224, 0.5)
  padding: $spacing-small $spacing-base
  margin: 0 $spacing-small $spacing-base
  width: 100%
  display: inline-block
  border: 1px solid #eee
  position: relative
  @extend %clearfix

  +media($tablet)
    flex: 1 0 ($container-width/2)-60px
</style>
