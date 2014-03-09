function SwatchView(model) {
	this.model = model;
	this.init();
}

SwatchView.prototype = {
	init: function() {
		this.createElement();
	},

	createElement: function() {
		$.get('assets/templates/swatch.template', _.bind(function(data) {
			this.el =  _.template(data, this.model);
			this.$el = $(this.el);
			appEvents.emit('swatchReady');
		}, this));
	},

	render: function() {
		if (this.$el.css('background-color') === "rgb(255, 255, 255)") {
			this.$el.addClass('eraser');
		}
		// if (this.$el.css('background-color'))
		$('.colour-selector').append(this.$el);
		appEvents.emit('swatchRendered');
	},

	update: function() {
		if(this.model.selected) {
			this.$el.addClass('swatch-selected');
		} else {
			this.$el.removeClass('swatch-selected');
		}
		this.$el.css('background-color', this.model.colour);
	}
}