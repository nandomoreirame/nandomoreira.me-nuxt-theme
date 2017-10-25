<template>
  <main>
    <page-header title="O que estou fazendo agora" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <h2>Lendo os livros:</h2>
      <ul>
        <li><a href="https://pt.wikipedia.org/wiki/Rage_(livro)" target="_blank">Fúria (Rage)</a> - <small>Stephen King</small></li>
      </ul>

      <h2>Estudando:</h2>
      <ul>
        <li><a href="https://www.udemy.com/curso-reactjs-ninja" target="_blank">Curso React.js Ninja</a></li>
        <li><a href="https://www.udemy.com/js-com-tdd-na-pratica" target="_blank">JS com TDD na Prática</a></li>
      </ul>

      <h2>Adquirindo hábitos:</h2>
      <ul>
        <li>Rotina diária</li>
        <li>Exerícios físicos</li>
        <li>Leitura</li>
      </ul>

      <h2>Projeto atual</h2>
      <ul>
        <li>Esse projeto</li>
      </ul>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"></meta-tags>
  </main>
</template>

<script>
import { siteUrl } from '~/utilities/Helpers'

export default {
  name: 'Now',
  data () {
    return {
      pageTitle: `O que estou fazendo agora | Fernando Moreira`,
      pageDescription: `O que estou fazendo agora | Hoje sou especializado em desenvolvimento web usando WordPress com foco em front-end eu sempre cuido da usabilidade e performance de um site.`,
      pageUrl: `${siteUrl}/about/now`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: false,
          url: '/about',
          title: 'Sobre'
        },
        {
          active: true,
          url: '/about/now',
          title: 'O que estou fazendo agora'
        }
      ]
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~sass/settings"
@import "~sass/article"
main .container
  max-width: $tablet
  +article
</style>
