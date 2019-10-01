---
layout: post
title:  "用充氣材料打造虛擬實境的立體書"
subtitle: "在掌心變出一顆球？在地上變出一艘船？"
date:   2019-10-01 00:20:00 -0500
---

{% include image.html
           img="/assets/2019/10/01/pupop_hand.jpg"
           caption="如何讓虛擬實境的操作，更像是接觸真實物體的感覺？" %}
           
虛擬實境（Virtual Reality, VR）在視覺上提供沈浸的感受，但一伸出手，就立刻揮空，大大打折了 VR 能夠提供的體驗。要如何感受到抓握物體的感覺呢？典型的觸覺回饋裝置，如電影《一級玩家》中覆蓋全身的觸覺衣與手套，可以提供力量和震動的回饋。然而穿上這些觸覺衣接觸虛擬物體時，**永遠得透過一層手套，犧牲了皮膚與物體接觸時的感受**。這讓我們開始思考，有沒有實現觸覺的不同方式呢？

其實透過簡單的道具來代表虛擬世界中的物體（例如：用寶特瓶代表 VR 中的球棒），能夠提供完整的自然感受。但這些替代物通常是靜態的，必須事先準備好一箱道具，也無法隨著 VR 動態改變。**如何打造能夠有隨著 VR 內容動態出現的道具？**

氣球充氣時膨脹，抽氣時則壓扁，在過去互動研究中被用作為彎曲與延展、模擬材質與壓力等介面 [^1]，而我們在台大的研究中，則利用其體積劇烈變化的特性，研究如何設計特殊結構，動態改變氣球的形狀，搭配 VR 動態的內容：有如「立體書」（pop-up book）一般在故事中切換不同的立體場景，我們稱之為 **VR 立體彈出道具（pop-up prop）** 。

{% include image.html
           img="/assets/2019/10/01/properties.png"
           caption="Pop-up Prop （立體彈出道具） 的特性：結合動態彈出及自然觸覺感受。" %}
           
## PuPoP: 手掌上的充氣介面

如何讓立體彈出道具出現在 **VR 空間的任意地方呢？**如果將這些道具穿在手上，它們就能夠出現在手揮到的任何地方！我們運用塑膠袋與熱封機，參考產品塑膠袋包裝的技巧，設計不同的形狀。有鑒於過去研究者對於人類手掌抓握的分類 [^2]，歸納出球型、圓柱為基本形狀，並透過延伸結構，達成人類操作物體不同的抓握方式，然後對應到 VR 中的物體。透過疊合不同形狀與大小的空氣袋，搭配小型空氣幫浦的驅動，實現配合 VR 切換不同的基本形狀，同時保留手指大範圍的自然觸覺感受。

我們稱這個裝置為 [PuPoP](/projects/pupop)，於 2018 年發表在國際頂級人機互動研討會 UIST，在下面影片中展示在 VR 中玩魁地奇丟球以及用不同工具 3D 繪畫的情境：

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/UpWDa-jgC-I" frameborder="0" allowfullscreen></iframe>
</div>

## TilePoP: 地板上的充氣介面

我們思考將這個概念放大，不只是彈出道具，而是彈出場景，**創造出全身的觸覺感受？**就像是過去研究者對於終極顯示器的想像：「顯示出真的可以坐下的椅子」 [^3] ？離開人的身體，我們探索將充氣介面安裝在環境中的可能，而地板正是最適合的地方。我們受到過去桌上型形狀顯示器的啟發 [^4]，想像充氣道具隱藏成地磚的形式，在需要時充氣成立體的，並透過不同組合，形成不同形狀。我們參考過去六角旋轉升降結構的研究 [^5]，將其修改成方塊狀，擴大並重疊，也增強材料強度，充氣後可以支撐人體坐著的重量（120 公斤）。這些空氣袋都連結外部大型空壓機與真空幫浦，最終我們完成 3×3×3 的氣動地磚（每個方塊 30 公分長寬高），能夠在有限的 VR 互動空間中變換成不同的形狀，如桌子、椅子。

這篇研究 [TilePoP](/projects/tilepop) 即將發表於 2019 年 10 月中的 UIST 研討會，以下影片展示了許多示範的應用情境，從騎乘恐龍、搭小船，到打造真實版的 Minecraft：

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/uxSQrd-IRjw" frameborder="0" allowfullscreen></iframe>
</div>

-----

這兩篇研究站在人機互動（Human-Computer Interaction, HCI）領域中 VR 觸覺回饋（Haptic Feedback）、實體互動（Tangible Interaction）、形狀改變介面（Shape-changing Interface）的交集。每個子領域的研究者從不同的角度出發，卻都朝向類似的理想前進：**好好運用我們與生俱來的身體，拓展視覺以外的感官體驗**。相信未來將會有更輕量而快速的驅動裝置，更豐富的材質、形狀變化，實現更多功能。同時，這樣的介面如何改變我們認知真實與虛擬世界，也值得更進一步研究。希望這些研究能夠啟發未來更多人探索 VR 動態形狀介面，豐富人們互動與想像的方式。

{% include image.html
           img="/assets/2019/10/01/design_space.png"
           caption="Pop-up prop 研究藍圖：從手部到全身尺度，實現不同的功能與運用不同觸覺認知。" %}

-----

## 致謝

感謝參與這些研究的共同作者：國立臺灣大學陳炳宇教授、國立交通大學黃大源與詹力韋教授，以及郭子生、王齊、蔣奇桓、林政隆。另外感謝梁容豪教授為本文提供建議。

[^1]: 過去研究設計不同充氣結構來達成彎曲、體積、材質等變化：[PneUI](http://tangible.media.mit.edu/project/pneui/) 與 [aeroMorph](http://tangible.media.mit.edu/project/aeromorph/)。
[^2]: The Grasping Hand by C.L. MacKenzie T. Iberall. North Hollan. 1994.
[^3]: “The ultimate display would, of course, be a room within which the computer can control the existence of matter. A chair displayed in such a room would be good enough to sit in. [...]” - The Ultimate Display (1965) by Ivan Edward Sutherland
[^4]: 桌上型的形狀顯示器如 [inFORM](http://tangible.media.mit.edu/project/inform/) 與 [shapeShift](http://shape.stanford.edu/research/shapeShift/)。
[^5]: [Origami-inspired, on-demand deployable and collapsible mechanical metamaterials with tunable stiffness](https://www.pnas.org/content/115/9/2032).
