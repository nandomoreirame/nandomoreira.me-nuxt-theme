---
title: "Wordpress - plugins x functions.php"
date: 2015-07-24
description: "Muitos amigos e colegas de trabalho sempre me perguntam porque eu sou contra o uso de plugins no Wordpress."
keywords: "wordpress, plugins, funcoes, php, dicas"
categories:
- wordpress
- php
tags:
- wordpress
- dicas
- php
---

Muitos amigos e colegas de trabalho sempre me perguntam porque eu sou contra o uso de plugins no Wordpress.

A resposta é simples, não tem porque pegar um elefante e tentar colocar dentro de um fusca, algum dia algum deles vai reclamar, ou o elefante com dores no corpo ou o fusca vai quebrar em algum ponto do trajeto.

 - **O Elefante**: o plugin de galeria.
 - **O Fusca**: Uma página simples de galeria.

Vou explicar melhor, vem comigo.

## Plugins

#### História

O seu cliente, bem pomposo que é, quer uma página de galeria de imagens, e você, bem esperto vai no google procurar um plugin para criar tal página o mais rápido possível.

Ai você encontra um plugin, lindo e maravilhoso, que tem um monte de funcionalidades, shemes de todas as cores e tamanhos, um monte de campos customizados bem legais… ai eu te pergunto: Precisa mesmo de tudo isso para criar uma página com fotos clicáveis que abrem em um lightbox?

Por isso que a frase: “Tentar colocar um elefante dentro de um fusca” se encaixa perfeitamente nesse caso. Eu aposto que você não usou 20% do que o plugin tem desenvolvido. Porque não desenvolver algo sob medida para esse projeto? É fácil e simples usando o Wordpress.

Outro ponto importante, se o cliente querer algo que não tem no plugin o que você vai fazer?

  - (   ) - Implementar essa funcionalidade dentro do plugin (Se o cliente resolver atualizar o plugin qualquer alteração que você fez irá pelo ralo)
  - (   ) - Remover o plugin e fazer na mão
  - ( x ) - Sentar e chorar, porque qualquer das opções acima te dará uma tremenda dor de cabeça e muito retrabalho.

#### DICA:


O que você deve fazer em cada projeto é:

 - Analisar todos os módulos e páginas que seu cliente pediu,
 - Verificar as possibilidades de usar ou não um plugin,
 - Se você decidir usar, analisar cada um antes de adicionar ao projeto.

Não vou dizer para você que eu não uso plugins em meus projetos, mas claro que uso, mas para funcionalidades bem específicas que provavelmente não poderei desenvolver dentro do projeto.
O importante é quanto menos plugins o seu projeto tiver melhor, por favor não passe de 5, e eu ainda acho muito.

### Funções

Se você é programador PHP intermediário ou avançado e usa plugins em todos os seus projetos para variadas funcionalidades, sinto muito te dizer mas você está fazendo isso errado.

Você sabia que existe um arquivo chamado `functions.php` em todos os temas e a partir deste você pode incluir muitos outros arquivos?

.. brincadeira viu.

Se somar o seu conhecimento em PHP com Wordpress o céu é o limite, não fique acanhado, crie suas próprias funções, pesquise funções do Wordpress, implemente a tão sonhada galeria para seu cliente sob medida, sem tirar coisas úteis e nem colocar coisas inúteis. Vai por mim, é fácil!

E no final todos ficam felizes.

Existe um tema boilerplate criado pela cominidade [WP Brasil](https://github.com/wpbrasil) chamado [Odin framework](http://wpod.in/), use à vontade esse cara, ele será seu melhor amigo.

Depois que eu comecei a usar o Odin eu não uso mais plugins para:

 - [Criar formulários de contato](/criando-formulario-de-contato-para-wordpress-com-odin-framework),
 - [Galeria de fotos](https://github.com/wpbrasil/odin/wiki/Classe-Odin_Metabox#image_plupload),
 - [Criar Custom Post types](https://github.com/wpbrasil/odin/wiki/Classe-Odin_Post_Type),
 - [Criar Taxonomias](https://github.com/wpbrasil/odin/wiki/Classe-Odin_Taxonomy) (tags e categorias),
 - [Criar Meta Boxes](https://github.com/wpbrasil/odin/wiki/Classe-Odin_Metabox),
 - [Opções do meu tema](https://github.com/wpbrasil/odin/wiki/Classe-Odin_Theme_Options).


#### Conclusão

Seja cuidadoso com cada projeto que você for criar, tudo isso agregará valor à você mesmo. Use apenas o necessário, comprima os assets, adicione apenas o necessário em seu projeto e não abuse na instalação de plugins.

Abraço!
