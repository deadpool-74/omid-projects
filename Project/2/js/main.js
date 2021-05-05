// Document Ready
$(document).ready(function () {
    // Loading
    $('#preLoader').css('display','none');
    $('#content').css('display','block');
    // Add Navbar StyleSheet When Scrolling
    function menuScroll() {
        let navMenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            navMenu.addClass('is-scrolling');
        } else {
            navMenu.removeClass('is-scrolling')
        }
    }
    menuScroll();
    $(window).on('scroll' , menuScroll);

    // Add Navbar Stylesheet When Show (Width < 992)
    let navSide = $('#navbar');
    navSide.on('show.bs.collapse' , function () {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    });
    navSide.on('hide.bs.collapse' , function () {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    });

    // Click event to scroll to Link Items With Animate
    $('#navbar .navbar-nav a').on('click',function (e) {
        let target = $(this.hash);
        if(target.length) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop : target.offset().top
            },1000);
        }
    });

    // Comments Carousel
    let comments = $('#comments');
    if(comments.length && $.fn.owlCarousel) {
        comments.owlCarousel({
            rtl: true,
            nav: true,
            items: 1,
            dots: false,
            navText: ['<span class="ti-angle-right"></span>','<span class="ti-angle-left"></span>']
        })
    }

    // Image Gallery Carousel
    let imgGallery = $('#img-gallery');
    if(imgGallery.length && $.fn.owlCarousel) {
        imgGallery.owlCarousel({
            rtl: true,
            nav: false,
            items: 3,
            center: true,
            dots: true,
            autoplay: true,
            loop: true,
            responsive: {
                0 : {
                    items: 1
                },
                768 : {
                    items: 3
                }
            }
        })
    }

    // Scroll To Top
    // Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#scrollTop').css('display' , 'flex');
        } else {
            $('#scrollTop').css('display' , 'none');
        }
    });
    // Click event to scroll to top
    $('#scrollTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
})