var slider = document.getElementById('slider');
noUiSlider.create(slider, {
	start: [12, 16],
    limit:1,
    connect:true,
    behaviour:'drag-fixed',
	tooltips: true,
	step:1,
	range: {
		'min': [12],
		'max': [16]
	},
    format:wNumb({
        postfix:'pm'
    })
});

