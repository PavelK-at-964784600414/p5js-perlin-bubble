let particleSystem;
let phase = 0;
let amount = 5000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(12);
  noStroke();
  particleSystem = new ParticleSystem(amount);
  smooth(4);
  blendMode(SUBTRACT);
}

function draw() {
  //background(0);
  // Draw a translucent rectangle over the entire canvas
  fill(0, 30);  // Adjust the second parameter to control the fade speed (0-255)
  rect(0, 0, width, height);
  particleSystem.run();
  
  phase += 0.0006;
}



