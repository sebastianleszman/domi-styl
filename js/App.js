let carousel = tns({
  items: 1,
  controls: false,
  arrowKeys: false,
  container: '.carousel-slider',
  swipeAngle: false,
  speed: 1000,
  slideBy: 1,
  gutter: 0,
  autoplay: true,
  autoplayHoverPause: false,
  preventActionWhenRunning: true,
  autoplayTimeout: 4000,
  autoplayButtonOutput: false,
  nav: false
});

let trust = tns({
  items: 1,
  controls: false,
  arrowKeys: false,
  container: '.trust-slider',
  swipeAngle: false,
  speed: 1000,
  slideBy: 1,
  gutter: 10,
  autoplay: true,
  autoplayHoverPause: false,
  preventActionWhenRunning: true,
  autoplayTimeout: 1500,
  autoplayButtonOutput: false, // hides autoplay buttons
  nav: false, //hides navbar which is almost transparent
  autoplayText: ['▶', '❚❚'],
  responsive: {
    620: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
});

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
