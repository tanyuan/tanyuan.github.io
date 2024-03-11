---
layout: bio
---

Shan-Yuan Teng is a PhD candidate in Computer Science at the **University of Chicago** advised by [Prof. Pedro Lopes](http://plopes.org/). Shan-Yuan’s research aims at advancing a new generation of **haptic interfaces** (e.g., those that can create the sense of touch, forces, etc.) that exhibit properties that we became used to expecting from our mobile phones & wearables, such as **extreme mobility, availability anytime, etc**. To advance haptics into this new territory and grant it these novel properties, Shan-Yuan engineers custom-made interactive devices that, for instance: allow to feel touch in mixed reality without encumbering our fingerpads, or come with virtually infinite battery life. Shan-Yuan has published this work as 15 papers (7 as the first author) at top **Human-Computer Interaction (HCI) conferences** including ACM CHI & UIST, with two Best Paper Awards and four Honorable Mention Awards, and demostrated at SIGGRAPH, IEEE World Haptics Conference.

Shan-Yuan was born in Taiwan, and received Master's degree in Computer Science & Bachelor's degree in Electrical Engineering at **National Taiwan University**.

[&nbsp;tengshanyuan@uchicago.edu&nbsp;] [&nbsp;[CV](/assets/ShanYuanTeng_CV.pdf)&nbsp;] [&nbsp;[google&nbsp;scholar](https://scholar.google.com/citations?user=FOngQGAAAAAJ)&nbsp;] [&nbsp;[ORCID](https://orcid.org/0000-0002-1079-097X)&nbsp;]

## news

{% include_relative news.md %}

<div class="project-list-highlight">

<h2>PhD research: enabling haptic experiences <i>anywhere, anytime</i></h2>

<h3>vision articles</h3>

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}

    {% if project_category == 'article' and project_published != 'false' %}
      <li>

          <div class="project-col-wrapper">
              <div class="project-col project-col-1">
                  {% if project.paper %}
                  <a href="{{ project.paper }}" title="read PDF...">
                  {% endif %} 
                  <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
                  {% if project.paper %}
                  </a>
                  {% endif %} 
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
                  {% if project.paper %}
                  <a href="{{ project.paper }}">[article]</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">[doi]</a>
                  {% endif %}
                  {% if project.video %}
                  <a href="{{ project.video }}">[video]</a>
                  {% endif %}
                  {% if project.poster %}
                  <a href="{{ project.poster }}">[poster]</a>
                  {% endif %}
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}">[more info]</a>
                  {% endif %}
                  </div>
              </div>
          </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

<h3>lead author papers</h3>

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}
    {% capture project_subcategory %}{{project.subcategory}}{% endcapture %}

    {% if project_category == 'featured' and project_subcategory == 'first-author' and project_published != 'false' %}
      <li>

          <div class="project-col-wrapper">
              <div class="project-col project-col-1">
                  {% if project.paper %}
                  <a href="{{ project.paper }}" title="read PDF...">
                  {% endif %} 
                  <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
                  {% if project.paper %}
                  </a>
                  {% endif %} 
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
                  {% if project.paper %}
                  <a href="{{ project.paper }}">[paper]</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">[doi]</a>
                  {% endif %}
                  {% if project.video %}
                  <a href="{{ project.video }}">[video]</a>
                  {% endif %}
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}">[more info]</a>
                  {% endif %}
                  </div>
              </div>
          </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

<h3>collaborated papers</h3>

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}
    {% capture project_subcategory %}{{project.subcategory}}{% endcapture %}

    {% if project_category == 'featured' and project_subcategory != 'first-author' and project_published != 'false' %}
      <li>

          <div class="project-col-wrapper">
              <div class="project-col project-col-1">
                  {% if project.paper %}
                  <a href="{{ project.paper }}" title="read PDF...">
                  {% endif %} 
                  <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
                  {% if project.paper %}
                  </a>
                  {% endif %} 
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
                  {% if project.paper %}
                  <a href="{{ project.paper }}">[paper]</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">[doi]</a>
                  {% endif %}
                  {% if project.video %}
                  <a href="{{ project.video }}">[video]</a>
                  {% endif %}
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}">[more info]</a>
                  {% endif %}
                  </div>
              </div>
          </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

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

          <div class="project-col-wrapper">
              <div class="project-col project-col-1">
                  {% if project.paper %}
                  <a href="{{ project.paper }}" title="read PDF...">
                  {% endif %} 
                  <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
                  {% if project.paper %}
                  </a>
                  {% endif %} 
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
                  {% if project.paper %}
                  <a href="{{ project.paper }}">[paper]</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">[doi]</a>
                  {% endif %}
                  {% if project.video %}
                  <a href="{{ project.video }}">[video]</a>
                  {% endif %}
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}">[more info]</a>
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

    {% if project_published != 'false' %}
    {% if project_category == 'artwork' %}
      <li>

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
                  {% if project.paper %}
                  <a href="{{ project.paper }}">[paper]</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">[doi]</a>
                  {% endif %}
                  {% if project.video %}
                  <a href="{{ project.video }}">[video]</a>
                  {% endif %}
                  {% if project.permalink %}
                  <a href="{{ project.url | prepend: site.baseurl }}">[more info]</a>
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

{% include footer.html %}