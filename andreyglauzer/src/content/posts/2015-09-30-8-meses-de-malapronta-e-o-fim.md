---
title: "8 meses de MalaPronta e o fim."
date: 2015-09-30
description: "Eu queria poder dizer que to feliz com tudo isso, mas não to. Eu amava trabalhar lá, apesar de muitas intrigas e desavenças, eu amava meu emprego."
image: /images/posts/2015/09/galera-do-porao-malapronta.jpg
categories: geral
tags:
- geral
---

Esse post não poderia começar melhor, com um "*I love U*" para MalaPronta.com, um ambiente descontraído com piadas ruins (mas que são boas) e uma sala que não é nem quente nem fria e nem escura ou clara(entendedores entenderão).

Eu queria poder dizer que to feliz com tudo isso, mas não to. Eu amava trabalhar lá, apesar de muitas intrigas e desavenças, eu amava meu emprego.

Eu vou compartilhar com vocês meus **8 meses** de experiência em uma *startup* com 10 anos de vida, posso dizer que não vi o começo de tudo, mas vi o fim do começo, vi o fim de sonhos e planos, amizades e desavenças, tudo se acabar dentro de uma sala de reuniões de um hotel, tudo se acabou com algumas palavas ditas em dois idiomas, porque um só já não bastava.

## Meu começo na MalaPronta

Tudo começou em meados Janeiro, quando nos meus primeiros dias de empresa eu teria que entender um sistema desconhecido, entender como melhorar (ou deixar menos ruim) o HTML, o CSS e o JS daquele sistema, esse sistema era chamado de **Reserva Imediata**.

No começo tudo parecia muito confuso, muitos arquivos de configs, era configs pra tudo, pra por CSS, pra tirar CSS, pra por JS, pra tirar JS.. isso tudo era novo pra mim, mas bora lá melhorar esse projeto.

## Primeiro desafio

O primeiro desafio, que me foi solicitado, foi _**Ajudar a melhorar a performance do projeto**_. Todos estavam envolvido nesse novo desafio, DBA, Integrações, Back-end e Front-end, confesso que tava com receio de não conseguir ajudar em quase nada mas eu aceitei o desafio.

Primeira coisa que configurei no projeto foi o **Gulp**, com ele eu consegui *minificar* quase 4 mil arquivos CSS e JS, e comprimir as mais de 3 mil imagens em questões de minutos, depois fizemos uma "*marotagem*" com *regex* para *minificar* o HTML processado pelo **PHP**, com isso reduziriamos relativamente o tamanho dos arquivos de download do site, foi um bom ganho.

Resultado, conseguimos baixar a média do site de 14s pra 8s, quase a metade não? Claro que isso não se deve só a mim, a galera trabalhou duro para isso acontecer, equipe massa (faltou o churrasco pra comemorar hein!).

## Segundo desafio

Eu tava quase fechando dois meses de empresa quando veio o segundo desafio: _**Transformar o Reserva Imediata em um site responsivo**_, esse eu encarei com a cara e a coragem. Eu nunca tinha pego um site antigo, de código legado, que sequer tinha visto uma media query na vida (talvez a media print mas essa não conta) e transformado em responsivo, esse seria um desafio e tanto.

Resultado, em duas semanas a versão responsiva do site já podia ir pro ar, a galera curtiu, eles iriam eliminar completamente o **m.**, um projeto que era uma pedra no sapato dos devs.

## Terceiro desafio

Esse era com certeza o maior desafio de todos, _**Desenvolver o novo Reserva Imediata**_. Quando eu entrei eles já estavam criando o layout há algum tempo, inclusive o meu teste foi em cima de um HTML feito com base nesse layout.

Como tudo na vida é injusto, o que fizeram com o trabalho do designer que criou essa versão do layout também foi injusto, com a entrada do novo UX, foram meses/anos de trabalho jogados fora. Posso dizer que vi o projeto ser jogado fora e começado de novo do zero, sem graça e sem vida... e vi ele tomando vida aos poucos com a entrada da nova designer.

Todos sabem que designers e desenvolvedores não se dão muito bem em agências, mas ali era diferente, nos dávamos bem até, só a distância que nos separava que não era pra ser tão grande assim(eram 3 andares), no começo eu queria que ficassemos todos juntos (front, designer, ux), mas não, os designer precisavam dar prioridades pra outros projetos, não pro site (que era o principal produto da empresa), mas não liguem, **esse terceiro desafio nunca será completado.**

