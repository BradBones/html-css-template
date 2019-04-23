$(document).ready(function() {
    
    /* For the sticky navigation  - Using waypoint plugin */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    
    
    /* Scroll on buttons */
    
    
    
    /* Navigation scroll */
    
    
    
    /* Animations on scroll */
    
    
    
    /* Mobile navigation */
    
});