var rellax = new Rellax(".rellax", {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

/* Rellax.js is a parallax library that uses vanilla Javascript */

$(window).scroll(function() {
    var tScroll = $(this).scrollTop();
    if (tScroll > $('.col-sm').offset().top) {
        $('.col-sm img').each(function() {
            $('.col-sm img').addClass('animated zoomIn');
        });
    }
});