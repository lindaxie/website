$(function(){
	//var content = $('#content') ;
	//content.find('section:not(.active)').hide();

	 $('.nav-items a').click(function(){
		var $this = $(this);

		// Remove old content (by fading out)
		var active_content = $('section.active');
		//console.log('Hiding: ');
		//console.log(active_content);
		//active_content.removeClass('active').hide();

		// Remove selected from old menus, and add them to new one
		var new_selected_id = $this.attr('href'); // #about
		console.log(new_selected_id);
		var old_selected_menus = $('.nav-items a.selected');
		console.log(old_selected_menus);
		old_selected_menus.removeClass('selected');
		$(new_selected_id).addClass('selected');

		//  Insert new content (by fading in)
		$(new_selected_id).addClass('active').show();

		// Scroll to the correct position

		if (new_selected_id == #contact) {
			setTimeout(function() {
				$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
				$.scrollTo('+=100px', 3000, { axis:'y' });
			}, 2000);
		}
		else if (new_selected_id != #contact) {
			setTimeout(function() {	
				//$.scrollTo(new_selected_id);
				//$.scrollTo('-=80px', 5000, { axis:'y' });
			}, 2000);
		}
	})

	// Load page based on anchor/hash tag
	 if(window.location.hash) {
	 	$('.nav-items a[href="' + window.location.hash + '"]').click();
	}

	//Carousel stuff
	$('#my_carousel').carousel({
		interval: 3000
		,wrap: true
		, pause: "hover"
		,number: 0
	})
});
