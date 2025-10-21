---
title: "News"
lang: en
layout: textlay
excerpt: "News at arcSYSu lab at Sun Yat-Sen University"
sitemap: false
zh_url: /zh/allnews
permalink: /allnews
---

# News

{% for article in site.data.en.news %}
<p>{{ article.date }}: [<i><font color="darkred">{{ article.kind }}</font></i>] {{ article.desc }}</p>
{% endfor %}
