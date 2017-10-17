---
title: "Usando categorias e tags no Jekyll"
date: 2015-10-13
description: "GitHub Pages serviço é simplesmente incrível! E com a integração Jekyll ele fica ainda mais impressionante! Mas existem algumas limitações neste grande sistema automatizado"
keywords: "jekyll, categorias, tags, blog"
categories: jekyll
tags:
- github
- gh-pages
- jekyll
---

> Esse artigo foi traduzido de: [How to use tags and categories on github pages without plugins](http://www.minddust.com/post/tags-and-categories-on-github-pages/)

---

[GitHub Pages](http://pages.github.com/) serviço é simplesmente incrível, e com a integração  Jekyll ele fica ainda mais impressionante! Mas existem algumas limitações neste grande sistema automatizado:

* não há próprios plugins
* [plugins disponíveis limitados](https://pages.github.com/versions/)

Como você já deve saber:

* não há plugins de tag/categoria disponível (atualmente).

Triste... Mas isso era algo que eu realmente queria ter!

Então eu construí minha própria _Data-Template-NoPlugin-System_ e funciona.

Você pode ver uma demonstração ao vivo nesta página.

Aqui está um pequeno guia de como implementá-lo:

#### 1. Adicione um pouco de lógica no template do seu layout _post.html_

```twig
{% assign post = page %}
{% if post.tags.size > 0 %}
  {% capture tags_content %}Posted with {% if post.tags.size == 1 %}<i class="icon icon-tag"></i>{% else %}<i class="icon icon-tags"></i>{% endif %}: {% endcapture %}
  {% for post_tag in post.tags %}
    {% for data_tag in site.data.tags %}
      {% if data_tag.slug == post_tag %}
        {% assign tag = data_tag %}
      {% endif %}
    {% endfor %}
    {% if tag %}
      {% capture tags_content_temp %}{{ tags_content }}<a href="/blog/tag/{{ tag.slug }}/">{{ tag.name }}</a>{% if forloop.last == false %}, {% endif %}{% endcapture %}
      {% assign tags_content = tags_content_temp %}
    {% endif %}
  {% endfor %}
{% else %}
  {% assign tags_content = '' %}
{% endif %}
```

#### 2. Coloque o conteúdo da variavel *tags_content* onde quiser dentro do seu layout _post.html_

```html
<p id="post-meta">{{ tags_content }}</p>
```

#### 3. Crie um layout chamado *blog_by_tag.html*

```twig
<h1>Articles by tag :{{ page.tag }}</h1>
<div>
  {% if site.tags[page.tag] %}
    {% for post in site.tags[page.tag] %}
      <a href="{{ post.url }}/">{{ post.title }}</a>
    {% endfor %}
  {% else %}
    <p>There are no posts for this tag.</p>
  {% endif %}
</div>
```

#### 4. Adicione em seu _post entry_ o front-matter, como de costume.

```yaml
---
layout: post
title: How To Use Tags And Categories On GitHub Pages Without Plugins
category: programming
tags: [github, github-pages, jekyll]
---
```

#### 5. Para cada tag usada você tem que adicionar uma entrada dentro do arquivo *_data/tags.yml*

```yaml
- slug: github-pages
  name: GitHub Pages
```

#### 6. Para cada tag usada você tem que adicionar um template vazio. Ex.: _blog/tag/github-pages.md_

```yaml
---
layout: blog_by_tag
tag: github-pages
# permalink: /blog/tag/github-pages/
---
```

> Para uma implementação mais complexa de categorias e tags veja nesse repositório: [github.com/nandomoreirame/nandomoreira-jekyll-theme](https://github.com/nandomoreirame/nandomoreira-jekyll-theme/tree/master/source/_data)

/end
