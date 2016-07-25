---
layout: page 
title: Lists
permalink: /lists/
---

  <ul class="post-list">
    {% for post in site.lists %}
      <li>
        <h3>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h3>
      </li>
    {% endfor %}
  </ul>
