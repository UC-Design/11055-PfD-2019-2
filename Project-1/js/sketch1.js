var glasses=0;

function setup() {
  createCanvas(800, 600);
}
//
//function draw() {
//  if (mouseIsPressed) {
//    fill("red");
//  } else {
//    fill(255);
//  }
//  ellipse(mouseX, mouseY, 80, 80);
//}



//face
function draw(){
    clear();
    
//hair
    fill("brown");
    noStroke();
    ellipse(385,200,195,230); //top of hair
    rect(288, 190, 194, 125, 28);  //bottom of hair
    
    
//face
    fill("#ffdcb1");
    noStroke();
    ellipse(385, 200, 160, 185);   //face
    
    fill("#ffdcb1");
    rect(357, 270, 55, 55, 20);    //neck
    
    fill("#3c0808");
    arc(380, 245, 40, 40, .5, 3, CHORD); //mouth
    
    fill("#ffdcb1");
    stroke(198,156,109);
    triangle(385, 205, 380, 220, 390, 220);   //nose
    
    fill("#ffffff");
    stroke(198,156,109);
    ellipse(357,190,20,15,0,0, 2 * Math.PI);  //left eye
    
    fill("#ffffff");
    stroke(198,156,109);
    ellipse(415,190,20,15,0,0, 2 * Math.PI);  //right eye
    

    
    //shirt
    
    fill("#e4e9ed");
    noStroke();
    rect(295, 310, 180, 80, 32);    //shoulders - shirt
    
    fill("#e4e9ed");
    stroke("#9fb4c8");
    triangle(352, 290, 340, 310, 387, 313); //left collar
    
    fill("#e4e9ed");
    stroke("#9fb4c8");
    triangle(430, 310, 385, 313, 418, 290); //right collar
    
    fill("#9fb4c8")
    strokeWeight(2);
    line(303, 322, 466, 322);
    line(297, 340, 474, 340);
    line(297, 358, 474, 358);
    line(303, 376, 466, 376);
    
   if (glasses==1) {
        //glasses
    
    noFill();
    stroke("black");
    rect(336,175,40,30,30);  //left eye  
    
    noFill();
    stroke("black");
    rect(396,175,40,30,30);  //right eye
    
    line(376,190,395,190); //line between glasses
    }  
    
    }

function mouseClicked() {
  if (glasses === 0) {
    glasses = 1;
  } else {
    glasses = 0;
  }
}
 
    