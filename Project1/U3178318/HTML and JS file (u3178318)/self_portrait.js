let a = 1;


function setup(){
    createCanvas (400, 350);
    strokeWeight(4);               
    stroke('#013220');
    background('#227c4e');
    fill('#33b873');
    rect(20, 20, 360, 350);
}

//Function that sketches the self portrait//
function draw(){
    
    //To sketch head//
    strokeWeight(2);
    stroke(0);
    fill('#c68642');                //Set colour of head//
    rect(200, 100, 100, 120, 5);    //Draw face// 
    
    //To sketch nose//
    line(260, 170, 275, 170);    //Draw nose//
    line(275, 170, 275, 130);    //Draw nose//
    
    //To sketch eyes//
    fill('black');
    ellipse(250, 130, 10, 10);   //Draw eyes//
    ellipse(290, 130, 10, 10);   //Draw eyes// 
    
    //To sketch mouth//
    line(250, 190, 280, 190);    //Draw mouth//
     
    //To sketch hair//
    fill('#3f3f3f');
    quad(200, 100, 300, 100, 330, 69.2, 200, 69.2);    //Draw top hair//
    triangle(200, 70, 230, 100, 200, 150);             //Draw side hair//
    
    //To sketch neck//
    fill('#c68642');             //Set colour of neck//
    rect(225, 220, 50, 30);      //Draw neck//

    
    //To sktech and change the colour of jacket//
    strokeWeight(2);
    stroke('black');
      if (a == 1){

     fill('#00008b');

     }else{

      fill('#333333');
  }     
    rect(130, 250, 240, 100, 10, 10, 0, 0);     //Draw jacket//         
    

    
    //To sketch and change the colour of shirt//
    strokeWeight(2);
    stroke('black');
      if (a == 2){

     fill('white');

      }else{

      fill('grey');
  }        
    triangle(200, 250, 300, 250, 250, 280);    //Draw shirt//     
    line(180, 350, 180, 310);                  //Draw shirt//
    line(320, 350, 320, 310);                  //Darw shirt//
    
   
    //To sketch glasses//
    noFill();
    rect(237, 120, 25, 20);                    
    rect(280, 120, 23, 20);
    line(210, 125, 237, 125);                //Draw arm//
    line(262.8, 125, 280, 125);              //Draw bridge//
    line(210, 125, 205, 130);                //Draw arm//
}


//Function that allows jacket and shirt to change colours//
function mouseClicked() {
    
  switch (a){                         

          case 1:
              a = 2;
              break;
          case 2:
              a = 1;
              break;
    } 
}