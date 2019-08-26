//Skrolowanie menu

$('.home').on('click', function() {
    $('body, html').animate({
        scrollTop: $('.wrapper').offset().top - 100
    }, 1000)
})

$('.about').on('click', function() {
    $('body, html').animate({
        scrollTop: $('.abouthotel').offset().top - 100
    }, 1000)
})

$('.offer').on('click', function() {
    $('body, html').animate({
        scrollTop: $('.h1Room').offset().top - 50
    }, 1000)
})

$('.gallerys').on('click', function() {
    $('body, html').animate({
        scrollTop: $('.gallery').offset().top - 100
    }, 1000)
})

$('.contacts').on('click', function() {
    $('body, html').animate({
        scrollTop: $('.abouthotel.contact').offset().top
    }, 1000)
})