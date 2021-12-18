
let ballsData = [], xPos = 1000, yPos = 1000, radius = 100, speed = 100, moving = false;

let balls = [];


function newBall() {
	ballsData = [];
    ballsData.push({
        id: 0,
		x: 100,
		y: 100
    });
}

function updateBall() {
        balls[0] = field.select('g').append('circle')
		.data(ballsData)
		.join('circle')
        .attr('fill', '#000000')
		.attr('cx', xPos)
		.attr('cy', yPos)
		.attr('r', radius)
        .attr('id', 'ball_0');
}



function moveBallButton()
{
    let xVal = +document.getElementById('x-input').value;
    let yVal = +document.getElementById('y-input').value;
    moveBall(xVal, yVal);
}



function moveBall(x, y){
    field.select('g')
        .selectAll('#ball_0')
        .attr('fill', '#13c2c1')
        //.transition()
        .attr('cx', x)
		.attr('cy', y)
        //.duration(1000);        
        //.attr('transform', 'translate(' + xVal + ', ' + yVal + ')').duration(1000);
}

function moveBallBasedOnPointer(event){
    var coords = d3.pointer(event);
    console.log(coords);
    moveBall(coords[0], coords[1]);
}

field.select('g').on('mousemove', (event) => setInterval(moveBallBasedOnPointer(event)));


newBall();
updateBall();