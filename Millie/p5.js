//window.alert(text);
document.write("Hello world again <br>"); 
    
var winter = 1;
var text = "It's cold outside!"
var altText = "It's hot!"
    
if (winter == 1){
    
    document.write(text);
    
} else {document.write(altText);
     
  }

function setup() { 

} 

function draw() { 
    strokeWeight(0);
    fill ('red');
	ellipse(50, 50, 80, 80); 
} 

function setup(){
    createCanvas(640, 480);
}

function draw(){
    if (mouseIsPressed){
        fill(0);
    }else{
        fill(255);
    }
    ellipse(mouseX, mouseY, 100, 80);
}