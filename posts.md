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

      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe note"><a href="{{ "/feed.xml" | prepend: site.baseurl }}">RSS</a></p>
