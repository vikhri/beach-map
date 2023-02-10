
let points = [ 
    {   
        position: { lat: 9.56198785015178, lng: 100.02605438232423 },
        title: 'bophutBeach',
        description: '<p>bophutBeach</p>',
        waves: false,
    },
    {  
        position: { lat: 9.57282136669429, lng: 99.99532699584962 },
        title: 'maenamBeach',
        description: '<p>maenamBeach</p>',
        waves: true,
    },
    {   
        position: { lat: 9.568081745691513, lng: 99.91790771484376 },
        title: 'laemBeach',
        description: '<p>laemBeach</p>',
        waves: false,
    },
    {  
        position: { lat: 9.52118979624974, lng: 100.05884170532228 },
        title: 'chawengBeach',
        description: '<p>chawengBeach</p>',
        waves: true,
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

        let GenerateMarkers = () => {

        points.forEach(({position, title, description}) => {
            const marker = new google.maps.Marker({
              position,
              title,
              map: map,
              icon: image,
            });

            const infowindow = new google.maps.InfoWindow({
                content: description,
              });
          
            marker.addListener("click", () => {
                infowindow.open({
                  anchor: marker,
                  map,
                });
              });
            
          });
          
        };

export {points, GenerateMarkers};
