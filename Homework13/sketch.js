var playerx = 50;
var playery = 550;
var clickx = -30;
var clicky = -30;
var x = [];
var y = [];
var diameter = [];

function setup() {
    createCanvas(800,600);
    for(var i = 0; i < 5; i++) {
       x[i] = Math.floor(Math.random() * 800 + 10);
       y[i] = Math.floor(Math.random() * 600 + 10);
       diameter[i] = Math.floor(Math.random() * 25 + 10);
    }
}
function draw() {
    background(255,236,249);
    spawnPlayer();
    movePlayer();
    clickObstacle();
    spawnObs();
    moveObs();
    spawnExit();
    if(playerx >= 720 && playery <= 60) {
      win();
    }
}
function spawnPlayer() {
  fill(212,85,255);
  circle(playerx,playery,50);
}
function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    playery -= 5;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playery += 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerx += 5;
  }
  else if (keyIsDown(LEFT_ARROW)) {
  playerx -= 5;
  }
}
function spawnExit() {
  fill(212,85,255);
  square(730,0,70);
  fill(0,0,0);
  textSize(20);
  text('Exit',750,40);
}
function win() {
  fill(0,0,0);
  textSize(30);
  text('YOU WIN!',350,300);
}
function clickObstacle() {
  fill(230,0,0);
  circle(clickx, clicky, 35);
}
function mousePressed() {
   clickx = mouseX;
   clicky = mouseY;
}
function spawnObs() {
   for(var i = 0; i < x.length; i++) {
      fill(Math.floor(Math.random()* 255),Math.floor(Math.random() * 255),Math.floor(Math.random()* 255));
      if(i % 2 == 0) {
         circle(x[i],y[i],diameter[i]);
      }
      else {
         square(x[i],y[i],diameter[i]);
      }

   }

}
function moveObs() {
   for(var i = 0; i < x.length; i++) {
      if(i % 2 == 0) {
         x[i] -= Math.floor(Math.random() * 15) + 1;
         y[i] -= Math.floor(Math.random() * 5) + 1;

      }
      else {
         x[i] += Math.floor(Math.random() * 2) + 1;
         y[i] += Math.floor(Math.random() * 3) + 1;
      }
      if(x[i] <= 0) {
         x[i] = width;
       }
       else if(x[i] >= width) {
         x[i] = 0;
       }
       if(y[i] <= 0) {
         y[i] = height;
       }
       else if(y[i] >= height) {
         y[i] = 0;
       }
   }

}
