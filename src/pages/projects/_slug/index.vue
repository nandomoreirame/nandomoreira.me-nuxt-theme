<template>
  <main>
    <h1>Project: {{ project.name }}</h1>
    <nuxtent-body :body="project.body" />
  </main>
</template>

<script>
export default {
  name: 'project',
  async asyncData ({ app, route }) {
    return {
      project: await app.$content('/projects').get(route.path)
    }
  }
}
</script>
