<template>
  <section class="HomeSkills HomeSection">
    <div class="HomeSection__inner">
      <header class="HomeSection__header">
        <h2>Minhas habilidades</h2>
      </header>
      <div class="container">
        <skills/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'HomeSkills',
    components: {
      Skills: () => import('~/components/Skills')
    }
  }
</script>

<style lang="stylus">
.HomeSkills
  .HomeSection__inner
    padding-bottom 0
    .skills__item:not(:last-child)
      flex: 1 0 percentage(1/9)
</style>
