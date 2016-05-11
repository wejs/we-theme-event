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

// Google Map Customization
$(function(){

  var mapTag = document.getElementById('event-home-gmap');
  if (!mapTag) return;

  var latitude = Number(mapTag.dataset.latitude);
  var longitude = Number(mapTag.dataset.longitude);
  var title = mapTag.dataset.title;

  if (!latitude && !longitude) {
    var t = document.getElementById('event-home-gmap');
    t.parentNode.removeChild(t);
    return;
  }

  var customMapType = new google.maps.StyledMapType([
    {
      "featureType": "road",
      "stylers": [
      { "color": "#b4b4b4" }
      ]
    },{
      "featureType": "water",
      "stylers": [
      { "color": "#d8d8d8" }
      ]
    },{
      "featureType": "landscape",
      "stylers": [
      { "color": "#f1f1f1" }
      ]
    },{
      "elementType": "labels.text.fill",
      "stylers": [
      { "color": "#000000" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
      { "color": "#d9d9d9" }
      ]
    },{
      "elementType": "labels.text",
      "stylers": [
        { "saturation": 1 },
        { "weight": 0.1 },
        { "color": "#000000" }
      ]
    }
  ], {
    name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(mapTag, {
    center: {  lat: latitude, lng: longitude },
    scrollwheel:false,
    zoom: 14,
    zoomControl : false,
    panControl : false,
    streetViewControl : false,
    mapTypeControl: false,
    overviewMapControl: false,
    clickable: false
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

  var infowindow = new google.maps.InfoWindow();

  var marker = new google.maps.Marker({
    map: map,
    position: { lat: latitude, lng: longitude }
  });
  if (title) {
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(title);
      infowindow.open(map, this);
    });
  }
});