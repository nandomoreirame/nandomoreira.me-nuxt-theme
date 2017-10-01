<template>
  <main>
    <div class="container">
      <h1>Projetos</h1>
      <ul>
        <li v-for="(project, key) in projects" :key=key>
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
      pageTitle: `Projetos - Fernando Moreira | Front-end / UX Designer`
    }
  },
  async asyncData ({ app }) {
    return {
      projects: await app.$content('/projects').getAll()
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags')
  }
}
</script>
