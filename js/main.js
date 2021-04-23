$(document).ready(function () {
    new WOW().init();
    
    $(".burger-nav").on("click", function(){
        $(".container nav ul").toggleClass("open");
    });
    
    //    Iphone in header sliding up
    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated slideInUp');
    }, {
        offset: '70%'
    });
    
    //    Iphone turning on once button is pushed (see below for button push)
    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    //    Iphone button pressing down then up again.
    $('.iphone-btn').delay(1500).animate({
        bottom: '+=-3'
    }, 300);
    $('.iphone-btn').delay(300).animate({
        top: '+=-3'
    }, 100);
    
    //    Smooth Scrolling
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
        return false;
    });
});