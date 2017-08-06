---
layout: page
title: Posts
permalink: /posts/
---

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span><br>

          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>


          {% if post.tags %}
          <div class="tag-list">
          {% for tag in post.tags %}
            <span class="tag">{{tag}}</span>
          {% endfor %}
          </div>
          {% endif %}

      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe note"><a href="{{ "/feed.xml" | prepend: site.baseurl }}">RSS</a></p>
