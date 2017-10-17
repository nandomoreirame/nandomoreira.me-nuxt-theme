---
title: "Como incluir vídeos do youtube no seu blog Jekyll de forma fácil"
date: 2016-01-10 17:03:59
description: "Hoje vamos usar um plugin bem bacana para incluir vídeos do youtube no seu blog Jekyll sem precisar copiar e colar o iframe do youtube"
keywords: "jekyll, youtube, plugins, plugin, embed"
categories:
- jekyll
tags:
- jekyll
- youtube
- plugins
---

Criar plugins para **[Jekyll](http://jekyllrb.com/)** é bem simples e fácil, basta criar seu arquivo `.rb` dentro do diretório `_plugins`.

Hoje vamos [usar um plugin](https://gist.github.com/joelverhagen/1805814) bem bacana para incluir vídeos do [Youtube](https://www.youtube.com/) no seu blog Jekyll sem precisar copiar e colar o iframe do youtube, apenas usando o `ID` do vídeo.

### O arquivo youtube.rb

Crie um arquivo chamado `youtube.rb` dentro do diretório `_plugins` e coloque o código abaixo:

```ruby
class YouTube < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1

      if $2.nil? then
          @width = 560
          @height = 420
      else
          @width = $2.to_i
          @height = $3.to_i
      end
    else
      raise "No YouTube ID provided in the \"youtube\" tag"
    end
  end

  def render(context)
    "<iframe width=\"#{@width}\" height=\"#{@height}\" src=\"http://www.youtube.com/embed/#{@id}?color=white&theme=light\"></iframe>"
  end

  Liquid::Template.register_tag "youtube", self
end
```

### Exemplo de uso:

Como eu falei logo acima, é bem simples, apenas com uma linha curta você inclui o iframe do youtube no HTML final do Jekyll.

``` liquid
{% youtube 8SbUC-UaAxE %}
```

Você também pode especificar uma altura e largura do iframe. Se você não usar o padrão é de 560 x 420.

``` liquid
{% youtube 8SbUC-UaAxE 850 460 %}
```

## Conclusão

Bom, na verdade copiar e colar o iframe do Youtube não é tão difícil assim (HUE), mas eu **NÃO** gosto muito de misturar <abbr title="HyperText Markup Language">HTML</abbr> com **Markdown** enquanto estou escrevendo um post, mas em alguns casos é necessário.

![Barman - Sem sangrar](/images/posts/2016/01/vai-sangrar.jpg)

Então essa foi uma solução bem bacana de incluir o iframe de forma fácil e **"sem sangrar"** por isso.

> **Atenção!** O Github não suporta nativamente plugins personalizados para Jekyll, então para usar os plugins e hospedar no [gh-pages](https://pages.github.com/) você precisa compilar manualmente o jekyll e subir para seu repositório no Github, para isso você pode usar [Rake Tasks](/rake-tasks-para-automatizar-publicacoes-jekyll/) ou utilizar integração continua como [travis-ci](https://travis-ci.org)
  > <small>leia mais em: _[Using jekyll plugins on github pages](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html)_</small>

Obrigado.

/end
