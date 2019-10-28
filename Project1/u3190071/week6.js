//U3190071 Anneliese Brenner Tulloh, Programming for Design code

function draw () {
    
    background(90, 95, 181);
    
    // hair
    fill(249, 252, 174);
    rect(99, 18, 200, 390, 101);
    
    // neck
    stroke(0);
    fill(255, 242, 253);
    rect(180, 330, 40, 80);
    
    // face
    fill(255, 242, 253);
    ellipse(200, 200, 190, 280);
    
     //hair stroke
    line(201, 68, 289, 156);
    line(204, 67, 107, 172);
    
    // fringe
    stroke(249, 252, 174);
    fill(249, 252, 174);
    triangle(168, 32, 293, 158, 272, 81);
    triangle (231, 33, 102, 177, 133, 62);
    
    // mouth
    stroke(0)
    fill(250, 150, 150);
    ellipse(203, 250, 20, 30);
    
    // eyes
    stroke(0)
    fill(250, 250, 250);
    ellipse(174, 166, 31, 60);
    ellipse(225, 166, 31, 60);
   
    //pupils
    fill(66, 75, 255);
    ellipse(175, 185, 11, 20);
    ellipse(225, 185, 11, 20);

    //eyebrows
    stroke(34);
    line(151, 131, 187, 122);
    stroke(34);
    line(220, 120, 250, 132);
    
    //nose
    fill(255, 242, 253)
    triangle(199, 200, 187, 211, 212, 212);
    
    //body
    fill(186, 205, 212)
    rect(143, 360, 120, 180)
    
    //arms
    stroke(34);
    line(240, 419, 240, 480);
    stroke(34);
    line(170, 419, 170, 481);
    
    //petals
    fill(255,204,245)
    ellipse(445, 300, 20, 20);
    ellipse(450, 320, 20, 20);
    ellipse(470, 329, 20, 20);
    ellipse(491, 326, 20, 20);
    ellipse(500, 308, 20, 20);
    ellipse(495, 288, 20, 20);
    ellipse(477, 279, 20, 20);
    ellipse(457, 283, 20, 20);
    
      //flower
    fill(250, 250, 100);
    ellipse(472, 304, 45, 45);
    
    //flower stalk
    fill(13, 214, 100);
    line(471, 339, 471, 482);
    
    //leaf
    fill(19, 105, 15)
    triangle(471, 397, 471, 410, 448, 394);
    triangle(471, 413, 471, 427, 495, 418);
    
    //sun
    fill(237, 203, 69);
    ellipse(560, 100, 100, 100);
    
    //rays
    line(499, 106, 455, 106);
    line(524, 153, 500, 180);
    line(592, 158, 602, 189);
    line(625, 94, 641, 94);
    line(596, 47, 615, 16);
    line(526, 41, 511, 15);
     
}

function setup() {
  createCanvas(640, 480);
}

//function mouseClicked() {
  //window.alert(mouseX+ " "+mouseY)
//}
