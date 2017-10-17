---
title: "#1 - Conhecendo o pré-processador SASS | Instalação"
date: 2015-09-01
description: "Todo desenvolvedor web deveria conhecer algum pré-processador CSS, seja ele Less, SASS, Stylus ou qualquer outro"
image: /images/posts/2015/09/conhecendo-o-pre-processador-sass.jpg
categories: sass
tags: "sass, css, pre-processador"
---

Na minha opinião todo desenvolvedor web deveria conhecer algum pré-processador CSS, seja ele `Less`, `SASS`, `Stylus` ou qualquer outro.

Hoje vou começar uma série de artigos com algumas dicas sobre o pré-processador **SASS**... sei que existem muitos tutoriais e artigos bacanas por ai, mas eu vou explicar o meu ponto de vista sobre essa forma de escrever CSS.

## O que é um pré-processador?

> Um pré-processador é um programa que recebe texto e efectua conversões léxicas nele. As conversões podem incluir substituição de macros, inclusão condicional e inclusão de outros ficheiros.
  > <small>Google.com (<a href="https://goo.gl/OeWJWB">https://goo.gl/OeWJWB</a>)</small>

Pense num pré-processador como uma nova linguagem para escrever CSS.

Chame de tradutor de linguagem, ou de compilador.. não tem problema, tudo vira CSS no final.

## Mas o que é esse tal de SASS?

> Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
  > <small>sass-lang.com</small>

Resumidamente, **SASS** é um pré-processador de CSS. Com ele você tem vários recursos que não existem nativamente no CSS, como:

* *variáveis*
* *funções*
* *includes*
* *mixins*
* *condicionais* <small>(if, else)</small>
* *repetições* <small>(for)</small>
* *entre outras coisas legais...*

Com ele você consegue organizar o seu CSS de forma modular, deixar cada componente em arquivos separados e usando `@import` importar todos em apenas um arquivo.

Usando **herança** e **variáveis** você esquece o famoso `Ctrl+C` e `Ctrl+V`.

**Cara isso é magnífico, mesmo!**

## Ok, entendi, agora como eu uso o SASS?

Nosso amigo **SASS** é uma **RubyGem** então você precisa ter o Ruby instalado em seu computador.

A instalação é bem simples, tendo o Ruby instalado e funcionando basta rodar o comando abaixo:

```bash
sudo gem install sass
```

Se nada falhar você já tem o SASS instalado em sua máquina, rode `sass -v` do seu terminal para certificar que tudo ocorreu bem.

## 123 testando..

Vamos criar um arquivo SASS para teste.

Abra o seu editor favorito, crie um novo arquivo com o seguinte código:

```sass
$cor: #006699;
$bg: #f1f1f1;

body {
  background-color: $bg;
  font-size: 16px;
}

a {
  color: $cor;

  &:hover,
  &:focus {
    text-decoration: none;
    border-top: 1px dashed $cor;
  }
}
```

Depois salve com a extensão `.scss` com o nome que preferir.. eu salvei como `style.scss`.

No terminal rode:

```bash
sass --watch style.scss:style.css
```

No código acima nós executamos o SASS passando o parâmetro `--watch` para que ele fique assistindo nosso arquivo `style.scss`, assim a cada `Ctrl+S` que damos no arquivo ele executa e processa nosso CSS final.

O código processado ficou assim:

```sass
.box {
  background-color: #f1f1f1;
  font-size: 16px;
}

.box p {
  margin: 0;
}

a {
  color: #006699;
}

a:hover, a:focus {
  text-decoration: none;
  border-top: 1px dashed #006699;
}
```

Incrível não?!

Esse é só o começo de uma longa jornada com o **Pré-processador SASS**, logo vou explicar detalhes do código acima e muito mais.

Aguardem..

***

1. Conhecendo o pré-processador SASS - Instalação
2. [Conhecendo o pré-processador SASS - Variáveis](/sass-variaveis-parte-2)
3. [Conhecendo o pré processador SASS - Mixins](/sass-parte-3-mixins)
4. [Conhecendo o pré processador SASS - Funções](/sass-parte-4-funcoes)
5. [Conhecendo o pré-processador SASS - Placeholder](/sass-parte-5-placeholder)
