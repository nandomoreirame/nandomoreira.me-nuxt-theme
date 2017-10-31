<template>
  <main>
    <page-header title="O que estou fazendo agora" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <h2>Que página é essa?</h2>
      <p>Esta página agora é tirada da idéia de Derek Sivers em <a href="http://nownownow.com/about" target="_blank">Nownownow</a>, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.</p>
      <p>Então, aqui é meu <strong>Now</strong>:</p>
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
        <li>Leitura</li>
        <li>Rotina diária</li>
        <li>Exerícios físicos</li>
      </ul>

      <h2>Projeto atual</h2>
      <ul>
        <li>GRGIT - Recursos Humanos</li>
      </ul>

      <h2>Metas e objetivos</h2>
      <ul>
        <li>Lançar um negócio online</li>
        <li>Estudar Javascript todos os dias</li>
        <li>Conseguir sair para correr todos os dias (pelo menos toda semana)</li>
        <li>Escrever mais em meu <nuxt-link to="/blog">blog</nuxt-link></li>
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
      pageTitle: `O que estou fazendo agora | Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Esta página agora é tirada da idéia de Derek Sivers em Nownownow, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.`,
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

<style lang="stylus" scoped>
main .container
  max-width $tablet
  article()
</style>
