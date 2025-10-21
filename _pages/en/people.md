---
title: "arcSYSu Lab - People"
lang: en
layout: gridlay
excerpt: "arcSYSu Lab: Team members"
sitemap: false
zh_url: /zh/people
permalink: /people
---

# Team Members
**<u>A</u>RCSYSUers <u>R</u>efine <u>C</u>omputing <u>Sys</u>tem <u>U</u>ses!**
Join us! (详见 [FAQs](https://xianweiz.github.io/notes/hire_QAs.txt)).


<!-- Jump to [staff](#staff), [master and bachelor students](#master-and-bachelor-students), [alumni](#alumni), [administrative support](#administrative-support), [lab visitors](#lab-visitors). -->

## Faculty
{% for member in site.data.en.people.people_faculty %}
<div class="row">
  <div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="30%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!--<br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">
    {% for edu in member.education %}
      <li>{{ edu | markdownify }}</li>
    {% endfor %}
  </ul>
  </div>
</div>
{% endfor %}

## Current Members
###### <sup>\#</sup>co-advised

<div class="row">

<div class="col-sm-4 clearfix">
<h4>PhD Student</h4>
{% for member in site.data.en.people.current_phd %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Master Student</h4>
{% for member in site.data.en.people.current_ms %}
{{ member.name }}
{% endfor %}
</div>

<div class="col-sm-4 clearfix">
<h4>Undergraduate</h4>
{% for member in site.data.en.people.current_ugra %}
{{ member.name }}
{% endfor %}
</div>

</div>

## Alumni
###### <sup>\#</sup>co-advised

<div class="row">

<div class="col-sm-6 clearfix">
<h4>PhD/Master</h4>
{% for member in site.data.en.people.alumni_grad %}
{{ member.name }}
{% endfor %}
</div>

<!--<div class="col-sm-4 clearfix">
<h4>Master students</h4>
{% for member in site.data.people.alumni_ms %}
{{ member.name }}
{% endfor %}
</div>-->

<div class="col-sm-6 clearfix">
<h4>Ug RA/Intern</h4>
{% for member in site.data.en.people.alumni_ugra %}
{{ member.name }}
{% endfor %}
</div>

</div>
