function setup() {
    createCanvas(500, 650);
}

function draw() {
    // Create the background 
    background(242, 242, 242);
    
    //Define the colors
    hair = color(228, 181, 125);
    skin = color(249, 203, 187);
    eyes = color(0, 68, 107);
    white = color(255, 255, 255);
    shadows = color(154, 120, 111);
    pink = color(230, 149, 145);
    black = color(0, 0, 0);
    
    // Create body and fill with black
	fill(black);
	noStroke();
	quad(335, 416, 419, 456, 449, 550, 337, 551);
	rect(112, 419, 229, 132);
	quad(112, 419, 56, 456, 16, 552, 112, 551);
    
    //Create the neck
    noStroke();
    fill(skin);
	quad(155, 366, 194, 453, 238, 470, 280, 444);
    //fill with skin colour
	fill(skin);
	quad(203, 396, 280, 446, 289, 377, 276, 367);
    
    //Create the hair and fill with the hair colour
    fill(hair);
    beginShape();
	vertex(279, 373);
	vertex(267, 413);
	vertex(284, 395);
	vertex(269, 452);
	vertex(337, 433);
	vertex(356, 406);
	vertex(354, 246);
	vertex(338, 165);
	vertex(293, 114);
	vertex(231, 92);
	vertex(184, 106);
	vertex(155, 113);
	vertex(118, 170);
	vertex(105, 238);
	vertex(101, 418);
	vertex(110, 411);
	vertex(115, 448);
	vertex(140, 477);
	vertex(129, 440);
	vertex(167, 468);
	vertex(206, 472);
	vertex(178, 417);
	vertex(205, 432);
	vertex(175, 380);
	vertex(152, 367);
	vertex(142, 348);
	vertex(130, 264);
	vertex(134, 222);
	vertex(149, 192);
	vertex(191, 158);
	vertex(231, 210);
	vertex(331, 287);
	vertex(322, 250);
	vertex(314, 300);
	vertex(250, 250);
	vertex(250, 250);
	endShape();
    
    //Create the face and fill with the skin colour
    fill(skin);
	noStroke();
	beginShape();
	vertex(129, 270);
	vertex(140, 360);
	vertex(152, 370);
	vertex(192, 399);
	vertex(219, 399);
	vertex(247, 399);
	vertex(275, 385);
	vertex(307, 340);
	vertex(326, 300);
	vertex(315, 200);
	vertex(272, 240);
	vertex(189, 157);
	vertex(148, 191);
	vertex(133, 223);
	endShape();
    
    // Create the right eye snd fill with white
	fill(white);
	beginShape();
	vertex(249, 262);
	vertex(259, 251);
	vertex(267, 248);
	vertex(280, 248);
	vertex(292, 252);
	vertex(302, 261);
	vertex(292, 261);
	vertex(280, 267);
	vertex(266, 269);
	vertex(255, 263);
	endShape();
	fill(eyes);
	ellipse(272, 259, 20, 20);
	fill(white);
	ellipse(275, 259, 5, 7);
    
    //Create the left eye and fill with white
    fill(white);
	beginShape();
	vertex(210, 265);
	vertex(202, 257);
	vertex(191, 252);
	vertex(174, 254);
	vertex(162, 261);
	vertex(153, 271);
	vertex(165, 270);
	vertex(174, 273);
	vertex(186, 273);
	vertex(199, 268);
	endShape();
	fill(eyes);
	ellipse(185, 263, 20, 20);
	fill(white);
	ellipse(190, 263, 5, 7);
    
    // Create the left eyebrow and fill with the shadow colour
	fill(shadows);
	beginShape();
	vertex(210, 246);
	vertex(193, 240);
	vertex(173, 241);
	vertex(154, 250);
	vertex(164, 239);
	vertex(179, 234);
	vertex(197, 234);
	vertex(207, 237);
	endShape();
    
    // Create the right eyebrow and fill with the shadow colour
	fill(shadows);
	beginShape();
	vertex(243, 243);
	vertex(249, 232);
	vertex(271, 229);
	vertex(288, 230);
	vertex(299, 238);
	vertex(279, 234);
	vertex(256, 236);
	endShape();
    
    // Create the nose and fill with pink
	fill(pink);
	beginShape();
	vertex(216, 304);
	vertex(212, 313);
	vertex(220, 315);
	vertex(233, 316);
	vertex(253, 306);
	vertex(248, 300);
	endShape();
	fill(pink);
	beginShape();
	vertex(212, 313);
	vertex(220, 292);
	vertex(221, 293);
	vertex(215, 312);
	endShape();
    
	//Create the upper lip and fill with pink
	fill(pink);
	beginShape();
	vertex(190, 343);
	vertex(208, 345);
	vertex(247, 340);
	vertex(267, 333);
	vertex(239, 330);
	vertex(233, 335);
	vertex(225, 331);
	endShape();

	//Create the lower lip and fill with pink
	fill(pink);
	beginShape();
	vertex(190, 343);
	vertex(213, 352);
	vertex(247, 347);
	vertex(267, 333);
	vertex(246, 338);
	vertex(208, 344);
	endShape();
    
    //Create the ears and fill with the skin colour
    fill(skin);
	ellipse(128, 275, 25, 80);
	fill(skin);
	ellipse(320, 275, 25, 80);
}