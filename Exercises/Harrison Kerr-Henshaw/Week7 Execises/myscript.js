var stage=2;
var interval;
function setup() { 
	createCanvas(640, 480); 
	background(4, 53, 0);
interval=stage;

} 

function draw() { 
	
	if (mouseIsPressed) { 
		
		stage=stage+interval;
		fill(0,255,0);
		ellipse(mouseX,mouseY, stage, stage); 
		
	} else { 

		
			
		
		
			
	} 
	


} 

