<template>
  <main>
    <page-header title="O que estou fazendo agora" :description="pageDescription" :breadcrumbs="breadcrumbs"/>
    <div class="container--small">
      <h2>Que página é essa?</h2>
      <p>Esta página agora é tirada da idéia de <strong><a href="https://sivers.org/" target="_blank">Derek Sivers</a></strong> em <a href="http://nownownow.com/about" target="_blank">Nownownow</a>, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.</p>
      <p>Então, aqui é meu <strong>Now</strong>:</p>
      <h2>Lendo os livros:</h2>
      <ul>
        <li>no momento nenhum.</li>
      </ul>

      <h2>Estudando:</h2>
      <ul>
        <li><a href="https://www.udemy.com/curso-javascript-ninja/" target="_blank">Javascript Ninja</a></li>
        <li><a href="https://www.udemy.com/curso-reactjs-ninja/" target="_blank">React Ninja</a></li>
        <li>Desenho a mão</li>
      </ul>

      <h2>Adquirindo hábitos:</h2>
      <ul>
        <li>Rotina, Rotina, Rotina..</li>
        <li>Leitura</li>
        <li><strike>Exerícios físicos</strike> <small> (tá foda, gordo num tem jeito mesmo)</small></li>
      </ul>

      <h2>Projeto(s) atual(is)</h2>
      <ul>
        <li>Treckos - Loja virtual de coisas legais</li>
        <li>Esse site <small>(eternamente em desenvolvimento)</small></li>
      </ul>

      <h2>Metas e objetivos</h2>
      <ul>
        <li>Lançar um negócio online</li>
        <li>Estudar Javascript todos os dias</li>
        <li>Estudar Desenho todos os dias</li>
        <li><strike>Conseguir sair para correr todos os dias</strike> <small> (pelo menos toda semana)</small></li>
        <li>Escrever mais em meu <nuxt-link to="/blog">blog</nuxt-link></li>
      </ul>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription" :url="pageUrl"/>
  </main>
</template>

<script>
export default {
  name: 'Now',
  data () {
    return {
      pageTitle: `O que estou fazendo agora | Fernando Moreira | Desenvolvedor front-end e WordPress em Curitiba/PR`,
      pageDescription: `Esta página agora é tirada da idéia de Derek Sivers em Nownownow, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.`,
      pageUrl: `${process.env.baseUrl}/about/now`,
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
</style>
