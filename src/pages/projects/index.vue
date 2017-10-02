<template>
  <main>
    <page-header title="Projetos" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <ul>
        <li v-for="(project, key) in projects" :key="key">
          <nuxt-link :to="project.permalink">{{ project.name }}</nuxt-link>
        </li>
      </ul>
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
