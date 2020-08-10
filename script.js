// Google Maps Embed

function myMap() {
  var mapProp = {
    center:new google.maps.LatLng(35,-110),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}