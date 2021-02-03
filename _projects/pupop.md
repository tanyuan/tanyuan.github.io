---
layout: project
category: featured
subcategory: haptics
date:  2018-08-01 00:00:00 +0800
title: "PuPoP"
author: "<b>Shan-Yuan Teng</b>, Tzu-Sheng Kuo, Chi Wang, Chi-huan Chiang, Da-Yuan Huang, Liwei Chan, Bing-Yu Chen"
description:  pop-up prop on palm for virtual reality.
publication:  "UIST 2018 Paper & Demo"
thumbnail: /projects/pupop/pupop-thumb.png
paper: /projects/pupop/pupop_uist18.pdf
permalink: /projects/pupop/
---

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/UpWDa-jgC-I" frameborder="0" allowfullscreen></iframe>
</div>

{% include image.html
           img="pupop_user.jpg"
           caption="" %}

{% include image.html
           img="teaser.jpg"
           caption="PuPoP is a wearable pneumatic shape-proxy interface for VR capable of popping up to primitive shapes and flattening on the palm. We demonstrate grasping emulation of picking up a virtual Lightsaber with a cylindrical PuPoP and throwing a virtual bomb with a spherical PuPoP." %}

The sensation of being able to feel the shape of an object when grasping it in Virtual Reality (VR) enhances a sense of presence and the ease of object manipulation. Though most prior works focus on force feedback on fingers, the haptic emulation of grasping a 3D shape requires the sensation of touch using the entire hand.

Hence, we present _Pop-up Prop on Palm (PuPoP)_, a light-weight pneumatic shape-proxy interface worn on the palm that pops several airbags up with predefined primitive shapes for grasping. When a user's hand encounters a virtual object, an airbag of appropriate shape, ready for grasping, is inflated by way of the use of air pumps; the airbag then deflates when the object is no longer in play. Since PuPoP is a physical prop, it can provide the full sensation of touch to enhance the sense of realism for VR object manipulation.

虛擬實境（VR）中感受抓握物體的觸覺能夠增強身歷其境的感受，以及讓操作物體更為容易。過去研究多重視於手指關節之力回饋，然而抓握物體立體形狀需要整隻手的觸覺感受。

在這篇研究中，我們提出利用氣動產生形變的全新穿戴式觸覺介面，稱之為 Pop-up Prop on Palm (PuPoP)。PuPoP 為穿戴在手掌上之輕量充氣形狀介面，能夠充氣成不同定義之形狀供使用者抓握。當使用者的手靠近虛擬物體時，手上之對應的氣袋將會被空氣幫浦充氣，讓使用者能夠抓握；而當使用者不需要這個物體時，氣袋會消氣。由於 PuPoP 是實體的物件，可以提供完整的觸覺回饋，增強操作物體的真實感。

本研究探索此介面之不同形狀結構的設計與實作，並進行使用者研究了解其應用度。第一個使用者研究探討當視覺與觸覺衝突時，使用者的認知會由視覺主導，使得一個氣袋能夠表達相似大小的虛擬物體。第二個使用者研究比較該介面與市面上普遍使用之控制手把與手勢追蹤操作，結果發現能夠動態改變形狀之 PuPoP 可以顯著提升虛擬實境之樂趣度與物體真實度。

{% include image.html
           img="diagram.jpg"
           caption="" %}

{% include image.html
           img="shapes.png"
           caption="PuPoP design overview." %}

## UIST '18 Demo

{% include image.html
           img="uist_demo_1.jpg"
           caption="" %}
           
{% include image.html
           img="uist_demo_2.jpg"
           caption="" %}
           
{% include image.html
           img="uist_demo_3.jpg"
           caption="" %}

---

In this work, I contributed the main concept of always-available physical proxy for VR, then implemented the pneumatic control system, designed the folding structures for each shapes and developed stacking and extension techniques to extend the applicability, and also the sensing and incorporation into VR using Unity 3D.

I then designed and conducted user studies to understand whether visual dominance effect could allow a prop with a fixed size to represent multiple virtual objects with similar sizes. Another user study compares PuPoP with controllers and free-hand manipulation in two VR applications.

| Authors | **Shan-Yuan Teng** (National Taiwan University)<br>Tzu-Sheng Kuo (National Taiwan University)<br>Chi Wang (National Taiwan University of Science and Technology)<br>Chi-huan Chiang (National Taiwan University)<br>Da-Yuan Huang (National Chiao Tung University)<br>Liwei Chan (National Chiao Tung University)<br>Bing-Yu Chen (National Taiwan University) |
| Publication | **Shan-Yuan Teng**, Tzu-Sheng Kuo, Chi Wang, Chi-huan Chiang, Da-Yuan Huang, Liwei Chan, Bing-Yu Chen. 2018. PuPoP: Pop-up Prop on Palm for Virtual Reality. In Proceedings of the 31st Annual Symposium on User Interface Software and Technology (UIST ‘18). ACM, New York, NY, USA, 5-17. [https://doi.org/10.1145/3242587.3242628](https://doi.org/10.1145/3242587.3242628) |
| Paper | [PDF (22.3MB)](pupop_uist18.pdf) |
| Media Coverage | [The craziest projects from a conference on experimental UI](https://www.fastcompany.com/90247985/the-craziest-projects-from-a-conference-on-experimental-ui) - Oct. 10, 2018, Fast Company <br> [国立台湾大学ら、柔らかさや心臓の拍動も再現できる空気圧を用いたVR向け触覚フィードバックデバイス「PuPoP」を発表](https://shiropen.com/seamless/pupop) - Sept. 5, 2018, Seamless |
| Related Project | [TilePoP: Tile-type Pop-up Prop for Virtual Reality](/projects/tilepop) |
