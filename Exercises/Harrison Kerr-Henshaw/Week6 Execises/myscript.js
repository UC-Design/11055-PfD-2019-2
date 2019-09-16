var stage=1;
function setup() { 
	createCanvas(640, 480); 
	background(4, 53, 0);


} 

function draw() { 
	
	if (mouseIsPressed) { 
		
		stage+=1;
		if(stage>30)
		{
			stage=1;
		}
		
		if(stage>20)
		{
			fill(255, 0,0);
			ellipse(285,190, 80, 80); 
			fill(255, 255,255);
			ellipse(285,280, 80, 80);
			fill(255, 255,255);
			ellipse(285,370, 80, 80); 
		}
		if(stage>10 && stage <20)
		{	
			fill(255, 255,255);
			ellipse(285,190, 80, 80); 
			fill(255, 136, 0);
			ellipse(285,280, 80, 80);
			fill(255, 255,255);
			ellipse(285,370, 80, 80); 
			
		}
		if(stage<10 )
		{	
			fill(255, 255,255);
			ellipse(285,190, 80, 80); 
			fill(255, 255,255);
			ellipse(285,280, 80, 80);
			fill(0,255,0);
			ellipse(285,370, 80, 80); 
			
		}
		
	} else { 
	if(stage>20)
	{
		fill(255, 0,0);
		ellipse(285,190, 80, 80); 
		fill(255, 255,255);
		ellipse(285,280, 80, 80);
		fill(255, 255,255);
		ellipse(285,370, 80, 80); 
	}
	if(stage>10 && stage <20)
	{	
		fill(255, 255,255);
		ellipse(285,190, 80, 80); 
		fill(255, 136, 0);
		ellipse(285,280, 80, 80);
		fill(255, 255,255);
		ellipse(285,370, 80, 80); 
		
	}
	if(stage<10 )
	{	
		fill(255, 255,255);
		ellipse(285,190, 80, 80); 
		fill(255, 255,255);
		ellipse(285,280, 80, 80);
		fill(0,255,0);
		ellipse(285,370, 80, 80); 
		
	}
			
		
			
		
		
			
	} 
	


} 

