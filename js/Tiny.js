let carousel = tns({
  items: 1,
  controls: false,
  arrowKeys: false,
  container: '.carousel-slider',
  swipeAngle: false,
  speed: 1000,
  mouseDrag: true,
  slideBy: 1,
  gutter: 0,
  autoplay: true,
  autoplayHoverPause: false,
  preventActionWhenRunning: true,
  autoplayTimeout: 4000,
  autoplayButtonOutput: false, // hides autoplay buttons
  nav: false, //hides navbar which is almost transparent
  autoplayText: ['▶', '❚❚'],
  autoHeight: true,
  prevButton: false,
  nextButton: false
});

let trust = tns({
  items: 1,
  controls: false,
  arrowKeys: false,
  container: '.trust-slider',
  swipeAngle: false,
  speed: 1000,
  mouseDrag: true,
  slideBy: 1,
  gutter: 10,
  autoplay: true,
  autoplayHoverPause: false,
  preventActionWhenRunning: true,
  autoplayTimeout: 1500,
  autoplayButtonOutput: false, // hides autoplay buttons
  nav: false, //hides navbar which is almost transparent
  autoplayText: ['▶', '❚❚'],
  autoHeight: true,
  prevButton: false,
  nextButton: false
});
