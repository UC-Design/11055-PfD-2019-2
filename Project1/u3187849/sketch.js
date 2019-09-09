function setup() {
    // Create the canvas for the shapes to be drawn onto
    createCanvas(1500, 700);
    // Background color for the canvas is set to a gray
    background(240);

    // Color and Stroke of skin on face
    fill('#FFE0DA');
    noStroke();

    //Drawing Face
    beginShape();
    vertex(433, 437); // Left Ear
    quadraticVertex(436, 526, 460, 577); // Down the cheek
    quadraticVertex(499, 650, 528, 655); // Left of chin
    quadraticVertex(573, 673, 648, 666); // Right of chin
    quadraticVertex(674, 665, 716, 654); // Right of the cheek
    quadraticVertex(755, 644, 775, 620);
    quadraticVertex(851, 538, 850, 418); // Right Ear
    // The rest are just general vertexes around that the hair will cover so it doesn't need to be accurate
    vertex(800, 125); 
    vertex(523, 126);
    vertex(415, 191);
    endShape(CLOSE);

    // Left Ear
    beginShape();
    vertex(432, 434); // Begins behind the hair
    quadraticVertex(395, 430, 400, 475); // Creates the top of the ear first
    quadraticVertex(404, 505, 415, 522);
    vertex(426, 542);
    quadraticVertex(420, 560, 441, 572);
    quadraticVertex(458, 575, 460, 566);
    endShape(CLOSE);

    // Nose Shadow
    //      Underside of nose shadow
    //fill('#f5d6d0'); // A lighter shadow
    fill('#f0d2cc');
    beginShape();
    vertex(576, 446); // Begins near left nostril
    quadraticVertex(575, 431, 592, 420); // Curves up to above the left nostril
    quadraticVertex(601, 420, 620, 418); // Curves down in between the two nostrils (top)
    quadraticVertex(632, 410, 650, 416); // Curves up above the right nostril
    quadraticVertex(668, 424, 672, 445);  // Curves down next to the right nostril
    quadraticVertex(635, 448, 618, 447); // Curves up in between the two nostril (bottom)
    vertex(600, 450); // Straight line from middle to under left nostril
    quadraticVertex(585, 454, 576, 446); // Curves back to the start of shape
    endShape();

    // The ears are seperated as they are different colours
    // Right Ear
    //fill('#f5d6d0'); // Fills as a much darker colour than the skin
    fill('#fadad4'); // Fills slightly darker than the skin's colour
    beginShape();
    vertex(845, 420); // Top left of ear near face
    quadraticVertex(869, 376, 880, 376); // Around the hair
    quadraticVertex(903, 372, 906, 387); // From hair to top of ear
    quadraticVertex(910, 402, 900, 445); // Top of ear to sides
    quadraticVertex(905, 483, 898, 508); // Middle of ear to earlobe
    quadraticVertex(890, 525, 855, 528); // Earlobe
    quadraticVertex(850, 530, 835, 520); // Earlobe nearest to face
    endShape(CLOSE);

    // Face Shadows
    //      Right side of face shadow
    beginShape();
    vertex(590, 128); // Begins at widow's peak, behind hair
    quadraticVertex(730, 223, 777, 274); // End above the next point so that it can create a curve around
    quadraticVertex(790, 290, 763, 283); // Goes to the right corner of the right eyebrow
    quadraticVertex(747, 278, 714, 278); // Above the right eyebrow
    quadraticVertex(686, 278, 654, 286);
    quadraticVertex(642, 290, 638, 306);
    quadraticVertex(649, 345, 680, 375);
    quadraticVertex(728, 381, 772, 375);
    quadraticVertex(791, 382, 808, 414);
    quadraticVertex(760, 440, 704, 414);
    vertex(663, 390);
    quadraticVertex(645, 382, 656, 395); // Curving down from the nose
    quadraticVertex(675, 406, 679, 418); // Curving around the nostril
    quadraticVertex(690, 440, 646, 451);
    quadraticVertex(688, 470, 733, 485);
    quadraticVertex(750, 508, 720, 547);
    quadraticVertex(700, 592, 736, 647);
    quadraticVertex(755, 644, 775, 620);
    quadraticVertex(851, 538, 850, 418); // Right Ear
    vertex(846, 514);
    vertex(837, 198);
    vertex(757, 117);
    endShape();
    //      Left eye shadow
    beginShape();
    vertex(582, 298);
    quadraticVertex(544, 288, 504, 296);
    quadraticVertex(467, 302, 456, 342);
    vertex(453, 388);
    quadraticVertex(454, 396, 460, 401)
    quadraticVertex(519, 400, 568, 376);
    vertex(590, 315);
    quadraticVertex(594, 304, 588, 302);
    endShape();
    // Bottom Left Shadow
    beginShape();
    vertex(579, 412); // Begins near the nostril
    quadraticVertex(511, 452, 465, 499); // Travels far left of the cheek
    quadraticVertex(450, 526, 460, 577); // Down the cheek
    quadraticVertex(499, 650, 528, 655); // Left of chin
    quadraticVertex(573, 673, 648, 666); // Right of chin
    quadraticVertex(674, 665, 736, 647); // Right of the cheek
    vertex(732, 610); // Elevated point of the previous point
    quadraticVertex(613, 600, 570, 634);
    quadraticVertex(536, 630, 532, 561);
    quadraticVertex(550, 521, 546, 496);
    quadraticVertex(550, 448, 576, 446);
    quadraticVertex(560, 438, 579, 412);
    endShape();
    // Shadow from under nose to chin
    beginShape();
    vertex(574, 446);
    quadraticVertex(600, 490, 594, 495);
    quadraticVertex(621, 537, 631, 566);
    quadraticVertex(670, 582, 652, 632);
    vertex(748, 594);
    vertex(680, 455);
    vertex(672, 445);
    quadraticVertex(635, 448, 618, 447); // Curves up in between the two nostril (bottom)
    vertex(600, 450); // Straight line from middle to under left nostril
    quadraticVertex(585, 454, 576, 446); // Curves back to the start of shape
    endShape();


    // Shine on the Face
    //      Shine on Forehead
    fill('#fce4e1');
    beginShape();
    vertex(548, 134); // Begins behind the hair
    quadraticVertex(532, 194, 540, 225); // Middle of forehead
    quadraticVertex(536, 251, 540, 268); // Near left eyebrow
    quadraticVertex(570, 280, 609, 279); // In between eyebrows
    quadraticVertex(653, 271, 710, 260); // Near right eyebrow
    quadraticVertex(668, 202, 570, 131); // Back under the hair
    endShape();
    //      Shine Under Left Eye

    // Shine Downwards the Nose
    beginShape();
    vertex(604, 335); // Begins on left side
    vertex(596, 395); // Travels along the left of the nose shine
    quadraticVertex(604, 400, 612, 389); // Curves around the bottom of the nose
    quadraticVertex(620, 357, 615, 341); //
    vertex(616, 314);
    endShape();

    // Mouth
    // Top Lip
    fill('#d65b5b');
    noStroke();
    beginShape();
    vertex(548, 513); // Left most point of top lip
    quadraticVertex(565, 500, 600, 491); // Top left peak of top lip
    quadraticVertex(617, 492, 643, 489); // Top right peak of top lip
    //vertex(709, 495);
    quadraticVertex(676, 490, 706, 497); // Top of right most point of top lip
    quadraticVertex(710, 498, 702, 503); // Bottom of right most point of top lip
    vertex(625, 518);
    endShape(CLOSE);
    // Bottom Lip
    fill('#e76a6a');
    noStroke();
    beginShape();
    vertex(548, 513); // Left most point of bottom lip
    quadraticVertex(576, 505, 597, 502); // top left peak of bottom lip
    quadraticVertex(622, 505, 647, 500); // top right of bottom lip
    quadraticVertex(672, 502, 702, 503); // right most point of bottom lip
    quadraticVertex(677, 520, 628, 523); // Bottom of bottom lip
    quadraticVertex(586, 524, 548, 513); // Back to left most point of bottom lip
    endShape(CLOSE);

    // Left Eye and Its Features
    //      Left Eyesocket
    fill('#F4F3EE');
    beginShape();
    vertex(555, 364); // Right most point of left eye
    quadraticVertex(524, 377, 492, 374); // Left most point of left eye
    quadraticVertex(514, 350, 541, 354); // Point near right most point (for more natural curve at eye)
    quadraticVertex(551, 354, 555, 364) // Return at eye
    endShape();
    //      Left Iris
    fill('#542a0e');
    circle(525, 369, 40);
    //      Left Pupil
    fill(40);
    circle(525, 367, 20);
    //      Eye Shine
    fill(255);
    ellipse(519, 360, 15, 7);
    //      The skin on the right corner of the left eye
    fill('#b83f3f');
    beginShape();
    vertex(550, 353);
    vertex(549, 369);
    vertex(555, 364);
    endShape(CLOSE);
    //      Covering the parts that overflow from the eyesocket
    //          Covering bottom of eyesocket
    //fill('#f5d6d0'); // Fills as a darker color
    fill('#fadad4');
    beginShape();
    vertex(555, 364); // Right most point of left eye
    quadraticVertex(524, 377, 492, 374); // Left most point of left eye
    vertex(504, 396);
    vertex(557, 382);
    endShape();
    //          Covering top of eyesocket
    beginShape();
    vertex(503, 313);
    vertex(492, 374); // Left most point of left eye
    quadraticVertex(514, 350, 541, 354); // Point near right most point
    quadraticVertex(551, 354, 555, 364) // Return at eye
    vertex(556, 322);
    endShape();

    // Left Eyebrow
    fill(40);
    beginShape();
    vertex(564, 306); // Highest right most point of the left eyebrow
    quadraticVertex(520, 302, 495, 309); // Highest point of the left eyebrow
    quadraticVertex(460, 318, 461, 358); // Lowest point of the left eyebrow
    quadraticVertex(474, 340, 492, 334); // Going back up the left eyebrow
    quadraticVertex(516, 326, 544, 328); // Lowest right most point of the left eyebrow
    quadraticVertex(556, 322, 564, 306); // Curving eyebrow back to start
    endShape();

    // Right Eye and Its Features
    //      Right Eyesocket
    fill('#F4F3EE');
    beginShape();
    vertex(670, 353); // Highest and most left point of eyesocket
    quadraticVertex(686, 345, 702, 340); // Middle left on the top of the eyesocket
    quadraticVertex(726, 335, 751, 342); // Middle right on the top of the eyesocket
    quadraticVertex(760, 344, 771, 356); // Furthest down point of eyesocket
    quadraticVertex(751, 352, 734, 353); // Middle right on the bottom of the eyesocket
    quadraticVertex(720, 353, 687, 355); // Middle left on the bottom of the eyesocket
    quadraticVertex(679, 356, 675, 353); // Curve around back to the start
    endShape();
    //      Right Iris
    fill('#542a0e');
    circle(718, 352, 40);
    //      Right Pupil
    fill(40);
    circle(718, 352, 20);
    //      The skin on the left corner of the right eye
    fill('#b83f3f');
    beginShape();
    vertex(683, 338);
    quadraticVertex(684, 347, 686, 365);
    vertex(670, 353);
    endShape();

    //      Covering parts that overflow from the eye socket
    //          Covering top of the eye socket
    //fill('#f5d6d0'); // Fills as a darker colour
    fill('#fadad4');
    beginShape();
    vertex(665, 310); // Arbitrary point above the next point
    vertex(670, 353); // Highest and most left point of eyesocket
    quadraticVertex(686, 345, 702, 340); // Middle left on the top of the eyesocket
    quadraticVertex(726, 335, 751, 342); // Middle right on the top of the eyesocket
    quadraticVertex(760, 344, 771, 356); // Furthest down point of eyesocket
    vertex(768, 311); // Arbitrary point above the last point
    endShape(CLOSE);
    // Covering the bottom of the eye socket
    beginShape();
    vertex(772, 375); // Arbitrary point below the next point
    quadraticVertex(751, 352, 734, 353); // Middle right on the bottom of the eyesocket
    quadraticVertex(720, 353, 687, 355); // Middle left on the bottom of the eyesocket
    quadraticVertex(679, 356, 675, 353); // Curve around back to the start
    vertex(670, 353);
    vertex(680, 375); // Arbitrary point below the last point
    endShape(CLOSE);

    // Right Eyebrow
    fill(40);
    beginShape();
    vertex(658, 296);
    quadraticVertex(681, 290, 700, 288);
    quadraticVertex(746, 285, 768, 293);
    quadraticVertex(781, 303, 790, 330);
    quadraticVertex(764, 313, 751, 312);
    quadraticVertex(714, 308, 672, 319);
    quadraticVertex(652, 308, 658, 296);
    endShape();

    // Nostrils
    //      Left Nostril
    fill('#a18c89');
    beginShape();
    vertex(585, 446);
    quadraticVertex(587, 436, 598, 434);
    quadraticVertex(604, 438, 599, 444);
    quadraticVertex(595, 448, 585, 446);
    endShape();
    //      Right Nostril
    beginShape();
    vertex(656, 432);
    quadraticVertex(649, 428, 640, 430); // Top left of nostril
    quadraticVertex(635, 436, 646, 441); // Bottom of right nostril
    quadraticVertex(652, 442, 662, 441);
    quadraticVertex(658, 434, 656, 432);
    endShape();

    // Drawing the Hair
    // Color and Stroke of Hair
    fill(40);
    noStroke();
    beginShape();
    vertex(682, 34.39999); // highest point the hair in terms of y
    quadraticVertex(644, 24, 592, 57);
    quadraticVertex(585, 40, 524, 70);
    quadraticVertex(517, 73, 520, 58); // first 'peak' on hair
    vertex(494, 84); // dip down from high point
    quadraticVertex(484, 93, 460, 92); // second 'peak' on hair
    quadraticVertex(435, 112, 447, 120); // curving down the second 'peak'
    quadraticVertex(400, 147, 390, 210); // going down the hair now
    quadraticVertex(380, 262, 406, 362);
    quadraticVertex(408, 398, 429, 436); // bottom of left ear
    quadraticVertex(437, 448, 436, 433); // going back up the face
    quadraticVertex(428, 358, 438, 298); // hair on left side of face
    quadraticVertex(431, 259, 448, 234); // beginnning of forehead
    quadraticVertex(456, 189, 510, 176); // beginning of fringe
    quadraticVertex(516, 138, 643, 167); // middle of fringe
    quadraticVertex(700, 143, 750, 190); // right of widow's peak
    quadraticVertex(755, 210, 802, 224); // end of rightside fringe
    quadraticVertex(793, 262, 835, 357); // hair on right side of face
    quadraticVertex(825, 390, 845, 435);
    quadraticVertex(860, 376, 880, 376); // hair around the ear
    quadraticVertex(885, 275, 870, 210); // going up the head
    quadraticVertex(881, 187, 830, 145);
    quadraticVertex(850, 123, 789, 80);
    quadraticVertex(769, 35, 682, 34.39999); // curving back the hair
    endShape(CLOSE);

    noLoop();
}

function draw() {
    
}