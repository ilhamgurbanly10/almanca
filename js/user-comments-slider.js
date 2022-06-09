
flashSlider('.comments-slider', {
	gap: 20,
	slideToShow: 1,
	arrows: false,
	width: "100%",
	dots: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slideToShow: 2,
			}
		}
	]
});
