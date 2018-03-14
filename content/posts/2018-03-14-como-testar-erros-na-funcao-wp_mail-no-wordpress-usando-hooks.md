---
title: Como testar erros na função wp_mail() no WordPress usando hooks
date: '2018-03-14T15:48:51-03:00'
category: WordPress
tags: 'wordpress, function, php'
description: >-
  A dica hoje será bem rápida, iremos testar erros na função wp_mail() no
  WordPress usando hooks.
---
Sabemos que da pra fazer bastante coisa no WordPress usando os famosos hooks e sabemos também que é impossível saber o retorno de um erro ao tentar enviar um email usando a função wp_mail(), pois ela só retorna valores booleanos (true ou false).

Sabendo disso o **WordPress** já nos deu uma saída dessa cilada bino!

<figure>
<img src="https://images.8tracks.com/cover/i/008/922/101/binogrande-4107.jpg?rect=142,0,451,451&q=98&fm=jpg&fit=max"/>
<figcaption>It's a trap bino!</figcaption>
</figure>

Usando o hook `wp_mail_failed` podemos criar uma função para captar os erros gerados.

<script src="https://gist.github.com/nandomoreirame/599efb41d7dda5a6d9cbb84b96345800.js"></script>

E usando o postman eu simulei uma requisição para minha aplicação e BAZINGA!

![hook wp_mail_failed no postman app](/static/wp_mail-error-postman.png)

É isso ai pessoal, se curtiu comenta ai.

`exit();`
