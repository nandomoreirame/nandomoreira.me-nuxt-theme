---
title: Como converter todos arquivos .scss de um diretório para extensão .sass
description: Iremos usar o comando sass-convert do próprio SASS para realizar a conversão dos arquivos, mas já sabemos que ele converte apenas um único arquivo
keywords: "scss, sass, dica"
categories:
- dica
tags:
- scss
- sass
---

Iremos usar o comando `sass-convert` do próprio SASS para realizar a conversão dos arquivos, mas já sabemos que ele converte apenas um único arquivo, então vamos usar o terminal e com um simples loop iremos converter todos os arquivos de um diretório (ou vários diretórios) de uma só vez.

### Em sistemas Unix (Mac e Linux)

Abra o terminal e execute o seguinte comando.

```bash
for file in path/to/scss/**/*.scss; do sass-convert $file ${file%scss}sass && rm $file; done
```

### No Windows

```bash
for /r path\to\scss %I in (*) do sass-convert "%I" "%~dpnI.sass"
del /f /s /q path\to\scss\*.scss
```

Não esqueça de trocar `path/to/scss/` para o caminho onde estão os seus arquivos sass.

Eu não testei no Linux nem no Windows então se você executou os comandos e algo não deu certo comenta ai e vamos resolver juntos.

---

Espero ter ajudado, Abraço!

😎
