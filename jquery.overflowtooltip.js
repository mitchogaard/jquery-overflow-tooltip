(function ($) {
	var methods = {
		"init": function () {
			return this.each(function () {
				var obj = $(this);
				var element = obj.get(0);

				if (element.clientWidth < element.scrollWidth) {
					obj.attr('title', obj.text());
				}
			});
		}
	};

	$.fn.overflowTooltip = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.overflowTooltip');
		}
	};
})(jQuery);
