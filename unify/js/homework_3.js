

/*jQuery(function($){*/
	$(document).ready(function(){
		
        
        
        /*nav #menu for small devices*/
        
        $('#menu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
 
	$('#menu>ul>li.has-sub>a').append('<span class="holder"></span>');
 
	(function getColor() {
		var r, g, b;
		var textColor = $('#menu').css('color');
		textColor = textColor.slice(4);
		r = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		g = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		b = textColor.slice(0, textColor.indexOf(')'));
		var l = rgbToHsl(r, g, b);
		if (l > 0.7) {
			$('#menu>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
			$('#menu>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)');
		}
		else
		{
			$('#menu>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
			$('#menu>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)');
		}
	})();
 
	function rgbToHsl(r, g, b) {
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;
 
	    if(max == min){
	        h = s = 0;
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return l;
	}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        $(window).load(function(){ // On load
		    
            $('#trailer').css({'height':(($(window).height()))+'px'});
	       });
	    $(window).resize(function(){ // On resize
		       
               $('#trailer').css({'height':(($(window).height()))+'px'});
	       });
        
        
        /* This is basic - uses default settings */
	
        /*Fancybox*/
        $("a.fancybox").fancybox();
        $("a.fancybox").fancybox({
            'hideOnContentClick': true
        });
        $("a.fancybox").fancybox(
			{						
              "padding" : 20,
              "imageScale" : false, 
			  "zoomOpacity" : false,
			  "zoomSpeedIn" : 1000,	
			  "zoomSpeedOut" : 1000,	
			  "zoomSpeedChange" : 1000, 
			  "frameWidth" : 700,	 
			  "frameHeight" : 600, 
			  "overlayShow" : true, 
			  "overlayOpacity" : 0.8,	
			"centerOnScroll" : false});

        
        /*
        var wind_height = parseInt($(window).height());
        var navbar_height = parseInt($(".navbar").css("height"));
        
         
        $(".content-sm").css(
              {"height":
                  (wind_height - navbar_height).toString()
                          +"px"}     );
        $(".content-sm-1").css(
              {"height":
                  (wind_height - navbar_height).toString()
                          +"px"}     );*/
              
        
        /*new WOW().init();*/
        
        /*Make the nontransparent navigation*/
        $(".nav a").hover(function(){
            $(".container-fluid").css("opacity", "1");
                    });
        
        
        /*IT WAS TRANSPARENT NAV AT THE TOP, BUTH SMTH GOES WRONG.. */
        /*
        if ($(window).width() <1100) {
            alert("jes");
            $(".container-fluid").css("opacity", "1"); 
        }
        else{
            $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 100){
                $(".container-fluid").css("opacity", "1");
                } 
            else {
                $(".container-fluid").css("opacity", "0.7");
            }
             });
        }*/
        
            
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
    
      
/*jQuery);*/