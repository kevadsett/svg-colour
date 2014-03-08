function AppView(model) {
	this.model = model;
	this.init();
}

AppView.prototype = {
	init: function() {
		new SvgView(this.model.svgPath);
	}
}