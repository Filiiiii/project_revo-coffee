jQuery(document).ready(function () {
    jQuery('[data-youtube]').youtube_background();

    // Sidebar
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
//
var carouselEl = $('#owl-one');
carouselEl.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1.2
        },
        1000: {
            items: 2
        },
        1024: {
            items: 2.2
        },
        2000: {
            items: 3.2
        }
    }
});
var carouselEl2 = $('#owl-two');
carouselEl2.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoHeight: true,
    autoplayTimeout: 5000,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1.2
        },
        1000: {
            items: 2
        },
        1024: {
            items: 2.2
        },
        2000: {
            items: 3.2
        }
    }
});
$(".products__carousel-icon").click(function () {
    carouselEl.trigger('next.owl.carousel');
});
$(".products__carousel-icon").click(function () {
    carouselEl2.trigger('next.owl.carousel');
});

var carouselEl3 = $('#owl-three');
carouselEl3.owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    smartSpeed: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2.3
        },
        1000: {
            items: 3.2
        },
        1024: {
            items: 3.2
        }
    }
});
$(".combo__carousel-icon").click(function () {
    carouselEl3.trigger('next.owl.carousel');
});

var headerlogo = document.getElementById('headerlogoimg');
var mobileMenu = document.getElementById('mobile-menu');
var headermobile = document.getElementById('headermobile')
var headerHeight = headerlogo.clientHeight;


// Menu bar
mobileMenu.onclick = function () {
    var isClosed = headerlogo.clientHeight === headerHeight;
    if (isClosed) {
        headerlogo.style.background = 'linear-gradient(to top, #415167 80%, #f9fbff 20% 40%, #f9fbff 40% 60%, #f9fbff 60% 80%, #f9fbff 20%)';
        headerlogo.style.height = 'auto';
    }
    else {
        headerlogo.style.background = 'linear-gradient(to top, #f9fbff 80%, #f9fbff 20%)';
        headerlogo.style.height = null;
    }
}
var menuItems = document.querySelectorAll('.header__mobile li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        headerlogo.style.height = null;
        headerlogo.style.background = 'linear-gradient(to top, #f9fbff 80%, #f9fbff 20%)';
        event.preventDefault()// bỏ qua các mặc định của thẻ a
    }
}