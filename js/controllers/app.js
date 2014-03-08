function App(colours) {
	this.listenToEvents();
	this.model = new AppModel(colours);
	new AppView(this.model);
}

App.prototype = {
	listenToEvents: function() {
		appEvents.on('swatchReady', this.onSwatchReady, this);
		appEvents.on('swatchRendered', this.onSwatchRendered, this);
		appEvents.on('svgRendered', this.onSvgRendered, this);
		appEvents.on('colourUpdated', this.onColourUpdated, this);
		appEvents.on('fill', this.onFill, this);
		appEvents.on('reset', this.onReset, this);
	},

	onSwatchReady: function() {
		this.model.readySwatches++;
		this.checkAllSwatchesReady();
	},

	checkAllSwatchesReady: function() {
		if(this.areAllSwatchesReady()) {
			this.renderSwatches();
		}
	},

	areAllSwatchesReady: function() {
		return this.model.readySwatches === this.model.swatches.length;
	},

	renderSwatches: function() {
		for(var i = 0; i < this.model.swatches.length; i++) {
			this.model.swatches[i].view.render();
		}
	},

	onSwatchRendered: function() {
		this.model.renderedSwatches++;
		this.checkAppReady();
	},

	onSvgRendered: function() {
		this.model.renderedSVG = true;
		this.checkAppReady();
	},

	checkAppReady: function() {
		if(this.isAppReady()) {
			UserInput.initialise();
		}
	},

	isAppReady: function() {
		return (this.model.renderedSwatches === this.model.swatches.length) && this.model.renderedSVG;
	},

	onColourUpdated: function(newColour) {
		this.model.currentColour = newColour;
	},

	onFill: function(target) {
		$(target).attr("fill", this.model.currentColour);
	},

	onReset: function() {
		$('.svg-component').attr("fill", "#FFFFFF");
	}
}