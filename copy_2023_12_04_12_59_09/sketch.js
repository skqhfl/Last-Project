// One ParticleSystem
let emitter;
let pSlider;

//{!1} One repeller
let repeller;
let att;
let att2;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 350);
  att = new Attractor(100, height/2);
  att2 = new Attractor2(100, height/2);
  
  pSlider = createSlider(0, 500, 100);
  pSlider.position(10, 320);
}

function draw() {
  background(255);
    
  repeller.setPower(pSlider.value());
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
  emitter.applyAttractor(att2);
  emitter.run();

  repeller.show();
  att.show();
}
