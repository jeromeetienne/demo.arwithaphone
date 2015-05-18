# idea
- i redo this demo http://youtu.be/9XmKbn8ccY8
- And there is even a Japanese guy who got the dancing girl
  - here is the dancing girl https://twitter.com/LearningThreejs/status/585057618814697472
  - he got a three.js version
  - use this one - git@github.com:jeromeetienne/demo.arwithaphone.git

# How to express the result of a pose ?
- the marker[s] represents the center of the scene
- we should not move the scene, we should move the camera
- currently the code is moving the scene.

# possible performance improvement js-aruco
- ability to average multiple pose to be more robust to error
- ability to run in webworker to have a more fluid detection
- better handle the error case
  -

# NOTE js-aruco + three.js
- possible to locate the marker in the video stream
- what can we do with that ?

---

## Notes
- let's print markers and spread them around the house
- make a webpage able to recognize the markers id
  - there is like 512 AR markers id
- it will display a menu in VR like tiltbrush
- what about multi user ?
  - multiple people looking at the same marker
  - how can they share informations
  - they can share the state of the menu
  - can they interact with each other ?
  - can they see the same  
