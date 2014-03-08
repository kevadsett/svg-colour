function AppModel(colours) {
	this.colours = colours;
	this.init();
}

AppModel.prototype = {
	init: function() {
		this.setDefaults();
		for(var i = 0; i < this.colours.length; i++) {
			this.swatches.push(new SwatchController(i, this.colours[i]));
		}
	},

	setDefaults: function() {
		this.currentColour = "#FFFFFF";
		this.swatches = [];
		this.readySwatches = this.renderedSwatches = 0;
		this.renderedSVG = false;
		this.svgPath = "assets/svg/image.svg";
	}
}