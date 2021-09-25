function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },

        }
    })
}




$(document).ready(function() {
    $(".consultation select").niceSelect()
    $(".modal1 select").niceSelect()

    $(".faq__item-show").click(function() {
        $(this).toggleClass("faq__item-show--active");
        $(this).siblings(".faq__item-hidden").toggleClass("faq__item-hidden--active");
    })

    $(".service-list__menu-item-show").click(function() {
        $(this).toggleClass("service-list__menu-item-show--active")
        $(this).siblings(".service-list__menu-item-hidden").toggleClass("service-list__menu-item-hidden--active")
    })

    $(".service-list__menu-top").click(function() {
        $(".service-list__menu-burger").toggleClass("service-list__menu-burger--active")
        $(".service-list__menu-items").slideToggle()
    })
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (       )         -' });


    $(".nav__item").hover(onIn, onOut);

    $(".nav__item-show").click(function() {
        if (window.innerWidth < 992) {
            // $(".nav__item-hidden").hide()
            $(this).siblings(".nav__item-hidden").slideToggle()
        }
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".nav").toggleClass("nav--active")
    })

})

function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.children(".nav__item-hidden").addClass("nav__item-hidden--active")
            }

        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-hidden").removeClass("nav__item-hidden--active")
    }
}