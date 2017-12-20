$(document).ready(function () {

    // top message
    // -----------------------------------------
    $('.top_message .close-this').click(function (event) {
        event.preventDefault();
        $('.top_message').fadeOut(400);
    });


    // mobile-nav
    // -----------------------------------------
    $('#nav-button').click(function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('#mobile-search').stop().fadeOut(0);
            $('#mobile-nav').slideDown(400);
        } else {
            $(this).removeClass('active');
            $('#mobile-nav').slideUp(400);
        }
    });

    $('#mobile-nav .dropper').click(function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            $('#mobile-nav .dropper').removeClass('active');
            $('#mobile-nav ul ul').slideUp(400);
            $(this).addClass('active');
            $(this).closest('li').addClass('open');
            $(this).closest('li').find('ul').slideDown(400);
        } else {
            $(this).removeClass('active');
            $(this).closest('li').removeClass('open');
            $(this).closest('li').find('ul').slideUp(400);
        }
    });


    // mobile-search
    // -----------------------------------------
    $('#search-button').click(function (event) {
        event.preventDefault();
        $('#mobile-search').stop().fadeIn(400);
        $('#mobile-nav').slideUp(0);
        $('#nav-button').removeClass('active');
    });

    $('#close-search').click(function (event) {
        event.preventDefault();
        $('#mobile-search').stop().fadeOut(400);
    });


    // home slider
    // -----------------------------------------
    $('#home_slider').slick({
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        dots: true
    });




});