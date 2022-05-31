---
layout: page
title: projects
permalink: /projects/
---

## all research

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_published != 'false' %}
    {% if project_category == 'research' or project_category == 'featured'  or project_category == 'VR haptics' %}
      <li>

          <div class="post-meta">{{ project_year }}</div>

          <div class="project-col-wrapper">
              <div class="project-col project-col-1">
                  <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
              </div>
              <div class="project-col project-col-2">
                  <span class="project-title">{{ project.title }}</span>
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
                  
                  <div class="project-link">
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}">[project page]</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">[paper]</a>
                  {% endif %}
                  {% if project.video %}
                  <a href="{{ project.video }}">[video]</a>
                  {% endif %}
                  </div>

              </div>
          </div>

      </li>
    {% endif %}
     {% endif %}
    {% endfor %}
  </ul>
</div>

## artwork

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_category == 'artwork' and project_published != 'false' %}
      <li>

      <div class="post-meta">{{ project_year }}</div>

      <div class="project-col-wrapper">
          <div class="project-col project-col-1">
              <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
          </div>
          <div class="project-col project-col-2">
                  <span class="project-title">{{ project.title }}</span>
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
               <div class="project-link">
                {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}">[project page]</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">[paper]</a>
                  {% endif %}
                  {% if project.video %}
                  <a href="{{ project.video }}">[video]</a>
                  {% endif %}
                  </div>
          </div>
      </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>
