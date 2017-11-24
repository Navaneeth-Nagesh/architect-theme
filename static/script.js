/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';

$(document).ready(function () {
    $('.contact-header').on('click', function (ev) {
        $('.contact-container').slideToggle();
    });

});

//building

var property = $('.property');

var toggleClass = function(el) {
  el.toggleClass('build');
};

property.on('click', function() {
  toggleClass(property);
});

setTimeout(function() { toggleClass(property) }, 250);

// carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }

});
