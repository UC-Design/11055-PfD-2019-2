//variable eyes & mouth set
var eyes = 1;
var mouth = 1;

function setup() {

//create the backgound colour & size
createCanvas(400, 400);
background(250);

//promopt for number of eyes
eyes = prompt("How many eyes will I have today? (1-3)");
mouth = prompt("How am I feeling today? (Happy or Sad)");
}

function draw() {

//draw the arms & legs
    line (240, 215, 280, 260);
    line (160, 215, 120, 260);
    line (220, 290, 240, 380);
    line (180, 290, 160, 380);

//draw the body (blue or red), based on an IF statement if the mouse is pressed
if (mouseIsPressed){
    fill (171,23,73);
    rect (155, 195, 88, 120,5);
}else{
    fill (95,158,160);
    rect (155, 195, 88, 120, 5);
}
    
//draw the head
    fill (243,211,191);
    ellipse(200, 150, 100, 100);
   
//draw the eyes (1,2 or 3), based on a SWITCH depending on the input for variable eyes
switch (eyes){
    
    case "1":
    fill (255);
    ellipse (200, 130, 30, 30);
    fill (0);
    ellipse (200, 130, 20, 20);
    break;

    case "2":
    fill (255);
    ellipse (180, 145, 30, 30);
    fill (0);
    ellipse (180, 145, 20, 20);
    
    fill(255);
    ellipse (220, 145, 30, 30);
    fill (0);
    ellipse (220, 145, 20, 20);
    break;
    
    case "3":
    fill (255);
    ellipse (180, 145, 25, 25);
    fill (0);
    ellipse (180, 145, 15, 15);
    
    fill (255);
    ellipse (220, 145, 25, 25);
    fill (0);
    ellipse (220, 145, 15, 15);
    
    fill (255);
    ellipse (200, 120, 25, 25);
    fill (0);
    ellipse (200, 120, 15, 15);
    break;
}
//draw the mouth (Happy or Sad), based on a SWITCH depending on the input variable for mouth  
switch (mouth){
    case "Happy":
    fill (0);
    arc (200, 172, 30, 25, 50, PI, + TWO_PI);
    break;
    
    case "Sad":
    fill (0);
    arc (200, 182, 30, 25, PI, + TWO_PI);
    break;
}
}