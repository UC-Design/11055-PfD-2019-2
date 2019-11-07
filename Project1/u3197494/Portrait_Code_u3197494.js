function setup(){
    createCanvas(1000,1000);
}
function draw(){
    background (30,144,255);
   
    stroke(1);
    fill(255,224,189)
    rect(400,700,200,200)
    // Neck coloured skin colour
    
    stroke(1)
    fill(230);
    rect (400,780,200,400);
    // Jacket light gray shirt front center
    
      stroke(1)
    fill(75, 83, 32);
    rect (225,780,250,400);
    // Jacket green front left side
    
          stroke(1)
    fill(75, 83, 32);
    rect (535,780,250,400);
    // Jacket green front right side
    
     stroke(1)
    fill(255,224,189);
    ellipse (325,460,80,130);
    // Left Ear filled with skin colour
    
     stroke(1)
    fill(245,219,172);
    ellipse (325,460,61.5,100);
    // Left Inner Ear filled with a slightly darker skin colour
    
    stroke(1)
    fill(255,224,189);
    ellipse (675,460,80,130);
    // right Ear filled with skin colour
    
    stroke(1)
    fill(245,219,172);
    ellipse (675,460,61.5,100);
    // Right Inner Ear filled with a slightly darker skin colour
    
    stroke(1)
    fill(255,224,189);
    ellipse (500,500,375,500);
    // Head egg shape filled with a skin colour
    
    stroke(1)    
    fill(70)
    ellipse(500,300,355,130)
    rect(325,315,360,50)
    
    //Hat
    
    fill(40);
    ellipse (570,420,75,50);
    ellipse (430,420,75,50);
    // Eye shadow set to black

    fill(255);
    ellipse (430,420,75,50);
    ellipse (570,420,75,50);
    // Whites of eyes
    
    fill(0,100,0);
    ellipse (430,420,35,35);
    ellipse (570,420,35,35);
    // Eye Colour green
    
    fill(20);
    ellipse (430,420,25,25);
    ellipse (570,420,25,25);
    // Blacks of eye

noFill();
strokeWeight(1);
beginShape();
vertex(521,455);
quadraticVertex(510,480,518,525);
endShape();
/*
Right side Nose Length Curve
Top point of curve x521, y455       
Bottom point of curve x518, y525   
Curve point of curve x510, y480     
*/

noFill();
strokeWeight(1);
beginShape();
vertex(525,510);
quadraticVertex(520,525,530,530);
endShape();
/* Right side of Nose start of nostral curve P1
Top point of curve 525, 510
Bottom point of curve 535, 530
Curve point of curve 525, 520
*/
    
noFill();
strokeWeight(1);
beginShape();
vertex(530,530);
quadraticVertex(538,543,525,550);
endShape();
/* Right Nostral curve P2
Top point of curve 535, 530
Bottom point of curve 525, 550
Curve point of curve 540, 545
*/

noFill();
strokeWeight(1);
beginShape();
vertex(525,550);
quadraticVertex(521,554,520,560);
endShape();
/* Right Nostral curve P3
Top point of curve 525,550
Bottom point of curve 515, 560
Curve point of curve 519, 552
*/

strokeWeight(1);
beginShape();
vertex(517,550);
quadraticVertex(507,554,504,560);
vertex(507,560);
quadraticVertex(522,552,517,550);
endShape();
// Right Nostral hole

beginShape();
vertex(505,560);
quadraticVertex(499.5,563,492,560);
endShape();
    // Tip of Nose overhang

beginShape();
vertex(492,560); // bottom point of left nostral hole
quadraticVertex(493,556,479,550); //top point of left nostral hole, angle of curve
vertex(479,550);
quadraticVertex(469,552,492,560);
endShape();
    // Left Nostral hole

noFill();
strokeWeight(1);
beginShape();
vertex(479,455);
quadraticVertex(490,480,482,525);
endShape();
/*
Left
Nose Length Curve
Top point of curve 521, 455
Bottom point of curve 518, 425
Curve point of curve 515, 465
*/

noFill();
strokeWeight(1);
beginShape();
vertex(475,510);
quadraticVertex(477,526,467,530);
endShape();
/* Left side of Nose start of nostral curve P1
Top point of curve 475, 510
Bottom point of curve 465, 530
Curve point of curve 480, 520
*/
    
noFill();
strokeWeight(1);
beginShape();
vertex(467,530);
quadraticVertex(460,538,465,550);
endShape();
/* 
Left Side of Nose P2 curve
Top of point 465,530
Bottom point of curve 465,550
Curve point of curve 452,545
*/

noFill();
strokeWeight(1);
beginShape();
vertex(465,550);
quadraticVertex(471,552,475,560);
endShape();
/*
Left Side of Nose P3 curve
Top of point 465,550
Bottom point of curve 475,560
Curve point of curve 471,552
*/
  
noFill();
strokeWeight(1);
beginShape();
vertex(511,540);
quadraticVertex(500,537,488,540);
endShape();
/*
Nose curve above nostral holes
Left Side of Nose P3 curve
Top of point 511,540
Bottom point of curve 488,540
Curve point of curve 500,537
*/

noFill();
strokeWeight(1.5);
beginShape();
vertex(580,625);
quadraticVertex(500,537,420,625);
endShape();
/* Mouth 
Start point x 580, y 625
End point x 420, y 625
Curve point x 500, y 537
*/

    /* Creating a custom curved line to create the shape of the nose
       The use of the following website was used to help explain how to do this
        https://programmingdesignsystems.com/shape/custom-shapes/index.html#custom-shapes-pANLh0l
     */

    

}
