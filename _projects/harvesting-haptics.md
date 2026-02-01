---
layout: project
category: research
subcategory: first-author
date:  2022-08-01 00:00:00 +0000
title: "Prolonging VR haptic experiences by harvesting kinetic energy from the user"
author: "<b>Shan-Yuan Teng</b>, K. D. Wu, Jacqueline Chen, Pedro Lopes"
description: 
publication:  "UIST 2022 Paper"
award: 🏅 Honorable Mention Award
thumbnail: /projects/harvesting-haptics-thumbnail.jpg
paper: /projects/harvesting-haptics/harvestinghaptics-uist22.pdf
doi: https://doi.org/10.1145/3526113.3545635
video: https://www.youtube.com/watch?v=dhZA21RV6O8
video_download: https://1drv.ms/v/c/C47DF7B065F99047/EdTZbbAfhKNDs_5WfWSW8O0B-IQpMWlaTl8-9arAqYz1pg?e=DBgcmv
permalink: /projects/harvesting-haptics/
---

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/dhZA21RV6O8" frameborder="0" allowfullscreen></iframe>
</div>

{% include image.html
           img="device_with_vr.jpg"
           caption="" %}

We propose a new technical approach to implement untethered VR haptic devices that contain no battery, yet can render on-demand haptic feedback. The key is that via our approach, a haptic device charges itself by harvesting the user’s kinetic energy (i.e., movement)—even without the user needing to realize this. This is achieved by integrating the energy-harvesting with the virtual experience, in a responsive manner. Whenever our batteryless haptic device is about to lose power, it switches to harvesting mode (by engaging its clutch to a generator) and, simultaneously, the VR headset renders an alternative version of the current experience that depicts resistive forces (e.g., rowing a boat in VR). As a result, the user feels realistic haptics that corresponds to what they should be feeling in VR, while unknowingly charging the device via their movements. Once the haptic device’s supercapacitors are charged, they wake up its microcontroller to communicate with the VR headset. The VR experience can now use the recently harvested power for on-demand haptics, including vibration, electrical or mechanical force-feedback; this process can be repeated, ad infinitum. We instantiated a version of our concept by implementing an exoskeleton (with vibration, electrical & mechanical force-feedback) that harvests the user’s arm movements. We validated it via a user study, in which participants, even without knowing the device was harvesting, rated its’ VR experience as more realistic & engaging than with a baseline VR setup. Finally, we believe our approach enables haptics for prolonged uses, especially useful in untethered VR setups, since devices capable of haptic feedback are traditionally only reserved for situations with ample power. Instead, with our approach, a user who engages in hours-long VR and grew accustomed to finding a battery-dead haptic device that no longer works, will simply resurrect the haptic device with their movement.

{% include image.html
           img="main_vr_loop.jpg"
           caption="" %}

{% include image.html
           img="device_with_sensations.jpg"
           caption="" %}
           
{% include image.html
           img="device_clutch_diagram.jpg"
           caption="" %}
           
{% include image.html
           img="pcb_sch.jpg"
           caption="" %}
           
## recorded talk at UIST 2022

<div class="video-wrapper">
  <iframe width="640" height="360" src="https://www.youtube.com/embed/bIiekRSSHb8" frameborder="0" allowfullscreen></iframe>
</div>
           
| Authors | <b>Shan-Yuan Teng</b>, K. D. Wu, Jacqueline Chen, Pedro Lopes (University of Chicago) |
| Publication | <b>Shan-Yuan Teng</b>, K. D. Wu, Jacqueline Chen, Pedro Lopes. 2022. Prolonging VR Haptic Experiences by Harvesting Kinetic Energy from the User. In Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology (UIST '22). Association for Computing Machinery, New York, NY, USA, Article 39, 1–18. [https://doi.org/10.1145/3526113.3545635](https://doi.org/10.1145/3526113.3545635) |
| Award | 🏅 **UIST ‘22 Best Paper Honorable Mention Award**  |
| Paper | [PDF (4.1MB)](harvestinghaptics-uist22.pdf) |
| Open Source | [Hardware schematics & models](https://github.com/humancomputerintegration/harvesting-haptics) |
