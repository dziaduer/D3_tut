
let ballsData = [], xPos = 1000, yPos = 1000, radius = 100, speed = 5, moving = false;

let balls = [];

let xDestination = 1000, yDestination = 1000, xPosition = 1000, yPosition = 1000;

function newBall() {
    ballsData.push({
        id: 'ball_' + 0,
		x: 0,
		y: 100
    });
    console.log(ballsData[0].id)
}

// Place ball on the field
function updateBall() {
        balls[0] = field.select('g').append('circle')
		.data(ballsData)
		.join('circle')
        .attr('fill', '#13c2c1')
		.attr('cx', function(d) { return d.x; })
		.attr('cy', function(d) { return d.y; })
		.attr('r', radius)
        .attr('id', function(d) { return d.id; });
        let windownWidth = field.style('width').slice(0, -2);
        let windownHeight = field.style('height').slice(0, -2);
        field.select('g').attr('transform', 'translate(' + (+windownWidth / 2 - xPos) + ',' + (+windownHeight  / 2 - yPos) + ')')    
}

// Function executin ball movement
function moveBall() {
    let distance = Math.sqrt(Math.pow(xDestination - xPosition, 2) + Math.pow(yDestination - yPosition, 2));
    if (distance > speed) {
        ratio = speed / distance;
    }
    else ratio = 1;
    let x = (1 - ratio) * xPosition + ratio * xDestination;
    let y = (1 - ratio) * yPosition + ratio * yDestination;
    r = balls[0].attr('r');
    if(x >= width - r){
        x = width - r;
    } 
    else if(x <= r){
        x = r;
    }
    if(y >= height - r){
        y = height - r;
    } 
    else if(y <= r){
        y = r;
    }
    let windownWidth = field.style('width').slice(0, -2);
    let windownHeight = field.style('height').slice(0, -2);
    field.select('g')
        .attr('transform', 'translate(' + (+windownWidth / 2 - x) + ',' + (+windownHeight  / 2 - y) + ')');
    field.select('g')
        .selectAll('#ball_0')
        .attr('cx', x)
        .attr('cy', y);
    xPosition = x;
    yPosition = y;
}
    
// Reads pointer location and updates destination coordinates
function moveBallBasedOnPointer(event) {
    var coords = d3.pointer(event);
    xDestination = coords[0];
    yDestination = coords[1];        
}




field.select('g').on('mousemove', (event) => {
    moveBallBasedOnPointer(event);
    });


newBall();
updateBall();
setInterval(moveBall, 1);