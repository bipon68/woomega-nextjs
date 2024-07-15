 jQuery(document).ready(function () {
    'use strict';
    /*** =====================================
    * Mixitup
    * =====================================***/
    $('#mixitup-grid').mixItUp();
    $('.filter-options li:first-child a').addClass("active");

    /*** =====================================
    * 	Mobile Menu
    * =====================================***/
    var menuEl = document.getElementById('ml-menu'),
			mlmenu = new MLMenu(menuEl, {
				// breadcrumbsCtrl : true, // show breadcrumbs
				// initialBreadcrumb : 'all', // initial breadcrumb text
				backCtrl : false, // show back button
				// itemsDelayInterval : 60, // delay between each menu item sliding animation
				onItemClick: loadDummyData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
			});

		// mobile menu toggle
		var openMenuCtrl = document.querySelector('.action--open'),
			closeMenuCtrl = document.querySelector('.action--close');

		openMenuCtrl.addEventListener('click', openMenu);
		closeMenuCtrl.addEventListener('click', closeMenu);

		function openMenu() {
			classie.add(menuEl, 'menu--open');
			closeMenuCtrl.focus();
		}

		function closeMenu() {
			classie.remove(menuEl, 'menu--open');
			openMenuCtrl.focus();
		}

		// simulate grid content loading
		var gridWrapper = document.querySelector('.content');

		function loadDummyData(ev, itemName) {
			ev.preventDefault();

			closeMenu();
			gridWrapper.innerHTML = '';
			classie.add(gridWrapper, 'content--loading');
			setTimeout(function() {
				classie.remove(gridWrapper, 'content--loading');
				gridWrapper.innerHTML = '<ul class="products">' + dummyData[itemName] + '<ul>';
			}, 700);
		}
	// $('.mobile-background-nav .has-submenu').on('click',function(e) {
	//   	e.preventDefault();
	//     var $this = $(this);
	//     if ($this.next().hasClass('menu-show')) {
	//         $this.next().removeClass('menu-show');
	//         $this.next().slideUp(350);
	//     } else {
	//         $this.parent().parent().find('li .dropdown').removeClass('menu-show');
	//         $this.parent().parent().find('li .dropdown').slideUp(350);
	//         $this.next().toggleClass('menu-show');
	//         $this.next().slideToggle(350);
	//     }
	// });
	// $('.mobile-menu-close i').on('click',function(){
	//      $('.mobile-background-nav').removeClass('in');
	// });
    //
	// $('#humbarger-icon').on('click',function(e){
    //     e.preventDefault();
	//      $('.mobile-background-nav').toggleClass('in');
	// });
    /*** =====================================
    * Easy Menu
    * =====================================***/
	(function($) {
	    $.fn.menumaker = function(options) {
	        var cssmenu = $(this),
	            settings = $.extend({
	                format: "dropdown",
	                sticky: false
	            }, options);
	        return this.each(function() {
	            $(this).find(".button").on('click', function() {
	                $(this).toggleClass('menu-opened');
	                var mainmenu = $(this).next('ul');
	                if (mainmenu.hasClass('open')) {
	                    mainmenu.slideToggle().removeClass('open');
	                } else {
	                    mainmenu.slideToggle().addClass('open');
	                    if (settings.format === "dropdown") {
	                        mainmenu.find('ul').show();
	                    }
	                }
	            });
	            cssmenu.find('li ul').parent().addClass('has-sub');
	            var multiTg;
	            multiTg = function() {
	                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
	                cssmenu.find('.submenu-button').on('click', function() {
	                    $(this).toggleClass('submenu-opened');
	                    if ($(this).siblings('ul').hasClass('open')) {
	                        $(this).siblings('ul').removeClass('open').slideToggle();
	                    } else {
	                        $(this).siblings('ul').addClass('open').slideToggle();
	                    }
	                });
	            };
	            if (settings.format === 'multitoggle') multiTg();
	            else cssmenu.addClass('dropdown');
	            if (settings.sticky === true) cssmenu.css('position', 'fixed');
	            var resizeFix;
	            resizeFix = function() {
	                var mediasize = 1000;
	                if ($(window).width() > mediasize) {
	                    cssmenu.find('ul').show();
	                }
	                if ($(window).width() <= mediasize) {
	                    cssmenu.find('ul').hide().removeClass('open');
	                }
	            };
	            resizeFix();
	            return $(window).on('resize', resizeFix);
	        });
	    };
	})(jQuery);
	 $("#easy-menu").menumaker({
        format: "multitoggle"
    });
    /*** =====================================
    * Upcomming Event
    * ==================================== ***/

    /** =====================================
    *   Search Box
    * =====================================**/
   	$('.search-box__link').on('click', function(e) {
        e.preventDefault();
        $('.top-search-input-wrap').addClass('show');
        console.log("button clicked")
   	});
   	$(".top-search-input-wrap .top-search-overlay, .top-search-input-wrap .close-icon").on('click', function(){
        $('.top-search-input-wrap').removeClass('show');
   	});
    /*** =====================================
    * Preloder
    * ==================================== ***/
	$(window).on('load', function(){
        /** ===== Preloder ========**/
	    $('.preloader').fadeOut();
	});
    /*** =====================================
    * Progress
    * ==================================== ***/
    jQuery(window).on('scroll', function() {
      var windowHeight = $(window).height();
      function kalProgress() {
         var progress = $('.progress-rate');
         var len = progress.length;
         for (var i = 0; i < len; i++) {
             var progressId = '#' + progress[i].id;
             var dataValue = $(progressId).attr('data-value');
             $(progressId).css({'width':dataValue+'%'});
         }
      }
      var progressRateClass = $('.progress-item');
       if ((progressRateClass).length) {
           var progressOffset = $(".progress-item").offset().top - windowHeight;
           if ($(window).scrollTop() > progressOffset) {
               kalProgress();
           }
       }
    });
    /*** =====================================
    *   Slick Slider
    * =====================================*/
    var owlSlider = $('.woomega-carousel').not('.slick-initialized');
    owlSlider.each( function() {
       var $carousel = $(this);
       $carousel.not('.slick-initialized').slick({
           dots: JSON.parse($carousel.attr('data-dots')),
           infinite: JSON.parse($carousel.attr('data-autoplay')),
           speed: $carousel.attr('data-speed'),
           arrows:JSON.parse($carousel.attr('data-arrow')),
           slidesToShow: $carousel.attr('data-large-device'),
           slidesToScroll: 1,
           prevArrow: '<div class="slick-arrow-prev base-color"><i class="fa fa-angle-left"></i></div>',
           nextArrow: '<div class="slick-arrow-next base-color"><i class="fa fa-angle-right"></i></div>',
           fade:false,
           responsive: [
             {
               breakpoint: 1999,
               settings: {
                 slidesToShow: $carousel.attr('data-medium-device'),
                 infinite: true,
                 dots: true
               }
             },
             {
               breakpoint: 991,
               settings: {
                 slidesToShow: $carousel.attr('data-small-device'),
               }
             },
             {
               breakpoint: 767,
               settings: {
                 slidesToShow: $carousel.attr('data-extrasmall-device'),
               }
             }
           ]
       });
    });
    $('.woomega-carousel').slick({
      dots: true,
      infinite: false,
      speed: 300,
      arrows:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-arrow-prev base-color"><i class="fa fa-angle-up"></i></div>',
      nextArrow: '<div class="slick-arrow-next base-color"><i class="fa fa-angle-down"></i></div>',
      fade:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    /** =====================================
    *  Back to top
    * ===================================== **/
    $(window).scroll(function(){
        if ($(this).scrollTop()>10) {
            $('#toTop').addClass('backtop-top-show');
        } else {
            $('#toTop').removeClass('backtop-top-show');
        }
    })
    $("#toTop").click(function (e) {
        e.preventDefault();
       $("html, body").animate({scrollTop: 0}, 1000);
    });
    /** =====================================
    *  Wow JS
    * ===================================== **/
    if($('.wow').length){
        var wow=new WOW( {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {}
            , scrollContainer: true // optional scroll container selector, otherwise use window
        }
        );
       wow.init();
    }
    /** =====================================
    *  Lazy load
    * ===================================== **/
    if($('.lazy').length){
        $('.lazy').lazy({
           effect: 'fadeIn',
          // delay:5000,
           beforeLoad: function(element) {
               element.siblings('.loader').addClass("loder-hide");
          },
           onLoad: function(element){
           }
        });
    }
    /*** =====================================* Contact Form submission* =====================================*/
	$(function() {
        $('form#contact').on('submit', function(e) {
            e.preventDefault();
            $.post('post-contact-form.php', $(this).serialize()).done(function(data) {
                $('.comment-form').fadeOut('slow', function() {
                    $('.comment-form').fadeIn('slow').html(data);
                });
            }).fail(function() {
                alert('Failed to submit. Please Try again.');
            });
        });
    });

});
