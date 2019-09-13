function setup(){
    createCanvas(400, 400);
    background(59,89,152)
}

function draw() {
    var hair = colour(0, 0, 0);
    var face = colour(89, 60, 31);
    var neck = colour(89,60,31);
    var lefteye = colour(255);
    var righteye = colour(255);
    var eyeballs = colour (0); 
    var eyebrows = noFill(); 
    var nose = noFill();
    var mouth = colour (255, 105, 105);
    
    //hair behind face
    noStroke(); 
    fill (hair); 
    ellipse(200, 200, 310, 300);
    rect(45,190,310,280);
    
    //face 
    noStroke();
    fill (face);
    ellipse(200, 200, 240, 250);
    
    //neck
    noStroke();
    fill (neck);
    rect(140, 210, 120, 200);

    //eyes
    noStroke();
    fill (lefteye);
    ellipse(150, 160, 40, 20);
    fill (righteye); 
	ellipse(250, 160, 40, 20);
    
    //eyeballs
    noStroke();
    fill (eyeballs);
    //left eyeball
    ellipse (147,167, 20, 10); 
    //right eyeball
    //mouseY
    //mouseIsPressed
    if (mouseIsPressed){
     ellipse (247,mouseY, 20, 10);   
    }
    
    //eyebrows 
    noFill(); 
    stroke(0, 0, 0); 
    strokeWeight(7); 
    //left eyebrow
    arc(150,135,55,16, PI, TWO_PI, OPEN);
    //right eyebrow
    arc(250,135,55,16, PI, TWO_PI, OPEN); 
    
    //nose 
    noFill();
    stroke(0,0,0);
    strokeWeight(3);
    arc(200,200, 15,10, 0, PI);

    //mouth 
    noStroke();
    fill (mouth); 
    arc (200, 240, 60, 55, 0, PI); 
}

// Self Potriart by U3181701.
