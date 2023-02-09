// import '/points.js';

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

//   var Layer = new google.maps.Data();
//   Layer.setMap(map);


  const image = {
    url: "/sun-umbrella.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(24, 24),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 24),
  };


  const infowindow = new google.maps.InfoWindow({
    content: beachInfo,
  });

    

  const marker1 = new google.maps.Marker({
    position: bophutBeach,
    // map: map,
    icon: image,
    title: "Bophut",
  });

 
  marker1.addListener("click", () => {
    infowindow.open({
      anchor: marker1,
      map,
    });
  });

  
  const marker2 = new google.maps.Marker({
    position: maenamBeach,
    // map: map,
    icon: image,
  });

  marker2.addListener("click", () => {
    infowindow.open({
      anchor: marker2,
    //   map,
    });
  });

  const marker3 = new google.maps.Marker({
    position: laemBeach,
    // map: map,
    icon: image,
  });

  const marker4 = new google.maps.Marker({
    position: chawengBeach,
    // map: map,
    icon: image,
  });

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      console.log("Checkbox is checked..");
      marker1.setMap(map);
      marker2.setMap(map);
      marker3.setMap(map);
      marker4.setMap(map);
    } else {
      console.log("Checkbox is not checked..");
      marker1.setMap(null);
      marker2.setMap(null);
      marker3.setMap(null);
      marker4.setMap(null);
    }
  });


};



window.initMap = initMap;

