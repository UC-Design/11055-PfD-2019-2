function setup(){
    createCanvas(640,480);
}
function draw(){
    if (mouseIsPressed) {
        fill(0);
    }else{
        fill(326);
    }
    ellipse(mouseX, mouseY,80, 80);

}
function draw(){
    if (mouseIsPressed){
        strokeWeight(4);
    }else{
        strokeWeight(0);
    }
    stroke(350)
}