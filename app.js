let food = [], width = 2000, height = 2000, numPoints = 2000;

var field = d3.select('svg')

let zoom = d3.zoom()
	.on('zoom', handleZoom);

function handleZoom(e) {
	field.select('g')
		.attr('transform', e.transform);
}

function initZoom() {
	field.call(zoom);
}

function updateData() {
	food = [];
	for(let i=0; i<numPoints; i++) {
		food.push({
			id: i,
			x: Math.random() * width,
			y: Math.random() * height
		});
	}
}

function update() {
	field.select('g')
		.selectAll('circle')
		.data(food)
		.join('circle')
        .attr('fill',function() {return "hsl(" + Math.random() * 360 + ",100%,50%)"; })
		.attr('cx', function(d) { return d.x; })
		.attr('cy', function(d) { return d.y; })
		.attr('r', 3);
}

initZoom();
updateData();
update();
