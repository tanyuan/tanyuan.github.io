---
layout: bio
---



<p style="padding: .5em 1em; background:rgb(255, 254, 204); color:#333">
  I will defend my PhD on March 24th! <a href="https://defense.tengshanyuan.info/">Check out the info, streaming here</a>
</p>

Shan-Yuan Teng is a PhD candidate in Computer Science at the **University of Chicago** advised by [Prof. Pedro Lopes](http://plopes.org/). Shan-Yuan’s research aims at advancing a new generation of **haptic devices** (e.g., those that can create a programmable sense of touch, forces, etc.) to exhibit properties that we became used to expect from our mobile & wearable devices, such as **extreme mobility, availability anytime**, etc. To advance haptics into this new territory, Shan-Yuan engineers custom-made interactive devices that, for instance, [allow us to feel touch in Augmented/Mixed Reality (AR/MR/XR) without encumbering our dexterity in the real world](/projects/touchfold/touchfold-chi21.pdf); or [support manual interactions for blind users](/projects/SeeingWithTheHands_CHI25_Preprint.pdf). Shan-Yuan has published these works at top **Human-Computer Interaction (HCI) conferences** including **ACM CHI & UIST** (17 papers, 8 as the first author), with two Best Paper Awards & five Honorable Mention Awards. Shan-Yuan has also demonstrated works at SIGGRAPH & IEEE Haptics.

Shan-Yuan was born in Taiwan and holds a Master's degree in Computer Science & Bachelor's degree in Electrical Engineering from **National Taiwan University**.

[&nbsp;tengshanyuan@uchicago.edu&nbsp;] [&nbsp;[CV](/ShanYuanTeng_CV.pdf)&nbsp;] [&nbsp;[Google&nbsp;Scholar](https://scholar.google.com/citations?user=FOngQGAAAAAJ)&nbsp;] [&nbsp;[Bluesky](https://bsky.app/profile/tengshanyuan.info)&nbsp;] [&nbsp;[ORCID](https://orcid.org/0000-0002-1079-097X)&nbsp;]\\
<small>* Shan-Yuan is my first name</small>

## Watch my 3-minute introduction & demo

<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen src="https://drive.google.com/file/d/1sDSV9FdVMZsCsfZGrsWvCmdjFfX3vYie/preview"></iframe>

## Highlights

{% include_relative highlights.md %}

<div class="project-list-highlight">

<h2>PhD Research: Enabling haptic experiences <i>anywhere, anytime</i></h2>

Haptics, while highly developed in labs (sense of touch & forces), are left to a minimum in our daily computing devices (vibration in phones). My research asks: What fundamental restrictions are limiting haptic devices from integrating into our lives, and, more importantly, can we tackle these? I wrote articles on this overarching idea in <a href="/projects/anywhere-anytime-chi23.pdf">CHI Doctoral Consortium</a>, <a href="/projects/seamless-haptics-IEEEVR24.pdf">IEEE VR Workshop</a>, <a href="/projects/xr-needs-mixed-feelings/XR-needs-mixed-feelings-XRDS21.pdf">ACM XRDS</a>, and published papers at prestigious HCI conferences:
<br><br>

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

## Academic service

{% include_relative services.md %}

{% include footer.html %}
