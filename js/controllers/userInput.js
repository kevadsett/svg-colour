var UserInput = {
	initialise: function() {
		$('.svg-component').on('mousedown touchstart', function(event) {
			appEvents.emit('fill', event.target);
		});

		$('.reset-button').on('mousedown touchstart', function(event) {
			appEvents.emit('reset');
		});

		$('.colour-swatch').on('mousedown touchstart', function(event) {
			appEvents.emit('colourPressed', $(event.target).index())
		});
	},
}