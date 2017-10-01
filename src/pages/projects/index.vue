<template>
  <main>
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects">
        <nuxt-link :to="project.permalink">{{ project.name }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </main>
</template>

<script>
export default {
  name: 'projects',
  async asyncData ({ app }) {
    return {
      projects: await app.$content('/projects').getAll()
    }
  }
}
</script>
