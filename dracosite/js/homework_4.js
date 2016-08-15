$(document).ready(function(){
    
    var wind_height = window.innerHeight;
    $(".pull-right").css("height", wind_height);
    
    /*Make the top scroller*/
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
            return false;
    }); 
    
    
    
});