$(document).ready(function($) {
    var windowEl = $(window);
    var windowW = windowEl.width();
    var beforeWidth = $(this).width();

    // обновление страницы при масштабировании
    $(window).resize(function() {
        var afterWidth = $(this).width();
        if (afterWidth != beforeWidth) {
            location.reload()
        }
    })

    // header-fix
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('#header').addClass('header-fix');
        } else {
            $('#header').removeClass('header-fix');
        }
    });

    // slider
    $('.reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            },

        ]
    });

    // плавный переход по якорям
    $(".header-menu a, .header-logo-wrapp, .footer-logo-wrapp").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            headerHeight = $("#header").outerHeight() - 50,
            top = $(id).offset().top - headerHeight;
        $('body,html').animate({ scrollTop: top }, 500);
        $('.header-menu-wrapp').removeClass('open-menu');
        $('.hamburger').removeClass('close-menu');
        return false;
    });

    /*Динамическая подсветка пунктов меню*/

    $(window).scroll(function() {
        $('.magic').each(function() {
            var window_top = $(window).scrollTop();
            var div_top = $(this).offset().top;
            var div_1 = $(this).attr('id');
            if (window_top > div_top - 120) {
                $('.header-menu').find('li').removeClass('menu-active');
                $('.header-menu').find('li[class="' + div_1 + '"]').addClass('menu-active');
            } else {
                $('.header-menu').find('li[class="' + div_1 + '"]').removeClass('menu-active');
            };
        });
    });

    //open and close menu and popup
    $('.hamburger').on('click', function() {
        $('.header-menu-wrapp').addClass('open-menu');
        return false;
    });

    $('.header-menu-cross').on('click', function() {
        $('.header-menu-wrapp').removeClass('open-menu');
        return false;
    });

    $('.header-contact-button, .home-form-btn, .start-btn').on('click', function() {
        $('#popup-wrapp').addClass('open-popup-wrapp');
        $('.popup-form-wrapp').addClass('open-popup');
        return false;
    });

    $('.popup-form-cross').on('click', function() {
        $('#popup-wrapp').removeClass('open-popup-wrapp');
        $('.popup-form-wrapp').removeClass('open-popup');
        return false;
    });

    $('.popup-success-cross').on('click', function() {
        $('#popup-wrapp').removeClass('open-popup-wrapp');
        $('.popup-success').removeClass('popup-success-open');
        return false;
    });

    $('.header-contact-button').on('click', function() {
        $('#form-id').val('header_button');
    });

    $('.home-form-btn').on('click', function() {
        $('#form-id').val('home_button');
    });

    $('.start-btn').on('click', function() {
        $('#form-id').val('start_button');
    });

    if (windowW < 991) {
        $('.services-item-one').removeClass('services-item-open');
        $('.services-item').on('click', function(event) {
            $(this).toggleClass('services-item-open').siblings().removeClass('services-item-open');
        });
    } else {
        // services-item
        $('.services-item').on('click', function(event) {
            $(this).addClass('services-item-open').siblings().removeClass('services-item-open');
        });

        //services-item fix
        $('.services-item-one').on('click', function(event) {
            $('.services-discr-item-one').show().siblings().hide().stop(true, true);
        });
        $('.services-item-two').on('click', function(event) {
            $('.services-discr-item-two').show().siblings().hide().stop(true, true);
        });
        $('.services-item-three').on('click', function(event) {
            $('.services-discr-item-three').show().siblings().hide().stop(true, true);
        });
        $('.services-item-four').on('click', function(event) {
            $('.services-discr-item-four').show().siblings().hide().stop(true, true);
        });

    }

    //map
    initMap();

    function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
            scrollwheel: false,
            zoom: 12,
            styles: [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#b9b8b8"
                    }]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": "100"
                    }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "lightness": "100"
                    }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": "100"
                    }]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "off"
                        },
                        {
                            "lightness": "23"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#faac8a"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text",
                    "stylers": [{
                            "saturation": "13"
                        },
                        {
                            "weight": "5.51"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [{
                            "saturation": "-100"
                        },
                        {
                            "lightness": "18"
                        },
                        {
                            "gamma": "1.37"
                        },
                        {
                            "weight": "1.46"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#ededed"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#f0f0f0"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                            "color": "#ffd900"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        },
                        {
                            "color": "#f0f2f5"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }
            ]
        });

        var geocoder = new google.maps.Geocoder();

        var address = $('#map-address').text();

        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status == 'OK') {
                map.setCenter(results[0].geometry.location);
                /*                var marker = new google.maps.Marker({
                                    map: map,
                                    position: results[0].geometry.location,
                                    title: document.title,
                                    icon: '/img/map-pin.svg'
                                });*/
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    //form

    $('form').submit(function(e) {
        var thisForm = $(this);
        var form = $('form');
        var submitBtn = thisForm.find('input[type="submit"]');
        var data = new FormData(thisForm[0]);
        submitBtn.prop("disabled", true);
        $.ajax({
            url: '/mail.php',
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            type: 'POST',
            success: function(data) {
                thisForm[0].reset();
                form[0].reset();
                submitBtn.prop("disabled", false);
                $('.popup-form-wrapp').removeClass('open-popup');
                $('.popup-success').addClass('popup-success-open');
                $(dataLayer.push({ 'event': 'event_lendos' }));
            },
            error: function() {
                alert('Something went wrong!');
                submitBtn.prop("disabled", false);
            }
        });
        e.preventDefault();
    });

});