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

 

  //hair

stroke(30);

fill(30);

quad(180,235,320,235,280,300,220,300);

triangle(180,235,180,190,200,234);

triangle(320,235,320,190,301,235);

quad(180,165,180,190,195,130,177,115);

quad(300,165,320,115,320,190,320,180);

 

 

}