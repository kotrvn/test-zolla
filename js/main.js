$(document).ready(function() {

   $('#mainTrack').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '#thumb'
    });
    $('#thumb').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '#mainTrack',
      dots: false,
      focusOnSelect: true
    });

    $('.modal-galary').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      infinite: true,
      dots: true,
      initialSlide: 2
    });

    function slideImg() {
      var currentImg = $(".slick-current").find( $("img") ).attr('src');
      $('.slider__bg-img').attr('style', 'background-image: url(' + currentImg + ')' );
      $('.slider__bg-img').removeClass('animated fadeIn');
      $('.slider__bg-img').addClass('animated fadeIn');
     };

    slideImg();

    $('#mainTrack').on('afterChange', function( ){
      $('.slider__bg-img').removeClass('animated fadeIn');
      $('.slider__bg-img').addClass('fast');
      setTimeout(slideImg, 80);
    });

    function animate() {
      var animItem = $('.thumbnails__item');

      animItem.addClass('animated fadeIn');
    };

    animate();

});
