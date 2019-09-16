
var L_EyeMin=216;
var L_EyeMax=220;
var L_EyeCurrent=218;

var R_EyeMin=266;
var R_EyeMax=270;
var R_EyeCurrent=268;
var L_reverse=false;
var R_reverse=false;
function setup() { 
	createCanvas(540, 540); 
	background(0,255, 255);


} 

function draw() { 
	
	if (mouseIsPressed) { 
		//textSize(10);
		//strokeWeight(5);
		//
		//text(('L='+L_EyeCurrent+"   R="+R_EyeCurrent), mouseX, mouseY);
		//text(('X='+mouseX+"   Y="+mouseY), mouseX, mouseY);
		//fill(255,0, 255);
		
			
			
	} else { 
		if(L_reverse==false)
		{
			if(L_EyeCurrent >L_EyeMin && L_EyeCurrent<L_EyeMax)
			{
				L_EyeCurrent-=0.025;
			}
			if(L_EyeCurrent < L_EyeMin || L_EyeCurrent > L_EyeMax)
			{	L_EyeCurrent+=0.05;
				L_reverse=true;
			}
		}
		if(R_reverse==false)
		{
			
			
			if(R_EyeCurrent >R_EyeMin && R_EyeCurrent<R_EyeMax)
			{
				R_EyeCurrent-=0.025;
			}
			if(R_EyeCurrent < R_EyeMin || R_EyeCurrent > R_EyeMax)
			{	R_EyeCurrent+=0.05;
				R_reverse=true;
			}
		}
		
		
		if(L_reverse==true)
		{
			if(L_EyeCurrent >L_EyeMin && L_EyeCurrent<L_EyeMax)
			{
				L_EyeCurrent+=0.025;
			}
			if(L_EyeCurrent < L_EyeMin || L_EyeCurrent > L_EyeMax)
			{	L_EyeCurrent-=0.05;
				L_reverse=false;
			}
		}
		if(R_reverse==true)
		{
			
			
			if(R_EyeCurrent >R_EyeMin && R_EyeCurrent<R_EyeMax)
			{
				R_EyeCurrent+=0.025;
			}
			if(R_EyeCurrent < R_EyeMin || R_EyeCurrent > R_EyeMax)
			{	R_EyeCurrent-=0.05;
				R_reverse=false;
			}
		}
		//Hands
		fill(255, 252, 216);
		noStroke(); 
		rect(50, 525, 35, 20);
		
		rect(408, 525,35, 20);
		
		fill(0,0,0);
		quad(50,450,80,350,420,350,450,450);//Shirt A
		quad(80,350,190,300,310,300,420,350);//Shirt B
		stroke(130,150,133);
		fill(130,150,133);
		
		stroke(60,132,131);
	
		stroke(97,61,193);
		//fill(97,61,193);
		//quad(120,330,160,312,190,450,155,450);
		//quad(400,337,350,317,375,450,400,450);
		fill(255,255,255);
		noStroke(); 
		quad(49, 451, 110, 450, 135, 350,79, 349,);//arm Up left
		quad(382, 448, 450, 449, 421, 350,362, 349,);//arm Up right
		
		fill(0,0,0);
		noStroke(); 
		quad(113,446,379,449,372,543,126,542);//Black Stripe
		
		fill(255,255,255);
		noStroke(); 
		quad(124,530,124,527,373,528,373,531);//Whie Stripe
		
		fill(175, 0, 0);
		noStroke(); 
		quad(124,529,124,531,372,534,372,531);//Red Stripe 2
		
		fill(175, 0, 0);
		noStroke(); 
		quad(123.5,526.5,123,524,373,524,373,527);//Shirt C
		
		textSize(30);
		fill(255,255, 255);
		textStyle(BOLD);
		textFont('Trebuchet MS');
		text("RADFORD", 176,406);//RADFORD
		fill(255,255, 255);
		
		textSize(20);
		textFont('Trebuchet MS');
		text("COLLEGE", 198,428);//COLLEGE
		fill(255,255, 255);
			
		fill(255,255,255);
		noStroke(); 
		quad(79,349,134,350,	214,299,189,299);//Whie Stripe
		
		fill(255,255,255);
		noStroke(); 
		quad(420,350,363,350,280,298,310,299);//Whie Stripe
		
		fill(255,255,255);
		noStroke(); 
		quad(50,450,109,449,98,525,42,525);//Whie Stripe
		
		fill(255,255,255);
		noStroke(); 
		quad(384,448,449,449,457,525,395,525);//Whie Stripe
		
		//Left Band
		fill(0,0,0);
		noStroke(); 
		quad(42,515,43,512,99,512,99,515);//Black Stripe
		
		fill(175, 0, 0);
		noStroke(); 
		quad(42,515,42,518,99,518,99,515);//Red Stripe
		
		fill(175, 0, 0);
		noStroke(); 
		quad(42,523,42,520,99,520,99,523);//Red Stripe
		
		fill(0,0,0);
		noStroke(); 
		quad(42,523,43,526,99,526,99,523);//Black Stripe
		
		
		
		
		
		
		//Right Band
		fill(0,0,0);
		noStroke(); 
		quad(393,515,392,512,456,512,456,514);//Black Stripe
		
		fill(175, 0, 0);
		noStroke(); 
		quad(393,515,393,517,456,516,456,514);//Red Stripe 2
		
		fill(175, 0, 0);
		noStroke(); 
		quad(393,519,394,522,456.5,521,457,518);//Red Stripe 2
		
		fill(0,0,0);
		noStroke(); 
		quad(393,522,395,525,457,525,457,521);//Black Stripe
		
		
		
		
		
		fill(42, 42, 42);
		noStroke(); 
		quad(170,307,186,297,213,299,222,337);//Collar A
		
		fill(42, 42, 42);
		noStroke(); 
		quad(177,310,216,345,242,332,235,333);//Collar B
		
		fill(42, 42, 42);
		noStroke(); 
		quad(177,310,216,345,242,332,235,333);//Collar C
		
		fill(42, 42, 42);
		noStroke(); 
		quad(215,345,235,333,275,322,288,328);//Collar D
		
		fill(42, 42, 42);
		noStroke(); 
		quad(260,331,323,304,308,297,282,297);//Collar E
		
		fill(42, 42, 42);
		noStroke(); 
		quad(276,323,225,334,289,327,317,303);//Collar F
		
		fill(42, 42, 42);
		noStroke(); 
		quad(191,459,293,459,307,485,178,485);//Pouch A
		
		fill(42, 42, 42);
		noStroke(); 
		quad(178,485,307,485,307,485,178,485);//Pouch B
		
		fill(42, 42, 42);
		noStroke(); 
		quad(178,485,307,485,307,494,178,494);//Pouch C
		
		fill(255, 252, 216);
		noStroke(); 
		ellipse(245, 230, 130, 170);//head
		
		fill(255, 252, 216);
		noStroke(); 
		ellipse(307,228, 15, 30);//ear
		
		fill(255, 252, 216);
		noStroke(); 
		ellipse(181,228, 15, 30);//ear
		
			fill(255, 240, 185);
		noStroke(); 
		ellipse(181,228, 8, 22);//inner ear
		
			fill(255, 240, 185);
		noStroke(); 
		ellipse(307,228, 8, 22);//inner ear
		
		//mouth 
		
		fill(107, 0, 0);
		noStroke(); 
		ellipse(246,278, 30, 12);
		
		fill(167, 0, 0);
		noStroke(); 
		ellipse(246,278, 20, 6);
		
		//Neck 
		fill(255, 252, 216);
		noStroke(); 
		quad(218,325,233,331,264,326,216,314);//Neck
		quad(218,325,233,331,264,326,275,303);//Neck	
		quad(214,304,216,314,233,331,275,303);//Neck
	
		//Hair
		fill(123, 94, 49);
		noStroke(); 
		quad(183,201,198,196,217,165,191,173);//Hair A
		
		
		fill(123, 94, 49);
		noStroke(); 
		quad(196,177,212,176,200,160,191,173);//Hair A
		
		fill(123, 94, 49);
		noStroke(); 
		quad(195,167,207,174,240,163,224,153);//Hair A
		
		fill(123, 94, 49);
		noStroke(); 
		quad(204,159,207,174,241,157,219,146);//Hair A
		
		fill(123, 94, 49);
		noStroke(); 
		quad(221,143,239,163,251,145,249,149);//Hair A
		
		fill(123, 94, 49);
		noStroke(); 
		quad(238,161,233,142,271,142,265,167);//Hair A
		
		fill(123, 94, 49);
		noStroke(); 
		quad(243,136,243,155,276,167,283,158);//Hair A
		
		fill(123, 94, 49);
		noStroke(); 
		quad(264,162,281,178,294,174,277,150);//Hair A
		
		fill(123, 94, 49);					
		noStroke(); 
		quad(292,166,304,195,289,191,279,176);//Hair A
		
		fill(123, 94, 49);		
		
		stroke(123, 94, 49,230);
		strokeWeight(3);
		noFill();
		//Hair Lines
		line(213,161,211,180);
		line(218,166,217,174);
		line(223,165,222,176);
		line(228,159,226,172);
		line(232,159,230,172);
		line(235,157,235,175);
		line(240,159,240,171);
		line(244,155,245,167);
		line(250,148,250,169);
		line(254,158,254,172);
		line(258,162,258,176);
		line(262,160,262,174);
		line(268,160,267,173);
		line(272,160,274,181);
		//Eyes
		fill(255, 255, 255);					
		noStroke(); 
		ellipse(218,217,25,20);
		
		fill(255, 255, 255);					
		noStroke(); 
		ellipse(268,217,25,20);
		
		fill(171,131, 56);					
		noStroke(); 
		ellipse(218,217,15,10);
		
		fill(171, 131, 56);				
		noStroke(); 
		ellipse(268,217,15,10);
		
		fill(0, 0, 0);					
		noStroke(); 
		ellipse(L_EyeCurrent,217,6,6);
		
		fill(0, 0, 0);				
		noStroke(); 
		ellipse(R_EyeCurrent,217,6,6);
		
		//glasses
		fill(255, 255, 255);			
		stroke(0,0,0,230);
		strokeWeight(3);
		noFill();
		line(238,213,248,213);
		rect(198,202, 40, 30, 20);
		rect(248,202, 40, 30, 20);
		strokeWeight(5);
		line(290,211,307,207);
		line(198,211,183,207);
			quad(238,211,248,211,249,209,237,209);//Hair A
		
		//nose 
		fill(255, 240, 185);			
		noStroke(); 
		quad(244,225,244,225,245,264,232,269);
		
		fill(255, 240, 185);			
		noStroke(); 
		quad(244,225,244,225,245,264,259,269);
	} 
	


} 

