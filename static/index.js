var slider = document.getElementById('slider');
noUiSlider.create(slider, {
	start: [12, 16],
	connect: true,
	tooltips: true,
	behaviour: 'drag-tap',
	step:0.1,
	range: {
		'min': 12,
		'max': 16
	},
    format:wNumb({
        postfix:'pm'
    })
});

