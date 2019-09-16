//This is the javascript code that is used in the selfportrait.html file

var glasses=0;

function setup() {
  createCanvas(800, 600);
}


//Javascript picture begins here

//face
function draw(){
    clear();
    
//hair
    fill("#6f3719");
    noStroke();
    background("#f3d9e5"); //had to define the colour of the background here.
    ellipse(385,195,195,230); //top of hair
    rect(288, 185, 194, 125, 28);  //bottom of hair
    
    
    
//face
    fill("#ffdcb1");
    noStroke();
    ellipse(385, 200, 155, 185);   //face
    
    fill("#ffdcb1");
    rect(357, 270, 55, 55, 20);    //neck
    
    fill("#3c0808");
    arc(380, 243, 40, 40, .5, 3, CHORD); //mouth
    
    fill("#ffdcb1");
    stroke(198,156,109);
    triangle(385, 205, 380, 220, 390, 220);   //nose
    
    //eyes
        //left eye
    fill("#ffffff");
    stroke(198,156,109);
    ellipse(357,190,23,18);  
        //left pupil
    fill("#000000");
    noStroke();
    ellipse(357,190,11,10);  
        //eyelid
    fill("#ffdcb1");
    stroke(246,209,164);
    arc(357,186,22.5,10,3.1,0);
    
        //right eye
    fill("#ffffff");
    stroke(198,156,109);
    ellipse(415,190,23,18,0,0, 2 * Math.PI);  
        //right pupil
    fill("#000000");
    noStroke();
    ellipse(415,190,11,10);  
        //eyelid
    fill("#ffdcb1");
    stroke(246,209,164);
    arc(415,186,22.5,10,3.1,0);
    
    //hair cont.
    fill("#6f3719");
    noStroke();
    arc(310, 120, 160, 130, -.5, 1.8); //left fringe
    arc(460, 130, 150, 120, 1.3, -2.5); //right fringe
    ellipse(385, 110, 18, 18);

    
    //shirt
    
    fill("#e4e9ed");
    noStroke();
    rect(295, 310, 180, 120, 32); //shoulders - shirt
    
    fill("#e4e9ed");
    stroke("#9fb4c8");
    triangle(352, 290, 340, 310, 387, 313); //left collar
    
    fill("#e4e9ed");
    stroke("#9fb4c8");
    triangle(430, 310, 385, 313, 418, 290); //right collar
    
    fill("#9fb4c8")
    strokeWeight(2);
    line(303, 322, 466, 322);
    line(296, 340, 474, 340);
    line(296, 358, 474, 358);
    line(296, 376, 474, 376);
    line(296, 394, 474, 394);
    line(298.5, 412, 471.5, 412);
    line(312, 427, 456, 427);
    
   if (glasses==1) {
        //glasses
    
    noFill();
    stroke("black");
    rect(336,176,40,30,30);  //left eye  
    
    noFill();
    stroke("black");
    rect(396,176,40,30,35);  //right eye
    
    line(376,190,395,190); //line between glasses
    line(307,190,335,190); //left arm of glasses
    line(437,190,462,190); //right arm of glasses
    } 
    
    }

//function to show glasses when the mouse is clicked. Click once, the glasses appear. CLick again, the glasses dissapear.

function mouseClicked() {
  if (glasses === 0) {
    glasses = 1;
  } else {
    glasses = 0;
  }
}
 
    