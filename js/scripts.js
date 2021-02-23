mapboxgl.accessToken = 'pk.eyJ1Ijoia2NheXQiLCJhIjoiY2tsZWY0cGJmMWRtZjJucXRqdGJhdnJ2OSJ9.5yR0jnpb7zMjnGWCj_Jr-g';

var map = new mapboxgl.Map({
container: 'mapcontainer', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-73.97, 40.7], // starting position [lng, lat]
zoom: 9.8 // starting zoom
 });
// var map = new mapboxgl.Map({
//   container: 'mapcontainer', // container ID
//   style: 'mapbox://styles/mapbox/streets-v11', // style URL
//   center: [-74.0060, 40.71], // starting position [lng, lat]
//   zoom: 10 // starting zoom
// });

//
 var nav = new mapboxgl.NavigationControl();
 map.addControl(nav, 'top-left');


//
// var marker = new mapboxgl.Marker({
//     color: 'red'
// })
// .setLngLat([-74, 40])
// .setPopup(new mapboxgl.Popup().setHTML("<h1>${data.name}</h1>")) // add popup
// .addTo(map);
// })


$.getJSON('./data/schools.json', function(schooldata) {
  console.log(schooldata)
  schooldata.forEach(function(schooldetail) {
    console.log(schooldetail.SchoolName, schooldetail.District)
var html = `
<h3>${schooldetail.SchoolName}</h3>
<div> District ${schooldetail.District} </div>
`

var color = 'green'

if (schooldetail.District === 1){
  color = 'blue'
}
if (schooldetail.District === 2){
  color = 'yellow'
}
if (schooldetail.District === 3){
  color = 'purple'
}
if (schooldetail.District === 4){
  color = 'red'
}
if (schooldetail.District === 15){
  color = 'teal'
}
if (schooldetail.District === 17){
  color = 'gold'
}
if (schooldetail.District === 20){
  color = 'pink'
}
if (schooldetail.District === 21){
  color = 'lavender'
}
if (schooldetail.District === 26){
  color = 'lime'
}
if (schooldetail.District === 28){
  color = 'magenta'
}
if (schooldetail.District === 30){
  color = 'tan'
}
    new mapboxgl.Marker({
      color: color
    })
      .setLngLat([schooldetail.Longitude, schooldetail.Latitude])
      .setPopup(new mapboxgl.Popup().setHTML(html))
      .addTo(map)
    
  }); });
