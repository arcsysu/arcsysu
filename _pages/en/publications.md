---
title: "arcSYSu Lab - Publications"
lang: en
layout: gridlay
excerpt: "arcSYSu Lab -- Publications."
sitemap: false
zh_url: /zh/publications
permalink: /publications
---



# Publications
Also available at
<!--<img src="{{ site.url }}{{ site.baseurl }}/images/logopic/pub-scholar.webp" style="width:25px">-->
<a href="https://scholar.google.com/citations?user=k9_kXbQAAAAJ&hl=en">Google Scholar</a>,
<!-- <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/pub-dblp.webp" style="width:25px">-->
<a href="https://dblp.org/pid/135/8227-1.html">DBLP</a> and
<!-- <img src="{{ site.url }}{{ site.baseurl }}/images/logopic/pub-orcid.webp" style="width:25px">-->
<a href="https://orcid.org/0000-0003-3507-4299">ORCID</a>.

<!-- ## Group highlights

**At the end of this page, you can find the [full list of publications and patents](#full-list-of-publications). All papers are also available on [arXiv](https://arxiv.org/search/?searchtype=author&query=Allan%2C+M+P).** -->

{% assign number_printed = 0 %}
{% for publi in site.data.en.pub.publist_2025 %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

<!--{% if even_odd == 0 %}
<div class="row">
{% endif %}

 <div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div> -->

{% assign number_printed = number_printed | plus: 1 %}

<!--{% if even_odd == 1 %}
</div>
{% endif %}-->

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
<!--{% if even_odd == 1 %}
</div>
{% endif %}-->

<!--<p> &nbsp; </p>-->


## Patents
{% for patent in site.data.en.pub.publist_patent %}
  [{{ patent.label }}] {{ patent.authors }} <br />
  <a href="{{ patent.title.url }}">{{ patent.title.name }}</a> {{ patent.desc}}
  , <em>{{ patent.conf }} </em>
{% endfor %}



## Conference/Journal <a name="conf"></a> 
Note: <u>Supervised Student</u>, Corresponding<sup>#</sup>
<br>[arXiv](#arxiv), [2025](#2025), [2024](#2024), [2023](#2023), [2022](#2022), [2021](#2021), [2020](#2020), [2019](#2019), [2018](#2018), [2017](#2017), [2016](#2016), [2015](#2015), [2013](#2013)

<a id="arxiv"></a>
<b>arXiv</b>
{% for publi in site.data.zh.pub.publist_arxiv %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2025"></a>
<b>2025</b>
{% for publi in site.data.en.pub.publist_2025 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2024"></a>
<b>2024</b>
{% for publi in site.data.en.pub.publist_2024 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2023"></a>
<b>2023</b>
{% for publi in site.data.en.pub.publist_2023 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2022"></a>
<b>2022</b>
{% for publi in site.data.en.pub.publist_2022 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2021"></a>
<b>2021</b>
{% for publi in site.data.en.pub.publist_2021 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2020"></a>
<b>2020</b>
{% for publi in site.data.en.pub.publist_2020 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2019"></a>
<b>2019</b>
{% for publi in site.data.en.pub.publist_2019 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2018"></a>
<b>2018</b>
{% for publi in site.data.en.pub.publist_2018 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2017"></a>
<b>2017</b>
{% for publi in site.data.en.pub.publist_2017 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2016"></a>
<b>2016</b>
{% for publi in site.data.en.pub.publist_2016 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2015"></a>
<b>2015</b>
{% for publi in site.data.en.pub.publist_2015 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}

<a id="2013"></a>
<b>2013</b>
{% for publi in site.data.en.pub.publist_2013 %}
  [{{ publi.label }}] {{ publi.authors }} <br />
  <a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}
  <br /><em>{{ publi.conf }} </em>
{% endfor %}
