$(document).ready(function () {

    $('.carousel').slick({
        arrows: true,
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.events-section .slick-prev'),
        nextArrow: $('.events-section .slick-next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

        console.log(currentSlide);

        var btn = $('.btn-link.__nav-theme[data-nav-id="'+ parseInt(currentSlide) +'"]');

        if(!btn.hasClass('active')) {

            $('.btn-link.__nav-theme').removeClass('active');
            btn.addClass('active');

        }

    });

    $('.btn-link.__nav-theme').on('click', function () {

        var btn = $(this),
            slideId = btn.attr('data-nav-id');

        $('.btn-link.__nav-theme').removeClass('active');

        $('.carousel').slick('slickGoTo', parseInt(slideId));

        btn.addClass('active');

    });

    console.log('loaded');

});