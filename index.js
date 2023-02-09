let map;

const bophutBeach = { lat: 9.56198785015178, lng: 100.02605438232423 };
const maenamBeach = { lat: 9.57282136669429, lng: 99.99532699584962 };
const laemBeach = { lat: 9.568081745691513, lng: 99.91790771484376 };
const chawengBech = { lat: 9.52118979624974, lng: 100.05884170532228 };





function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 9.50139445, lng: 99.99561927320003 },
    zoom: 12,
  });

  const svgMarker = {
    path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(0, 20),
  };

  const image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  //Придумать как добавить маркеры циклом

  const marker1 = new google.maps.Marker({
    position: bophutBeach,
    map: map,
    icon: image,
  });

  const marker2 = new google.maps.Marker({
    position: maenamBeach,
    map: map,
  });

  const marker3 = new google.maps.Marker({
    position: laemBeach,
    map: map,
  });

  const lmarker4 = new google.maps.Marker({
    position: chawengBech,
    map: map,
  });

}

window.initMap = initMap;