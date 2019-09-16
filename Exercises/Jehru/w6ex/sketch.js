function setup() {
    createCanvas(500, 500);

}

function draw(){

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    //var seconds = date.getSeconds();

    console.log(hours);
    console.log(minutes);

    //Spitting out the numbers on a page and only doing it 20 times
    var i;
    for(i = 0; i < 60; i++) {
        textSize(30);
        text(hours, 10, 30);
        text(":", 50, 30);
        text(minutes, 70, 30);

    }


    noStroke();
    fill(255, 159, 100);
    ellipse(250, 250, 200);


if(mouseIsPressed){
    clear();
}

}
