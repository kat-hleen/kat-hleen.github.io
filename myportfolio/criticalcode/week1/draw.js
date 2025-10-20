let brushColor = '#000000';
let brushSize = 8;
let erasing = false;

function setup() {
 let c = createCanvas(800, 500);
  c.id('myCanvas');
  background(255);


   const saveBtn = document.getElementById("saveBtn");
  const clearBtn = document.getElementById("clearBtn");

  saveBtn.addEventListener("click", () => saveCanvas("myDrawing", "png"));
  clearBtn.addEventListener("click", () => background(255));

}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(brushSize);
    stroke(brushColor);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

// Toggle between brush and eraser with key presses
function keyPressed() {
  if (key === 'e' || key === 'E') {
    erasing = !erasing;
    brushColor = erasing ? 255 : '#000000';
  } else if (key === '[') {
    brushSize = max(1, brushSize - 2);
  } else if (key === ']') {
    brushSize += 2;
  } else if (key === 'c' || key === 'C') {
    background(255); // clear screen
  } else if (key === 's' || key === 'S') {
    saveCanvas('drawing', 'png'); // save image
  }
}
