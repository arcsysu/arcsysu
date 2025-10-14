---
title: "News"
lang: en
layout: textlay
excerpt: "Allan Lab at Leiden University."
sitemap: false
zh_url: /allnews
permalink: /en/allnews
---

# News

{% for article in site.data.en.news %}
<p>{{ article.date }}: [<i><font color="darkred">{{ article.kind }}</font></i>] {{ article.desc }}</p>
{% endfor %}
