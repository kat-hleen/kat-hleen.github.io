//https://www.youtube.com/watch?v=fBqaA7zRO58  this is the reference i used for this code


let bubbles = [];



function setup() {
  let canvasWidth = 560;
  let canvasHeight = canvasWidth * 0.6667;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('sketch-holder');

  const resetButton = select('#resetButton');
  resetButton.mousePressed(resetCanvas)

}

function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r)
  bubbles.push(b);
}

function mousePressed() {
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r)
    bubbles.push(b);
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

function resetCanvas(){
    bubbles = [];
    clear();
}



class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show() {
    stroke(255);
    fill(255,10); 
    ellipse(this.x, this.y, this.r * 2);
  }
}