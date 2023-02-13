import {points} from './data.js';

console.log (points);

let wavesCheckbox = document.getElementById('waves');
let sunsetCheckbox = document.getElementById('sunset');

let map;

// Создаем  карту
function initMap(points) {

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 9.50139445, lng: 99.99561927320003 },
    zoom: 11,
  });


  const beachIcon = {
    url: "/sun-umbrella.png",
    size: new google.maps.Size(24, 24),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 24),
  };


  // Создаем маркеры и привязываем к ним попапы 
  let beachMarkerMap = {};

  let GenerateMarkers = () => {

    points.forEach((point) => {

      const marker = new google.maps.Marker({
        position: point.position,
        title: point.title,
        map: map,
        icon: beachIcon,
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


  // Функции показа и скрытия меток с карты.

  let showMarker = (id) => {
    beachMarkerMap[id].setMap(map);
  };

  let hideMarker = (id) => {
    beachMarkerMap[id].setMap(null);
  };



  // Создаю объект фильтра и записываю туда состояния фильтра

  let filter = {
    waves: false,
    sunset: false,
  }


  wavesCheckbox.addEventListener('change', function () {
    filter.waves = this.checked;
    applyFilter(filter);
  });

  sunsetCheckbox.addEventListener('change', function () {
    filter.sunset = this.checked;
    applyFilter(filter);
  });


  // Функция фильтрации в зависимости от соостояния фильтра

  let applyFilter = (filter) => {

    // Создаю объект, где описано какие маркеры должны быть показаны.
    let pointsDisplay = {};

    points.forEach((point) => {
      pointsDisplay[point.id] = true;
    });

    if (filter.waves) {

      points.forEach((point) => {
        if (point.waves !== true) { pointsDisplay[point.id] = false; }
      })
    };

    if (filter.sunset) {
      points.forEach((point) => {
        if (point.sunset !== true) { pointsDisplay[point.id] = false; }
      })
    };

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



window.initMap = initMap(points);



