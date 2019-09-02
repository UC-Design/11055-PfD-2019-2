

//Creating Canvas 640 wide and 480 long
function setup () {
    createCanvas(640, 480); 

}

function draw(){
fill(180);
rect(250, 20, 100, 300);

circle(300, 80, 70);
circle(300, 170, 70);
circle(300, 260, 70);

if(mouseIsPressed) {
    if (mouseButton === LEFT) {
        fill("green");
        circle(300, 80, 70);
    } else {
        //noFill();
    }

   if(mouseButton === RIGHT) {
        fill("orange");
        circle(300, 170, 70);
    } else {
        //noFill();
    } 
    
    if(mouseButton === CENTER) {
        fill("red");
        circle (300, 260, 70);
    }else {
        //noFill();
    }
    
}
}

