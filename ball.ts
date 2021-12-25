
let radius = 15, speed = 3, moving = false;


let balls = [];

let hash = 0;

function newBall() {
    playerData.push({
        id: 'ball_' + hash,
        x: 600,
        y: 500,
    });


    console.log(playerData[hash].id)
}

let xDestination = 1000, yDestination = 1000;
// Place ball on the field
function updateBall() {
    balls[0] = playerLayer.append('circle')
        .data(playerData)
        .join('circle')
        .attr('fill', '#13c2c1')
        .attr('cx', playerData.x)
        .attr('cy', playerData.y)
        .attr('r', radius)
        .attr('id', function (d) { return d.id; });
    let windownWidth = field.style('width').slice(0, -2);
    let windownHeight = field.style('height').slice(0, -2);
    field.select('g').attr('transform', 'translate(' + (+windownWidth / 2 - playerData.x) + ',' + (+windownHeight / 2 - playerData.y) + ')');
    xPosition = playerData[hash].x;
    yPosition = playerData[hash].y;
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
    if (x >= width - r) {
        x = width - r;
    }
    else if (x <= r) {
        x = r;
    }
    if (y >= height - r) {
        y = height - r;
    }
    else if (y <= r) {
        y = r;
    }
    let windownWidth = field.style('width').slice(0, -2);
    let windownHeight = field.style('height').slice(0, -2);




    update();

    field.select('g')
        .attr('transform', 'translate(' + (+windownWidth / 2 - x) + ',' + (+windownHeight / 2 - y) + ')');

    playerLayer
        .selectAll('#ball_' + hash)
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