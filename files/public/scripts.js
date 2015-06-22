// Theme scripts
jQuery(function($) {
  //Countdown js
  if ($('#countdown') && $('#countdown').countdown) {
    $('#countdown').countdown({
      date: "10 july 2017 12:00:00",
      format: "on"
    },

    function() {
      // callback function
    });
  }

  //Scroll Menu
  function menuToggle()
  {
    var windowWidth = $(window).width();

    if(windowWidth > 767 ){
      $(window).on('scroll', function(){
        if( $(window).scrollTop()>405 ){
          $('.main-nav').addClass('fixed-menu animated slideInDown');
        } else {
          $('.main-nav').removeClass('fixed-menu animated slideInDown');
        }
      });
    }else{

      $('.main-nav').addClass('fixed-menu animated slideInDown');

    }
  }

  menuToggle();
});
