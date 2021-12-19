
let ballsData = [], xPos = 1000, yPos = 1000, radius = 100, speed = 7, moving = false;

let balls = [];


function newBall() {
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



function moveBall(x, y) {
    field.select('g')
        .selectAll('#ball_0')
        .attr('fill', '#13c2c1')
        .attr('cx', x)
        .attr('cy', y);
    for(let foodBall of food){
        if(Math.abs(foodBall.x - balls[0].attr('cx')) < balls[0].attr('r')){
            if(Math.abs(foodBall.y - balls[0].attr('cy')) < balls[0].attr('r')){
                foodName = '#food_' + foodBall.id;
                field.select('g')
                    .selectAll(foodName)
                    .remove();
                food.splice(foodBall.id, 1);
            }
        }
    }
}
    

function moveBallBasedOnPointer(event){
    if(moving == false){
        moving = true;
        var coords = d3.pointer(event);
        xCurr = balls[0].attr('cx');
        yCurr = balls[0].attr('cy');
        distance = Math.sqrt(Math.pow(coords[0] - xCurr, 2) + Math.pow(coords[1] - yCurr, 2));
        if(distance > speed){
            ratio = speed / distance;
        }
        else ratio = 1;
        xDest = (1 - ratio) * xCurr + ratio * coords[0];
        yDest = (1 - ratio) * yCurr + ratio * coords[1];
        //console.log("Current: x = " + xCurr + " y = " + yCurr + " Pointer: x = " + coords[0] + " y = " + coords[1] + " Moving to: x = " + xDest + " y = " + yDest);
        moveBall(xDest, yDest);
        setTimeout(function () {
            moving = false;
        }, 3);
        
    }
}

field.select('g').on('mousemove', (event) => {
    moveBallBasedOnPointer(event);
    });


newBall();
updateBall();