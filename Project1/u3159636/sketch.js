//For background change color condition
let value = 255;

//For setup Canvas
function setup() {
  createCanvas(910, 902);
}

function draw() {
  background(value);
 
  //Face
  noStroke()
  fill(247, 221, 212);
  beginShape();
  vertex(578,79);
  vertex(632,174);
  vertex(655,221);
  vertex(672,285);
  vertex(667,396);
  vertex(689,331);
  vertex(706,299);
  vertex(722,285);
  vertex(744,289);
  vertex(749,307);
  vertex(749,326);
  vertex(743,353);
  vertex(738,377);
  vertex(732,397);
  vertex(728,411);
  vertex(718,421);
  vertex(708,431);
  vertex(695,437);
  vertex(680,433);
  vertex(661,471);
  vertex(644,495);
  vertex(618,527);
  vertex(590,553);
  vertex(548,575);
  vertex(512,581);
  vertex(477,574);
  vertex(454,561);
  vertex(432,547);
  vertex(416,531);
  vertex(398,515);
  vertex(384,495);
  vertex(374,475);
  vertex(376,422);
  vertex(382,357);
  vertex(391,297);
  vertex(413,251);
  vertex(454,145);
  vertex(484,110);
  vertex(526,85);
  vertex(578,80);
  endShape();
  
  //Eyes
  fill('white');
  beginShape();
  vertex(528,353);
  vertex(542,327);
  vertex(569,304);
  vertex(603,306);
  vertex(627,322);
  vertex(642,348);
  vertex(608,367);
  vertex(554,367);
  endShape();
  beginShape();
  vertex(468,355);
  vertex(456,327);
  vertex(433,307);
  vertex(406,303);
  vertex(389,311);
  vertex(380,363);
  vertex(406,370);
  vertex(438,369);
  endShape();
  
   //Eyeballs
  noStroke();
  fill(99,57,15);
  ellipse(581,335,60,60);
  ellipse(416,335,60,60);
  fill('black');
  ellipse(581,335,28,28);
  ellipse(416,335,28,28);
  fill('white');
  ellipse(422,325,10);
  ellipse(588,325,10);
  
  
  //Eyebrows
  fill('black');
  beginShape();
  vertex(516,274);
  vertex(594,258);
  vertex(636,271);
  vertex(596,244);
  vertex(554,256);  
  endShape();
  beginShape();
  vertex(484,279);
  vertex(416,261);
  vertex(400,265);
  vertex(400,247);
  vertex(446,257);
  endShape();
  
  //Nose
  stroke('black');
  strokeWeight(4);
  line(489,388,468,421);
  line(468,421,494,440);
  
  //Mouth
  stroke(227, 93, 106);
  strokeWeight(7);
  curve(440,490,508,506,545,497,580,468);
 
  //Neck
  noStroke()
  fill(247, 221, 212);
  beginShape();
  vertex(495,577);
  vertex(510,581);
  vertex(552,572);
  vertex(558,606);
  vertex(496,601);
  endShape();
  
  
  
  //Body
   noStroke()
  fill(247, 221, 212);
  beginShape();
  vertex(305,899);
  vertex(345,677);
  vertex(453,607);
  vertex(495,599);
  vertex(558,604);
  vertex(589,617);
  vertex(698,680);
  vertex(709,897);
  endShape();
  
  //Clother
  noStroke();
  fill('red');
  beginShape();
  vertex(448,608);
  vertex(345,677);
  vertex(305,901);
  vertex(708,901);
  vertex(695,676);
  vertex(586,615);
  vertex(543,651);
  vertex(476,645);
  endShape();
  
  //Hand
  stroke('black');
  line(393,777,388,894);
  line(620,773,619,895);
  //Hair
  noStroke();
  fill(32, 19, 19);
  beginShape();
  vertex(392,-1);
  vertex(361,28);
  vertex(329,73);
  vertex(313,104);
  vertex(295,149);
  vertex(283,191);
  vertex(271,230);
  vertex(260,295);
  vertex(258,360);
  vertex(260,432);
  vertex(266,470);
  vertex(279,499);
  vertex(292,531);
  vertex(300,583);
  vertex(298,616);
  vertex(286,676);
  vertex(305,634);
  vertex(351,583);
  vertex(330,635);
  vertex(353,685);
  vertex(376,715);
  vertex(406,733);
  vertex(446,747);
  vertex(426,703);
  vertex(414,663);
  vertex(439,707);
  vertex(455,727);
  vertex(475,749);
  vertex(486,753);
  vertex(472,721);
  vertex(460,691);
  vertex(448,652);
  vertex(444,613);
  vertex(444,556);
  vertex(376,479);
  vertex(384,341);
  vertex(415,240);
  vertex(439,182);
  vertex(474,125);
  vertex(517,93);
  vertex(576,79);
  vertex(639,3);
  vertex(593,-1);
  vertex(579,81);
  vertex(639,184);
  vertex(672,281);
  vertex(663,402);
  vertex(675,388);
  vertex(688,337);
  vertex(702,304);
  vertex(727,285);
  vertex(744,293);
  vertex(742,197);
  vertex(734,122);
  vertex(705,59);
  vertex(667,15);
  vertex(638,0);
  endShape();
  
  beginShape();
  vertex(678,434);
  vertex(691,436);
  vertex(710,430);
  vertex(731,402);
  vertex(728,578);
  vertex(736,641);
  vertex(758,687);
  vertex(726,658);
  vertex(706,616);
  vertex(693,669);
  vertex(676,709);
  vertex(655,730);
  vertex(632,748);
  vertex(656,707);
  vertex(667,641);
  vertex(650,694);
  vertex(621,731);
  vertex(590,754);
  vertex(566,748);
  vertex(590,700);
  vertex(593,630);
  vertex(584,556);
  vertex(612,530);
  vertex(641,500);
  vertex(660,473);
  endShape();
  
}
function mouseClicked() {
  if (value === 255) {
    value = color(255,246,143);
  } else {
    value = 255;
  }
}