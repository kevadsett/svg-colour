function SwatchController(index, colour) {
	this.model = new SwatchModel(index, colour);
	this.view = new SwatchView(this.model);
	this.init();
}

SwatchController.prototype = {
	init: function() {
		appEvents.on('colourPressed', this.onColourPressed, this);
	},

	onColourPressed: function(colourIndex) {
		if(this.model.index === colourIndex) {
			this.model.selected = true;
			appEvents.emit('colourUpdated', this.model.colour);
		} else {
			this.model.selected = false;
		}
		this.view.update();
	}
}