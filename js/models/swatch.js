function SwatchModel(index, colour) {
	this.index = index;
	this.colour = colour;
	this.init();
}

SwatchModel.prototype = {
	init: function() {
		this.setDefaults();
	},
	setDefaults: function() {
		this.selected = false;
	}
}