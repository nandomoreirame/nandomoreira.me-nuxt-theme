<template>
  <main>
    <page-header title="I ❤️ Open Source" :breadcrumbs="breadcrumbs" :description="pageDescription"></page-header>
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
  name: 'OpenSource',
  data () {
    return {
      pageTitle: `I ❤️ Open Source - Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Esses são alguns dos projetos open sources em que trabalhei.`,
      pageUrl: `${siteUrl}/projects/open-source`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: false,
          url: '/projects',
          title: 'Projetos'
        },
        {
          active: true,
          url: '/projects/open-source',
          title: 'Open Source'
        }
      ]
    }
  },
  async asyncData ({ app }) {
    return {
      projects: await app.$content('/open-source').getAll()
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
