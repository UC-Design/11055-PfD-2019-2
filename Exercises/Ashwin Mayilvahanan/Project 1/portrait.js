function setup(){
  createCanvas(1000,1000); // setup runs once an creates the canvas
}

function draw() {
  scale(2);
  shirt();
  face();
  hair();

  // textFont('Georgia');
  // textSize(16);
  // textAlign(CENTER);
  // fill(229, 202, 173);
  // text('Self Portrait of me', width / 4, height / 20);
}

function face() {

  noStroke();
  fill(153, 77, 0);
  //triangle(190, 300, 310, 300, 255, 300);
  arc(247, 300, 150, 100, 0 , PI);
  quad(180, 160, 320, 160, 300, 90, 200, 90);
  rect(180, 160, 140, 70);
  quad(180, 230, 320, 230, 280, 300, 220, 300);
  quad(205, 300, 205, 270, 295, 270, 295, 300);

  // ears
  ellipse(175, 185, 26, 50);
  ellipse(325, 185, 26, 50);

  // mouth
  fill(219, 175, 146);
  arc(250, 240, 49, 35, 0, PI);

  // eyes
  fill(77, 51, 0, 200);
  ellipse(218, 172, 21, 19);
  ellipse(282, 172, 21, 19);

  // stroke(222, 242, 200);
  fill(222, 242, 200);
  ellipse(223, 170, 10, 8);
  ellipse(287, 170, 10, 8);

  // nose
  fill(77, 51, 0, 100);
  triangle(265, 223, 250, 185, 235, 223);
  //quad(243, 230, 259, 230, 267, 223, 235, 223);
}

function hair() {
  let blackHair = color(13, 13, 13);
  noStroke();
  fill(blackHair);
  quad(325, 180, 285, 115, 321, 100, 327, 150);
  ellipse(310, 105, 25, 30);
  ellipse(240, 105, 140, 65);
  quad(185, 180, 189, 122, 170, 107, 171, 157);
  quad(175, 160, 195, 135, 250, 110, 187, 100);

  // eyebrows
  rect(207, 149, 23, 4);
  triangle(207, 149, 207, 153, 199, 160);
  rect(271, 149, 23, 4);
  triangle(294, 149, 294, 153, 303, 160);

  // moustache
  rect(220, 230, 24, 5);
  triangle(220, 230, 220, 235, 215, 240);
  rect(255, 230, 24, 5);
  triangle(279, 230, 279, 235, 284, 240 );
}

function shirt() {
  noStroke();
  fill(0, 0, 153);
  quad(340, 300, 395, 322, 440, 432, 335, 431);
  rect(150, 300, 190, 132);
  quad(60, 431, 90, 327, 151, 300, 151, 432);
}
