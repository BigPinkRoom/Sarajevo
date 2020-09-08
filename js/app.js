$(document).ready(function() {
    let $header = $('#header'),
        $intro = $('#intro');
    
    // toggle burger
    $('#nav-toggle').on('click', function() {
        $header.toggleClass('active');
    })

    // hide burger on click
    $('#header .nav__link').on('click', function() {
        $(this).closest(".active").removeClass("active");
    })

    // fix header
    checkScroll(); // check scroll, without scroll

    $(window).on('scroll', function() {
        checkScroll()
    })

    function checkScroll() {
        if ( $(window).scrollTop() >= $intro.height() ) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    }

    // soft scroll
    $('#header .nav__link').on('click', function(event) {
        event.preventDefault()

        let $id = '#' + $(this).attr('data-scroll');

        $('body, html').animate({
            scrollTop: $($id).offset().top,
        }, 1000)
        
    })

    // gallery filter
    $('#works .gallery__button').on('click', function() {
        let category = $(this).text();
        category = category.split(' ').join('_');

        if (category === 'All') {
            $('#works img[data-category').parent().show();
            return
        }

        $('#works img[data-category').parent().show();
        $('#works img[data-category]').not('img[data-category='+ category + ']').parent().hide();
    })
})
