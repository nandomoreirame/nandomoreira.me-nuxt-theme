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
  </main>
</template>

<script>
export default {
  name: 'projects',
  head () {
    return {
      title: `Projetos | Fernando Moreira`
    }
  },
  async asyncData ({ app }) {
    return {
      projects: await app.$content('/projects').getAll()
    }
  }
}
</script>
