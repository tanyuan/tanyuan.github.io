---
layout: page 
title: Lists
permalink: /lists/
---

  <ul class="post-list">
    {% for post in site.lists reversed %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h3>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h3>
      </li>
    {% endfor %}
  </ul>
