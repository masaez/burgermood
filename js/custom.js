
$(document).ready(function () {
    /***************** Navbar-Collapse ******************/

    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    /***************** Page Scroll ******************/

    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /***************** Scroll Spy ******************/

    $('body').scrollspy({
        target: '.navbar-fixed-top',
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    /***************** Owl Carousel ******************/

    $("#owl-hero").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

    });


    /***************** Full Width Slide ******************/

    var slideHeight = $(window).height();

    $('#owl-hero .item').css('height', slideHeight);

    $(window).resize(function () {
        $('#owl-hero .item').css('height', slideHeight);
    });
    /***************** Owl Carousel Testimonials ******************/

    $("#owl-testi").owlCarousel({

        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "backSlide",
        autoPlay: true

    });

    /***************** Wow.js ******************/
    
    new WOW().init();
    
    /***************** Preloader ******************/
    
    var preloader = $('.preloader');
    $(window).load(function () {
        preloader.remove();
    });
})