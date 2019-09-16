var arms = 0;                   //Create a variable and name it “arms” then give it a value of 0 to have arms down at beginning
function setup(){               //Create “setup” function
  createCanvas(200, 200,);      //Create a 200x by 200y 2d canvas
  rectMode(CENTER);             //center rectangles
}
function draw(){                //Create a Draw function
      background(100);          //Create a beckground colour
    fill(0,0,200);              //Colour the body with blue
    rect(100,100,20,100);       //Create a rectangle body
    fill(255,200,200);          //Colour the head with a skin tone
    ellipse(100,70,60,60);      //Create elliptical head
    fill(255,255,255);          //Colour eyes white
    ellipse(85,70,16,16);       //Create left eye
    ellipse(115,70,16,16);      //Create right eye
    fill(0,0,0);                //Coulour irises black
    ellipse(85,70,9,9);         //Create left iris
    ellipse(115,70,9,9);        //Create right iris
    line(90,150,80,160);        //Create left leg
    line(110,150,120,160);      //Create right leg

    if (arms == 1){                         //If “arms” value is equal to “1”
        noStroke();
        line(90,110,70,130);  //arm         //Draw a noStroke line to cover line
        line(110,110,130,130);    //arm2    //Draw a noStroke line to cover line
        stroke(0);
        line(90,110,70,90);  //arm1         //Draw a stroke(0) line
        line(110,110,130,90);    //arm2     //Draw a stroke(0) line
    } else {                                //If "arms" value is not equal to "1"
        noStroke();
        line(90,110,70,90);  //arm1         //Draw a noStroke line to cover up line
        line(110,110,130,90);    //arm2     //Draw a noStroke line to cover up line
        stroke(0);
        line(90,110,70,130);  //arm         //Draw a stroke(0) line
        line(110,110,130,130);    //arm2    //Draw a stroke(0) line
        
    }
    
 
}
function mouseClicked() {       //Create a “mouseClicked” function and loop
    if (arms == 1) {            //If “arms” value is equal to "1"
        arms = 0;               //Make “arms” value “0"
  } else {                      //If "arms" value not equal to "1"
        arms = 1;               //Make “arms” value “1"
  }
                
}