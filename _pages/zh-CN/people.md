---
title: "arcSYSu Lab - 成员"
lang: zh-CN
layout: gridlay
excerpt: "arcSYSu Lab: Team members"
sitemap: false
en_url: /people
permalink: /zh/people
---

# Team Members
**<u>A</u>RCSYSUers <u>R</u>efine <u>C</u>omputing <u>Sys</u>tem <u>U</u>ses!**
Join us! (详见 [FAQs]({{ site.url }}{{ site.baseurl }}/join)).


<!-- Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors). -->

## Faculty
{% assign number_printed = 0 %}
{% for member in site.data.zh.people.people_faculty %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!--<br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  <li> {{ member.education3 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  <li> {{ member.education3 | markdownify}} </li>
  <li> {{ member.education4 | markdownify}} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  <li> {{ member.education3 | markdownify}} </li>
  <li> {{ member.education4 | markdownify}} </li>
  <li> {{ member.education5 | markdownify}} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Current Members
###### <sup>\#</sup>co-advised

<div class="row">

<div class="col-sm-4 clearfix">
<h4>PhD Student</h4>
{% for member in site.data.zh.people.current_phd %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Master Student</h4>
{% for member in site.data.zh.people.current_ms %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Undergraduate RA/Intern</h4>
{% for member in site.data.zh.people.current_ugra %}
{{ member.name }}
{% endfor %}
</div>

</div>

## Alumni
###### <sup>\#</sup>co-advised

<div class="row">

<div class="col-sm-6 clearfix">
<h4>PhD/Master</h4>
{% for member in site.data.zh.people.alumni_grad %}
{{ member.name }}
{% endfor %}
</div>

<!--<div class="col-sm-4 clearfix">
<h4>Master students</h4>
{% for member in site.data.zh.people.alumni_ms %}
{{ member.name }}
{% endfor %}
</div>-->

<div class="col-sm-6 clearfix">
<h4>Ug RA/Intern</h4>
{% for member in site.data.zh.people.alumni_ugra %}
{{ member.name }}
{% endfor %}
</div>

</div>
