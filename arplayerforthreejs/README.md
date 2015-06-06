# Augmented Reality Player For Three.js

# Example apps for the Hackathon
- this is a 'ar player for three.js'
- run the apps on a phone or on a desktop (run on nexus 6)
- when a marker is reconized, take its id
- display the three.js scene of this id
- this scene is to be edited by the three.js editor

# How To Design The Example
- display the jsaruco output or not
-

---

# TODO
- the goal is what ? to produce examples of AR with markers
- ultimatly it is a phone webapps
  - support gradual degradation
  - with dual screen or not ?
  - with gyro controls or not ?
  - with environment camera or only face ?
- we use jsaruco to implement it, but it should be almost not important
  - the important is the feature
  - the feature is to be able to recognize and position the marker
  - it is made on a live video stream from getUserMedia
- stuff to debug
- stuff to look shiny


# Ideal App
- full screen video
- marker reconized
- 3d scene appearing on top

# How to make this code flexible and reusable
- could be a nice cooked library
- delimit the scope the application and of the library
- various parts
  - marker recognition
  - video grabbing
  - display the 3d scene
  - display the video and the 3d together
- the user will comes from three.js
  - so the base code will be there
  - the library should provide easy interface for them

---

- dev should
  - provide renderer, scene
- library should
  - display video behind canvas at the proper location
  - recognize marker in the video
  - render the scene from the developper at the proper location
  - notify the developper when the marker is visible or not

- unsure how to merge them together
- no need to. just split the code in a nice fashion


---

-

# Demo of the example apps
- Describe a process to follow
  - Similar to industrial steps but funnier
  - e.g. a recipe in the kitchen
- How to leave the office
- Limit shaking by not using rotation. only position/scale

# Video of the apps
- put marker all over the appartements
- the marker near the microwave
  - popup the microwave scene
  - display intro
  - then menu : info/how to cook eggs/how to cook pasta/
- interactive + contextual + spatialized
- cool sounds when it pops up





#
