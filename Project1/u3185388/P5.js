function setup() {
  createCanvas(1024,1000,WEBGL);
}

function draw() {
    let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
    
    background(125);
   if (mouseIsPressed) {
    rotateZ(frameCount * 0.00);
  rotateY(frameCount * 0.00);
    }else{
        rotateZ(frameCount * 0.01);
        rotateY(frameCount * 0.01);
    } 
    
    rotateZ(45);
    ambientLight(50);
    directionalLight(212, 175, 55, 0.25, 0.25, 0);
  pointLight(255, 223, 0, locX, locY, 0);
    
    ambientMaterial(212);
    noStroke();
    translate(0,400);
    sphere(45);
       
    translate(0,-87);
    cylinder(23,200);    

    ambientLight(50);
    directionalLight(169, 169, 169, 0.25, 0.25, 0);
  pointLight(211, 211, 211, locX, locY, 0);
    
      ambientMaterial(169);
    translate(0,-400);
    cone(32,-610);

    translate(0,315);
    box(260,21,65);
    
    translate(100,-206);
    cone(20,-400);
    
    translate(-195,0);
    cone(20,-400);
}
