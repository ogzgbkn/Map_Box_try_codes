mapboxgl.accessToken = 'pk.eyJ1Ijoib2d6Z2JrbiIsImEiOiJjazJobGkxZG8wNnc0M2NudnBjZnhwYXJvIn0.y3rRcKywYonsDO98NfVJjw';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11',
center: [-74.50, 40], // starting position
zoom: 9 // starting zoom
});
 
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
