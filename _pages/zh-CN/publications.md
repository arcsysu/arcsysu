---
title: "arcSYSu Lab - Publications"
lang: zh-CN
layout: gridlay
excerpt: "arcsysu Lab -- Publications."
sitemap: false
en_url: /publications
permalink: /zh/publications
---

# Publications
Also available at
<a href="https://scholar.google.com/citations?user=k9_kXbQAAAAJ&hl=en">Google Scholar</a>,
<a href="https://dblp.org/pid/135/8227-1.html">DBLP</a> and
<a href="https://orcid.org/0000-0003-3507-4299">ORCID</a>.

## Patents
{% for patent in site.data.en.pub.publist_patent %}
  [{{ patent.label }}] {{ patent.authors }} <br />
  <a href="{{ patent.title.url }}">{{ patent.title.name }}</a> {{ patent.desc}}
  , <em>{{ patent.conf }} </em>
{% endfor %}

## Conference/Journal Publications
Note: <u>(Co-)Supervised Student</u>, Corresponding<sup>#</sup>

<!-- 搜索框 -->
<div class="pub-search-container" markdown="0">
<div class="pub-search-wrapper">
<input type="text" id="pub-search" placeholder="Search publications by keyword (title, author, conference...)">
<button id="clear-search" title="Clear search">×</button>
</div>
<div id="search-results-count"></div>
</div>

<!-- Tab 导航栏 -->
<ul class="tab-nav">
  <li><div class="button active" data-ref="#tab-selected">Selected</div></li>
  <li><div class="button" data-ref="#tab-2025">2025</div></li>
  <li><div class="button" data-ref="#tab-2024">2024</div></li>
  <li><div class="button" data-ref="#tab-2023">2023</div></li>
  <li><div class="button" data-ref="#tab-2022">2022</div></li>
  <li><div class="button" data-ref="#tab-2021">2021</div></li>
  <li><div class="button" data-ref="#tab-2020">2020</div></li>
  <li><div class="button" data-ref="#tab-2019">2019</div></li>
  <li><div class="button" data-ref="#tab-2018">2018</div></li>
  <li><div class="button" data-ref="#tab-2017">2017</div></li>
  <li><div class="button" data-ref="#tab-2016">2016</div></li>
  <li><div class="button" data-ref="#tab-2015">2015</div></li>
  <li><div class="button" data-ref="#tab-2013">2013</div></li>
</ul>

<!-- Tab 内容区域 -->
<div class="tab-content">
  
  <!-- Selected  -->
  <div id="tab-selected" class="tab-pane active" markdown="1">

### Selected Publications

{% assign selected_papers = "" | split: "" %}

{% for publi in site.data.en.pub.publist_2025 %}
  {% if publi.highlight == 1 %}
    {% assign selected_papers = selected_papers | push: publi %}
  {% endif %}
{% endfor %}

{% for publi in site.data.en.pub.publist_2024 %}
  {% if publi.highlight == 1 %}
    {% assign selected_papers = selected_papers | push: publi %}
  {% endif %}
{% endfor %}

{% for publi in site.data.en.pub.publist_2023 %}
  {% if publi.highlight == 1 %}
    {% assign selected_papers = selected_papers | push: publi %}
  {% endif %}
{% endfor %}

{% if selected_papers.size > 0 %}
  {% for publi in selected_papers %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

  {% endfor %}
{% else %}
*No selected publications yet.*
{% endif %}

  </div>

  <!-- 2025 -->
  <div id="tab-2025" class="tab-pane" markdown="1">

### 2025

{% for publi in site.data.en.pub.publist_2025 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2024 -->
  <div id="tab-2024" class="tab-pane" markdown="1">

### 2024

{% for publi in site.data.en.pub.publist_2024 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2023 -->
  <div id="tab-2023" class="tab-pane" markdown="1">

### 2023

{% for publi in site.data.en.pub.publist_2023 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2022 -->
  <div id="tab-2022" class="tab-pane" markdown="1">

### 2022

{% for publi in site.data.en.pub.publist_2022 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2021 -->
  <div id="tab-2021" class="tab-pane" markdown="1">

### 2021

{% for publi in site.data.en.pub.publist_2021 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2020 -->
  <div id="tab-2020" class="tab-pane" markdown="1">

### 2020

{% for publi in site.data.en.pub.publist_2020 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2019 -->
  <div id="tab-2019" class="tab-pane" markdown="1">

### 2019

{% for publi in site.data.en.pub.publist_2019 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2018 -->
  <div id="tab-2018" class="tab-pane" markdown="1">

### 2018

{% for publi in site.data.en.pub.publist_2018 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2017 -->
  <div id="tab-2017" class="tab-pane" markdown="1">

### 2017

{% for publi in site.data.en.pub.publist_2017 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2016 -->
  <div id="tab-2016" class="tab-pane" markdown="1">

### 2016

{% for publi in site.data.en.pub.publist_2016 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2015 -->
  <div id="tab-2015" class="tab-pane" markdown="1">

### 2015

{% for publi in site.data.en.pub.publist_2015 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- 2013 -->
  <div id="tab-2013" class="tab-pane" markdown="1">

### 2013

{% for publi in site.data.en.pub.publist_2013 %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

</div>