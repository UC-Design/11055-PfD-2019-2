function setup() {
createCanvas(500,450);
background(12,25,125);

}

function draw() {

  //face
stroke(238,185,186);
fill(238,185,186);
quad(180,160,320,160,300,90,200,90);
rect(180,160,140,70);
quad(180,230,320,230,280,295,215,295);
quad(190,300,200,270,295,270,310,300);
arc(180,180,30,50,0,0);
arc(320,180,30,50,0,0);
stroke(5);
fill(5);
ellipse(330,200,5,5);

  //hair
stroke(30);
fill(30);
quad(180,235,320,235,280,300,220,300);
triangle(180,235,180,190,200,234);
triangle(320,235,320,190,301,235);
quad(180,165,180,190,195,130,177,115);
quad(200,130,177,115,210,65,267,55);
quad(200,130,267,55,290,90,270,90);
quad(267,55,270,90,300,110,320,100);
triangle(270,90,250,110,260,90);
quad(300,110,320,100,330,140,310,150);
quad(310,150,330,140,320,185,315,185);
rect(200,149,40,7);
rect(265,149,40,7);
triangle(314,185,311,163,325,160);
triangle(330,138,338,143,325,120);

  //glasses
stroke(71,44,27,230);
strokeWeight(2.7);
noFill();
rect(199,165,40, 27);
rect(265,165,40,27);
line(239,175,262,175);
line(195,175,179,170);
line(306,175,318,170);

let xLeft = 220;
let xRight = 280;
let y = 172;
let nextSmile=0;
  
  //facial features.
stroke(133,138,227,100);
strokeWeight(1.2);
fill(222,255,240);
quad(226,168,210,168,203,177,233,177);
quad(274,168,290,168,297,177,267,177);
stroke(86,88,87,190);
fill(140,114,114);
ellipse(220,172,9);
ellipse(280,172,9);
fill(222,242,200);
ellipse(xLeft,y,5);
ellipse(xRight,y,5);
  if (pmouseX != mouseX) {
    nextSmile = frameCount + 50;
  }
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    xLeft = map(mouseX, 180, 10, 165, 170, true);
    xRight = map(mouseX, 160, 10, 165, 170, true);
    y = map(mouseY, 172, 10, 165, 170, true);
  } else {
    xLeft = 220;
    xRight = 280;
    y = 172;
  nextSmile = frameCount;	
  }
 
  if (frameCount < nextSmile) {
    fill(238,185,186);
    ellipse(250, 260, 40);	
  } else {
    fill(238,185,186);
    stroke(238,185,186);
    strokeWeight(2);
    arc(250, 240, 40, 40, 0, PI); 	
  }
stroke(170,138,227,0);
fill(133,138,227,110);
quad(267,223,235,223,242,218,260,218);
stroke(133,138,227,100);
strokeWeight(2.2);
line(258,217,258,190);

//mouth
fill(238,185,186);
ellipse(250,250,25,13);
  
//shirt
stroke(33,131);
fill(33,131);
quad(50,450,80,350,420,350,450,450);
quad(80,350,190,300,310,300,420,350);
stroke(60,132,131);
fill(60,132,131);
ellipse(250,340,10,10);
ellipse(250,365,10,10);
ellipse(250,390,10,10);
ellipse(250,415,10,10);
stroke(97,61,193);
fill(248,54,6);
rect(135,315,20,140);
rect(330,312,20,140);
fill(255);
square(135,315,10,1);
square(145,325,10,1);
square(135,335,10,1);
square(145,345,10,1);
square(135,355,10,1);
square(145,365,10,1);
square(135,375,10,1);
square(145,385,10,1);
square(135,395,10,1);
square(145,405,10,1);
square(135,415,10,1);
square(145,425,10,1);
square(135,435,10,1);
square(145,445,10,1);
square(330,312,10,1);
square(340,322,10,1);
square(330,332,10,1);
square(340,342,10,1);
square(330,352,10,1);
square(340,362,10,1);
square(330,372,10,1);
square(340,382,10,1);
square(330,392,10,1);
square(340,402,10,1);
square(330,412,10,1);
square(340,422,10,1);
square(330,432,10,1);
square(340,442,10,1);


}
