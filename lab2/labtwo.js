



//i made objects to hold the attributes of the shape i want to create on the screen
//i also added a draw function to the object so i can call it in the draw() 
// i made objects for the cats ears doing the same thing

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
    //angleMode sets the unit system to measure angles https://p5js.org/reference/p5/angleMode/
    angleMode(DEGREES);
    noStroke();
  }
  
  function draw() {
    background('pink');
    //i called upon these opbjects to draw them onto the canvas
    kitty.draw();
    earone.draw();
    eartwo.draw();
    
     //draw the left eye
  let leftX= 150;
  let leftY = 200;
  

  //calculates the angle formed by a point, the origin, and the positive x-axis https://p5js.org/reference/p5/atan2/
  // calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);
  

  //push() and pop() functions can limit the effect of styles and transformations to a specific group of shapes, images and text
  // in this case my push and pull holds the pupils of the cat for each eye 
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