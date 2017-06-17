---
layout: page 
title: Projects
permalink: /projects/
---

  <ul class="work-list">
    {% for project in site.projects reversed %}
      <li>
          <span class="post-meta">{{ project.date | date: "%Y" }} • {{ project.category}}</span>
          <a href="{{ project.url | prepend: site.baseurl }}" title="{{ project.title }}">
              <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
              <div class="work-title">{{ project.title }}</div>
          </a>
          {% if project.description %}
          <div class="work-description">{{ project.description }}</div>
          {% endif %}
      </li>
    {% endfor %}
  </ul>
