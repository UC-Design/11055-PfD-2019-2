
function setup() { 
	createCanvas(640, 480); 
	background(4, 255, 0);


} 

function draw() { 
	
	if (mouseIsPressed) { 
		fill(0); 
			ellipse(mouseX, mouseY, 80, 80); 
		
	} else { 
		fill(255, 0,0);
			ellipse(mouseX, mouseY, 80, 80); 
			
		fill(4, 0, 255);
			ellipse(mouseX, mouseY, 80, 80); 
			
		fill(255, 0, 243);
			ellipse(mouseX, mouseY, 80, 80); 
		
			
	} 
	


} 

