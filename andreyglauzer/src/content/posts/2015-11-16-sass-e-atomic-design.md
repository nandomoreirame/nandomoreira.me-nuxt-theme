---
title: "SASS + Atomic design (parte 1)"
date: 2015-11-16
description: "SASS é um pré-processador incrível não acha? Mas muitos não sabem como organizar seus projetos com ele"
image: /images/posts/2015/09/conhecendo-o-pre-processador-sass.jpg
categories: sass
tags:
- sass
- css
- pre-processador
---

**SASS** é um pré-processador incrível não acha? Mas muitos não sabem como organizar seus projetos com ele, nesse artigo vou lhe mostrar como organizar uma estrutura _"foda"_ usando **[SASS](http://sass-lang.com/)** e _**[Atomic Design](http://patternlab.io/about.html)**_, vem comigo.

> Não vou explicar o que é _Atomic Design_, não é o intuito desse artigo, mas vou deixar aqui alguns links para que você dê uma lida antes de continuar.

* **[O que é Design Atômico?](http://tableless.com.br/o-que-e-design-atomic/)** - _tableless_
* **[Atomic Design - Por que usar?](http://nomadev.com.br/atomic-design-por-que-usar/)** - _nomadev_
* **[Passo-a-passo como desenvolver com Atomic Design, Mobile-first e Stylus - Parte 1](http://nomadev.com.br/passo-a-passo-como-desenvolver-com-atomic-design-mobile-first-e-stylus/)** - _nomadev_
* **[Atomic Design como funciona](http://www.frontendbrasil.com.br/tutoriais/atomic-design-como-funciona/)** - _frontendbrasil_

## /diretórios

Depois que você entendeu bem o que é _Atomic Design_ e como ele funciona vamos começar a desenhar a estrutura do nosso projeto.

Nós sabemos que _atomic design_ é dividido em 5 itens, **_atoms_**, **_molecules_**, **_organisms_**, **_templates_** e **_pages_**, mas nós usaremos apenas 3 desses itens: **_atoms_**, **_molecules_** e **_organisms_** e, claro, criaremos um diretório pra cada item, mais ou menos assim:

```text
sass-e-atomic-design/
  └── sass/
        ├── atoms/
        │   └── # Arquivos sass para atoms
        ├── molecules/
        │   └── # Arquivos sass para molecules
        └── organisms/
            └── # Arquivos sass para organisms
```

Ainda junto com esses 2 itens do _Atomic Design_ vamos adicionar mais 2 diretórios, `core/` e `vendor/`.

Fica mais ou menos assim:

```text
sass-e-atomic-design/
  └── sass/
        ├── atoms/
        │   └── # Arquivos sass para atoms
        ├── core/
        │   └── # Arquivos sass para variaveis e mixins
        ├── molecules/
        │   └── # Arquivos sass para molecules
        ├── organisms/
        │   └── # Arquivos sass para organisms
        └── vendor/
            └── # Arquivos sass de terceiros
```

## O diretório core/

Vamos começar com o diretório `core/`, nele vamos criar 4 outros diretórios: `bosons/`, `functions/`, `mixins/` e `variables/`, e 4 arquivos `_bosons.scss`, `_functions.scss`, `_mixins.scss` e `_variables.scss`.

* **_bosons/_**: São os _[placeholders](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_)_ do SASS, são as partículas que vão dar massa a nossos átomos.
* **_functions/_**: São as [funções SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#functions) do projeto.
* **_mixins/_**: São as [mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins) do projeto.
* **_variables/_**: São todas as variáveis do projeto.

Vamos deixar `functions/`, `mixins/` e `variables/` de lado e vamos nos concentrar em `bosons/`, é ai que começa a fazer sentido a metodologia _Atomic Design_. Nesse diretório vamos criar um _bóson_ que muita gente conheçe, o famoso `button`.

Crie um arquivo chamado `_buttons.scss` e coloque a seguinte estrutura.

```scss
%button {
  padding: .8em 2em;
  text-decoration: none;
  border: none;
  margin-top: 1em;
  display: inline-block;
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  transition: .4s background ease, .4s color ease;
  border-radius: .4em;
  background: #c12b2c;
  font-weight: bold;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    background: lighten(#c12b2c, 7%);
    text-decoration: none;
    color: #fff;
  }
}
%button-ghost {
  background-color: transparent;
  border: 2px solid #fff;
  border: 2px solid rgba(#fff, .9);

  &:hover,
  &:focus,
  &:active {
    border-color: rgba(#fff, .7);
    background-color: rgba(#fff, .1);
    text-decoration: none;
    color: #fff;
  }
}
```

A estrutura acima tem dois _bósons_ que darão massa aos átomos de botões por todo nosso projeto, é bem simples, basta usar o `@extend %button;` que a mágica acontece.

Esse é só um pequeno exemplo de como podemos criar os nossos _placeholders_ de SASS em nosso projeto, pense em _bóson_ como algo que você vai usar muito e por todo o seu projeto, algo que será igualmente repetido em muitos lugares, assim você abstrai o CSS e o arquivo final ficá sem repetição de código.

> Leia mais sobre _bósons_ e _quarks_ em [nomadev](http://nomadev.com.br/atomic-design-bósons-e-quarks-extended/)

## /continua..

Essa é a primeira parte do nosso tutorial de **SASS e Atomic Design**, no próximo episódio veremos como unir os _bósons_ e os _atoms_ e como isso pode reduzir o seu CSS final, ajudando assim na performace do seu projeto. Até lá!

/end
