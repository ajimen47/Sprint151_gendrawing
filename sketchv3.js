let hue = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(30);
  
    msg = 'This project is titled: Living in Light\n'
    msg+= '\n'
    msg+= 'The project has a center point where many lines come out of.\n'
    msg+= '\n'
    msg+= 'Holding down on the mouse will make triangles appear with one vertici sharing the same coordinates as the mouse.\n'
    msg+= '\n'
    msg+= 'In changing the paramaters for the making of the lines I was able to create texture.\n'
    msg+= 'The blendmode(diffrence) makes colors colide and sometimes make interesting intersections.\n'
    msg+= 'The rectangles that appear at the center of the mouse look like lasers and add dimensions.\n'
    msg+= "Go crazy with the mouse!\n"
    msg+= 'Created by Antonio Jimenez'
    alert(msg);
  blendMode(DIFFERENCE);
  colorMode(HSB, 255);
  noCursor()

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
    //fill(random(0, 255), random(0, 255), random(0, 255), 10);
    for (let x = 1; x < 30; x++) {
      for (let y = 1; y < 30; y++) {
        let ray = random(150, 255);
        stroke(ray, ray, random(50));
        strokeWeight(random(1, 2));
        line(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
        //erase();
        //noErase();


      }
    }



  }
  redraw();
  rectMode(CENTER);
  //stroke(random(0, 255), random(0, 255), random(0, 255), 255);
  stroke(255, 255, 255, random(150, 255));
  strokeWeight(random(3));
  noFill();
  rect(mouseX, mouseY, random(0, windowWidth), random(0, windowHeight));
  //triangle(random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight), random(0, windowWidth), random(0, windowHeight));
  noErase();

}

