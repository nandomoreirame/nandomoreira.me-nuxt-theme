<template>
  <main>
    <page-header>
      <div slot="inner">
        <div class="container">
          <h1 class="pageHeader__title" itemprop="headline">O que estou fazendo agora</h1>
          <breadcrumb :breadcrumbs="breadcrumbs"/>
          <p v-if="pageDescription" itemprop="description" class="pageHeader__description" v-html="pageDescription"/>
        </div>
      </div>
    </page-header>
    <div class="container--small">
      <h2>Que página é essa?</h2>
      <p>Esta página agora é tirada da idéia de <strong><a href="https://sivers.org/" target="_blank">Derek Sivers</a></strong> em <a href="http://nownownow.com/about" target="_blank">Nownownow</a>, onde blogueiros e proprietários de sites do mundo compartilham o que eles estão fazendo.</p>
      <p>Então, aqui é meu <strong>Now</strong>:</p>
      <h2>Lendo os livros:</h2>
      <ul>
        <li><a href="https://www.amazon.com.br/poder-h%C3%A1bito-fazemos-vida-neg%C3%B3cios-ebook/dp/B00A3D10JE" target="_blank">O poder do hábito: Por que fazemos o que fazemos na vida e nos negócios</a> -  <small>por Charles Duhigg</small></li>
      </ul>

      <h2>Estudando:</h2>
      <ul>
        <li>Maketing digital</li>
      </ul>

      <h2>Adquirindo hábitos:</h2>
      <ul>
        <li>Acordar todos os dias 5:30 am</li>
        <li>Rotina, Rotina, Rotina..</li>
        <li>Leitura, Leitura, Leitura..</li>
        <li>Exerícios físicos <small>(Smart fit <3)</small></li>
      </ul>

      <h2>Projeto(s) atual(is)</h2>
      <ul>
        <li>Lançamento do projeto <a href="https://onedev.studio" target="_blank">Onedev.studio</a></li>
        <li>Esse site <small>(eternamente em desenvolvimento)</small></li>
      </ul>

      <h2>Metas e objetivos</h2>
      <ul>
        <li>Lançar um negócio online</li>
        <li><strike>Conseguir sair para correr todos os dias</strike> <small> (pelo menos toda semana)</small></li>
        <li>Escrever mais em meu <nuxt-link to="/blog">blog</nuxt-link></li>
      </ul>
    </div>
    <disqus :disqusTitle="pageTitle" :disqusIdentifier="pageUrl" :disqusUrl="pageUrl"/>
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
      PageHeader: () => import('~/components/PageHeader'),
      Breadcrumb: () => import('~/components/Breadcrumb'),
      Disqus: () => import('~/components/Disqus')
    }
  }
</script>

<style lang="stylus" scoped>
</style>
