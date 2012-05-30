/*
* jQuery flip addon
* By: Markus Paeschke
* Version 0.1
* Last Modified: 30.05.2012
*/

(function($){
	$.fn.placeholder = function(options){
		var defaults = {
			css_class : 'jPlaceholder'
		};
		var options = $.extend(defaults,options);

		this.each(function(){
			var $this = $(this);
			if($this.attr('placeholder') !== undefined){
				var phvalue   = $this.attr('placeholder');
				var currvalue = $this.attr('value');

				if(phvalue == currvalue){
					$this.addClass(options.css_class);
				}

				if(currvalue == ''){
					$this
						.addClass(options.css_class)
						.val(phvalue);
				}

				$this.focusin(function(){
					var ph = $this.attr('placeholder');

					if(ph == $this.val()){
						$this.val('').removeClass(options.css_class);
					}
				});

				$this.focusout(function(){
					var ph = $this.attr('placeholder');

					if($this.val() == ''){
						$this.val(ph).addClass(options.css_class);
					}
				});

				$('form').submit(function(){
					$this.find('input, textarea').each(function(){
						if($this.val() == $this.attr('placeholder')){
							$this.val('');
						}
					});
				});
			}
		});
		return this;
	}
})(jQuery);