let rad = 50; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 10; // Speed of the shape
let yspeed = 10; // Speed of the shape

let xdirection = 2; // Left or Right
let ydirection = 3; // Top to Bottom


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(70, 103, 156);
  frameRate(30);
  strokeWeight(5)
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {

  //background(random(0,255), random(0,255), random(0,255));

  //fill(0, 0, 0);
  //circle(mouseX, mouseY, random(10,50));
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
    //background(random(0,255), random(0,255), random(0,255));
    fill(random(0,255), random(0,255), random(0,255));
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
    //background(random(0,255), random(0,255), random(0,255));
    fill(random(0,255), random(0,255), random(0,255));
    
  }

  // Draw the shape
  circle(xpos, ypos, random(5,25), random(15,50));
  
}


