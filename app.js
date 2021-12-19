let food = [], width = 2000, height = 2000, numPoints = 2000;
let foods = [];

var field = d3.select('svg')

function addBackground()
{
	field.select('g')
	.append('rect')
	.attr('fill', '#fefefe')
	.attr('height', height)
	.attr('width', width);
}


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
			y: Math.random() * height,
			color: "hsl(" + Math.random() * 360 + ",100%,50%)"
		});
	}
}

function update() {
	field.select('g')
		.selectAll('circle')
		.data(food)
		.join('circle')
        .attr('fill',function(d) {return d.color })
		.attr('cx', function(d) { return d.x; })
		.attr('cy', function(d) { return d.y; })
		.attr('id', 'food_' + function(d) { return d.id; })
		.attr('r', 3);
}

addBackground();
initZoom();
updateData();
update();
