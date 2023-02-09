// import {GenerateMarkers} from './points.js';

let checkbox = document.getElementById('all');
console.log(checkbox);

let map;


const bophutBeach = { lat: 9.56198785015178, lng: 100.02605438232423 };
const maenamBeach = { lat: 9.57282136669429, lng: 99.99532699584962 };
const laemBeach = { lat: 9.568081745691513, lng: 99.91790771484376 };
const chawengBeach = { lat: 9.52118979624974, lng: 100.05884170532228 };

const beachInfo =
'<div id="content">' +
'<h1 id="firstHeading" class="firstHeading">Beach</h1>' +
'<p>Description</p>' +
'</div>';


function initMap() {
 
    map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 9.50139445, lng: 99.99561927320003 },
    zoom: 12,
  });


  const image = {
    url: "/sun-umbrella.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(24, 24),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 24),
  };

//  GenerateMarkers();
 
let points = [ 
    {   
        id:1,
        position: { lat: 9.56198785015178, lng: 100.02605438232423 },
        title: 'bophutBeach',
        description: '<p>bophutBeach</p>',
        waves: 1,
    },
    {  
        id:2,
        position: { lat: 9.57282136669429, lng: 99.99532699584962 },
        title: 'maenamBeach',
        description: '<p>maenamBeach</p>',
        waves: 2,
    },
    {   
        id:3,
        position: { lat: 9.568081745691513, lng: 99.91790771484376 },
        title: 'laemBeach',
        description: '<p>laemBeach</p>',
        waves: 0,
    },
    {  
        id:4,
        position: { lat: 9.52118979624974, lng: 100.05884170532228 },
        title: 'chawengBeach',
        description: '<p>chawengBeach</p>',
        waves: 4,
    },

];



// let GenerateMarkers = (array) => {

    

    // for (let i = 0; i < array.length; i++) {

    //     // Cоздать маркеры
    //     new google.maps.Marker({
    //         position: array[i].position,
    //         map: map,
    //         icon: image,
    //         title: array[i].title,
    //       });

        
    //     // Создать попапы с описанием
    //     new google.maps.InfoWindow({
    //         content: array[i].description,
    //       });

    //     }
    // };

        ////////////////////////////////////////////////////////////////////   
let beachMarkerMap = {};

        let GenerateMarkers = () => {
            
        points.forEach((point) => {
            console.log(point);
            const marker = new google.maps.Marker({
              position: point.position,
              title: point.title,
              map: map,
              icon: image,
            });

            const infowindow = new google.maps.InfoWindow({
                content: point.description,
              });
          
            marker.addListener("click", () => {
                infowindow.open({
                  anchor: marker,
                  map,
                });
              });
            
              beachMarkerMap[point.id] = marker;


          });
          
        };

GenerateMarkers();

console.log(beachMarkerMap);

let showMarker = (id) => {
    beachMarkerMap[id].setMap(map);
};

let hideMarker = (id) => {
    beachMarkerMap[id].setMap(null);
};
 

let applyFilter = () => {



    points.forEach((point) => {

        if (point.waves > 2) {
            showMarker(point.id);
        } else {
            hideMarker(point.id);
        };

    });
};
 
applyFilter();
//   checkbox.addEventListener('change', function() {
//     if (this.checked) {
//       console.log("Checkbox is checked..");
//       marker1.setMap(map);
//       marker2.setMap(map);
//       marker3.setMap(map);
//       marker4.setMap(map);
//     } else {
//       console.log("Checkbox is not checked..");
//       marker1.setMap(null);
//       marker2.setMap(null);
//       marker3.setMap(null);
//       marker4.setMap(null);
//     }
//   });


};



window.initMap = initMap;

