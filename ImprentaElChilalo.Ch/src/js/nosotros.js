//Para mejor refresco de la página
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
function initMap() {
    var location = { lat: 40.712776, lng: -74.005974 }; // Coordenadas de ejemplo (Nueva York)
    var mapOptions = {
      center: location,
      zoom: 12
    };
  
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Ubicación'
    });
  }
  
  
