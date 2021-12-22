let food = [], width = 3000, height = 3000, numPoints = 200, foodRadius = 3;
let foods = [];

var field = d3.select('svg')

function addBackground()
{
	field.select('g')
		.append('rect')
		.attr('fill', '#fefefe')
		.attr('height', height)
		.attr('width', width);
	for(let i = 0; i <= width / 20; i++){
		field.select('g')
		.append('line')
			.attr('x1', i * 20)
			.attr('y1', 0)
			.attr('x2', i * 20)
			.attr('y2', height)
			.attr('stroke', '#eaeaea');
	}
	for(let i = 0; i <= height / 20; i++){
		field.select('g')
		.append('line')
			.attr('x1', 0)
			.attr('y1', i * 20)
			.attr('x2', width)
			.attr('y2', i * 20)
			.attr('stroke', '#eaeaea');
	}
}

function updateData() {
	food = [];
	for(let i=0; i<numPoints; i++) {
		food.push({
			id: 'food_' + i,
			x: Math.random() * (width - foodRadius * 2) + foodRadius,
			y: Math.random() * (height - foodRadius * 2) + foodRadius,
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
		.attr('id', function(d) { return d.id; })
		.attr('r', foodRadius)
}

addBackground();
updateData();
update();
