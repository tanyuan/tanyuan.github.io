---
layout: bio
---

<p style="padding: .5em 1em; background:rgb(255, 254, 204); color:#333">
  I am leading <b><a href="https://lab.tengshanyuan.info">Dexterous Interaction Lab</a></b> as an <b>Assistant Professor</b> in the Department of Computer Science & Information Engineering at <b>National Taiwan University (NTU, Taipei)</b>, starting Fall 2025. Please email me if you are interested in working/collaborating with me!
</p>

Shan-Yuan Teng received their PhD in Computer Science at the **University of Chicago** advised by [Prof. Pedro Lopes](http://plopes.org/). Shan-Yuan’s research aims at advancing a new generation of **haptic devices** (e.g., those that can create a programmable sense of touch, forces, etc.) to exhibit properties that we became used to expect from our mobile & wearable devices, such as **extreme mobility, availability anytime**, etc. Shan-Yuan has published these works at top **Human-Computer Interaction (HCI) conferences** including **ACM CHI & UIST**, with two Best Paper Awards & five Honorable Mention Awards. Shan-Yuan has also demonstrated works at SIGGRAPH & IEEE Haptics. Shan-Yuan holds a Master's degree in Computer Science & Bachelor's degree in Electrical Engineering from National Taiwan University.

[&nbsp;tengshanyuan@csie.ntu.edu.tw&nbsp;] [&nbsp;[CV](/ShanYuanTeng_CV.pdf)&nbsp;] [&nbsp;[Google&nbsp;Scholar](https://scholar.google.com/citations?user=FOngQGAAAAAJ)&nbsp;] [&nbsp;[ORCID](https://orcid.org/0000-0002-1079-097X)&nbsp;]\\
<small>* Shan-Yuan is my first name</small>

## Academic service

- I served on **Program Committee** for **SIGGRAPH Asia 2025 Emerging Technologies**, **UIST 2024**, SUI 2024/2023, ISS 2024 Editorial Board, ISWC 2022, Augmented Humans 2024/2023. I served as a **Demo Chair** for ACM Augmented Humans 2021.
- I regularly **review papers** for ACM CHI, UIST, IMWUT, TEI, DIS, IMX, SIGGRAPH (Technical Paper), IEEE ISMAR, IEEE VR, IEEE Haptics, IEEE World Haptics, IEEE Robotics and Automation Letters, International Journal of Human-Computer Studies.

## Watch my 3-minute introduction & demo

<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen src="https://drive.google.com/file/d/1sDSV9FdVMZsCsfZGrsWvCmdjFfX3vYie/preview"></iframe>

<div class="project-list-highlight">

<h2>PhD Research: Enabling haptic experiences <i>anywhere, anytime</i></h2>

Haptics (sense of touch & forces, etc), while highly developed in labs, are left to a minimum in our daily computing devices (vibration in phones). My research asks: What fundamental technical restrictions are limiting more haptics from integrating into our lives, and, more importantly, can we tackle these?
<br><br>

<div class="project-list">
  <ul>
    {% for project in site.projects reversed %}

    {% capture project_year %}{{project.date | date: "%Y"}}{% endcapture %}
    {% capture project_published %}{{project.published}}{% endcapture %}
    {% capture project_category %}{{project.category}}{% endcapture %}
    {% capture project_subcategory %}{{project.subcategory}}{% endcapture %}

    {% if project_category == 'defense' and project_subcategory == 'first-author' and project_published != 'false' %}
      <li>

          <div class="project-col-wrapper">
              <div class="project-col project-col-1">
                  {% if project.video %}
                  <a href="{{ project.video }}" title="watch defense...">
                  {% endif %} 
                  <img src="{{ project.thumbnail }}" alt="{{ project.title }}"/>
                  {% if project.video %}
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
                  [
                  <a href="{{ project.paper }}">Paper (PDF)</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">(DOI)</a>
                  {% endif %}
                  {% if project.paper %}
                  ]
                  {% endif %}
                  {% if project.video %}
                  [
                  <a href="{{ project.video }}">Defense recording</a>
                  {% endif %}
                  {% if project.video_download %}
                  <a href="{{ project.video_download }}">(MP4)</a>
                  {% endif %}
                  {% if project.video %}
                  ]
                  {% endif %}
                  {% if project.permalink %}
                  [
                  <a href="{{ project.url | prepend: site.baseurl }}">More info</a>
                  ]
                  {% endif %}
                  {% if project.website %}
                  [
                  <a href="{{ project.website }}">Project website</a>
                  ]
                  {% endif %}
                  </div>
              </div>
          </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

<h3>Lead author publications (ACM CHI & UIST)</h3>

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
                  [
                  <a href="{{ project.paper }}">Paper (PDF)</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">(DOI)</a>
                  {% endif %}
                  {% if project.paper %}
                  ]
                  {% endif %}
                  {% if project.video %}
                  [
                  <a href="{{ project.video }}">Video (YouTube)</a>
                  {% endif %}
                  {% if project.video_download %}
                  <a href="{{ project.video_download }}">(MP4)</a>
                  {% endif %}
                  {% if project.video %}
                  ]
                  {% endif %}
                  {% if project.permalink %}
                  [
                  <a href="{{ project.url | prepend: site.baseurl }}">More info</a>
                  ]
                  {% endif %}
                  {% if project.website %}
                  [
                  <a href="{{ project.website }}">Project website</a>
                  ]
                  {% endif %}
                  </div>
              </div>
          </div>

      </li>
    {% endif %}
    {% endfor %}
  </ul>
</div>

<h3>Collaborated papers (ACM CHI & UIST)</h3>

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
                  [
                  <a href="{{ project.paper }}">Paper (PDF)</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">(DOI)</a>
                  {% endif %}
                  {% if project.paper %}
                  ]
                  {% endif %}
                  {% if project.video %}
                  [
                  <a href="{{ project.video }}">Video (YouTube)</a>
                  {% endif %}
                  {% if project.video_download %}
                  <a href="{{ project.video_download }}">(MP4)</a>
                  {% endif %}
                  {% if project.video %}
                  ]
                  {% endif %}
                  {% if project.permalink %}
                  [
                  <a href="{{ project.url | prepend: site.baseurl }}">More info</a>
                  ]
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

## More publications (ACM CHI, UIST & Science Advances)

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
                  [
                  <a href="{{ project.paper }}">Paper (PDF)</a>
                  {% endif %}
                  {% if project.doi %}
                  <a href="{{ project.doi }}">(DOI)</a>
                  {% endif %}
                  {% if project.paper %}
                  ]
                  {% endif %}
                  {% if project.video %}
                  [
                  <a href="{{ project.video }}">Video (YouTube)</a>
                  {% endif %}
                  {% if project.video_download %}
                  <a href="{{ project.video_download }}">(MP4)</a>
                  {% endif %}
                  {% if project.video %}
                  ]
                  {% endif %}
                  {% if project.permalink %}
                  [
                  <a href="{{ project.url | prepend: site.baseurl }}">More info</a>
                  ]
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
