let x;
let y;
let speedX;
let speedY;
function setup() {
  createCanvas(400, 400);
  //sets all of the variables to be random, so they're different every time they are run.
  x = random(0, 400);
  y = random(0, 400);
  speedX = random(0, 10);
  speedY = random(0, 10);
}

function draw() {
  background(220);
  //these statements make it so the speed will always be applied to both x and y.
  x = x + speedX;
  y = y + speedY;
  addSprite(x, y, 0.5);
  //if statements to make sure that they sprite bounces off the edges of the canvas.
  if (x > 310) {
    speedX = speedX * -1;
  }
  if (x < -10) {
    speedX = speedX * -1;
  }

  if (y > 323) {
    speedY = speedX * -1;
  }
  if (y < -10) {
    speedY = speedX * -1;
  }
}
//creates a function to draw my sprite, which is a frog
function addSprite(x, y, size) {
  fill("purple");
  push();
  translate(x, y);
  scale(size);
  fill("white");
  ellipse(50, 65, 50, 50);
  ellipse(150, 65, 50, 50);
  fill("black");
  ellipse(50, 60, 50, 30);
  ellipse(150, 60, 50, 30);
  ellipse(30, 65, 10, 10);
  ellipse(170, 65, 10, 10);
  fill("lightgreen");
  ellipse(100, 100, 200, 90);
  fill("rgb(249,236,190)");
  ellipse(100, 110, 200, 68);
  pop();
}
//this function makes it so the sprite can be moved manually by pressing one of the specified keys.
function keyPressed (){
    if (keyCode === LEFT_ARROW) {
      speedX = speedX * -1
    } else if (keyCode === RIGHT_ARROW){
      speedX = speedX * -1
    } else if (keyCode === UP_ARROW){
       speedY = speedY * -1        
    } else if (keyCode === DOWN_ARROW){
      speedY = speedY * -1
    }

  }
