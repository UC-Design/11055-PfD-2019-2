//x + y variables
uppers2 = 0;
sidewheys = 0;

//misc variables
aye = 4;
t1 = 'hey, gimme a click';
t2 = 'stars are pretty cool, huh?';


function setup(){
   createCanvas(700, 600);
   frameRate(30);
   noCursor();
}

//fill then draw shape
function draw(){
    background('#00000');
    
    //phone
    stroke('#292e4a');
    fill('#d7dcf7');
    rect(130, 90, 300, 470, 20);
    line(230, 110, 350, 110);     
    fill('#e0e5ff');
    circle(280, 535, 30);    
    fill('#3a4478');
    rect(150, 130, 260, 380);    
    
    //bg star splatter     
    for (i = 0; i < 5; i++){
        sidewheys = 170 + Math.random() * 180;
        uppers2 = 130 + Math.random() * 350;
        fill('#d7dcf7');
        circle(sidewheys, uppers2, 4);
    }
    
    //text + text change using aye value as the trigger
    if (aye === 4){
       textSize(14);
       text(t1, 220, 400);
    }
    else {
       text(t2, 200, 400);
    }
    
     //fake cursor
    stroke('#d7dcf7');    
    circle(mouseX, mouseY, 3);
    
    //constellation colours
    fill(aye);
    stroke(aye);
    
    //constellation
    line(240, 250, 260, 230);
    line(240, 250, 260, 275);
    line(260, 230, 260, 275);
    
    line(260, 275, 230, 305);
    line(230, 305, 220, 325);
    line(220, 325, 200, 340);    
    line(200, 340, 185, 370);
    line(185, 370, 210, 360);
    line(210, 360, 230, 360);
    line(230, 360, 250, 350);
    line(250, 350, 265, 345);
    line(265, 345, 280, 350);
    line(280, 350, 330, 350);
    line(330, 350, 350, 360);
    
    line(350, 360, 360, 355);
    line(360, 355, 370, 360);
    line(370, 360, 370, 360);
    line(370, 360, 375, 370);
    line(375, 370, 365, 380);
    line(365, 380, 350, 380);
    line(350, 380, 350, 360);      
    
    circle(240, 250, 5);
    circle(260, 230, 5);
    circle(260, 275, 5);
    
    circle(230, 305, 5);
    circle(220, 325, 5);
    circle(200, 340, 5);    
    circle(185, 370, 5);
    circle(210, 360, 4);
    circle(230, 360, 4);    
    circle(250, 350, 4);
    circle(265, 345, 5);
    circle(280, 350, 4);    
    circle(330, 350, 4);
    
    circle(350, 360, 4);
    circle(360, 355, 5);    
    circle(370, 360, 5);
    circle(375, 370, 5);
    circle(365, 380, 5);    
    circle(350, 380, 4);
 
   
}

function mouseClicked(){
   if (aye === 4){
      aye = 255;
      
    } 
   else {
      aye = 4;
      
   }
}

//unused{
    //background stars - creation, movement & spawn
    //uppers = uppers - 1;
    //if(uppers < 0) {
     //   uppers = height;
    //}  
    
    //for(i = 0; i < 5; i++){
      //   sidewheys = 90 + Math.random() * 300;
        // uppers2 = 60 + Math.random() * 200;
        // stroke('#d7dcf7');
     //circle(sidewheys, uppers, 2);
    //}
        
//}
