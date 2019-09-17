
//traffic light 
function setup() {
    createCanvas(600, 120);
}
function draw() {
    //define variables
    var redLight = "white";
    var yellowLight = "white";
    var greenLight = "white";
    
    background(220);
    //Place the rectangle in the center
    rectMode(CENTER);
    fill(140);
    //draw the surrounding rectangle 
    rect(width / 2, height / 2, 50, 100);  
    
    if(mouseY > (height / 2 + 20)) {
        greenLight = 'green'//set the greenLight varable to green 
    }
    else if(mouseY > height / 2- 20) {
        yellowLight = 'yellow' // set the yellowLight variable to yellow 
    }
    else {
        redLight = 'red'; //set the redLight variable to red 
        
        //If light is the highest value= green, else if in the middle then value = yellow and else = red
    }
 fill(redLight);
    ellipse(width / 2, height / 2 - 25, 20, 20);
    fill(yellowLight);
    ellipse(width / 2, height / 2, 20, 20);
    fill(greenLight);
    ellipse(width / 2, height / 2 + 25, 20, 20);

}
    