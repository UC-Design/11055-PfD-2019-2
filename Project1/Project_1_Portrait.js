//"flow" will be used to change the state of the mouth movements with the switch function
var flow = 1

function setup() {
    createCanvas(700, 500);
}
function mouseClicked() {
        switch (flow){
            case 1:
                flow = 2;
                break;
            case 2:
                flow = 3;
                break;
            case 3:
                flow = 1;
                break;
        }
}
//The function "draw" is used to create the shapes that make up my portrait
function draw() {
    background("#1DA1F2");
    //TORSO
    fill("#6F7C80");
    noStroke();
    circle(350 , 580 , 470);
    //NECK
    fill("#A7AFB2");
    rectMode(CENTER);
    rect(350, 360, 80, 50);
    //MAIN HEAD
    fill("#F1C27D");
    ellipse(350, 200, 230, 310);
    //LEFT SIDE HAIR 'SMOOTHING CIRCLE'
    noStroke();
    fill("#813F0B");
    circle(249, 97, 33);
    //LEFT SIDE HAIR
    ellipse(250, 150, 60, 130);
    quad(268, 200, 260, 230, 240, 245, 225, 185);
    //RIGHT SIDE HAIR 'SMOOTHING CIRCLE'
    circle(451, 97, 33);
    //RIGHT SIDE HAIR
    ellipse(450, 150, 60, 130);
    quad(432, 200, 440, 230, 460, 245, 475, 185);
    //TOP OF HAIR
    ellipse(350, 95, 230, 100);
    //LEFT EYE
    fill("white");
    circle(310, 200, 50);
    //RIGHT EYE
    circle(390, 200, 50);
    //LEFT PUPIL
    fill("black");
    circle(310, 200, 10);
    //RIGHT PUPIL
    circle(390, 200, 10);
    //COLLAR
    fill("#A7AFB2");
    noStroke();
    quad(350, 360, 320, 390, 270, 360, 280, 330);
    quad(350, 360, 380, 390, 430, 360, 420, 330);
    //TIE
    fill("#C21807");
    quad(350, 358, 310, 390, 350, 410, 390, 390);
    quad(360, 410, 340, 410, 310, 510, 390, 510);
    fill("#960018");
    ellipse(350, 410, 50, 30);
    strokeWeight(1);
    stroke("black");

    //I have grouped the three 'emotions' of my portrait below, the switch function controls these three modes by changing the 'flow' variable
    //HAPPY EMOTION
    if (flow == 1) {
        fill("white");
        triangle(300, 260, 350, 300, 400, 260);
        line(290, 170, 330, 170);
        line(370, 170, 410, 170);
    } else { triangle ()};
    //ANGRY EMOTION
    if (flow == 2) {
        fill("white");
        rect(350, 260, 100, 50);
        strokeWeight(1);
        stroke("black");
        line(300, 260, 400, 260);
        line(290, 150, 345, 190);
        line(355, 190, 410, 150);
    } else { rect ()};
    //SUPRISED EMOTION
    if (flow == 3) {
        fill("white");
        circle(350, 280, 65);
        line(290, 150, 330, 150);
        line(370, 150, 410, 150);
    } else { circle ()};
}