$(document).ready(function(){
    let showMenu = false;
    var totalHeight = 0;

    $('.header').each(function(){
        totalHeight += 30 + $(this).outerHeight() ;
    });
    totalHeight += 'px';

    $('.sec-1, .awards-sec-1, .interests-sec-1, .educ-sec-1, .friends-sec-1').css('padding-top', totalHeight);

    $(window).scroll(function(){
        if($(window).scrollTop() <= 0){
            $('.header').removeClass('header-scrolled');
        } else{
           $('.header').addClass('header-scrolled');
        }
    });

    $('.toggle-ball').click(function(){
        $(this).toggleClass('active');
    })  

    $('.btn-bars').click(function(){
        if(!showMenu){
            $(this).addClass('close')
            showMenu = true;
        } else{
            $(this).removeClass('close')
            showMenu = false;
        }
    })
});
