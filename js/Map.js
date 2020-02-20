function initMap() {
  // The location of melgiew
  let melgiew = { lat: 51.196247, lng: 22.787431 };
  // The map, centered at melgiew
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: melgiew
  });

  // The marker
  let marker = new google.maps.Marker({ position: melgiew, map: map });
}
