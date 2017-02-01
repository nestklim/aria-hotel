;(function($) {
	"use strict";

	$('.ba-header__slider').slick({

		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000

	});

	$('.ba-rooms__slider').slick({

		prevArrow: '<span class="ba-arrow ba-arrow--prev">Prev Image</span>',
		nextArrow: '<span class="ba-arrow ba-arrow--next">Next Image</span>',
		dots: true,
		slidesToShow: 1.1


	});

	window.onload = function(){

        var hotel = {lat: 39.890744, lng: 18.109619};
        var mapDiv = document.querySelector('.ba-map');

          var hotelMap = new google.maps.Map(mapDiv, {
          zoom: 16,
          center: hotel

        });

          var hotelMarker = new google.maps.Marker({
          position: hotel,
          map: hotelMap,
          animation: google.maps.Animation.DROP,
          icon: 'assets/images/map-pin.png'
        });

        google.maps.event.addDomListener(window, 'resize', function(){

      		var center = hotelMap.getCenter();
      		google.maps.event.trigger(hotelMap, 'resize');
      		hotelMap.setCenter(center);

     	});

	};



})(jQuery);

