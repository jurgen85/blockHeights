/* 
 * Description: Calculate heighest element amongst similar elements with given class or id and adapt css height for all elements.
 * Below breakpoint 768px all heights become 'auto'.
 * Author: Jurgen de Vries
 * Version: 1.0
 * Company: Fundament All Media
 * 
 * */

(function($) {
	$.fn.blockHeights = function(settings) {
		var config = {
			'breakPoint': 768	
		};
		if (settings) {
			$.extend(config, settings);
		}
		
		var maxHeight = 0;
		if($(window).width() >= config.breakPoint) {
			
			this.each(function(index) {
				var currentHeight = $(this).outerHeight();
				if (currentHeight > maxHeight) {
					maxHeight = currentHeight; 
				}	
			});
		} else {
			maxHeight = 'auto';
		}		
		this.each(function(index) {
			$(this).css('height', maxHeight);
		});
	};
}(jQuery));