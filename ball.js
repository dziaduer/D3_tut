
let balls = [], xPos = 1000, yPos = 1000, radius = 100;

function newBall() {
	balls = [];
    balls.push({
        id: 0,
		x: 100,
		y: 100
    });
}

function updateBall() {
	field.select('g')
        .append('circle')
		.data(balls)
		.join('circle')
        .attr('fill', '#000000')
		.attr('cx', xPos)
		.attr('cy', yPos)
		.attr('r', radius)
        .attr('id', 'ball_0');
}

function moveBall(){
    let xVal = +document.getElementById('x-input').value;
    let yVal = +document.getElementById('y-input').value;
    field.select('g')
        .selectAll('#ball_0')
        .attr('fill', '#13c2c1')
        .transition()
        .attr('transform', 'translate(' + xVal + ', ' + yVal + ')').duration(1000);
}

newBall();
updateBall();