$(function() {
	var slider = $(".slider"),
		slides = slider.find('li'),
		nav = slider.find('nav');

	slides.eq(0).addClass('current');

	nav.children('a').eq(0).addClass('current_dot');

	nav.on('click', 'a', function(event) {
		event.preventDefault();
		$(this).addClass('current_dot').siblings().removeClass('current_dot');
		slides.eq($(this).index()).addClass('current').removeClass('prev').siblings().removeClass('current');
		slides.eq($(this).index()).prevAll().addClass('prev');
		slides.eq($(this).index()).nextAll().removeClass('prev');
	});
	
	function do_slide(){	    
		var slidersLength = $(".slider ul").find('nav a').length;			
			var idx = 0;			
			var self = $(".slider ul").find('nav a').eq(idx);	               				
			innerInterval = setInterval(function(){				
			   $(".slider ul").find('nav a').eq(idx).addClass('current_dot').siblings().removeClass('current_dot');
			   //console.log($(self).index() + ' ' + idx);
			   $(".slider").find('li').eq(idx).addClass('current').removeClass('prev').siblings().removeClass('current');
			   $(".slider").find('li').eq(idx).prevAll().addClass('prev');
			   $(".slider").find('li').eq(idx).nextAll().removeClass('prev');

			   if(idx == slidersLength - 1){					 
					clearInterval(innerInterval);
					console.log(idx+ 'enter');
					do_slide();		
			   }
			   
			 idx++;
			 
		}, 8000);		
    }
	
    do_slide();
	
});
