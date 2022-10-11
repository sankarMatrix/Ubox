function swiperInit(){
  var swiper = new Swiper('.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 2.5,
    slideToClickedSlide:true,
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    }
  });
}
