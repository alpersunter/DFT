// Complex Unit Circle via p5.js
// by Alper SÜNTER  - May 2019

// You can directly start editing and experimenting with this code at
// https://editor.p5js.org/alpersunter1@gmail.com/sketches/cX1xOPs8w

function setup() {
  createCanvas(300, 300);
  radius = width / 2 - 20;
}
let radius;

// Toggle this variable to change controls
let manual = true;

function draw() {
  background(255);
  complexUnitCircle();


  // Take the direction from mouse location and store normalized coordinates before scaling
  let dir;
  if (manual) {
    dir = createVector(mouseX - width / 2, mouseY - height / 2).normalize();
  } else {
    dir = createVector(Math.cos(PI * frameCount / 300), -Math.sin(PI * frameCount / 300)).normalize();
  }
  let x_norm = dir.x.toFixed(2);
  let y_norm = -dir.y.toFixed(2);
  // Scale the vector so that it is as long as 1 units in axes
  dir.mult(radius);

  // Pick color based on how real or how imaginary a number is.
  strokeWeight(2.5);
  stroke(Math.abs(230 * y_norm), Math.abs(180 * x_norm), 0, 200);
  fill(0, 100);
  // Draw the current vector
  push();
  translate(width / 2, height / 2);
  line(0, 0, dir.x, dir.y);
  noStroke();
  circle(dir.x, dir.y, 6);

  fill(230, 0, 0, 100);
  circle(0, dir.y, 5);
  fill(0, 180, 0, 100);
  circle(dir.x, 0, 5);

  // Draw theta
  fill(0, 110, 160, 150);
  strokeWeight(3);
  stroke(0, 110, 160, 150);
  arc(0, 0, 60, 60, dir.heading(), 0);
  noFill();
  arc(0, 0, 2 * radius, 2 * radius, dir.heading(), 0);
  pop();
  let theta = -dir.heading() / PI;
  showComponents(x_norm, y_norm, theta.toFixed(2));
}

function showComponents(x, y, theta) {

  rectMode(CENTER);
  fill(250, 200);
  noStroke();
  rect(width / 2, height - 15, width * 0.98, 30);


  textAlign(LEFT);
  textSize(18);
  fill(Math.abs(230 * y), Math.abs(180 * x), 0, 200);
  text("z = " + x + " + " + y + "i", 10, height - 7)

  textAlign(RIGHT);
  textSize(18);
  fill(0, 110, 160, 150);
  text("θ = " + theta + "π", width - 10, height - 7)
}

function complexUnitCircle() {
  // Write labels "i" and "1" indicating imaginary and real units
  textSize(20);
  noStroke();
  // Red for i
  fill(230, 0, 0);
  text("i", width / 2 + 10, 18);
  // Green for 1
  fill(0, 180, 0);
  text("1", width - 20, height / 2 - 10);

  // Draw axes
  strokeWeight(2);
  // Red for imaginary
  stroke(230, 0, 0);
  line(width / 2, 0, width / 2, height);
  // Green for real
  stroke(0, 180, 0);
  line(0, height / 2, width, height / 2);

  // Draw the unit circle
  noFill();
  stroke(50);
  strokeWeight(1);
  circle(width / 2, height / 2, radius);

  // Mark points for z = 1 + 0i and z = 0 + i
  noStroke();
  fill(230, 0, 0);
  circle(width / 2, 20, 5);
  fill(0, 180, 0);
  circle(width - 20, height / 2, 5);


}
