---
title: "Como instalar o Gulp 4"
date: 2015-09-26
description: "Gulp 4 não foi liberado ainda e se você não pode esperar para colocar suas mãos sobre ele, aqui vai como instalar o Gulp 4."
keywords: "node, gulp, gulpjs, instalacao"
image: /images/posts/2017/01/comece-com-gulp.png
categories: sass
tags: "node, gulp, instalação"
---

Gulp 4 não foi liberado ainda e se você não pode esperar para colocar suas mãos sobre ele, aqui vai como instalar o Gulp 4.

### Instale o Gulp globalmente

Se você tiver uma versão anterior do Gulp instalado, desinstale primeiro. Talvez seja necessário executar este comando como um administrador ou um superusuário, dependendo do seu sistema.

```bash
npm uninstall -g gulp
npm install -g "gulpjs/gulp-cli#4.0"
Na minha máquina (Linux Mint Rebecca), eu não tinha problemas contínuos usando Gulp < 4 depois de instalar globalmente Gulp 4.
```

### Adicionar Gulp 4 em seus repositórios

Se você usar uma versão anterior do Gulp (ie Gulp 3.8.x ou anterior), remova-o do repositório que você deseja atualizar. Não se esqueça de especificar --save-dev ou --save para que o seu package.json seja atualizado.

```bash
cd your_repo/
npm uninstall gulp --save-dev # removendo o gulp 3.8.x local
npm install "gulpjs/gulp#4.0" --save-dev # instalando o gulp 4.0 local
```

### Possíveis problemas ao desinstalar Gulp

Na minha máquina, a versão anterior do Gulp não foi devidamente removida e eu comecei a ficar esse erro ao tentar executar:

```bash
/usr/local/lib/node_modules/gulp/bin/gulp.js:129
    gulpInst.start.apply(gulpInst, toRun);
                   ^
TypeError: Cannot call method 'apply' of undefined
    at /usr/local/lib/node_modules/gulp/bin/gulp.js:129:20
    at process._tickDomainCallback (node.js:492:13)
```

O que significa esse erro de rastreamento uso tel? gulp.start() não está mais no Gulp 4 e não deve ser chamado e o pacote gulp-cli deve ser chamado no lugar de pacote gulp.

Eu corri o seguinte comando:

```bash
ls -l $`whereis gulp`
```

E percebi que eu ainda tinha um arquivo do Gulp antigo em uma pasta bin:

```bash
lrwxrwxrwx 1 root root 40 May  3 11:17 /usr/bin/gulp -> ../lib/node_modules/gulp-cli/bin/gulp.js
lrwxrwxrwx 1 root root 40 May  3 11:17 /usr/bin/X11/gulp -> ../lib/node_modules/gulp-cli/bin/gulp.js
lrwxrwxrwx 1 root root 36 Apr  3 21:41 /usr/local/bin/gulp -> ../lib/node_modules/gulp/bin/gulp.js
```

Simplesmente remova arquivos antigos:

```bash
sudo rm /usr/local/bin/gulp
sudo rm -rf /usr/local/lib/node_modules/gulp
```

/done.