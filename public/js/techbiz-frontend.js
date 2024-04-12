Testt()
function Testt () {

(function ($) {
    'use strict';
    $(window).on( 'elementor/frontend/init', function() {

        // Service Box
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizservicebox.default',function($scope) {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };
        });

        // Service Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizserviceslider.default',function($scope) {

            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots:  $slickcarousels.data('slick-dots'),
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" className="slick-prev">авы<i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };

        });
        
        // Testimonial Area Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/techbiztestimonialarea.default',function($scope) {
        
            // Function For Custom Arrow Btn
            $('[data-slick-next]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-next')).slick('slickNext');
                })
            })

            $('[data-slick-prev]').each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault()
                    $($(this).data('slick-prev')).slick('slickPrev');
                })
            })
            
       

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };

        });

        // Project Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizprojectslider.default',function($scope) {

            // Function For Custom Arrow Btn
           $('[data-slick-next]').each(function () {
             $(this).on('click', function (e) {
               e.preventDefault()
               $($(this).data('slick-next')).slick('slickNext');
             })
           })

           $('[data-slick-prev]').each(function () {
             $(this).on('click', function (e) {
               e.preventDefault()
               $($(this).data('slick-prev')).slick('slickPrev');
             })
           })

            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        // Project Filter
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizprojectfilter.default',function($scope) {

            /*----------- 13. Filter ----------*/
            $('.filter-active').imagesLoaded(function () {
                var $filter = '.filter-active',
                    $filterItem = '.filter-item',
                    $filterMenu = '.filter-menu-active';

                if ($($filter).length > 0) {
                    var $grid = $($filter).isotope({
                        itemSelector: $filterItem,
                        filter: '*',
                        masonry: {
                            // use outer width of grid-sizer for columnWidth
                            columnWidth: 1
                        }
                    });
                };
            });

        });
        
        // Project Filter Two
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizprojectfiltertwo.default',function($scope) {

            $('.filter-active, .filter-active2').imagesLoaded(function () {
              var $filter = '.filter-active',
                $filter2 = '.filter-active2',
                $filterItem = '.filter-item',
                $filterMenu = '.filter-menu-active';

              if ($($filter).length > 0) {
                var $grid = $($filter).isotope({
                  itemSelector: $filterItem,
                  filter: '*',
                  masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1
                  }
                });
              };

              if ($($filter2).length > 0) {
                var $grid = $($filter2).isotope({
                  itemSelector: $filterItem,
                  filter: '*',
                  masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: $filterItem
                  }
                });
              };
              
              // Menu Active Class
              $($filterMenu).on('click', 'button', function (event) {
                event.preventDefault();
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                  filter: filterValue
                });
                $(this).addClass('active');
                $(this).siblings('.active').removeClass('active');
              });
            });

        });

        // Pricing Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizpricingtable.default',function($scope) {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };

            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                centermode:true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        // Blog Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizblogpost.default',function($scope) {

            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: true,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        // Faq Area
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizfaqarea.default',function($scope) {

            if ($('[data-bg-src]').length > 0) {
                $('[data-bg-src]').each(function () {
                    var src = $(this).attr('data-bg-src');
                    $(this).css('background-image', 'url(' + src + ')');
                    $(this).removeAttr('data-bg-src').addClass('background-image');
                });
            };

        });

        // Team Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/techbizteammember.default',function($scope) {

            let $slickcarousels = $scope.find('.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: $slickcarousels.data('slick-arrows'),
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });

        // Testimonial Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/techbiztestimonialslider.default',function($scope) {

            // Function For Custom Arrow Btn
           $('[data-slick-next]').each(function () {
             $(this).on('click', function (e) {
               e.preventDefault()
               $($(this).data('slick-next')).slick('slickNext');
             })
           })

           $('[data-slick-prev]').each(function () {
             $(this).on('click', function (e) {
               e.preventDefault()
               $($(this).data('slick-prev')).slick('slickPrev');
             })
           })


            let $slickcarousels = $scope.find('.style-one.vs-carousel');
            $slickcarousels.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: $slickcarousels.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarousels.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });
            
            let $slickcarouselsfour = $scope.find('.style-four.vs-carousel');
            $slickcarouselsfour.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: $slickcarouselsfour.data('slick-autoplay'),
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarouselsfour.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

            let $img_box6 = $scope.find('.img-box6.vs-carousel');
            $img_box6.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: false,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: ".testi-text-slide, .testi-author-slide"
            });

            let $testitextslide = $scope.find('.testi-text-slide.vs-carousel');
            $testitextslide.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: false,
                autoplaySpeed: 6000,
                fade: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: ".img-box6, .testi-author-slide"
            });

            let $testiauthorslide = $scope.find('.testi-author-slide.vs-carousel');
            $testiauthorslide.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: false,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 1,
                asNavFor: ".testi-text-slide, .img-box6",
                focusOnSelect: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

            let $slickcarouselstwo = $scope.find('.testi-style2-slide.vs-carousel');
            $slickcarouselstwo.not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                arrows: false,
                prevArrow: '<button type="button" className="slick-prev"><i className="far fa-arrow-left"></i></button>',
                nextArrow: '<button type="button" className="slick-next"><i className="far fa-arrow-right"></i></button>',
                autoplay: false,
                autoplaySpeed: 6000,
                fade: false,
                speed: 1000,
                slidesToShow: $slickcarouselstwo.data('slide-to-show'),
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                ]
            });

        });


    });
}(jQuery))};