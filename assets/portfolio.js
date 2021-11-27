var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
myCarousel.addEventListener('slid.bs.carousel', function (event) {
    carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
  })