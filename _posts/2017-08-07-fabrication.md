---
layout: post
title:  "個人製造的互動新未來"
date:   2017-08-07 07:00:00 +0800
tags:   [HCI, Digital Fabrication]
---

人類是製造工具的生物，為了砍柴，我們打造斧頭，為了移動，我們打造輪子。黑格爾認為人們其實就是透過工具不斷改變自己命運的 Homo faber (man the maker)，除了生存，人們也透過創造屬於自己的世界，來反映自己的想望，來表現自己的烏托邦。

人類不斷開發出新的製造工具，從過去風車到工廠，近幾年興起的數位製造工具，變得越來越快速，也越來越便宜。如同過去電腦的發展，寫完程式要等一個禮拜才算出結果，現在能夠立刻呈現在螢幕上，成為「個人電腦」；製造也將邁向「個人製造」，畫好或下載的設計圖，立刻就能用家裡的 3D 印表機印出來。

如今不只是螢幕上的圖形能夠有互動性，研究者也開始探索如何設計具有互動性的實體物件（Fabricating interaction），以及如何讓製造本身更具互動性（Interactive fabrication）。

## 物件 × 互動性 (Fabricating interaction)

大量生產的製造方式，需要複雜的組裝，來組成精密機構。而利用 3D 印表機，可以一次列印出精緻構造的物件，透過形狀本身的物理特性，就有機會創造出可以感應（sense）或者驅動（actuate）的有趣 3D 模型。

Disney Research 的 [Printed Optics](https://www.disneyresearch.com/project/printed-optics/) [^1] 藉由設計 3D 模型中的光纖，甚至印製透明的 3D 列印材料，來製造出各種光學效果，可以作為光學感應的媒介，也可以作為 LED 顯示的媒介。

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/eTeXTbXA6-Y" frameborder="0" allowfullscreen></iframe>
</div>

MIT Media Lab 利用 3D 列印拉絲的效果做出 [Cilllia](http://tangible.media.mit.edu/project/cilllia/) [^2]，印出細毛的表面。藉由手觸摸細毛時產生的微小空氣振動，可以用麥克風偵測碰觸與手勢；藉由振動平台，也能夠讓印有毛的物件移動。

<div class="video-wrapper">
  <iframe src="https://player.vimeo.com/video/166604922" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

---

## 製造 × 互動性 (Interactive fabrication)

過去手工製造可以透過直接雕塑、切割、黏貼物件，即時看到、觸摸到半成品，透過持續不斷改造與感覺，創造出最後的成品。數位製造賦予我們更強大的工具，可是卻犧牲了直接觀看或觸摸物件的機會。CMU 研究者提出「互動製造」（Interactive Fabrication）[^3] 的概念，透過即時看到成品，拉近設計師和物件的距離。

{% include image.html
           img="/assets/fabrication/interactive-fabrication.png"
           caption="Interactive Fabrication (Source: ACM)" %}

致力於研究個人製造的 HPI HCI 實驗室 [^4] 探索不同尺度與情境下，互動製造的可能性。要即時製作出大型模型是一件不容易的事情，[Protopiper](https://hpi.de/baudisch/projects/protopiper.html) [^5] 是一把膠帶槍，使用者就可以拿著它在空間中畫出實體的線段，像是吸管，也可以讓它轉彎，快速製作家具大小的原型。

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/beRA4sIjxa8" frameborder="0" allowfullscreen></iframe>
</div>

個人製造有沒有可能像是今天的手機一樣，隨時隨地都能用呢？ [Mobile Fabrication](https://hpi.de/baudisch/projects/pervasive-fabrication.html) [^6] 藉由手機螢幕引導使用者拿著 3D 列印筆，即時畫出當下需要的工具，想像未來工具或材料唾手可得的未來。

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/KK_iX-MbE3Q" frameborder="0" allowfullscreen></iframe>
</div>

---

## 融合新未來

如果我們想要製造任何東西，是不是就需要可以符合需求的機器？MIT Center for Bits and Atoms 開發了 Cardboard Machine Kit [^7]，是一個模組化的套件，像是 3D 印表機、雷射切割機、CNC 機器的原型，可以讓人們組裝自己需要的機器。

{% include image.html
           img="/assets/fabrication/machines-that-make.png"
           caption="組裝不同的 X、Y、Z 軸和旋轉軸，來設計自己的機器。 (Source: MIT CBA)" %}

<div class="video-wrapper">
     <iframe src="https://player.vimeo.com/video/139379884" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

---

我們能夠用機器製造出許多東西，我們也能製造出各種機器，我想下一個階段便是消除這兩者之間的隔閡，也就是東西本身即是機器，東西本身就足以變為任何東西。似乎很難想像如何做到，但從製造物件和製造機器兩個方向出發，距離將會越來越近的。到時，我們又該如何和這樣的東西互動呢？

{% include image.html
           img="/assets/fabrication/machine-object.png" %}

[^1]: [Printed Optics: 3D Printing of Embedded Optical Elements for Interactive Devices](https://www.disneyresearch.com/project/printed-optics/) (UIST '12) 另外 Disney Research 也用 3D 印表機做出任意形狀的喇叭：[3D Printed Interactive Speakers](https://www.disneyresearch.com/project/printed-speakers/)。

[^2]: [Cilllia: 3D Printed Micro-Pillar Structures for Surface Texture, Actuation and Sensing](http://tangible.media.mit.edu/project/cilllia/) (CHI '16)

[^3]: [Interactive Fabrication: New Interfaces for Digital Fabrication](https://dl.acm.org/citation.cfm?id=1935716) (TEI '11)

[^4]: 德國 Hasso-Plattner-Institut 領導人機互動實驗室的 Patrick Baudisch 教授在演講 [The Six Challenges in Personal Fabrication](https://www.youtube.com/watch?v=VTKTCAjWa2I) 中試著從 3D 列印、雷射切割機等越來越便宜、快速的設備，畫出了從個人電腦，到個人製造的未來理想，以及我們面對的挑戰。

[^5]: [Protopiper: Physically Sketching Room-Sized Objects at Actual Scale](https://hpi.de/baudisch/projects/protopiper.html) (UIST '15) 更大尺度的互動製造，可以參考 [Architecture-Scale Human-Assisted Additive Manufacturing](http://www-ui.is.s.u-tokyo.ac.jp/~takami/project/stik/index_eng.html) 用「竹筷」來當巨型 3D 列印的材料，加上電腦投影輔助，蓋出一棟房子。

[^6]: [Mobile Fabrication](https://hpi.de/baudisch/projects/pervasive-fabrication.html) (UIST '16) 另一個用螢幕作為引導的互動例子是 [Shaper Tools Origin](https://shapertools.com/)，一個手持加上智慧引導的切割機。

[^7]: [Cardboard Machine Kit: Modules for the Rapid Prototyping of Rapid Prototyping Machines](https://dl.acm.org/citation.cfm?id=3025491) (CHI '17) [MIT Center for Bits and Atoms](http://cba.mit.edu/) 致力於開發各種大小尺度的製造工具，將資訊變成原子，將原子變成資訊，不只奠下加法（Additive）、減法（Subtractive）製造的基礎，早年發明了 CNC ，近年也在世界各地推廣自造者 FabLab 文化。[Make machines that make](http://mtm.cba.mit.edu/) 是一門課程，教導如何製造出可以製造東西的機器。還有另外一門非常熱門的課程是 [How to Make (Almost) Anything](http://fab.cba.mit.edu/classes/4.140/) ，教導如何利用各種工具製造出（幾乎）任何東西。
