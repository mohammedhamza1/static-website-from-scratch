/* global alert console */
$(function () {
    'use strict';
    // adjust header height
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height());
        $('.bxslider').each(function () {
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2)
        });
    });
    // links add active class
    $(".links li a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    // bx slider center
    $('.bxslider').each(function () {
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2)
    });
    // bx slider
    $('.bxslider').bxSlider({
        pager: false
    });
    // smooth scroll
    $(".links li a").click(function () {
        $("html, body").animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
        console.log($('#' + $(this).data('value')));
    });
    // our auto slider code
    // function self invoke
    (function autoSlider() {
        $(".slider .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoSlider();
                });
            }
            else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active");
                    $(".slider div").eq(0).addClass("active").fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    // trigger mixitup
    $(function () {
        $('#container').mixItUp();
    });
    //adjust shuffle links
    $(".shuffle li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    // trigger nicescroll
    $("html").niceScroll({
        cursorcolor: "#1bb698"
        , cursorwidth: "10px"
        , cursorborder: "#1bb698"
    });
});