$(function () {
    
    new WOW ().init();

    $(window).scroll(function () { 
        if (window.pageYOffset>=200) {
            $('header').addClass('thunho');
        } else {
            $('header').removeClass('thunho');
        }

        if (window.pageYOffset >= $('.section4').offset().top-300) {
            $('.menu1').removeClass('active');
            $('.n3').addClass('active');
            
        } else if (window.pageYOffset >= $('.section3').offset().top-400) {
            $('.menu1').removeClass('active');
            $('.n2').addClass('active');

        } else if (window.pageYOffset >= $('.section2').offset().top-300) {
            $('.menu1').removeClass('active');
            $('.n1').addClass('active');

        } else {
            $('.menu1').removeClass('active');
        }
    });


    $('.n1').click(function (e) { 
        e.preventDefault();
        
        $('.menu1').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.section2').offset().top -72 
        },500)
    });

    $('.n2').click(function (e) { 
        e.preventDefault();
        
        $('.menu1').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.section3').offset().top -72
        },500)
    });
    $('.n3').click(function (e) { 
        e.preventDefault();
        
        $('.menu1').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.section4').offset().top -72
        },500)
    });
    

    
});