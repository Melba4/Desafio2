 function initMap() {
        //en estas variables se  coloca longitud y latitud de los puntps que ubicamos
        var coordenadas = {lat: 13.6739996, lng: -89.2367663};
        var coordenadas2={lat:13.7159035, lng: -89.1536987};

        var map = new google.maps.Map(document.getElementById('map'), {
          //se le asigna un valor al zoom del mapa para que aparezca mas cerca de los puntos
          zoom: 11,
          center: coordenadas
         
        });
        //en la variable imagen se define la imagen que se pondra en el mapa
        var imagen='udb_1.png';
        var marker = new google.maps.Marker({
          position: coordenadas,
          animation: google.maps.Animation.BOUNCE,
          map: map,
          icon:imagen,
        });

		
        var marker2 = new google.maps.Marker({
          position: coordenadas2,
           animation: google.maps.Animation.BOUNCE,
          map: map,
           icon:imagen,
        });

        
      }