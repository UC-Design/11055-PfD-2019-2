//Setting up canvas parameters
/*function setup() { 
	createCanvas(3000, 3000); 
} 

// Draw ellipses on loop, only fill when clicked
function draw() { 
	if (mouseIsPressed) { 
		fill(0); 
	} else { 
		fill(255); 
	} 
	
	ellipse(mouseX, mouseY, 80, 80); 
 
} */

/*function setup(){
    createCanvas(3000, 3000);
}

// Draw squares on loop, only fill with grey when clicked
function draw(){
    if (mouseIsPressed){
        
        fill(100);
    }else{
        fill(300);
    }
    
   rect(mouseX, mouseY, 80, 80);
}*/

//draw a line with a weight of 4 and colour to grey

/*function draw(){
//Added background colour to stroke
   background (50);
   strokeWeight(4);
   stroke ('red'); 
   line(20, 10, 75, 65);
}*/

//Example 1: Can only change on mouse click. Transition between two colours
//Drawing traffic lights

/*function setup(){
   createCanvas (240, 240);
}*/

/*function draw(){
    
    if (mouseIsPressed){
        fill ('red');
    }else{
        fill('green');
    }
    ellipse(90, 90, 90, 90);
}*/

//Example 2: 
//Drawing traffic lights


/*function draw() {
  strokeWeight(0);
  fill('red');
  ellipse(90, 90, 90, 90);
}*/

//Online tutorial to figure out how I could work out how to change traffic light colours
/*let circleColour = 'red';

// change colors on mouse click!
function setup() { 
  createCanvas(240, 240);
  background(50);
} 

function draw() { 
  fill(circleColour);
  strokeWeight(0);
  ellipse(90, 90, 90, 90);
  if (frameCount % 60 == 0) {
  	  circleColour = color(random(255), random(255));
  }
  fill(0);
  ellipse(mouseX, mouseY, 50, 50);
}*/

//TRAFFIC LIGHT EXERCISE

/*let lightColour1 = 0;
let lightColour2 = 0;
let lightColour3 = 0;

//Mouse click change lights!

function setup(){
    createCanvas (500, 500);
    lightColour1 = fill ('green');
    lightColour2 = fill ('yellow');
    lightColour3 = fill ('red');
}

function draw (){
    fill (lightColour2);
    ellipse (90, 90, 90 ,90);
    fill (lightColour3);
     if (frameCount % 60 == 0) {
    lightColour1 = color('green');
  	lightColour2 = color('yellow');
  	squareColor = color('red');
}
*/


  
 