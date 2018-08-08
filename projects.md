---
layout: page
title: Projects
permalink: /projects/
---

## Research

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_category == 'Research' and project_published != 'false' %}
      <li>

          <div class="post-meta">{{ project_year }}</div>

          <div class="project-col-wrapper">
              <div class="project-col project-col-1">
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}" title="{{ project.title }}">
                  {% endif %}
                  <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
                  {% if project.permalink %}
                  </a>
                  {% endif %}
              </div>
              <div class="project-col project-col-2">
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}" title="{{ project.title }}">
                  {% endif %}
                      <span class="project-title">{{ project.title }}</span>
                  {% if project.permalink %}
                  </a>
                  {% endif %}
                  {% if project.description %}
                  <div class="project-description">{{ project.description }}</div>
                  {% endif %}
                  {% if project.author %}
                  <div class="project-author">{{ project.author }}</div>
                  {% endif %}
                  {% if project.publication %}
                  <div class="project-publication">{{ project.publication }}</div>
                  {% endif %}
                  {% if project.award %}
                  <div class="project-award"><b>{{ project.award }}</b></div>
                  {% endif %}
                  {% if project.paper %}
                  <div class="project-paper">[ <a href="{{ project.paper }}">Paper</a> ]</div>
                  {% endif %}
              </div>
          </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

## Beyond Research

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_category != 'Research' and project_published != 'false' %}
      <li>

      <div class="post-meta">{{ project_year }} - {{ project.category }}</div>

      <div class="project-col-wrapper">
          <div class="project-col project-col-1">
              {% if project.permalink %}
              <a href="{{ project.url | prepend: site.baseurl }}" title="{{ project.title }}">
              {% endif %}
              <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
              {% if project.permalink %}
              </a>
              {% endif %}
          </div>
          <div class="project-col project-col-2">
              {% if project.permalink %}
              <a href="{{ project.url | prepend: site.baseurl }}" title="{{ project.title }}">
              {% endif %}
                  <span class="project-title">{{ project.title }}</span>
              {% if project.permalink %}
              </a>
              {% endif %}
              {% if project.description %}
              <div class="project-description">{{ project.description }}</div>
              {% endif %}
              {% if project.author %}
              <div class="project-author">{{ project.author }}</div>
              {% endif %}
              {% if project.publication %}
              <div class="project-publication">{{ project.publication }}</div>
              {% endif %}
              {% if project.award %}
              <div class="project-award"><b>{{ project.award }}</b></div>
              {% endif %}
              {% if project.paper %}
              <div class="project-paper">[ <a href="{{ project.paper }}">Paper</a> ]</div>
              {% endif %}
          </div>
      </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>
