(function($){
	$.fn.placeholder = function(options){
		var defaults = {
			css_class:'placeholder'
		};
		var options = $.extend(defaults,options);

		this.each(function(){
			if($(this).attr('placeholder') !== undefined){
				var phvalue = $(this).attr('placeholder');
				var currvalue = $(this).attr('value');

				if(phvalue == currvalue){
					$(this).addClass(options.css_class);
				}

				if(currvalue == ''){
					$(this).addClass(options.css_class);
					$(this).val(phvalue);
				}

				$(this).focusin(function(){
					var ph = $(this).attr('placeholder');

					if(ph == $(this).val()){
						$(this).val('').removeClass(options.css_class);
					}
				});

				$(this).focusout(function(){
					var ph = $(this).attr('placeholder');

					if($(this).val() == ''){
						$(this).val(ph).addClass(options.css_class);
					}
				});

				$('form').submit(function(){
					$(this).find('input, textarea').each(function(){
						if($(this).val() == $(this).attr('placeholder')){
							$(this).val('');
						}
					});
				});
			}
		});
		return this;
	}
})(jQuery);

$(document).ready(function(){
	if($.browser.msie || $.browser.opera || $.browser.mozilla){
		//($.browser.mozilla && $.browser.version <= '1.9.2.12')
		$('input, textarea').placeholder();
	}
});