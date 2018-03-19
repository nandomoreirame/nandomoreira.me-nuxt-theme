<template>
  <section class="LastProject HomeSection">
    <div class="HomeSection__inner">
      <header class="HomeSection__header">
        <h2>Último Projeto</h2>
      </header>
      <div class="container">
        <project :project="project"/>
        <div class="HomeSection__button">
          <link-button buttonType="ghost-white" buttonPermalink="/projects">mais projetos →</link-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'LastProject',
    props: {
      project: {
        require: true
      }
    },
    components: {
      Project: () => import('~/components/Project'),
      LinkButton: () => import('~/components/LinkButton')
    }
  }
</script>

<style lang="stylus">
.LastProject
  background-color primaryColor
  .HomeSection__button
    margin-bottom spacingBase
    position relative
    bottom auto
  .HomeSection__header
    border-color #fff
    &:before
      border-top-color #fff
    h2
      color #fff
  .HomeSection__inner
    margin-bottom 0
    padding-bottom 0
  .project
    figure
      margin-bottom spacingSmall
      +above(md)
        margin-bottom 0
    &.project--invert
      padding-top spacingSmall
      padding-bottom spacingSmall
      margin-top 0
      margin-bottom 0
      background-color transparent
    &, a
      color #fff
  .container
    padding-top spacingBase
    padding-bottom 0
</style>
