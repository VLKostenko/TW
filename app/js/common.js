const site = {
    onload: document.addEventListener('DOMContentLoaded', function () {
        site.init();
    }),
    init: function () {
        this.menu();
        this.anchor();
        this.sticky();
        if ($('body').is('.home')) {
            this.slider();
            this.tabs();
            this.inview();
            if ($(window).width() <= 989) {
                site.animationsMobile();
            } else {
                site.animationsDesktop();
            }
        }
        if ($('body').is('.faq-page')) {
            site.sidebar();
        }
    },
    menu: function () {
        $(document).on('click', '#navbarBurger', function () {
            $(this).toggleClass('navbar-burger__opened');
            $('.header').toggleClass('header__opened-menu');
            $('.navbar-menu').slideToggle();
        })
    },
    anchor: function () {
        $(document).on('click', '.link__anchore, .header_anchors_item_link', function (e) {
            e.preventDefault();
            let target = $(this).attr('href');
            $('html,body').animate({scrollTop: $(target).offset().top - 130}, 1000);
        });        
    },
    inview: function () {
        $('#arrangers').on('inview', function (event, isInView) {
            if (isInView) {
                $('.header_anchors_item:nth-child(1)').addClass('active');
            } else {
                $('.header_anchors_item:nth-child(1)').removeClass('active');
            }
        });
        $('#buyingCryptoBaskets').on('inview', function (event, isInView) {
            if (isInView) {
                $('.header_anchors_item:nth-child(2)').addClass('active');
            } else {
                $('.header_anchors_item:nth-child(2)').removeClass('active');
            }
        });
        $('#benefits').on('inview', function (event, isInView) {
            if (isInView) {
                $('.header_anchors_item:nth-child(3)').addClass('active');
            } else {
                $('.header_anchors_item:nth-child(3)').removeClass('active');
            }
        });
    },
    slider: function () {
        if ($(window).width() > 767) {
            console.log($(window).innerWidth());
            $('.slider').slick({
                autoplay:true,
                arrows: false,
                dots: true,
                speed: 1000,
                dotsClass: 'slider_dots',
                fade: true
            });
        }
        $(document).on('click', '.slider .link', function (e) {
            e.preventDefault();
            $('.slider').slick('slickNext');
        });
    },
    tabs: function () {
        $(document).on('click', '.tabs_button', function (e) {
            e.preventDefault();
            let target = $(this).attr('href');
            console.log(target);
            $(this).addClass('tabs_button__active').parent('.column').siblings('div').find('.tabs_button').removeClass('tabs_button__active');
            $(target).addClass('tabs_content__active').siblings('.tabs_content').removeClass('tabs_content__active');
        });
    },
    sticky: function () {
        var oldScroll = 0;
        $(window).on('scroll', function () {
            var st = $(this).scrollTop();
            if ($(this).scrollTop() > 0) {
                $('.header').addClass('header__sticky');
                if(st > oldScroll){
                    $('.header').addClass('header__sticky__hide');
                    $('.header').removeClass('header__sticky__show');
                } else {
                    $('.header').addClass('header__sticky__show');
                    $('.header').removeClass('header__sticky__hide');
                }
            } else {
                $('.header').removeClass('header__sticky');
            }
            oldScroll = st;
        });
    },
    animationsDesktop: function () {
        $(document).ready(function () {
            $('.first-screen_heading, .first-screen_text, .first-screen_form').addClass('first-screen__show');
        });
        $(window).scroll(function () {
            let ws = $(window).scrollTop();

            $('.first-screen_image').css({'transform': 'translateY(' + -ws / 2 + 'px)'});

            // $('.info-section').each(function () {
            //     let offset = $(this).offset().top - $(window).scrollTop() - 120;
            //     let ih = $(this).innerHeight();
            //     let bh = $(this).find('.info-section_text-wrap').innerHeight();
            //     if (offset < 0 && offset + ih - bh - 150 > 0) {
            //         $(this).find('.info-section_text-wrap').css({
            //             'transform': 'translateY(' + -offset + 'px)'
            //         });
            //     }
            // });

            $('.contact_column').each(function () {
                let offset = $('.contact').offset().top - $(window).scrollTop() - ($(window).height() / 2);
                if (offset < 0) {
                    $(this).addClass('contact_column__show');
                } else {
                    $(this).removeClass('contact_column__show');
                }
            });


        });
    },
    animationsMobile: function () {
        $('.first-screen_heading, .first-screen_text, .first-screen_form').addClass('first-screen__show');
        $('.contact_column').addClass('contact_column__show');
    },
    sidebar: function () {
        $(document).on('click', '.faq_list_item', function (e) {
            e.preventDefault();
            let target = $(this).attr('href');
            $('html,body').animate({scrollTop: $(target).offset().top - $('.header').innerHeight() - 30}, 500);
        });
    }
};