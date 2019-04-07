/**
 * @file
 * Behaviors for the sgh theme.
 */

(function ($, _, Drupal, drupalSettings) {
    'use strict';

    Drupal.behaviors.sgh = {
        attach: function (context) {
            
            if ($(window).width() > 460) {
                var number = $('body .hero_slider #block-slidertextoverlay p').html();
                $('body .hero_slider #block-slidertextoverlay p').wrap('<a href="tel:' + number + '">' + number + '</a>');
            }
            
            // Vartheme subtheme JavaScript behaviors goes here.
            $('.path-frontpage #block-views-block-events-block-1 .field--name-field-date .field--item:last-child , #views-bootstrap-events-block-2 .field--name-field-date .field--item:last-child , .page-node-type-events .field--name-field-date .field--item:last-child , .view-offers-promotions .field--name-field-date .field--item:last-child , .page-node-type-offers-promotions .field--name-field-date .field--item:last-child , .page-node-type-branches #views-bootstrap-events-block-3 .field--name-field-date .field--item:last-child', context).prepend('<div class="field--label">End date</div>');
            $('.path-frontpage #block-views-block-events-block-1 .field--name-field-date .field--item:first-child , #views-bootstrap-events-block-2 .field--name-field-date .field--item:first-child , .page-node-type-events .field--name-field-date .field--item:first-child , .view-offers-promotions .field--name-field-date .field--item:first-child , .page-node-type-offers-promotions .field--name-field-date .field--item:first-child , .page-node-type-branches #views-bootstrap-events-block-3 .field--name-field-date .field--item:first-child', context).prepend('<div class="field--label">Start date</div>');

            if ($(window).width() > 992) {
                var left_height = $('.region-front-content-2-left', context).height();
                $('.path-frontpage #block-views-block-events-block-1', context).css('height', left_height);
            }


            $('#block-exposedformsearchpage-1-2', context).append('<i class="trigger-search fa fa-search"></i>');
            $('#block-exposedformsearchpage-1-2 .trigger-search', context).addClass('closed');
            $('#block-exposedformsearchpage-1-2 .trigger-search', context).click(function () {
                if ($(this).hasClass('closed')) {
                    //open search
                    $('#block-exposedformsearchpage-1-2 .trigger-search').removeClass('closed');
                    $('#block-exposedformsearchpage-1-2 .trigger-search').addClass('opened');

                    $('#block-exposedformsearchpage-1-2 .trigger-search').removeClass('fa-search');
                    $('#block-exposedformsearchpage-1-2 .trigger-search').addClass('fa-times');

                    $('#block-exposedformsearchpage-1-2 form').show();
                } else {
                    $('#block-exposedformsearchpage-1-2 .trigger-search').addClass('closed');
                    $('#block-exposedformsearchpage-1-2 .trigger-search').removeClass('opened');

                    $('#block-exposedformsearchpage-1-2 .trigger-search').removeClass('fa-times');
                    $('#block-exposedformsearchpage-1-2 .trigger-search').addClass('fa-search');

                    $('#block-exposedformsearchpage-1-2 form').hide();
                }
            });

            //slickslider pager (numbers) in surveys node
            if ($('body').hasClass('path-frontpage')) {
                var total_slides = $(".total-slides").html();
                $('.node--type-varbase-heroslider-media , .node--type-branch-slider', context).append('<div class="counter"><span class="selected">1</span> / <span class="total">' + total_slides + '</span></div>');
                var slider = $('.hero_slider .slick__slider');
                slider.on('afterChange', function (event, slick, currentSlide) {
                    if (!$('.slick-active').hasClass('slick-cloned')) {
                        var index = $('.slick-active').attr('data-slick-index');
                    } else {
                        var index = $('.slick-active').attr('data-slick-index');
                        index = total_slides - index;
                    }
                    total_slides = $(".hero_slider .slick-track > .slick__slide:not(.slick-cloned)").length;
                    var current_slide = parseInt(index) + 1;
                    $('.counter').html('<span class="selected">' + current_slide + '</span> / <span class="total">' + total_slides + '</span>');
                });
            }
            $('.path-frontpage #block-views-block-partners-block-1 .view-content .slick__slide .field--name-field-media-image ').matchHeight();
            $('.path-doctors .views-view-grid.horizontal article').matchHeight();
            $('.view-offers-promotions .col .wrapper').matchHeight();
            $('.page-node-type-branches #block-views-block-medical-specialties-block-2 .bx-wrapper .bx-viewport .views-row .views-field-name').matchHeight();
            $('.page-node-type-branches #block-views-block-medical-specialties-block-2 .bx-wrapper .bx-viewport .views-row .views-field-field-image').matchHeight();
            $('.page-node-type-branches #block-views-block-medical-specialties-block-2 .bx-wrapper .bx-viewport .views-row .views-field-description__value').matchHeight();
            $('.page-node-type-branches .node--view-mode-header-information').addClass('container');
            //translate
            if ($("body").hasClass("lang-ar")) {
                $(".discount").html("خصم");
                $(".view-offers-promotions .col .bottom .field--name-field-date .field--item:first-child .field--label").html("تاريخ البدء");
                $(".view-offers-promotions .col .bottom .field--name-field-date .field--item:last-child .field--label").html("تاريخ الانتهاء");
                $(".page-node-type-offers-promotions .wrapper .bottom .field--name-field-date .field--item:first-child .field--label").html("تاريخ البدء");
                $(".page-node-type-offers-promotions .wrapper .bottom .field--name-field-date .field--item:last-child .field--label").html("تاريخ الانتهاء");
                $(".field--name-field-date .field--item:first-child .field--label").html("تاريخ البدء");
                $(".field--name-field-date .field--item:last-child .field--label").html("تاريخ الانتهاء");
                $(".page-node-type-events .green-button a").html("تسجيل");
                $('#block-subscribetoournewsletter form input').attr("placeholder", "البريد الإلكتروني");
            }
            $('.path-frontpage #views-exposed-form-find-a-doctor-find-doctor .form-item-name input').attr('placeholder', '');

            $('.quicktabs-wrapper .quicktabs-tabs li a').click(function () {
                $('html,body').animate({
                    scrollTop: $('.quicktabs-main').offset().top
                }, 'slow');
            });
        }

    };

})(window.jQuery, window._, window.Drupal, window.drupalSettings);

jQuery(document).ready(function ($) {
    $('.block-views-blockmedical-specialties-block-2 .view-content').bxSlider({
        slideWidth: 272,
        minSlides: 1,
        maxSlides: 4,
        responsive: true,
        infiniteLoop: true,
        controls: true,
        pager: false,
        speed: 500,
        auto: true,
        autoStart: true,
        slideMargin: 15
    });
});
