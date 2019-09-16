
var balls = [];
var canvasWidth = 640;
var canvasHeight = 480;
var numballs = 3;
var hold = 0;
var speed = 2000;


function setup() {
    createCanvas(1024, 800)
}

function draw() {

    // clear the screen and set the fill to a dark grey each start of the loop
    clear();
    fill(50);

    // if there are balls in the array, then draw them on the screen
    if (balls.length > 0) {
        for(var i = 0; i < balls.length; i++) {
            ellipse(balls[i].x, balls[i].y,balls[i].w,balls[i].h);
        }
    }

    // if the hold variable changes, change where the balls will be drawn, rising, falling or static
    switch (hold) {
        case 0:
            break;
        case 1:
            balldrop(balls);
            break;
        case 2:
            break;
        case 3:
            ballrise(balls);
            break;
    }

}

function mouseClicked() {

    // each time the mouse is clicked, create a ball object at the point of the mouse
    var aball = {
        x:mouseX, // create where the mouse is
        y:mouseY, 
        w:(balls.length+1)*3, //create each ball bigger than the last
        h:(balls.length+1)*3, //create each ball bigger than the last
        // the drop function will keep moving the ball down until it reaches the canvas height
        drop: function () {
            if (this.y < canvasHeight - this.h) {
                this.y += 10;
            }
        },
        // the rise function will keep moving the ball up until it reaches the canvas height
        rise: function () {
            if (this.y > 0 + this.h) {
                this.y -= 10;
            }
        }
    };

    // if there is space in the ball array add it, otherwise ignore
    if (balls.length <= numballs-1) {
        balls.push(aball);
    } else {
        // if we are ignoring new balls, then change the hold variable 
        switch (hold) {
            case 0:
                hold = 1;
                break;
            case 1:
                hold = 2;
                break;
            case 2:
                hold = 3
                break;
            case 3:
                hold = 0;
                break;
        }
    }
    
}

/* this function asks each ball object in the array to drop */
function balldrop(balls) {
    
    setTimeout(function(){
        for (var j = 0; j < balls.length; j++) {
            balls[j].drop();
        }
    }, speed); //wait for the speed time before moving the balls down
}

/* this function asks each ball object in the array to rise */
function ballrise(balls) {
    
    setTimeout(function(){
        for (var j = 0; j < balls.length; j++) {
            balls[j].rise();
        }
    }, speed); //wait for the speed time before moving the balls up
}