---
layout: bio
---

Shan-Yuan Teng is a third-year PhD student in Computer Science at the **University of Chicago** advised by [Prof. Pedro Lopes](http://plopes.org/). Shan-Yuan’s research aims at advancing a new generation of **haptic devices** (e.g., those that can create the sense of touch, forces, etc.) that exhibit properties that we became used to expecting from our mobile phones & wearables, **such as extreme mobility, availability anytime, etc**. To advance haptics into this new territory and grant it these novel properties, Shan-Yuan engineers custom-made interactive devices that, for instance: (1) allow to feel touch in mixed reality without encumbering our fingerpads, (2) an extremely lightweight feedback glove that can teach us how to play a guitar, or (3) even a haptic device with a virtually infinite battery life. Shan-Yuan has published this work as 12 papers (five as the first author) at top Human-Computer Interaction (HCI) conferences including ACM CHI & UIST, with **two Best Paper Awards and three Honorable Mention Awards.**

Before coming to Chicago, he worked with Prof. Bing-Yu 'Robin' Chen at **National Taiwan University** in Taiwan, where he received Master's degree in Computer Science and Bachelor's degree with a major in Electrical Engineering. 

[&nbsp;tengshanyuan at uchicago.edu&nbsp;] [&nbsp;[CV](/assets/teng_cv.pdf)&nbsp;] [&nbsp;[Google&nbsp;Scholar](https://scholar.google.com/citations?user=FOngQGAAAAAJ)&nbsp;] [&nbsp;[Twitter](https://twitter.com/tengshanyuan)&nbsp;]

## haptics for extreme mobility

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

## haptics for the virtual reality

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