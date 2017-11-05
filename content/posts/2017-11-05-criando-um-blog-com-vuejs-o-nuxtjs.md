---
date: 2017-11-05
title: "Criando um blog com Vue.js - Parte 1: O Nuxt.js"
description: "Essa é a parte 1 de uma série onde iremos usar a tecnologia SSR (Server Side Rendering) para criar um blog e no final hospeda-lo no GitHub pages e no Netlify."
image: /images/posts/2017/11/criando-um-blog-com-javascript-vuejs.jpg
---

## Introdução

Todo mundo (devs) tá acostumado a criar blogs utilizando o [Jekyll](https://jekyllrb.com) e hospedá-los no [GitHub pages](https://pages.github.com/). E se eu disser que existem muitas outras plataformas para criar projetos estáticos?

Não que eu esteja dizendo que o Jekyll é uma ferramenta ruim, muito pelo contrário! O Jeyll abriu minha mente para o mundo dos **geradores de sites estáticos**.

No site [staticgen](https://www.staticgen.com/) você encontrará uma série de projetos, aplicações e ferramentas, em várias linguagens diferentes e todas elas tem o mesmo proprósito: **Fazer o build de um projeto estático**, ou seja gerar HTML, CSS e JS final para o seu projeto.

Nesse artigo nós iremos utilizar a tecnologia [Server Side Rendering (SSR)](http://link) ou Renderização do lado do servidor em pt-BR, e para isso usaremos o **[Vue.js](https://vuejs.org/)** com o **[Nuxt.js](https://nuxtjs.org/)**.

## O que é Vue.JS?

O **Vue.js** é uma biblioteca (lib) javascript para o desenvolvimento de **componentes reativos para interfaces web modernas** _(Reactive Components for Modern Web Interfaces)_.

## O que é o Nuxt.js?

Traduzindo de [nuxtjs.org/guide](https://nuxtjs.org/guide): O **Nuxt.js** é uma estrutura para a criação de aplicativos do Universal Vue.js.

## O que é SSR?

Vue.js é uma lib para construir aplicativos do lado do cliente. Por padrão, os componentes Vue produzem e manipulam DOM no navegador do cliente. No entanto, também é possível renderizar os mesmos componentes HTML direto do servidor e enviá-los para o navegador do cliente e continuar manipulando via javascript (SPA).

Um aplicativo Vue.js criado pelo servidor também pode ser considerado **"isomórfico"** ou **"universal"**, no sentido de que a maioria do código do seu aplicativo é executado no servidor e no cliente.

Utilizando SSR podemos manter a acessibilidade padrão do HTML e deixá-lo acessivel por bots como o Google e outros, juntando assim o melhor dos dois mundos, SEO + SPA.

---

## Instalando

Para instalar o Nuxt.js você precisa dos seguintes pré-requisitos:

1. Conhecimento em JavaScript
2. Node v6 ou superior
3. npm ou yarn
4. [vue-cli](https://github.com/vuejs/vue-cli) global: `npm install -g vue-cli`

> **OBS:** O **[vue-cli](https://github.com/vuejs/vue-cli)** é uma CLI simples para _scaffolding_ de projetos Vue.js, ele vai fazer algumas perguntas como **Nome do projeto**, **Descrição** e **Autor**.

Vamos seguir a mesma instalação feita no site do Nux.js em [nuxtjs.org/guide/installation](https://nuxtjs.org/guide/installation).

```bash
$ vue init nuxt-community/starter-template blog-with-vuejs
$ cd blog-with-vuejs/
$ yarn # ou npm install
```

Os comandos acima foram executados no terminal, você pode executar todos de uma só vez concatenando com `&&` cada um deles.

```bash
$ vue init nuxt-community/starter-template blog-with-vuejs \
  && cd blog-with-vuejs/ \
  && yarn
```

**O que foi executado**

1. Iniciamos um projeto chamado `blog-with-vuejs`;
2. Entramos dentro do diretório com o comando: `cd blog-with-vuejs/`;
3. Instalamos as dependencias do projeto com o comando: `yarn` (Você também pode executar `yarn install` ou `npm install`)

---

## Estrutura de um projeto Nuxt.js

A estrutura padrão de um aplicativo **Nuxt.js** destina-se a fornecer um ótimo ponto de partida para pequenas e grandes aplicações. Claro, você é livre para organizar seu aplicativo, como quiser.

### Diretório `assets`

Esse diretório contém seus recursos não compilados, como Less, SASS, Stylus ou JavaScript.

### Diretório `component`

Esse diretório contém seus componentes Vue. O Nuxt.js não carrega automaticamente esses componentes.

### Diretório `layouts`

Esse diretório contém os layouts da sua aplicação.

**Este diretório não pode ser renomeado.**

### Diretório `middleware`

Esse diretório contém o Middleware de sua aplicação. O Middleware permite que você defina funções personalizadas que podem ser executadas antes de renderizar uma página ou um grupo de páginas (layouts).

### Diretório `pages`

Esse diretório contém as views e rotas da sua aplicação. O framework lê todos os arquivos `.vue` dentro desse diretório e cria o router da aplicação.

**Este diretório não pode ser renomeado.**

### Diretório `plugins`

Esse diretório contém os plugins JavaScript que deseja executar antes de instanciar o aplicativo Vue.js da raiz.

### Diretório `static`

Esse diretório contém seus arquivos estáticos. Cada arquivo dentro deste diretório é mapeado para a raiz do seu site `/`. Exemplo: `/static/robots.txt` é mapeado como `http://seusite.com/robots.txt`

**Este diretório não pode ser renomeado.**

### Diretório `store`

Esse diretório contém seus arquivos do **Vuex Store**. A opção Vuex Store é implementada na estrutura do Nuxt.js. A criação de um arquivo `index.js` neste diretório habilita essa opção automaticamente.

**Este diretório não pode ser renomeado.**

### Arquivo `nuxt.config.js`

Esse arquivo contém a configuração personalizada do **Nuxt.js**.

**Este arquivo não pode ser renomeado.**

### Arquivo `package.json`

Esse arquivo contém suas dependências e scripts da sua aplicação.

**Este arquivo não pode ser renomeado.**

> Veja na [documentação do Nuxt.js](https://nuxtjs.org/guide/directory-structure) para saber mais informações sobre esses diretórios e arquivos que eu citei acima.

---

## Executando

Agora vamos rodar o projeto que foi criado pelo Vue-cli em desenvolvimento, para isso basta executar o comando `yarn dev` ou `npm run dev` em seu terminal.

```bash
$ yarn dev # ou npm run dev
```

Basta abrir: [localhost:3000](http://localhost:3000)

![Imagem mostrando o link localhost:3000](/images/posts/2017/11/criando-um-blog-com-javascript-vuejs-localhost.png)

Se você visualizar o código fonte você verá todo o HTML renderizado pelo Nuxt, algo como isso:

```html
<body data-n-head="">
  <div id="__nuxt" data-server-rendered="true">
    <div class="nuxt-progress" style="width:0%;height:2px;background-color:#3B8070;opacity:0;"></div>
    <div>
      <section class="container">
        <div>
          <div class="VueToNuxtLogo">
            <div class="Triangle Triangle--two"></div>
            <div class="Triangle Triangle--one"></div>
            <div class="Triangle Triangle--three"></div>
            <div class="Triangle Triangle--four"></div>
          </div>
          <h1 class="title">blog-with-vuejs</h1>
          <h2 class="subtitle">Nuxt.js project</h2>
          <div class="links">
            <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
            <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  </div>
  <script type="text/javascript">
    window.__NUXT__ = {
      "layout": "default",
      "data": [{}],
      "error": null,
      "state": {},
      "serverRendered": true
    };
  </script>
  <script src="/_nuxt/manifest.6577d27b1c69002c3e9a.js" defer></script>
  <script src="/_nuxt/common.65aa6f5764a5ec5e7c56.js" defer></script>
  <script src="/_nuxt/app.9a3a71120f4feff88235.js" defer></script>
</body>
```

Note que dentro da tag `<body>` não tem apenas o famoso div `<div id="app"></div>` como estamos acostumados a ver em SPA`s feitas com Vue e esse é o maior ponto positivo de um app que usa **SSR**.

---

## Conclusão

Essa é a parte 1 de uma série onde iremos falar sobre **Vue.js**, **Nuxt.js**, **SSR**, **GitHub Pages** e **[Netlify](https://www.netlify.com/)**, então aguardem mais artigos como esse.

See you ✌️

/ end