---
layout: page 
title: Works
permalink: /works/
---

  <ul class="work-list">
    {% for work in site.works reversed %}
      <li>
          <span class="post-meta">{{ work.date | date: "%Y" }}</span>
          <a href="{{ work.url | prepend: site.baseurl }}" title="{{ work.title }}">
              <img src="{{ work.thumbnail }}" alt="{{ work.title }}"/>
              <div class="work-title">{{ work.title }}</div>
          </a>
          {% if work.description %}
          <div class="work-description">{{ work.description }}</div>
          {% endif %}
      </li>
    {% endfor %}
  </ul>