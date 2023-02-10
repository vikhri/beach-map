// import {GenerateMarkers} from './points.js';

let wavesCheckbox = document.getElementById('waves');
let sunsetCheckbox = document.getElementById('sunset');

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
    zoom: 11,
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
        waves: true,
        sunset: false,
    },
    {  
        id:2,
        position: { lat: 9.57282136669429, lng: 99.99532699584962 },
        title: 'maenamBeach',
        description: '<p>maenamBeach</p>',
        waves: true,
        sunset: false,
    },
    {   
        id:3,
        position: { lat: 9.568081745691513, lng: 99.91790771484376 },
        title: 'laemBeach',
        description: '<p>laemBeach</p>',
        waves: false,
        sunset: true,
    },
    {  
        id:4,
        position: { lat: 9.52118979624974, lng: 100.05884170532228 },
        title: 'chawengBeach',
        description: '<p>chawengBeach</p>',
        waves: true,
        sunset: false,
    },
    {   
      id: 5,
      position: { lat: 9.556448527658542,  lng: 99.9284319755981 },
      title: 'Nathonbeach',
      description: '<p>Nathon beach</p>',
      waves: false,
      sunset: true,
  },
  {  
      id:6,
      position: { lat: 9.483801035442333, lng:  99.92600932601103 },
      title: 'LipaNoibeach',
      description: '<p>Lipa Noi beach</p>',
      waves: true,
      sunset: true,
  },
  {   
      id:7,
      position: { lat: 9.4641728042101, lng:  100.04622697611381 },
      title: 'Lamaibeach',
      description: '<p>Lamai beach</p>',
      waves: true,
      sunset: false,
  },
  {  
      id:8,
      position: { lat: 9.427709368300851, lng: 99.93662395292347 },
      title: 'PangKhabeach',
      description: '<p>Pang Kha beach</p>',
      waves: false,
      sunset: true,
  },

];

    

let beachMarkerMap = {};

        let GenerateMarkers = () => {
            
        points.forEach((point) => {
            
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



let showMarker = (id) => {
    beachMarkerMap[id].setMap(map);
};

let hideMarker = (id) => {
    beachMarkerMap[id].setMap(null);
};
 


// applyFilter();

// wavesCheckbox.addEventListener('change', function() {
//   if (this.checked) {
//     applyFilter();
//   } else {
//     GenerateMarkers().setMap(map);
//   }
// });

// Создаю объект фильтра и записываю туда состояния фильтра

let filter = {
  waves: false,
  sunset: false,
}


wavesCheckbox.addEventListener('change', function() {
  filter.waves = this.checked;
  applyFilter();
 });

sunsetCheckbox.addEventListener('change', function() {
  filter.sunset = this.checked;
  applyFilter();
});


let applyFilter = function() {

// Создаю объект где описано какие маркеры должны быть показаны.


let pointsDisplay = {};


  points.forEach((point) => {
     pointsDisplay[point.id] = true; 
     
    if (filter.waves) {
    
    points.forEach((point) => 
    { if (point.waves !== true) {pointsDisplay[point.id] = false; }
    })
  };

    if (filter.sunset) {
    points.forEach((point) => 
    { if (point.sunset !== true) {pointsDisplay[point.id] = false; }
    })
  };
  

    
  });

  
  // Показываю маркеры

  points.forEach((point) => {
  if (pointsDisplay[point.id]) {
    showMarker(point.id)
    } else {
      hideMarker(point.id);
    };
  
}); 

};
  

};



window.initMap = initMap;