## A equipe

Eu tinha uma equipe massa quando eu entrei, atenciosos, focados e determinados ao extremo e tínhamos um _team leader_ foda pra caralho. Éramos em 5 membros, sendo 1 _team leader_ e 3 devs e 1 front(eu). Nosso entrosamento era o máximo, tínhamos reuniões diária (das quais eu quase não participava), tínhamos almoços só da equipe (partiu Madero?), mas as perdas foi deixando isso tudo para trás, primeiro um dos membros virou Analista, logo ele foi deixando de fazer parte da equipe, deixando de ir nas reuniões e tudo mais. Entrou uma nova programadora pra ajudar nas demandas do site atual enquanto nós focavamos nossos recursos no site novo. Depois de algum tempo anunciada a saída do nosso _team leader_, logo mais os outros foram indo também, acabou ficando só eu e a nova programadora no time do site.

## A segunda equipe

Então foi realocado um programador de outro time para o nosso e ficamos em 3 na equipe. Essa nova formação trabalhou duro para entregar as demandas do Reserva Imediata e desenvolver novas *features* para o novo projeto e muito mais, até que..

## O documento de "ajustes"

Estávamos todos ansiosos para ver uma versão do novo site funcionando, principalmente quem não estava acompanhando o desenvolvimento de perto (pessoal do sexto), então fizemos uma versão e colocamos em um ambiente de "testes"_(entre aspas porque alguns ainda não entenderam que era apenas testes)_.

Então na metade da terceira semana de setembro meu gerente me chamou para fazer nosso _one one_ mensal, e ele me passou uma lista de ajustes para se fazer no site, que era pertinente ao meu trabalho. Até aí tranquilo né, lista de ajustes é normal em sites de testes, deve ta quebrando alguma coisa no layout ou tem um ajuste de erro de digitação.

Ta bom, vai vendo..

O documento contia coisas do tipo: "_A indentação no navegador está errada(bagunçada), isso prejudica manutenções futuras_"... E também: "_As classes que você usou nos títulos estão confusas, isso prejudica manutenções futuras_"... E mais: "_Muitas linhas no seu CSS, pode impactar na performance_".. E ainda: "_Muitas linhas no seu JS, pode impactar na performance_".. [Pode isso Arnaldo?](http://geradormemes.com/media/created/18qk4w.jpg)

Tem como não levar para o lado pessoal? Tem como não ter isso como um insulto ao meu trabalho? Pois bem.. Deixarei que você, que está lendo isso agora, responda essas perguntas e tire suas própias conclusões.

## A infra

Eu não posso deixar de mencionar o famoso [Quarteto Fantástico](http://wprosdocimo.com.br/fantastic_four/) que era a equipe de infraestrutura, preciso deixar os meus agradecimentos aqui por todas as pausas para o café que tivemos no sétimo andar e todos os papos nerds(e outros papos sem futuro e de buling uns com os outros), com esses com certeza materei eterno contato. Continuem salvando o mundo e fazendo ótimos cafés como vocês sempre fizeram que tudo ficará bem.

## O fim

Como eu comentei no início desse post, por mais que existiam intrigas, fofocas e desavenças eu amava trabalhar na MalaPronta, me sentia livre para trabalhar, pesquisar e implementar novas coisas. Novas ideias surgiram de mim, como criar um framework pra padronizar códigos CSS e JS, criar um blog de TI da MalaPronta pra compartilhar nossas soluções com outras pessoas, como muitas empresas de TI fazem por ai.

Eu aprendi muito com as pessoas em minha volta, desenvolvedores super inteligentes, antenados e focados no trabalho. Aprendi tecnologias novas como Symfony, Vagrant, sistemas de deploys inteligentes, sistemas de monitoramentos, aprendi a ser humilde com os caras mais humildes que já conheci e que são fodas pakas, aprendi que nunca uma piada sua é boa ou tão ruim se não tiver ouvintes que a entendam bem, aprendi que um ambiente (quente ou frio, escuro ou claro) nunca é acolhedor se não tiver pessoas legais é carismáticas nele.

Sempre vou sentir saudades das pessoas do porão da MalaPronta, vulgo **3° andar**.

![Galera do porão da MalaPronta.com](/images/posts/2015/09/galera-do-porao-malapronta.jpg)
