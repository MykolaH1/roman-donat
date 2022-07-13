const $pagnation = $('.pagination');
$(".reviews__container").slick({




    

 
  // normal options...
  infinite: true,
  slidesToShow: 3,
slidesToScroll: 1,
  arrows: false,
asNavFor: '.text__container' ,
  // dots: false,
  centerMode: true,
  centerPadding: '0',
  focusOnSelect: true,
  variableWidth: true,
  // the magic
  responsive: [{
 
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
 
    }, {
 
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
    
      }
 
    }, {
 
      breakpoint: 767,
    settings: {
        slidesToShow: 1,
    
      }
 
    }]
});
$(".text__container").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  asNavFor: '.reviews__container'
});

