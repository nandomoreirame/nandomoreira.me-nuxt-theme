---
title: "#5 - Conhecendo o pré-processador SASS | Placeholder"
date: 2015-09-27
description: "Uma das funcionalidades mais legais do SASS é você poder criar placeholders para agrupamento de códigos repetidos"
keywords: "sass, css, scss, pre-processador, pre-processadores"
image: /images/posts/2015/09/conhecendo-o-pre-processador-sass.jpg
categories: sass
tags: "sass, css, pre-processador"
---

Nos artigos anteriores eu falei sobre _[Funções](/sass-parte-4-funcoes/)_ e sobre _[Mixins](/sass-parte-3-mixins/)_ do **SASS**, mas sem sombra de dúvidas, uma das funcionalidades mais legais do SASS (na minha opinião) é você poder criar _[placeholders](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_)_ para agrupamento de códigos repetidos.

## O que é um Placeholder

Um _placeholder selector_ (transuzindo para o português: _seletor de espaço reservado_) se assemelha com os sectores de ID's (#) e de classes (.), ou seja você cria o seu bloco de CSS normal mas ao invés de usar `.` ou `#` você usa `%` para suas declarações.

```sass
%background-white {
  background-color: #fff;
}

%heading-big {
  font-size: 52px;
  padding: 30px 15px;
  @extend %background-white;
}

body {
  @extend %background-white;
}

.post-heading {
  @extend %heading-big;
  border-bottom: 1px solid #eee;
  margin-bottom: 60px;
}

.post-page {
  @extend %heading-big;
  color: #333;
}
```

Outra diferença de ID's e Classes é que os placeholders não ficam visíveis quando meu CSS for processado, ele só aparece se for invocado com `@extend` por alguma classe ou ID.

No código acima os placeholders `%background-white` e `%heading-big` não aparecerão no meu CSS processado enquanto não forem chamados, mesmo invocando o `%background-white` dentro de `%heading-big` eles ainda continuarão invisíveis.

## E qual a vantagem?

A grande vantagem de se usar placeholders é o agrupamento de propriedades CSS iguais, isso deixa o seu CSS final muito mais limpo e consequentemente menor, veja o resultado final:

```css
body,
.post-heading,
.post-page {
  background-color: #fff;
}

.post-heading,
.post-page {
  font-size: 52px;
  padding: 30px 15px;
}

.post-heading {
  border-bottom: 1px solid #eee;
  margin-bottom: 60px;
}

.post-page {
  color: #333;
}
```

Note que o agrupamento dos selectores `body`, `.post-heading` e `.post-page` com a propriedade `background-color` e `.post-heading` e `.post-page` com as propriedades `font-size` e `padding`. Isso é incrível não?

Bom, por hoje é só..

### Leia os outros artigos dessa série:

1. [Conhecendo o pré-processador SASS - Instalação](/conhecendo-o-pre-processador-sass-parte-1/)
2. [Conhecendo o pré-processador SASS - Variáveis](/sass-variaveis-parte-2)
3. [Conhecendo o pré processador SASS - Mixins](/sass-parte-3-mixins)
4. [Conhecendo o pré processador SASS - Funções](/sass-parte-4-funcoes)
5. Conhecendo o pré-processador SASS - Placeholder

Gostou do artigo, compartilhe para que outros possam ler também e comenta ai?

/end
