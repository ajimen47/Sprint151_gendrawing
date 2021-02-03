let hue = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    //frameRate(30);
    strokeWeight(0);
    blendMode(DIFFERENCE);
    colorMode(HSB,255);
    
    
  }
  
  function draw() {
    
   
    background(hue,255,255);
    hue += 0.5;
    if (hue > 255) hue = 0;
 
    if (mouseIsPressed) {
        
        frameRate(13);
        //strokeWeight(2);
        fill(random(0,255),random(0,255),random(0,255),100);
        triangle(mouseX, mouseY, random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight));
        
      } else {
        frameRate(10);
        fill(random(0,255),random(0,255),random(0,255),10);
        for (let x = 1; x < 40; x++) {
          for (let y = 1; y < 40; y++) {
            let ray = random(150,255);
            stroke(ray, ray,random(50));
            strokeWeight(1);
            line(mouseX,mouseY, random(0,windowWidth), random(0,windowHeight));
            
          }
        }
        //strokeWeight(random(5));
        //triangle(random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight), random(0,windowWidth), random(0,windowHeight));
      }

  
  }

 