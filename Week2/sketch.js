function setup() {
    createCanvas(400, 400);
    let c1 = color('pink');
    let c2 = color('purple');
    fill(c1);
    stroke(c2);
  }
  
  function draw() {
    background("pink");
    
    for(let i = 0; i < width; i+=10){
      ellipse(i, i, i, i);
    }



    if(mouseIsPressed === true) {
      fill (0);
      
    } else {
      fill (255);
    }
    
    circle(mouseX, mouseY, 100);
  }