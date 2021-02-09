let hue = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(30);
  
  blendMode(DIFFERENCE);
  colorMode(HSB, 255);


}

function draw() {
  //blendMode(DIFFERENCE);
  strokeWeight(0);
  background(hue, 255, 255);
  hue += 0.5;
  if (hue > 255) hue = 0;

  if (mouseIsPressed) {

    frameRate(13);
    //strokeWeight(2);
    fill(random(0, 255), random(0, 255), random(0, 255), 70);
    //erase();
    triangle(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    //noErase()

    //erase();
    //triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
    noErase();

  } else {
    frameRate(10);
    fill(random(0, 255), random(0, 255), random(0, 255), 10);
    for (let x = 1; x < 40; x++) {
      for (let y = 30; y < 40; y++) {
        let ray = random(150, 255);
        stroke(ray, ray, random(50));
        strokeWeight(1);
        line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
        //erase();
        //noErase();


      }
    }



  }
  redraw();
  rectMode(CENTER);
  fill(random(0, 255), random(0, 255), random(0, 255), 255);
  strokeWeight(3);
  noFill();
  rect(mouseX, mouseY,random(0, windowWidth), random(0, windowHeight));
  //triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));


}

