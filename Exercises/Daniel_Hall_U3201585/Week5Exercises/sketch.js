var x, y;

var eyeCheck = 1;

function setup(){
            createCanvas(640,680);
            x = 320;
            y = 340;
}

function draw(){
            noFill();
            stroke(0)
            strokeWeight(2);
            background('#000000');


            if(eyeCheck == 1){
            //Background Detail 
                stroke(47,133,31);
                line(0,140,140,0);
                line(0,260,260,0);
                line(0,380,380,0);
                line(0,500,500,0);
                line(0,620,620,0);
                line(0,740,740,0);
                line(0,860,860,0);
                line(0,980,980,0);
                line(0,1100,1100,0);
                line(0,1220,1220,0);
            } else {
              //Background Detail 
                stroke(214,100,13);
                line(0,140,140,0);
                line(0,260,260,0);
                line(0,380,380,0);
                line(0,500,500,0);
                line(0,620,620,0);
                line(0,740,740,0);
                line(0,860,860,0);
                line(0,980,980,0);
                line(0,1100,1100,0);
                line(0,1220,1220,0);
            }

            //Return Settings
            noFill();9
            stroke(1)

            //Ears
            fill(244,179,179);
            strokeWeight(0.5);
            ellipse(x+150,y-85,50,95);
            ellipse(x-150,y-85,50,95);
            fill(242,171,195)
            strokeWeight(0.5);
            ellipse(x+150,y-85,40,85);
            ellipse(x-150,y-85,40,85);
            
            //Neck
            fill(244,179,179)
            rect(x-25,y+100,50,80,20);

            //Face Shape
            strokeWeight(0.5);
            fill(244,179,179);
            ellipse(x,y-60,300,360);
            
            //Jacket Shirt
            fill(36,103,24);
            rect(x-130,y+140,260,300,20);
            fill(17,47,11);
            rect(x-130,y+140,260,60,20,20,0,0);

            //Zip
            fill(0);
            strokeWeight(2);
            rect(x-1,y+141,2,200);

            fill(0);
            strokeWeight(1);
            rect(x+75,y+215,2,200);
            rect(x-75,y+215,2,200);

            //Cords
            stroke(0);
            fill(255);
            circle(x-30,y+168,18);
            circle(x+28,y+168,18);
            stroke(255)
            strokeWeight(2);
            rect(x-32,y+168,4,50);
            rect(x+27,y+168,4,65);

            //Glasses Frames
            strokeWeight(8);
            noFill();
            stroke(0)
            rect(x+15,y-121,90,60,20,8,25,40);
            rect(x-105,y-121,90,60,8,20,40,25);
            
            fill(0)
            rect(x-15,y-114,30,6);

            stroke(0);
            strokeWeight(8);
            line(x-104,y-120,130,190);
            line(x+104,y-121,500,190);

            //Nose
            strokeWeight(4);
            line(x-23, y-22, x+44, y-24);
            line(x-8, y-92, x+44, y-24);

            //Mouth
            stroke(102, 6, 17);
            arc(x-25,y+25, 130, 100, 0, PI + QUARTER_PI, CHORD);
            fill(0);
            arc(x-25,y+25, 130, 100, 0, PI + QUARTER_PI, CHORD);

            //Teeth
            stroke(0);
            strokeWeight(0.5)
            fill(255);
            arc(x-55,y-3, 20, 20, 0, PI + QUARTER_PI, CHORD);
            arc(x-35,y+5, 20, 20, 0, PI + QUARTER_PI, CHORD);
            arc(x-15,y+13, 20, 20, 0, PI + QUARTER_PI, CHORD);
            arc(x+5,y+21, 20, 20, 0, PI + QUARTER_PI, CHORD);
            arc(x+25,y+29, 20, 20, 0, PI + QUARTER_PI, CHORD);

            //Beard
            fill(128, 63, 14);
            quad(171,304,175,374,195,378,171,304);
            quad(184,348,197,406,214,392,184,348);
            quad(198,368,211,425,250,425,198,368);
            quad(225,397,244,455,296,435,225,397);


            if(eyeCheck == 1){
                //Left Eye
                fill(255);
                stroke(255);
                ellipse(x-55,y-95,55,40);
                fill(128, 63, 14);
                ellipse(x-55,y-95,30,30);
                fill(0);
                stroke(0);
                ellipse(x-55,y-95,8,8);
                
                //Right Eye
                fill(255);
                stroke(255);
                ellipse(x+55,y-95,55,40);
                fill(128, 63, 14);
                ellipse(x+55,y-95,30,30);
                fill(0);
                stroke(0);
                ellipse(x+55,y-95,8,8);

            } else {
                //Left Eye
                stroke(0);
                fill(0);
                ellipse(x-55,y-95,55,40);
                fill(255);
                ellipse(x-55,y-95,55,30);
                fill(168, 12, 33);
                stroke(168, 12, 33);
                ellipse(x-55,y-95,8,8);
                
                //Right Eye
                fill(0);
                stroke(0)
                ellipse(x+55,y-95,55,40);
                fill(255);
                ellipse(x+55,y-95,55,30);
                fill(168, 12, 33);
                stroke(168, 12, 33);
                ellipse(x+55,y-95,8,8);

                //Tounge
                fill(102, 6, 17);
                arc(x-45,y+50, 45, 80, 0, PI + QUARTER_PI, CHORD);
                
                //Chest & Nips
                fill(244,179,179);
                rect(x-130,y+140,260,300,20);
                fill(217, 104, 183);
                ellipse(x+50,y+220,10,10);
                ellipse(x-50,y+220,10,10);

                //Arms
                fill(0);
                strokeWeight(1);
                rect(x+75,y+215,2,200);
                rect(x-75,y+215,2,200);
                
            }
            
}

function mouseClicked() {
    if (eyeCheck === 0) {
      eyeCheck = 1;
    } else {
      eyeCheck = 0;
    }
    //window.alert(mouseX+" "+mouseY);
}
        
