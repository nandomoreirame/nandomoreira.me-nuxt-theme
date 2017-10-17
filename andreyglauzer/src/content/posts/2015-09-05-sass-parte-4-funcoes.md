---
title: "#4 - Conhecendo o pré processador SASS | Funções"
date: 2015-09-05
description: "Conhecendo o pré-processador SASS-Parte 4"
keywords: "sass, css, scss, pre-processador, pre-processadores"
image: /images/posts/2015/09/conhecendo-o-pre-processador-sass.jpg
categories: sass
tags: "sass, css, pre-processador"
---

Esse artigo será bem rápido, vou falar sobre o recurso que deixa o **SASS** ainda mais com cara de linguagem de programação, são as **funções**.

Eu comentei no [artigo anterior](/sass-parte-3-mixins) que _"Mixins são como funções que retornam um bloco inteiro de CSS"_, esse recurso fica ainda mais completo se somado com **funções**.

Vamos fazer um exemplo clássico, somar `a + b`.

```sass
@function soma($a, $b: 0) {
  $c: $a + $b;
  @return $c;
}

.card {
  width: soma(500px, 200);
}
```

O exemplo acima vai me retornar o valor da soma do primeiro parâmetro com a do segundo, resultando em `700px` de largura para a classe `.card`. Simples não é mesmo?

E o que aconteceria se eu aplicasse somente o primeiro parâmetro?

```sass
.card {
  width: soma(500px);
}
```

Isso mesmo que você pensou! O resultado seria apenas de 500px pois a variável `$b` está com valor inicial de zero.

## Conclusão

Se você precisar resolver alguma conta ou converter algum número, provavelmente você irá usar funções, caso contrário use [Mixins](/sass-parte-3-mixins).

Eu particularmente não uso muitas funções, tenho apenas algumas em meu arcenal, posso até listar elas aqui para vocês.

```sass
// Converte numeros para inteiro
//
@function parseInt($n) {
  @return $n / ($n * 0 + 1);
}

// remove a unidade deixando apenas o numero
// strip-unit(10px) retorna apenas o numero 10
//
@function strip-unit($number) {
  @if type-of($number) == 'number' and not unitless($number) {
    @return $number / ($number * 0 + 1);
  }

  @return $number;
}

// Converte unidades px para em
//
$font-size-base: 16px;

@function em($pixels, $context: $font-size-base) {
  @if (unitless($pixels)) {
    $pixels: $pixels * 1px;
  }

  @if (unitless($context)) {
    $context: $context * 1px;
  }

  @return $pixels / $context * 1em;
}
```

É isso ai moçada, se tiverem alguma dúvida comentem ai que reponderei em ["dois palitos"](http://goo.gl/oM5AOY).

Abraço!

***

1. [Conhecendo o pré-processador SASS - Instalação](/conhecendo-o-pre-processador-sass-parte-1)
2. [Conhecendo o pré-processador SASS - Variáveis](/sass-variaveis-parte-2)
3. [Conhecendo o pré processador SASS - Mixins](/sass-parte-3-mixins)
4. Conhecendo o pré processador SASS - Funções
5. [Conhecendo o pré-processador SASS - Placeholder](/sass-parte-5-placeholder)
