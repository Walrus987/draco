$(document).ready(function(){
    
    
    $(window).scroll(function() {    
        /*Navbar*/
        var scroll = $(window).scrollTop();
        if (scroll >= 100){
            $("#header .container").css("padding-top", "10px");
            $("#header .container").css("padding-bottom", "10px");
            $(".navbar-inverse").css("background", "rgba(0, 0, 0, 0.7)");
            } 
        else {
            $("#header .container").css("padding-top", "20px");
            $("#header .container").css("padding-bottom", "20px");
            $(".navbar-inverse").css("background", "rgba(0, 0, 0, 0)");
            }
         });
    
    
    /*Owl carousel*/
    $("#slider_img").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 1200,
      singleItem:true,
      autoPlay : 5000, 
      stopOnHover : true,
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
      });
    
    
    /*Set height of every section block to height of screen for large devices*/
    var wind_height = parseInt($(window).height());
    $(".wind-height").css("height", wind_height);
    
    
    /*Fancybox*/
    $(".sect a.fancybox").fancybox(
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
          "centerOnScroll" : false,
          "hideOnContentClick": true});
    
    $(".sect .gallery ").hover(
        function () {
            $(".sect .overlay ").css("display", "block");
        },
        function () {
            $(".sect .overlay ").css("display", "none");
        }
    
    );
    
    
    /*News carousel*/
    if($('#news_carousel').length > 0){
			 var owl = $("#news_carousel");		 
				
			  owl.owlCarousel({
					items : 4,
					autoPlay : true,
					pagination : true
			  });
				
			  // Custom Navigation Events
			  $(".next").click(function(){
					owl.trigger('owl.next');
			  })
			  $(".prev").click(function(){
					owl.trigger('owl.prev');
			  })
		  }
    
    /*Testimonial Owl carousel*/
    $("#testimonial_carousel").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 1200,
      singleItem:true,
      autoPlay : 5000, 
      stopOnHover : true});
    
    
    /*$('#contact_form').formValidation();*/
        
    
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
        $('html, body').animate({scrollTop : 0}, 800);
            return false;
    }); 
    
    
});

/*PORTFOLIO FILTER*/
		
	$(document).ready(function() {
	  $('ul#select a').click(function() {
		$(this).css('outline','none');
		$('ul#select .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
		

		
		if(filterVal == 'all') {
		  $('ul#filter li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
		  $('ul#filter li').each(function() {
							
			if(!$(this).hasClass(filterVal)) {
			  $(this).fadeOut('normal').addClass('hidden');

				
			} else {
			$(this).fadeIn('slow').removeClass('hidden');

			}
		  });
		}
		
		return false;
	  });
	});

 /*
$(document).ready(function(){ 
   
    
    var cls = ["#service", "#gallery", "#team", "#news", "#pricing", "#testimonial", "#contact"]
    
    $(window).bind("resize", function () {
        if ($(this).width() < 992) {
            $("#service").removeClass("wind-height");
            $("#gallery").removeClass("wind-height");
            $("#team").removeClass("wind-height");
            $("#news").removeClass("wind-height");
            $("#pricing").removeClass("wind-height");
            $("#testimonial").removeClass("wind-height");
            $("#contact").removeClass("wind-height");
                    
        } else {
            $("#service").addClass("wind-height");
            $("#gallery").addClass("wind-height");
            $("#team").addClass("wind-height");
            $("#news").addClass("wind-height");
            $("#pricing").addClass("wind-height");
            $("#testimonial").addClass("wind-height");
            $("#contact").addClass("wind-height");
        }
    }).trigger('resize');
    
    
});*/