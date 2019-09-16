
function setup() {
//create the canvas
createCanvas(750, 750);
}

function draw() {
background(179,208,212);
//draw the hair
noStroke();
fill(63,49,46);
rect(170,60,290,500,130,120,130,50);//left
rect(350,60,230,600,90,130,50,130);//right

//draw the ears
noStroke();
fill(255,222,206);
ellipse(250,270,45,70);//left
ellipse(500,270,45,70);//right

fill(243,205,187);
ellipse(250,270,20,35);//leftI
ellipse(500,270,20,35);//rightI

//draw the earrings
noFill();
strokeWeight(4);
stroke(75,100,75);
ellipse(250,315,24,35);//leftT
ellipse(500,315,24,35);//rightT
ellipse(250,342,20,20);//leftB
ellipse(500,342,20,20);//rightB

//draw the haed
noStroke();
fill(255,222,206);
rect(250,120,250,305,115,115,130,130);

//draw the eyebrows
stroke(101,84,76);
strokeWeight(13);
noFill();
arc(323,225,75,62,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);//left
arc(425,225,75,62,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);//right

//draw the eyes
noStroke();
fill(54,57,58);
ellipse(325, 250, 27, 50);//left
ellipse(325, 250, 50, 27);//left
ellipse(425, 250, 27, 50);//right
ellipse(425, 250, 50, 27);//right

//draw the nose
noStroke();
fill(247,199,186);
triangle(375, 265, 355, 335, 395, 335);

//draw the mouth
noStroke();
fill(213, 134,119);
//ellipse(375,375,80,50);
arc(375,375,80,60,0,PI);
ellipse(375,375,80,20);

//drawing the body
noStroke();
fill(231,134,76);
rect(246,477,257,300);

//draw the neck
noStroke();
fill(255,222,206);
rect(334.6,417,80,60);
triangle(374.65,575,334.5,475,414.8,475);

//draw the arms
noStroke();
fill(137,134,127);
ellipse(235,723,160,500);
ellipse(513,723,160,500);

//leave my name
fill(0);
textSize(17);
textFont('Chalkduster');
text('Hebe.',640, 725);
textSize(15);
text('9.14',688, 725);

//draw the glasses
noFill();
strokeWeight(4);
stroke(183,156,145);
rect(265,205,100,100,40,40,50,50);//left
rect(385,205,100,100,40,40,50,50);//right
arc(375,278,30.5,30.5,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);//link

}