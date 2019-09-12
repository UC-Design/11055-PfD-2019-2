/* function setup() {
    
}

function draw() {
    ellipse(50, 50, 80, 80);
}*/

/* function setup() {
    createCanvas(640, 480);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);    
    }
    else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}*/
/*

function setup() {
    createCanvas(500, 800);
}

function draw() {
    fill('black');
    rect(100, 100, 120, 360, 20);
    //x, y coordinates, width height, and raidus of corners. 
    
    fill('red');
    ellipse(160, 170, 100);
    
    fill('orange');
    ellipse(160, 280, 100);
    
    fill('green');
    ellipse(160, 390, 100);
    //each is a circle, coordinates from the centre of the circle, x , y width, hieght left off so it the same as width. x position same for each, but y is going down, 100 for height for circle, and 10 for gap.  
}
*/
 
var topl = "#E11D1D";
var middle = "#929292";
var bottom = "#929292";
var count = 0;


/*function trafficlight(light, lightcolour) {
   return light = lightcolour;
}*/

function toplight(colour1) {
    return topl = colour1
}
function midlight(colour2) {
    return middle = colour2
}
function botlight(colour3) {
    return bottom = colour3
}

//it wasn't working at first, but it would work if i didn't use 'top'so i changed it.

//hasn't worked since i replaced bits with the function, my function isn't working. 

function setup() {
    createCanvas(500, 800);
}

function draw() {
    fill("#000000");
    rect(100, 100, 120, 360, 20);
    
    fill(topl);
    ellipse(160, 170, 100);
    
    fill(middle);
    ellipse(160, 280, 100);
    
    fill(bottom);
    ellipse(160, 390, 100);
   
}
/*
function mouseClicked() {
    if (count == 0) {
        count = 1;
        topl = "#929292";
        middle = "#F3B736";
    } else if (count === 1) {
        count = 2;
        middle = "#929292";
        bottom = "#0D9E2C";
    } else if (count === 2) {
        count = 0;
        topl = "#E11D1D";
        bottom = "#929292";
        
    }
} */

/*function mouseClicked() {
    switch (count) {
        case 0:
            count = 1;
            topl = "#929292";
            middle = "#F3B736";
            break; 
        case 1:
            count = 2;
            middle = "#929292";
            bottom = "#0D9E2C";
            break;
        case 2: 
            count = 0;
            topl = "#E11D1D";
            bottom = "#929292";
            break;
    }
}
//replaced if's with switch, it works!! */

function mouseClicked() {
    switch (count) {
    case 0:
        count = 1;
        toplight("#929292");
        midlight("#F3B736");
        /*trafficlight(topl, "#929292");
        trafficlight(middle, "#F3B736");*/
        break;
    case 1:
        count = 2;
        midlight("#929292");
        botlight("#0D9E2C");
        /*trafficlight(middle, "#929292");
        trafficlight(bottom, "#0D9E2C");*/
        break;
    case 2:
        count = 0;
        toplight("#E11D1D");
        botlight("#929292");
        /*trafficlight(topl, "#E11D1D");
        trafficlight(bottom, "#929292");*/
        break;
    }
}
//REPLACED FUNCTIONS WITH SIMPLER FUNCTIONS AND IT WORKS!!!
  
//got the thing to show up with funcions, but nothing happens when i click so...

/*
here is me trying to work out how to do a traffic light by pressing buttons. in the end i looked up to see what methods other people had used. and ended up with the mouse clicked, if elses, which i turned into switches

light is red
if space pressed, 
light turns green 
else light stays red. 

var light is red.  
if light is red 
    if key is pressed 
        light turns orange 
    else light stays red. 
if light is orange
    if key is pressed 
        light turns green 
    else light stays orange
if light is green 
    if key is pressed 
        light turns red 
    else light stays green 
    
    
    or by timers, he said the whole thing is a loop, so i could make it change by itself..? 

*/