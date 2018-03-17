<template>
  <div class="skills">
    <ul class="skills__list">
      <li class="skills__item" v-for="(skill, id) in skills" :key="skill.id">
        <span v-lazy:background-image="`/images/skills/${id}.svg`">{{ skill }}</span>
        <small>{{ skill }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skills: {
        html5: 'HTML5',
        css3: 'CSS3',
        javascript: 'JavaScript',
        wordpress: 'WordPress',
        php: 'PHP',
        apache: 'Apache',
        gulp: 'GulpJS',
        git: 'Git',
        github: 'GitHub',
        gitlab: 'Gitlab',
        jquery: 'jQuery',
        vuejs: 'VueJS',
        react: 'React',
        angularjs: 'AngularJS',
        nodejs: 'NodeJS',
        babel: 'Babel',
        mocha: 'Mocha',
        chai: 'Chai',
        bootstrap: 'Bootstrap',
        sass: 'SASS',
        bower: 'Bower',
        jekyll: 'Jekyll',
        codeigniter: 'CodeIgniter',
        laravel: 'Laravel',
        symfony: 'Symfony',
        docker: 'Docker',
        heroku: 'Heroku',
        sketchapp: 'SketchApp',
        photoshop: 'Photoshop',
        ruby: 'Ruby',
        rails: 'Ruby on Rails',
        amazonwebservices: 'Amazon Webservices',
        digitalocean: 'DigitalOcean',
        linux: 'Linux',
        travis: 'TravisCI',
        responsive: 'Responsive Web design, PWA, Mobile First, Progressive Enhancement, e mais...'
      }
    }
  }
}
</script>

<style lang="stylus">
.skills
  text-align center
  .social
    margin-bottom spacingSmall
  &__list
    list-style none
    padding 0
    margin 0
    display flex
    position relative
    align-items center
    flex-flow row
    flex-wrap wrap
  &__item
    display inline-block
    padding spacingMini
    margin-bottom spacingMini
    flex: 1 0 percentage(1/6)
    small
      display block
      line-height 1.4
    span
      display block
      opacity .3
      width 60px
      height 60px
      margin 0 auto spacingMini
      background-repeat no-repeat
      background-position center
      background-size 100% 60px
      text-indent -99999px
      transition transform .12s timingFunction, opacity .12s timingFunction
    &:last-child
      flex: 1 0 100%
      small
        font-size 1rem
      span
        opacity 1
        width 160px
        height 160px
        background-size 100% 160px
    &:not(:last-child):hover,
    &:not(:last-child):focus
      span
        opacity 1
        transform scale(1.1) rotate(5deg)
</style>
