//GLITTER BACKGROUND
let glitterX = [];
let glitterY = [];
let starAlpha = [];

for (let i = 0; i < 50; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  glitterX.push(x);
  glitterY.push(y);
  starAlpha.push(alpha);
}

//BACKGROUND AND SCENERY

function scenery() {
  push();

  background(216, 167, 216);

  // Fruitbowl

  fill(194, 130, 133);
  stroke(0, 0, 0);
  strokeWeight(1);
  beginShape();
  vertex(10, 500);
  bezierVertex(161, 809, 525, 809, 630, 499);
  endShape();

  strokeWeight(1);
  fill(253, 226, 149);
  stroke(0, 0, 0);
  ellipse(320, 500, 620, 100);

  textSize(45);
  textStyle(BOLD);
  fill("PINK");
  textFont("snell roundhand");
  text("Fruitbowl", 223, 630);

  // orange

  fill(247, 152, 29);
  stroke(255, 125, 0);
  strokeWeight(10);

  beginShape();
  vertex(356, 498);
  bezierVertex(513, 554, 557, 448, 547, 371);
  endShape();

  fill(254, 216, 177);
  noStroke();
  beginShape();
  vertex(423, 454);
  bezierVertex(485, 496, 509, 400, 482, 413);
  endShape();

  fill(255, 255, 255);
  stroke(255, 255, 255);
  strokeWeight(3);

  line(437, 462, 401, 505);
  line(456, 466, 452, 507);
  line(475, 458, 499, 490);
  line(489, 442, 527, 455);
  line(494, 422, 542, 405);

  //apple
  fill(217, 33, 33);
  stroke(138, 3, 3);
  strokeWeight(2);

  beginShape();
  vertex(306, 405);
  bezierVertex(192, 374, 236, 547, 313, 514);
  endShape();

  beginShape();
  vertex(306, 405);
  bezierVertex(398, 344, 422, 552, 310, 512);
  endShape();

  fill(101, 67, 33);
  noStroke();
  ellipse(314, 514, 11);

  stroke(101, 67, 33);
  fill(216, 167, 216);
  strokeWeight(4);
  beginShape();
  vertex(310, 405);
  bezierVertex(285, 371, 320, 343, 338, 355);
  endShape();

  fill(174, 212, 148);
  stroke(73, 141, 28);
  strokeWeight(2);

  beginShape();
  vertex(308, 407);
  bezierVertex(324, 356, 364, 411, 310, 406);
  endShape();

  beginShape();
  vertex(308, 407);
  bezierVertex(324, 356, 364, 411, 310, 406);
  endShape();

  beginShape();
  vertex(308, 407);
  bezierVertex(286, 356, 236, 411, 320, 406);
  endShape();

  pop();
                             
}

//GRAPE

function grape(x, y) {
  push();
  translate(x, y);

  fill(167, 88, 162);
  stroke(103, 1, 113);
  strokeWeight(1);
  ellipse(110, 160, 55);
  ellipse(180, 175, 50);
  ellipse(120, 180, 50);
  ellipse(140, 144, 45);
  ellipse(175, 150, 55);
  ellipse(160, 195, 50);
  ellipse(130, 220, 50);
  ellipse(160, 225, 40);
  ellipse(140, 180, 50);
  ellipse(145, 245, 35);
  ellipse(125, 255, 35);

  fill(174, 212, 148);
  stroke(73, 141, 28);
  strokeWeight(2);

  beginShape();
  vertex(144, 76);
  bezierVertex(70, 108, 161, 123, 144, 76);
  endShape();

  noFill();
  stroke(101, 67, 33);
  strokeWeight(4);
  beginShape();
  vertex(160, 127);
  bezierVertex(195, 71, 145, 30, 118, 38);
  endShape();

  beginShape();
  vertex(160, 58);
  bezierVertex(140, 70, 140, 90, 140, 90);
  endShape();

  pop();
}

function startScreen() {
  push();
  background(216, 167, 216);
  textSize(50);
  fill("purple");
  text("Click to Start", 155, 160);
  fill("orange");
  stroke(255, 125, 0);
  strokeWeight(2);
  ellipse(300, 220, 70);

  noFill();
  strokeWeight(3);
  stroke(65, 42, 42);
  beginShape();
  vertex(321, 161);
  bezierVertex(284, 158, 300, 200, 300, 189);
  endShape();
  beginShape();

  fill(174, 212, 148);
  stroke(73, 141, 28);
  strokeWeight(2);
  vertex(298, 186);
  bezierVertex(310, 148, 338, 176, 298, 186);
  endShape();

  stroke(255, 255, 255);
  fill(255, 255, 255);
  pop();
}

let gameIsRunning = false;
let grapeY = 0;
let velocity = 0.1;
let gameEnded = false;
let gameStart = false;

const acceleration = 0.1;



function draw() {
  if (gameIsRunning) {
    scenery();
    grape(10, grapeY);
    noStroke();

    if (gameIsRunning) {
      grapeY = grapeY + velocity;
      velocity = velocity + acceleration;

      if (keyIsDown(32)) {
        velocity = velocity - acceleration * 2;
      }

      if (grapeY >= 250) {
        gameIsRunning = false;
        textSize(50);
        fill("purple");
        text("GAME OVER", 150, 160);
        console.log("GAME OVER");

        // Orange emoji for game over
        fill("orange");
        stroke(255, 125, 0);
        strokeWeight(2);
        ellipse(300, 220, 70);

        noFill();
        strokeWeight(3);
        stroke(65, 42, 42);
        beginShape();
        vertex(321, 161);
        bezierVertex(284, 158, 300, 200, 300, 189);
        endShape();
        beginShape();

        fill(174, 212, 148);
        stroke(73, 141, 28);
        strokeWeight(2);
        vertex(298, 186);
        bezierVertex(310, 148, 338, 176, 298, 186);
        endShape();

        stroke(255, 255, 255);
        fill(255, 255, 255);
        // arc(285, 210, 15, 25, PI/1.5, PI+ PI/1.5, PIE);
      }
    }
  } else {
    startScreen();
  }

  for (let index in glitterX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 495);
    ellipse(glitterX[index], glitterY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.1;
  }
}

// Game restart with click
function resetGame() {
  grapeY = 0;
  gameIsRunning = true;
}

function mousePressed() {
  if (!gameIsRunning) {
    resetGame();
    gameStart = true;
  }
}
