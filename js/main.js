/*
  Theme Name: Edubin - LMS Education HTML Template
  Author: Humayun Ahmed
  Author URL: https://themeforest.net/user/pixelcurve
  Support: humayunahmed82@gmail.com
  Description: Creative  HTML5 template.
  Version: 1.0
*/


$(function() {
    
    "use strict";

  $(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 100) {
    $(".header").removeClass("scroll-menu");
   }else{
    $(".header").addClass("scroll-menu");
   }
  });
  // wow js
  new WOW().init();

    // slide-active
    $('.slide-active').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: '<i class="fas fa-angle-left"></i>',
        nextArrow: '<i class="fas fa-angle-right"></i>',
        fade: true,
        speed: 1000,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
            }
          }
        ],


      });

    // counterUp
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });

    // slide-active
    $('.testimonial-active').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        dots: true,
      });



    $('#container').imagesLoaded( function() {
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
      });

      $('.portfolio-btn').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
    });


    $('.popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      }
    });



    var map = new GMaps({
      el: '#map',
      lat: 24.903560,
      lng: 91.873610
    });


    //for scroll top 
    $(document).ready(function(){
      $(".scroll-top").click(function(){
        $("html,body").animate({scrollTop:0},1000);
      });
    });

    $(window).scroll(function (){
      if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn();}
      else{
        $(".scroll-top").fadeOut();
      }
    });

    // for menu scroll 
    $('.navbar a').click(function(){
      var hash = this.hash;
      var position = $ (hash) .offset().top;
      $('html').animate({
      scrollTop : position
      },900)
    });



})(jQuery)