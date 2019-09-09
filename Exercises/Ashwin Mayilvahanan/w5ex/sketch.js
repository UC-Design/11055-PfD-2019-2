function setup() {
    createCanvas(640,480);  // setup runs once
}

function draw(){
//    if (mouseIsPressed){
//        fill(0);
//    } else {
//        fill(255);
//    }
//    ellipse(mouseX,mouseY,50,50); 
    background(52, 213, 235);
    rect(30,60,20,400);
    rect(15,20,50,120);
    circle(40,40,30);
    circle(40,80,30);
    circle(40,120,30);
    
    
}
 function drawRed(){
     fill('red');
     cirle(40,40,30);
     noFill();
 }
function drawYellow(){
     fill('yellow');
     cirle(40,40,30);
 }
function drawGreen(){
     fill('green');
     cirle(40,40,30);
 }