---
layout: bio
---

Shan-Yuan Teng is an Assistant Professor and Yushan Young Fellow in the Department of Computer Science & Information Engineering (CSIE) at **National Taiwan University** (NTU) in Taipei, Taiwan, where he leads the [Dexterous Interaction Lab](https://lab.tengshanyuan.info).

Shan-Yuan's research advances a new generation of **multimodal user interfaces**, with a focus on **haptic devices** that create programmable sensations of touch and force. These devices aim to enhance users' dexterity across interaction paradigms such as virtual and augmented reality (VR/AR/XR), wearables, and assistive technologies. Their work has been published at premier **Human-Computer Interaction (HCI)** venues, including **ACM CHI and UIST**, and demonstrated at SIGGRAPH and IEEE Haptics.

Shan-Yuan received their PhD in Computer Science from the University of Chicago, advised by [Prof. Pedro Lopes](http://plopes.org/). Shan-Yuan also holds an M.S. in Computer Science and a B.S. in Electrical Engineering from National Taiwan University.

[&nbsp;tengshanyuan@csie.ntu.edu.tw&nbsp;] [&nbsp;[CV](/ShanYuanTeng_CV.pdf)&nbsp;] [&nbsp;[Google&nbsp;Scholar](https://scholar.google.com/citations?user=FOngQGAAAAAJ)&nbsp;] [&nbsp;[ORCID](https://orcid.org/0000-0002-1079-097X)&nbsp;]  [&nbsp;[dblp](https://dblp.org/pid/198/1884.html)&nbsp;]\\
<small>* Shan-Yuan is my first name</small>

## Highlights

- Shan-Yuan is leading a workshop at **UIST 2026** in Detroit: [Workshop on Augmenting Human Dexterity](https://augmenting-dexterity.web.app/) Join us!
- **Two UIST 2026 Demos** from the lab got accepted:
  - Augmenting Smartwatch with a Rollable Tentacle, led by Ping-Jhao Hsu
  - See Through With The Hands: Seamless Occluded Interactions in Augmented Reality, led by Wei-Tang Hsu

## Academic service

- I serve as an **Associate Chair** for **ACM CHI 2027**, **DIS 2026**, **UIST 2024**, **SIGGRAPH Asia 2025 & 2026 Emerging Technologies**, Augmented Humans 2024 & 2026.
- I regularly review papers for ACM CHI, UIST, DIS, SIGGRAPH (Technical Paper), IEEE ISMAR, IEEE VR, IEEE Haptics, IEEE Robotics and Automation Letters, International Journal of Human-Computer Studies.

## Teaching

- Spring, 2026 **[CSIE7641: Multimodal Human-Computer Interaction](https://lab.tengshanyuan.info/class/multimodal-HCI)** (graduate)
- Fall, 2025 **[CSIE5647: Making and Inventing Interactive Devices](https://lab.tengshanyuan.info/class/making-devices)** (undergrad)

<h2>PhD thesis</h2>

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
                  <a href="{{ project.paper }}">Dissertation (PDF)</a>
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


## Publications

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
                  <a href="{{ project.url | prepend: site.baseurl }}">Project page</a>
                  ]
                  {% endif %}
                  {% if project.website %}
                  [
                  <a href="{{ project.website }}">Project page</a>
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
