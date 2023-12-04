// One ParticleSystem
let emitter;
let pSlider;

//{!1} One repeller
let repeller;
let att;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 350);
  // att = new Attractor(20, height/2);
  
  pSlider = createSlider(0, 500, 100);
  pSlider.position(10, 320);
}

function draw() {
  background(255);
  
    att = new Attractor(width / 2, pSlider.value());
  repeller.setPower(mouseX);
  repeller.move(0.5);
  
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();

  repeller.show();
  att.show();
}
