
function setup(){
    createCanvas(300,250);
    background('red')
}
function draw(){
    if (mouseIspressed) {
        fill('blue');
        strokeweight(3);
    }else{
        fill(260);
        strokeweight(2);
    }
    rect(mouseX,mouseY,mouse32,mouse20);
}
//stroke (230)
//setting up the canvas and tools of my artwork.