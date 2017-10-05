<template>
  <main>
    <page-header title="Sobre" :breadcrumbs="breadcrumbs"></page-header>
    <div class="container">
      <h3>Quem sou eu?</h3>

      <p>Meu nome é <strong>Fernando Moreira Costa</strong> (muito prazer). Tenho {{ yearsOld }} anos, nasci e cresci em uma cidadezinha do interior de Rondônia chamada Ariquemes, sai de lá com 18 anos para me aventurar em Curitiba/PR onde moro atualmente. Sou casado, tenho dois cachorros, um vira-lata chamado <strong>Soneca</strong> e um beagle chamado <strong>Bolo</strong>, por enquanto não tenho filhos.</p>

      <h3>Histórico profissional</h3>

      <p>Eu comecei a <em>"brincar"</em> com códigos em meados de 2009 e trabalhar profissionalmente em uma agência de criação e desenvolvimento web no ano de 2010.</p>
      <p>Em 2010 comecei o curso de web design na Microcamp Curitiba e finalizei em 2012, nesta mesma época conclui o curso técnico em informática com ênfase em programação no <a href="http://www.cep.pr.gov.br/pagina-59.html" target="_blank">Colégio Estadual do Paraná (CEP)</a>.</p>

      <h3>E o que faço hoje?</h3>

      <p>Hoje sou especializado em desenvolvimento web usando <em><a href="https://br.wordpress.org/" target="_blank">WordPress</a></em> com foco em <em><a href="https://pt.wikipedia.org/wiki/Front-end_e_back-end" target="_blank">front-end</a></em> eu sempre cuido da usabilidade e performance de um site.</p>
      <p>Atualmente trabalho como desenvolvedor <em>Front-end</em> utilizando tecnologias sempre atualizadas como, HTML5/5.1, CSS3/4, SASS, ECMAScript 6/7/8, GulpJS e VueJS, nos tempos livres escrevo no meu <nuxt-link to="/blog">Blog</nuxt-link> e contribuo com alguns códigos no <a href="https://github.com/nandomoreirame" target="_blank">Github</a>.</p>

      <h3>Sobre esse site</h3>

      <p>Esse projeto já foi reescrito várias vezes (como foi citado no blog do <a href="https://willianjusten.com.br/como-se-manter-atualizado-no-frontend/#em-português" target="_blank">Willian Justem</a>, eu sou o cara que mais muda de layout para blog na face da Terra!), eu o uso para fazer meus experimentos malucos, geralmente quando estou a estudar uma tecnologia nova.</p>
      <p>Nele eu já utilizei o <a href="https://br.wordpress.org/" target="_blank">WordPress</a> (em PHP), <a href="https://jekyllrb.com/" target="_blank">Jekyll</a> (em Ruby), <a href="https://middlemanapp.com/" target="_blank">Middleman</a> (em Ruby), e atualmente está escrito em <a href="https://vuejs.org/" target="_blank">VueJS</a> (em JavaScript) utilizando <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a> para gerar os arquivos estáticos e hospeda-los no <a href="https://pages.github.com/" target="_blank">Github pages</a>.</p>
      <p>O código é totalmente Open Source sob licença <a href="https://github.com/nandomoreirame/nandomoreirame.github.io/blob/source/LICENSE" target="_blank">MIT</a> e você pode <em>"forcar"</em> ele <a href="https://github.com/nandomoreirame/nandomoreirame.github.io" target="_blank">aqui</a>, fique à vontade para contribuir também :).</p>
    </div>
    <meta-tags :title="pageTitle" :description="pageDescription"></meta-tags>
  </main>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      yearsOld: (this.getYearsOld() - 1989),
      pageTitle: `About | Fernando Moreira`,
      pageDescription: `Hoje sou especializado em desenvolvimento web usando WordPress com foco em front-end eu sempre cuido da usabilidade e performance de um site.`,
      breadcrumbs: [
        {
          active: false,
          url: '/',
          title: 'Home'
        },
        {
          active: true,
          url: '/about',
          title: 'Sobre'
        }
      ]
    }
  },
  methods: {
    getYearsOld () {
      const date = new Date()
      return date.getFullYear()
    }
  },
  components: {
    MetaTags: () => import('~/components/MetaTags'),
    PageHeader: () => import('~/components/PageHeader')
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/settings"
@import "~assets/sass/article"
main .container
  max-width: $tablet
  +article
</style>
