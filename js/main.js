$(function () {

	// Header Fixed

	var header = $("#header"),
      introH = $("#first").innerHeight(),
			introW = $("#first").innerWidth(),
      scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function(){

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {

    if(scrollOffset >= introH || introW <= 768){
      header.addClass("fixed");
    }else {
      header.removeClass("fixed");
    }
  }



  // Menu Open

	$('.menu-open2').click(function () {

    $(this).toggleClass('active');

		$('.header_menu').toggleClass('show-menu');
	})

	//Nav

  $("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this);
		    blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;


    $("html, body").animate({
			scrollTop: blockOffset
		}, 500);


	});


	//Nav scroll

	// $(window).scroll(function(){
  //        var $sections = $("[data-section]");
	// $sections.each(function(i,el){
  //       var top  = $(el).offset().top-180;
  //       var bottom = top +$(el).height()+100;
  //       var scroll = $(window).scrollTop();
  //       var id = $(el).attr('id');
	// 			var width = $(el).width();
  //   	if( scroll > top && scroll < bottom){
  //           $(".header_menu .nav__link").removeClass("active");
	// 		      $('.nav__link[data-scroll="#'+id+'"]').addClass('active');
	//
  //     }
  //   })
  // });

	$(window).scroll(function(){
				 var $sections = $("[data-section]");

		$sections.each(function(i,el){
			  var width = $(el).width();
							if(width > 768){
								var top  = $(el).offset().top-180;
								var bottom = top +$(el).height()+100;
								var scroll = $(window).scrollTop();
								var id = $(el).attr('id');
								var width = $(el).width();
										  if( scroll > top && scroll < bottom){
													$(".header_menu .nav__link").removeClass("active");
													$('.nav__link[data-scroll="#'+id+'"]').addClass('active');

										  }
					    }else{
								var top  = $(el).offset().top-100;
								var bottom = top +$(el).height()+50;
								var scroll = $(window).scrollTop();
								var id = $(el).attr('id');
								var width = $(el).width();
										  if( scroll > top && scroll < bottom){
													$(".header_menu .nav__link").removeClass("active");
													$('.nav__link[data-scroll="#'+id+'"]').addClass('active');

										  }
							}
		});
 });



   // Questions

   $("[data-collapse]").on("click", function(event){
     event.preventDefault();

		 var $this = $(this);
 		    blockId = $this.data('collapse');

     $this.toggleClass("active");
		 $(blockId).slideToggle();

	 });

  // Our Resources Slider

   $("[data-slider]").slick({
		 infinite: true,
		 fade: false,
		 slidesToShow: 1,
		 slidesToScrolls: 1,

	 });



});
