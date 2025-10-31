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

{% include pub_sidebar.html %}

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
  <li><div class="button" data-ref="#tab-all">All</div></li>
  <li><div class="button" data-ref="#tab-gpu">GPU</div></li>
  <li><div class="button" data-ref="#tab-arch">Arch</div></li>
  <li><div class="button" data-ref="#tab-hpc">HPC</div></li>
  <li><div class="button" data-ref="#tab-ml">ML</div></li>
</ul>

<!-- Tab 内容区域 -->
<div class="tab-content">
  
  <!-- Selected -->
  <div id="tab-selected" class="tab-pane active" markdown="1">

### Selected Publications

{% assign current_year = "" %}
{% for publi in site.data.en.pub.all %}
  {% if publi.highlight == 1 %}
    {% if publi.year != current_year %}
      {% assign current_year = publi.year %}

#### {{ current_year }}

    {% endif %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

  {% endif %}
{% endfor %}

  </div>

  <!-- All -->
  <div id="tab-all" class="tab-pane" markdown="1">

### All Publications

{% assign current_year = "" %}
{% for publi in site.data.en.pub.all %}
  {% if publi.year != current_year %}
    {% assign current_year = publi.year %}

#### {{ current_year }}

  {% endif %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

{% endfor %}

  </div>

  <!-- GPU -->
  <div id="tab-gpu" class="tab-pane" markdown="1">

### GPU

{% assign current_year = "" %}
{% for publi in site.data.en.pub.all %}
  {% if publi.theme contains "GPU" %}
    {% if publi.year != current_year %}
      {% assign current_year = publi.year %}

#### {{ current_year }}

    {% endif %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

  {% endif %}
{% endfor %}

  </div>

  <!-- Arch -->
  <div id="tab-arch" class="tab-pane" markdown="1">

### Architecture

{% assign current_year = "" %}
{% for publi in site.data.en.pub.all %}
  {% if publi.theme contains "Arch" %}
    {% if publi.year != current_year %}
      {% assign current_year = publi.year %}

#### {{ current_year }}

    {% endif %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

  {% endif %}
{% endfor %}

  </div>

  <!-- HPC -->
  <div id="tab-hpc" class="tab-pane" markdown="1">

### High-Performance Computing

{% assign current_year = "" %}
{% for publi in site.data.en.pub.all %}
  {% if publi.theme contains "HPC" %}
    {% if publi.year != current_year %}
      {% assign current_year = publi.year %}

#### {{ current_year }}

    {% endif %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

  {% endif %}
{% endfor %}

  </div>

  <!-- ML -->
  <div id="tab-ml" class="tab-pane" markdown="1">

### Machine Learning

{% assign current_year = "" %}
{% for publi in site.data.en.pub.all %}
  {% if publi.theme contains "ML" %}
    {% if publi.year != current_year %}
      {% assign current_year = publi.year %}

#### {{ current_year }}

    {% endif %}
<div class="pub-item" markdown="1">
[{{ publi.label }}] {{ publi.authors }}  
<a href="{{ publi.title.url }}">{{ publi.title.name }}</a> {{ publi.desc }}  
*{{ publi.conf }}*
</div>

  {% endif %}
{% endfor %}

  </div>

</div>
