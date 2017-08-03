---
layout: page
title: Projects
permalink: /projects/
years:
    - '2017'
    - '2016'
    - '2015'
    - '2014'
    - '2013'
---

{% for year in page.years %}

## {{year}}

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}
    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% if project_year == year %}
      <li>
          <span class="post-meta">{{ project.category}}</span>
          {% if project.permalink %}
          <a href="{{ project.url | prepend: site.baseurl }}" title="{{ project.title }}">
          {% endif %}
              <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
              <div class="project-title">{{ project.title }}</div>
          {% if project.permalink %}
          </a>
          {% endif %}
          {% if project.description %}
          <div class="project-description">{{ project.description }}</div>
          {% endif %}
          {% if project.role %}
          <div class="note-it">{{ project.role }}</div>
          {% endif %}
      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

{% endfor %}
