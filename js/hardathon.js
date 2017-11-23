/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.move-section-down').bind('click', function(event) {
        $.fn.fullpage.moveSectionDown();
        event.preventDefault();
    });
});

console.log('123');
// fullPage initialization
$(document).ready(function() {
    console.log('321');
    $('#fullpage').fullpage({
        scrollingSpeed: 1000,       
        responsiveWidth: 300,
        responsiveHeight: 400,
        paddingBottom: '10px',
        paddingTop: '10px',
        controlArrowColor: '#424242',
    });

    $('.intro').wallpaper({
        source: {
            mp4: '/video/masthead-teaser.mp4',
            ogg: '/video/masthead-teaser.ogv'
        }
    });
});
