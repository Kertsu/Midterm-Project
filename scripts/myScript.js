$(document).ready(function(){
    let showMenu = false;
    var totalHeight = 0;
    $('.header').each(function(){
        totalHeight += 30 + $(this).outerHeight() ;
    });
    totalHeight += 'px';

    $('.sec-1, .awards-sec-1, .interests-sec-1, .educ-sec-1, .friends-sec-1').css('padding-top', totalHeight);

    $(window).scroll(function(){
        if($(window).scrollTop() >= 1000){
            $('#to-Top').addClass('button-scrolled');
        } else{
            $('#to-Top').removeClass('button-scrolled');
        }
    });


    $(window).scroll(function(){
        if($(window).scrollTop() <= 0){
            $('.header').removeClass('header-scrolled');
        } else{
           $('.header').addClass('header-scrolled');
        }
    });


    $('.toggle-ball, .mobile-toggle-ball').click(function(){
        $('.toggle-ball').toggleClass('active');
        $('.mobile-toggle-ball').toggleClass('active');
        $('body, #header, .nav-wide li a, .menu-div, .mobile-nav-a, .btn-line, img, .banner, .offers-wrapper > div, .educ-sec-2 ul li .content, .educ-sec-2 ul li .content p, .testimonies-content h4, .testimonies-content p:nth-child(3)').toggleClass('dark');
        
    });

    $('.btn-bars').click(function(){
        if(!showMenu){
            $(this).addClass('close')
            $('.menu-div').addClass('animate');
            $('body').css('overflow-y','hidden');
            $('.mobile-body-dim').css('display', 'block');
            showMenu = true;
        } else{
            $(this).removeClass('close')
            $('.menu-div').removeClass('animate');
            $('body').css('overflow-y','visible');
            $('.mobile-body-dim').css('display', 'none');
            showMenu = false;
        }
    })

    $('.mobile-body-dim').click(function(){
        $('.btn-bars').removeClass('close');
        $('.menu-div').removeClass('animate');
        $('body').css('overflow-y','visible');
        $('.mobile-body-dim').css('display', 'none');
        showMenu = false;
    })

});