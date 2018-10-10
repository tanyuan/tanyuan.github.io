---
layout: project
category: Research
subcategory: Haptics (Full Paper)
date:  2018-08-01 00:00:00 +0800
title: "PuPoP"
author: "<b>Shan-Yuan Teng</b>, Tzu-Sheng Kuo, Chi Wang, Chi-huan Chiang, Da-Yuan Huang, Liwei Chan, Bing-Yu Chen"
description:  Pop-up Prop on Palm for Virtual Reality.
publication:  "To appear at UIST 2018 Papers"
thumbnail: pupop-thumb.png
paper: /projects/pupop/pupop_uist18.pdf
permalink: /projects/pupop/
---

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/UpWDa-jgC-I" frameborder="0" allowfullscreen></iframe>
</div>

{% include image.html
           img="pupop_thumbnail.jpg"
           caption="A light-weight pneumatic shape-proxy interface worn on the palm that pops several airbags up with predefined primitive shapes for grasping." %}

{% include image.html
           img="shapes.png"
           caption="PuPoP design overview." %}

The sensation of being able to feel the shape of an object when grasping it in Virtual Reality (VR) enhances a sense of presence and the ease of object manipulation. Though most prior works focus on force feedback on fingers, the haptic emulation of grasping a 3D shape requires the sensation of touch using the entire hand.

Hence, we present _Pop-up Prop on Palm (PuPoP)_, a light-weight pneumatic shape-proxy interface worn on the palm that pops several airbags up with predefined primitive shapes for grasping. When a user's hand encounters a virtual object, an airbag of appropriate shape, ready for grasping, is inflated by way of the use of air pumps; the airbag then deflates when the object is no longer in play. Since PuPoP is a physical prop, it can provide the full sensation of touch to enhance the sense of realism for VR object manipulation.

---

In this work, I contributed the main concept of always-available physical proxy for VR, then implemented the pneumatic control system, designed the folding structures for each shapes and developed stacking and extension techniques to extend the applicability, and also the sensing and incorporation into VR using Unity 3D.

I then designed and conducted user studies to understand whether visual dominance effect could allow a prop with a fixed size to represent multiple virtual objects with similar sizes. Another user study compares PuPoP with controllers and free-hand manipulation in two VR applications.

| Publication | **Shan-Yuan Teng**, Tzu-Sheng Kuo, Chi Wang, Chi-huan Chiang, Da-Yuan Huang, Liwei Chan, Bing-Yu Chen. 2018. PuPoP: Pop-up Prop on Palm for Virtual Reality . To appear in Proceedings of the 31st Annual Symposium on User Interface Software and Technology (UIST ‘18). ACM. |
| Paper | [PDF (408KB)](pupop_uist18.pdf) |
| Media Coverage | [The craziest projects from a conference on experimental UI](https://www.fastcompany.com/90247985/the-craziest-projects-from-a-conference-on-experimental-ui) - Oct. 10, 2018, Fast Company <br> [国立台湾大学ら、柔らかさや心臓の拍動も再現できる空気圧を用いたVR向け触覚フィードバックデバイス「PuPoP」を発表](https://shiropen.com/seamless/pupop) - Sept. 5, 2018, Seamless|
