function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(249,209,111);
  ellipseMode(CENTER);
  noStroke();
    
  //hair
  fill(87,60,15); 
  arc(600,260,160,100,PI,TWO_PI);
  
  //face skin
  fill(255,238,222);
  arc(600,260,160,300,0,PI);
    
  //ears
  ellipse(680,304,40,40);
  ellipse(520,304,40,40);
  
  //eyes
  fill(87,60,15);
  ellipse(560,300,28,40);
  ellipse(640,300,28,40);
  ellipseMode(CORNER);
  fill(255);
  ellipse(544,280,16,20);
  ellipse(626,280,16,20);
  
  //eyebrows
  noFill();
  stroke(0);
  curve(560,410,575,290,540,296,575,410);
  curve(650,410,660,298,623,290,640,410);
        
  //nose
  line(600,316,610,324);
  line(610,324,600,330);
    
  //mouth
  curve(570,260,580,350,620,350,630,260);
  }