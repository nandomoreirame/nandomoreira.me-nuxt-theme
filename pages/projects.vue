<template>
  <main>
    <page-header title="Projetos" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <alert>Oops, essa página ainda está sendo construída, por favor entre mas não repare na bagunça.</alert>
    </div>
    <div class="project-list">
      <project v-for="(project, i) in projects" :key="i" :count="i" :project="project"></project>
    </div>
    <nuxt-child />
    <meta-tags :title="pageTitle" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'projects',
  data () {
    return {
      pageTitle: `Projetos - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
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
  components: {
    Alert: () => import('~/components/Alert'),
    Project: () => import('~/components/Project'),
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
</style>
