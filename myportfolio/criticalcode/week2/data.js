let cycles = [
  { length: 30, symptoms: ["cramps"] },
  { length: 38, symptoms: ["cramps", "bloating"] },
  { length: 28, symptoms: ["cramps", "headache", "fatigue"] },
  { length: 28, symptoms: ["cramps"] },
  { length: 36, symptoms: ["cramps", "mood", "headache", "bloating"] },
  { length: 28, symptoms: ["cramps", "fatigue", "mood", "headache"] },
  { length: 32, symptoms: ["cramps", "fatigue", "mood", "headache"] },
  { length: 31, symptoms: ["cramps", "bloating", "headache"] },
  { length: 31, symptoms: ["cramps", "mood", "headache", "bloating"] },
  { length: 30, symptoms: ["cramps"] },
  { length: 30, symptoms: ["cramps", "headache"] },
  { length: 32, symptoms: ["cramps"] },
  
  
  //2025
  { length: 30, symptoms: ["cramps"] },
  { length: 32, symptoms: ["cramps"] },
  { length: 38, symptoms: ["cramps"] },
  { length: 31, symptoms: ["cramps", "mood"] },
  { length: 28, symptoms: ["cramps"] },
  { length: 30, symptoms: ["cramps"] },
  { length: 32, symptoms: ["cramps", "mood"] },
  { length: 28, symptoms: ["cramps"] },
  
  // Add up to 24 cycles for two years if you wish
];

let symptomColors = {
  cramps: '#e74c3c',
  fatigue: '#9b59b6',
  bloating: '#f1c40f',
  headache: '#3498db',
  mood: '#2ecc71'
};

function setup() {
  createCanvas(750, 750);
  angleMode(DEGREES);
  textFont('Helvetica');
  noLoop();
}

function draw() {
  background(10);
  translate(width / 2, height / 2);

  let baseRadius = 20;
  let stepRadius = 16;

  // Draw faint spiral as timeline
  noFill();
  stroke(100, 40);
  strokeWeight(9);
  beginShape();
  for (let a = 0; a < 720; a += 5) {
    let r = baseRadius + a * 0.3;
    vertex(cos(a) * r, sin(a) * r);
  }
  endShape();

  // Draw each cycle
  for (let i = 0; i < cycles.length; i++) {
    let c = cycles[i];
    let cycleRadius = baseRadius + i * stepRadius;
    let arcAngle = map(c.length, 24, 35, 200, 360);

    // Arc color based on cycle length
    strokeWeight(map(c.length, 24, 35, 1.5, 8));
    stroke(lerpColor(color('#ff7675'), color('#74b9ff'), map(c.length, 24, 35, 0, 1)));
    noFill();
    arc(0, 0, cycleRadius * 2, cycleRadius * 2, 0, arcAngle);

    // Draw symptom dots
    let step = arcAngle / (c.symptoms.length + 1);
    for (let j = 0; j < c.symptoms.length; j++) {
      let a = step * (j + 1);
      let sx = cos(a) * (cycleRadius + 5);
      let sy = sin(a) * (cycleRadius + 5);
      fill(symptomColors[c.symptoms[j]] || 255);
      noStroke();
      circle(sx, sy, 9);
    }

    // Label the cycle length
//     let labelAngle = arcAngle + 10; // slightly past arc end
//     let lx = cos(labelAngle) * (cycleRadius + 18);
//     let ly = sin(labelAngle) * (cycleRadius + 18);

//     push();
//     translate(lx, ly);
//     rotate(labelAngle);
//     noStroke();
//     fill(200);
//     textSize(10);
//     textAlign(LEFT, CENTER);
//     text(c.length + " days", 0, 0);
//     pop();
//   }

  drawLegend();
}

function drawLegend() {
  push();
  translate(-width / 2 + 30, -height / 2 + 40);
  textAlign(LEFT);
  textSize(12);
  fill(255);
  noStroke();
  text("Symptom Legend:", 0, 0);
  let y = 20;
  for (let key in symptomColors) {
    fill(symptomColors[key]);
    circle(10, y, 10);
    fill(255);
    noStroke();
    text(key, 25, y + 4);
    y += 20;
  }
  pop();
}
}