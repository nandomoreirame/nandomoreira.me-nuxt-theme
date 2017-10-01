<template>
  <main>
    <article class="container">
      <h1>Projeto: {{ project.name }}</h1>
      <nuxtent-body :body="project.body" />
    </article>
  </main>
</template>

<script>
export default {
  name: 'project',
  head () {
    return {
      title: `Projeto: ${this.project.name} | Fernando Moreira`
    }
  },
  async asyncData ({ app, route }) {
    return {
      project: await app.$content('/projects').get(route.path)
    }
  }
}
</script>
