$(document).ready(function(){
    let showMenu = false;
    var totalHeight = 0;
    const style = $('head link')[0];
    dark = false;

    if (localStorage.getItem('darkMode') === null){
        localStorage.setItem('darkMode', 'false');
    } 

    if (localStorage.getItem('darkMode') === 'true'){
        style.href = '/styles/dark.css';
    } else if (localStorage.getItem('darkMode') === 'false') {
        style.href = '/styles/style.css';
    }

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

        if (!dark){
            dark = true;
            localStorage.setItem('darkMode', 'true');
            style.href = '/styles/dark.css';
        }else{
            localStorage.setItem('darkMode', 'false');
            dark = false;
            style.href = '/styles/style.css';
        }
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