<template>
  <main>
    <page-header title="Projetos" :breadcrumbs="breadcrumbs"></page-header>
    <div class="project-list">
      <project v-for="(project, i) in projects" :key="i" :count="i" :project="project"></project>
    </div>
    <nuxt-child />
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'Projects',
  data () {
    return {
      pageTitle: `Projetos - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Esses são alguns dos projetos que trabalhei, projetos pessoais e freelas para clientes.`,
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
    Project: () => import('~/components/Project'),
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="stylus">
</style>
