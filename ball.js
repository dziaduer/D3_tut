let ball = xPos = 500, yPos = 500, radius = 100;

function updateBall(){
    field.select('g')
        .enter().append('circle')
        .data(ball)
        .attr('fill', '#000000')
		.attr('cx', xPos)
		.attr('cy', yPos)
		.attr('r', radius);
}

updateBall();