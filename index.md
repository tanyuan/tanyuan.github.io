---
layout: bio
---

Shan-Yuan is a third-year PhD student in Computer Science and Eckhardt scholar at the **University of Chicago** in the U.S. Working in [Human Computer Integration Lab](http://hci.cs.uchicago.edu/) led by [Prof. Pedro Lopes](http://plopes.org), he believes that seamless integration of haptic sensation and digital information will bring us total harmony between humans and technologies. He invents new interactive devices that bridge haptics across virtual and physical realities.

Before coming to Chicago, he worked with Prof. Robin Bing-Yu Chen and received Master's and Bachelor's degree at **National Taiwan University** in Taiwan.

\[ tengshanyuan at uchicago.edu \] [ [CV (PDF)](/assets/teng_cv.pdf) ] [ [Google Scholar](https://scholar.google.com/citations?user=FOngQGAAAAAJ) ] [ [Twitter](https://twitter.com/tengshanyuan) ]

## haptics for the real world

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_category == 'featured' and project_published != 'false' %}
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

## haptics for the virtual world

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_category == 'VR haptics' and project_published != 'false' %}
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

## more research

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_published != 'false' %}
    {% if project_category == 'research' %}
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

## writings

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.category %} - {{post.category}}{% endif %}</span><br>

          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          
          {% if post.subtitle %}
          <div class="post-list-subtitle">{{ post.subtitle }}</div>
          {% endif %}

      </li>
    {% endfor %}
  </ul>