---
title: Criando formulário de contato para Wordpress com Odin Framework
description: Criando formulário de contato para Wordpress com Odin Framework
keywords: "Wordpress, Dicas, Odin"
image: /images/posts/2014/07/criando-formulario-de-contato-para-wordpress-com-odin-framework.png
date: 2014-07-13 15:57:09
categories:
- wordpress
tags:
- iniciantes
- odin
- php
- wordpress
---

![Criando formulário de contato para Wordpress com Odin Framework](/images/posts/2014/07/criando-formulario-de-contato-para-wordpress-com-odin-framework.png)

Faaaaaaaaala ai pessoas, tudo jóia?

O tutorial de hoje está supimpa! Nós vamos criar formulários para Wordpress usando um framework chamado <a title="Odin Framework" href="http://wpod.in/" target="_blank">Odin Framework</a>.

Primeira coisa que você deve fazer é baixar o Odin, abra o site do Odin e clique no botão "Download Odin" ou se preferir o link está logo no final desse post.

Você não precisa de todos os arquivos do Odin para implementar os formulários no seu site, basta que inclua apenas 2 arquivos, o <code>abstract-front-end-form.php</code> que está dentro do diretório <code>/core/classes/abstracts/</code> e o <code>class-contact-form.php</code> que está dentro de <code>/core/classes/</code>. <strong>É necessário que seja os 2 arquivos pois um depende do outro!</strong>

Para esta demostração eu usei o tema <a title="Twenty Twelve Wordpress Theme" href="http://wordpress.org/themes/twentytwelve" target="_blank">Twenty Twelve</a>. Dupliquei o arquivo <code>page.php</code> e criei um template chamado <code>contato.php</code>.

> **Obs:** Para saber como criar um template no Wordpress acesse e leia esse link: <a title="Wordpress Page Templates" href="http://codex.wordpress.org/Page_Templates" target="_blank">Page Template</a>

Desse template eu removi o <code>while</code> padrão do tema e a linha onde está chamando o sitebar <code>get_sidebar();</code>

Agora copie o 2 arquivos para dentro de alguma pasta do seu tema, eu criei um diretório chamado <code>contact-form/</code> e coloquei os 2 arquivos lá dentro.

Para que tudo funcione corretamente precisamos incluir os arquivos no arquivo <code>functions.php</code> do tema. Primeiro o abstract-front-end-form e em seguida o class-contact-form assim:

```php
<?php
// arquivo function.php

include 'contact-form/abstract-front-end-form.php';
include 'contact-form/class-contact-form.php';
?>
```

Eu criei um terceiro arquivo chamado <code>contact-form.php</code> no mesmo diretório e será nesse que iremos criar a função para criar o formulário de contato.

Seguindo a <a title="Documentação do Odin Contact Form" href="https://github.com/wpbrasil/odin/wiki/Classe-Odin_Contact_Form" target="_blank">documentação do Odin</a> iremos criar uma função chamada <code>odin_contact_form()</code>.

```php
<?php
function odin_contact_form() {
  $form = new Odin_Contact_Form(
    'form_id', // ID do formulário
    'eu@email.com', // E-mail do destinatário.
    array( 'vc@email.com', 'tu@email.com' ), // array com e-mails que receberão cópia.
    array( 'alguem@email.com' ) // array com e-mails que receberão cópia oculta.
    // array( 'class' => 'form' ) // array com atributos para o formulário.
    // 'file' // string com método que será enviado o anexo, no caso 'file' como anexo e 'url' para enviar links.
  );
  return $form;
}

add_action( 'init', array( odin_contact_form(), 'init' ), 1 );
?>
```

Nessa função você pode observar que instanciamos a classe <code>Odin_Contact_Form()</code> com alguns atributos obrigatórios como o <strong>id do formulário</strong> e o <strong>e-mail do destinatário</strong>, você também pode incluir um array de e-mails extras para receberem uma cópia da mensagem.

Para criarmos os campos precisamos de um punhado de <code>arrays</code> e os mesmos precisam estar exatamente em seus devidos lugares para um funcionamento correto da classe do Odin. Para cada campo criado temos um <code>id</code>, uma <code>label</code> e um <code>type</code> que também são obrigatórios. Para mais detalhes da função consulte a <a title="Documentação do Odin Contact Form" href="https://github.com/wpbrasil/odin/wiki/Classe-Odin_Contact_Form" target="_blank">documentação do Odin</a>.

O formulário de contato já está criado, mas temos que renderizar o mesmo no template que criamos alguns minutos atrás.

Basta chamar a função <code>echo odin_contact_form()-&gt;render();</code> onde você quer que o seu formulário apareça, lembrando que <code>odin_contact_form()</code> é o nome da função com a instancia do <code>Odin_Contact_Form()</code> e os <code>arrays</code> dos campos, se você optou por criar a função com outro nome você chamaria assim: <code>formulario_de_contato()-&gt;render();</code>.

> **Obs:** O Odin framework usa o HTML e as classes do <a title="Bootstrap 3" href="http://getbootstrap.com/" target="_blank">Bootstrap 3</a> então se você não está usando o BS3 como framework css você precisará formatar o seu formulário de contato, isso vale também para a mensagem de envio do formulário.

[Odin Framework](https://github.com/wpbrasil/odin/archive/master.zip) [Arquivos do tutorial](https://app.box.com/s/hbb41skydme4ovz4my27)