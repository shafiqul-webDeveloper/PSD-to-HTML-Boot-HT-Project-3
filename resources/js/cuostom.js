$(document).ready(function(){ 
	
	
//===== Our Team Section Slick Slider

	$('.job_slider').slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 1,
		speed:1500,
		arrows: false,
		dots: true,         
		autoplay: true,
		autoplaySpeed:1000,
		cssEase:"linear",
		
		responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});	
	


  	
	
	
//===== Sticky smoth Manu JS	

   $(window).scroll(function(){
	
    var scrolling = $(this).scrollTop();
    var sticky = $('.my_sticky_top');     
	
     if(scrolling >=60){
            sticky.addClass('sticky_nav_bg');   
         }
         else{
            sticky.removeClass('sticky_nav_bg');
         }
});


//===== Active Manu JS
	
$('body').scrollspy({target: ".navbar", offset: 50});
	
	
//===== Sticky Smoth Scholing Manu JS

$("#myNavbar a").on('click', function (event) {

	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function () {
			window.location.hash = hash;
		});
	}
});
	
	
// NiceScroll for color scrollbar:	
	
$("body").niceScroll({
  cursorcolor:"#3561aa",
  background: "#4777c7",
  cursorwidth:"12px",
  cursorminheight: 250, 
  zindex: 9999,
  autohidemode: false,
  cursorborder: "",
  cursorborderradius: "",
  
});
	
	
	
}); //End Of jQuery Default























