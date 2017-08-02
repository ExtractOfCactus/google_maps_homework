var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords, info) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    marker.addListener("click", function() {
      var infoWindow = new google.maps.InfoWindow(info);
      infoWindow.open(this.googleMap, marker);
    })
    this.markers.push(marker);
  },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, "click", function(event) {
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.addMarker(position);
    }.bind(this));
  },

  bounceMarkers: function() {
    this.markers.forEach(function(marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    })
  }

};