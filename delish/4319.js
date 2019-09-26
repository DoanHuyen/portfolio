$(function () {
    // $('.menu').click(function (e) { 
    //     e.preventDefault();
    //     $('.menu').removeClass('active');
    //     $(this).addClass('active');
        
    //     $('html').animate({ 
    //         //chuyen dong gi thi go o day
    //         scrollTop: $('.khoi2').offset().top
    //     }, 1000);

       
    //     console.log( $('.khoi2').offset().top);

    // });


    $('.menu1').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi1').offset().top
        }, 1000);
        
    });

    $('.menu2').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi2').offset().top
        }, 1000);
        
    });

    $('.menu3').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi3').offset().top
        }, 1000);
        
    });

    $('.menu4').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi4').offset().top
        }, 1000);
        
    });

    $('.menu5').click(function (e) { 
        e.preventDefault();
        $('.menu').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi5').offset().top
        }, 1000);
        
    });

    $(window).scroll(function () { 
        // console.log('cuon duoc roi')
       
        console.log($('.khoi4').offset().top);
       
        // console.log(window.pageYOffset);

        // TH1: Nếu VT của window > VT của menu5(award) =>active ở menu5
        if ( window.pageYOffset>=$('.khoi5').offset().top-20) {
            $('.menu').removeClass('active');
            $('.menu5').addClass('active');
            console.log('Sang khoi 5 roi');
         //     Nếu VT của window < VT của menu5, thì kiểm tra xem VT window có > VT menu4 hay không, nếu lớn hơn thì active ở menu4   
        } else if (window.pageYOffset>=$('.khoi4').offset().top-20 ) {
            $('.menu').removeClass('active');
            $('.menu4').addClass('active');
            console.log('dang lon hon vi chi cua khoi 4 roi day')
        
        } else if (window.pageYOffset>=$('.khoi3').offset().top-20 ) {
            $('.menu').removeClass('active');
            $('.menu3').addClass('active');
            console.log('dang o khoi 3');   

        } else if (window.pageYOffset>=$('.khoi2').offset().top-20 ) {
            $('.menu').removeClass('active');
            $('.menu2').addClass('active');
            console.log('dang o khoi 2');     
        } else {
            $('.menu').removeClass('active');
            $('.menu1').addClass('active');
            console.log('dang o khoi 1');   
        }

    });

    

});




    // $('.menu').click(function (e) { 
    //     e.preventDefault();


    //     $('.menu').removeClass('active');
    //     $(this).addClass('active');

    //     // $('html').animate({
    //     //     //chuyển động gì thì gõ vào đây
    //     //     scrollTop: $('.khoi2').offset().top
    //     // }, 1000 );

    //     // console.log($('.khoi2').offset().top);
   
    // });




    // CUỘN CHUỘT THÌ MENU SÁNG LÊN

    // jqScroll: xử lí tương tác cuộn chuột
    // selector để window
    // console.log('cuon duoc roi') --> dùng để kiểm tra
    // $('.khoi1').offset().top --> hàm dùng để tính vị trí của khối 1
    // window.pageYOffset: hàm để cho biết vị trí mình đg cuộn chuột tới, tức là vị trí của window

