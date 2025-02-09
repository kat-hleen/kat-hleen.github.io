var kitty = {
    x:200,
    y:200,
    diameter: 200,
    color: 'black',
    draw:function(){
      fill(kitty.color);
      ellipse(kitty.x, kitty.y, kitty.diameter, kitty.diameter);
    }
  };
  
  var earone = {
    x1: 110,
    y1: 160,
    x2: 90,
    y2: 70,
    x3: 160,
    y3: 110,
    color: 'black',
    draw:function(){
      fill(earone.color);
      triangle(earone.x1, earone.y1, earone.x2, earone.y2, earone.x3, earone.y3);
    }
  };
  
  var eartwo = {
    x1: 280,
    y1: 160,
    x2: 300,
    y2: 70,
    x3: 220,
    y3: 110,
    color: 'black',
    draw:function(){
      fill(eartwo.color);
      triangle(eartwo.x1, eartwo.y1, eartwo.x2, eartwo.y2, eartwo.x3, eartwo.y3);
    }
  };
  
  
  
  function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    noStroke();
  }
  
  function draw() {
    background('pink');
    kitty.draw();
    earone.draw();
    eartwo.draw();
    
     //draw the left eye
  let leftX= 150;
  let leftY = 200;
  
  // calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  
  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0,0,50, 50);
  rotate(leftAngle);
  fill('yellow');
  ellipse( 12.5,0,25,25);
  pop();
  
  //draw the right eye
  let rightX = 250;
  let rightY = 200;
  
  //calculate angle 
  
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);
  
  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0,0,50, 50);
  rotate(rightAngle);
  fill('yellow');
  ellipse( 12.5,0,25,25);
  pop();
    
  }