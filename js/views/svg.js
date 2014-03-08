function SvgView(path) {
	SvgLoader.load(path, this.onSvgLoaded, this);
}

SvgView.prototype = {
	onSvgLoaded: function(svg) {
		this.render(svg);
	},

	render: function(svg) {
		$('.svg-container').append(svg);
		appEvents.emit('svgRendered');
	}
}