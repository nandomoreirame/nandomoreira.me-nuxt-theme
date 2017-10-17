---
title: "Fazendo um sistema de busca simples no Jekyll usando AngularJS"
date: 2015-12-27 22:28:33
description: "Por alguns meses eu usei o plugin Simple Jekyll Search que funcionou muito bem no meu blog"
keywords: "jekyll, angular, angularjs"
categories:
- jekyll
tags:
- jekyll
- angular
- angularjs
---

Por alguns meses eu usei o plugin [Simple Jekyll Search](https://github.com/christian-fei/Simple-Jekyll-Search) que funcionou muito bem no meu blog, mas agora ele foi totalmente feito em angular e ficou uma maravilha.

Hoje vou mostrar aqui como foi eu criei essa façanha, é bem simples e sem segredo nenhum, vem comigo.

## Primeiro obstáculo: Liquid x Angular

Você deve ter notado que o Jekyll, assim como o Angular, usa 2 chaves em sua sintaxe, causando assim um conflito na hora de compilar o jekyll.

É bem simples resolver esse pequeno probleminha, o próprio Angular tem a solução, o [$interpolateProvider](https://docs.angularjs.org/api/ng/provider/$interpolateProvider) é usado para configurar a interpolação da linguagem.

Com ele vamos setar no `config` para o angular reconhecer apenas `{( var )}`, mais ou menos assim:

```javascript
var app = angular.module('searchApp', []);
app.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);
```

## O arquivo json

Precisamos pegar todos os artigos do blog para alimentar nosso Javascript, criaremos um template para o Jekyll montando um `.json`.

#### search.json

```liquid
---
layout: null
---
[
  {% for post in site.posts %}
    {
      "title" : "{{ post.title | escape }}",
      "category" : "{{ post.categories | array_to_sentence_string }}",
      "tags" : "{{ post.tags | array_to_sentence_string }}",
      "url" : "{{ site.baseurl }}{{ post.url }}",
      "date" : "{{ post.date | date: "%-d/%-m/%Y" }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
]
```

O código acima irá montar uma estrutura mais ou menos assim.

```json
[
  {
    "title"    : "Fazendo um sistema de busca simples no Jekyll usando AngularJS",
    "category" : "jekyll",
    "tags"     : "jekyll, angular, and angularjs",
    "url"      : "/busca-no-jekyll-com-angularjs",
    "date"     : "27/12/2015"
  } ,
  {
    "title"    : "dotX - mais um tema para Jekyll",
    "category" : "temas-jekyll",
    "tags"     : "temas, jekyll, and download",
    "url"      : "/dotX-mais-um-tema-para-jekyll",
    "date"     : "21/12/2015"
  }
]
```

Se você quiser dar uma olhada no arquivo final pode entrar [nesse link aqui]({{ "/search.json" | prepend: site.baseurl }}).

## searchController

Logo acima, no primeiro código angular, nós iniciamos o módulo `searchApp` e setamos o `config` para corrigir a interpolação da linguagem, agora vamos terminar nosso script criando o controller.

```javascript
// criando o ng-controller="searchController"
app.controller('searchController', ['$scope', '$http', function($scope, $http){
  // criando a funcao "pesquiser(q)" que logo será usada em ng-keyup="pesquisar(search)"
  $scope.pesquisar = function(q) {
    $scope.posts = [];
    if (q != "" && q != undefined && q.length >= 1) {
      // no $http.get() que toda a mágica acontece...
      $http.get('/search.json', { "data" : q }).success(function(data) {
        // atribuindo os objetos em uma variável "posts"
        $scope.posts = data;
      }).error(function(data) {
        console.error('error...');
      });
    }
  };
}]);
```

## O HTML

```html
<div ng-app="searchApp">
  <div ng-controller="searchController">
    <input type="text" ng-model="search" ng-keyup="pesquisar(search)" placeholder="Digite: sass, javascript, ruby, gulp, php..." autofocus autocomplete="off">
    <hr>
    <ul ng-show="posts.length > 0">
      <li ng-repeat="post in posts | filter:search">
        <a href="{( post.url )}">
          <span>{( post.title )}</span> <small>{( post.category )}</small>
        </a>
      </li>
    </ul>
  </div>
</div>
```

Bem, esse HTML ai em cima dispeça explicações né, se você sabe pelo menos o básico de AngularJS você já vai "matar todas as charadas" dele, mas vou dar uma explicação rápida.

* **`ng-app="searchApp"`**: iniciamos o app do Angular;
* **`ng-controller="searchController"`**: iniciamos o controller searchController;
* **`ng-model="search"`**: iniciamos o model search;
* **`ng-keyup="pesquisar(search)"`**: a funcao pesquisar() recebe como parâmetro o model search;
* **`ng-show="posts.length > 0"`**: a `ul` só vai existir se a variável `posts` existir;
* **`ng-repeat="post in posts | filter:search"`**: caso haja objetos na variável `posts` criamos a lista com `ng-repeat`;

## O filtro

Você deve ter notado que o nosso `searchController` e nossa função `pesquisar` retorna todos os objetos do arquivo `search.json` por isso passamos um filtro mágico do AngularJS chamado `filter:` que recebe o model `search` (que é basicamente as letras digitadas no input).

[Demonstração](http://nandomoreira.me/busca-no-jekyll-com-angularjs/) [Download](https://github.com/nandomoreirame/busca-no-jekyll-com-angularjs)

Com isso fechamos nosso sisteminha de busca simples no Jekyll usando AngularJS ;)

Gostou, comenta ai \o/

\end
