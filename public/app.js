var initialize = function() {
  var center = {lat: 51.5074, lng: -0.13}
  var sherlockMuseum = {lat:51.52376786579453, lng:-0.15855610370635986}
  var mapDiv = document.querySelector("#main-map");

  var mainMap = new MapWrapper(mapDiv, center, 10);

  var content = {content: "<p>A museum dedicated to the fictional detective, Sherlock Holmes</p>"}

  mainMap.addMarker(center);
  mainMap.addMarker(sherlockMuseum, content);
  mainMap.addClickEvent();

  // var bounceButton = document.querySelector("#button-bounce-markers");
  // bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap))
}

window.addEventListener("load", initialize);