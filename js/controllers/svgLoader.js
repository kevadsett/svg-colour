var SvgLoader = {
	load: function (path, callback, context) {
		var svgData = $.get(path, function(data) {
			var svg = data.childNodes[0];
			callback.call(context, svg);
		});
	}
}