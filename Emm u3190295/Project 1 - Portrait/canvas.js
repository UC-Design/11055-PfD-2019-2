let bg;
let eyecolour;

function setup() {
    createCanvas(960, 1280);
    bg = loadImage('images/me.jpg');
    
    eyecolour = color( random(255), random(255), random(255) );
}

function draw() {
    //background(bg);
    
    //Outline of face
    stroke('black');
    strokeWeight(1);
    line(440,640,405,570);
    line(405,570,380,500);
    line(380,500,380,420);
    line(380,420,389,375);
    line(389,375,390,325);
    line(390,325,400,290);
    line(400,290,410,231);
    line(410,231,423,197);
    line(423,197,450,170);
    line(450,170,486,162);
    line(486,162,600,180);
    line(600,180,630,200);
    line(630,200,690,400);
    line(690,400,734,530);
    line(734,530,765,570);
    line(765,570,730,640);
    line(730,640,672,690);
    line(672,690,620,715);
    line(620,715,590,724);
    line(590,724,540,730);
    line(540,730,515,725);
    line(515,725,495,718);
    line(495,718,472,700);
    line(472,700,459,680);
    line(459,680,440,640);

    //left eye
    
    noStroke();
    fill(eyecolour);
    ellipse(465,377,37,31);
    fill('black');
    ellipse(465,377,12,12);
    
    
    stroke('black');
    strokeWeight(4);
    line(425,375,430,370);
    line(430,370,440,365);
    line(440,365,460,362);
    line(460,362,465,362);
    line(465,362,483,368);
    
    strokeWeight(3);
    line(483,368,500,383);
    
    strokeWeight(2);
    line(500,383,503,393);
    
    strokeWeight(1);
    line(503,393,495,390);
    line(495,390,475,392);
    line(475,392,450,393);
    line(450,393,447,392);
    line(447,392,441,390);
    line(441,390,438,389);
    line(438,389,425,375);
    
    //right eye
    noStroke();
    fill(eyecolour);
    ellipse(659,393,40,32);
    fill('black');
    ellipse(659,393,12,12);
    
    stroke('black');
    strokeWeight(4);
    //line(441,390,640,393); 640 is near eye centre
    line(687,390,682,386);
    line(682,386,672,382);
    line(672,382,662,380);
    line(662,380,640,378);
    line(640,378,630,380);
    
    strokeWeight(3);
    line(630,380,610,392);
    
    strokeWeight(2);
    line(610,392,600,400);
    
    strokeWeight(1);
    line(600,400,610,399);
    line(610,399,615,400);
    line(615,400,635,407);
    line(635,407,645,410);
    line(645,410,655,411);
    line(655,411,675,410);
    line(675,410,690,403);
    
    //eyebrow right
    strokeWeight(27);
    //line(585,332,599,328);
    line(597,330,625,326);
    line(625,326,655,327);
    
    strokeWeight(5);
    line(625,337,670,340);
    line(670,340,661,316);
    line(670,340,650,316);

    //eyebrow left
    strokeWeight(27);
    line(487,330,452,323);
    line(452,323,440,321);
    line(440,321,425,323);
    line(425,323,404,331);
    
    strokeWeight(5);
    line(404,343,392,345);
    line(392,345,393,330);
    
    //nose
    stroke('black');
    strokeWeight(1);
    line(479,479,470,495);
    line(470,495,470,503);
    line(470,503,473,508);
    line(473,508,476,512);
    line(476,512,488,522);
    line(488,522,494,526);
    
    line(525,528,530,525);
    line(530,525,540,522);
    line(540,522,551,525);
    
    line(568,533,576,530);
    line(576,530,582,522);
    line(582,522,585,517);
    line(585,517,584,500);
    line(584,500,580,492);
    line(580,492,572,485);
    
    //lips middle line
    //line(480,640,460,620); //x1 and y1 are exact middle
    line(456,574,460,578);
    line(460,578,480,590);
    line(480,590,519,604);
    line(519,604,538,606);
    line(538,606,585,602);
    line(585,602,612,596);
    line(612,596,630,590);
    
    //top lip   
    line(630,590,600,593);
    line(600,593,584,593);
    line(584,593,570,592);
    line(570,592,560,590);
    line(560,590,540,587);
    line(540,587,536,586);
    line(536,586,520,591);
    line(520,591,513,590);
    line(513,590,495,580);
    line(495,580,460,578);
    
    //lower lip
    line(460,578,476,613);
    line(476,613,485,620);
    line(485,620,495,626);
    line(495,626,515,632);
    line(515,632,550,629);
    line(550,629,570,623);
    line(570,623,588,615);
    line(588,615,620,593);
    
    //left eyelid
    line(410,370,417,360);
    line(417,360,430,352);
    line(430,352,450,347);
    line(450,347,460,348);
    line(460,348,470,352);
    line(470,352,485,360);
    line(485,360,490,364);
    line(490,364,500,373);
    line(500,373,502,378);
    
    //right eyelid
    line(594,400,600,392);
    line(600,392,610,383);
    line(610,383,620,375);
    line(620,375,630,368);
    line(630,368,640,364);
    line(640,364,661,364);
    line(661,364,680,371);
    
    //nose bridge left
    line(510,388,508,398);
    line(508,398,500,405);
    
    //nose bridge right
    line(580,400,580,405);
    line(580,405,585,412);
    
    //neck
    line(544,730,547,770);
    
    //hair outline
    line(412,130,380,190);
    line(380,190,340,380);
    line(340,380,330,480);
    line(330,480,328,770);
    
    line(412,130,460,80);
    line(460,80,500,55);
    line(500,55,560,32);
    line(560,32,660,20);
    line(660,20,670,25);
    line(670,25,689,20);
    line(689,20,740,30);
    line(740,30,780,48);
    line(780,48,820,88);
    line(820,88,876,200);
    line(876,200,890,300);
    line(890,300,900,400);
    
    line(900,400,870,630);
    line(870,630,850,600);
    line(850,600,840,590);
    line(840,590,800,550);
    line(800,550,780,525);
    line(780,525,740,470);
    line(740,470,730,440);
    
    line(870,630,880,670);
    line(880,670,883,680);
    line(883,680,880,699);
    line(880,699,876,740);
    line(876,740,863,770);
    
    line(765,570,790,630);
    line(790,630,790,660);
    
    line(765,570,750,660);
    line(750,660,710,735);
    line(710,735,690,770);
    
    line(675,689,628,730);
    line(628,730,610,750);
    line(610,750,600,770);
    
    line(630,200,600,160);
    line(600,160,585,145);
    line(585,145,530,115);
    
    textAlign(RIGHT);
    textSize(40);
    drawWords(width * 0.45);
        
}

function mousePressed() {
    let d = dist(mouseX, mouseY, 465, 377);
    let c = dist(mouseX, mouseY, 659, 393);
    if (d<20){
      eyecolour = color( random(255), random(255), random(255) );
}
    if (c<20){
      eyecolour = color( random(255), random(255), random(255) );
}
}

function drawWords(x) {
    fill(0);
    text('Click the eyes!', x, 70);
}
