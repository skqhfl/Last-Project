class Attractor2 {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 150;
  }
  
  move(value) {
    this.position.y -= value;
  }
  
  setPower(value) {
    this.power = map(value, 0, width, -300, 300);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(200, 130, 0);
    circle(this.position.x, this.position.y, 200);
  }

  pull(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force2 = p5.Vector.sub(this.position, particle.position);
    let distance = force2.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force2.setMag(strength);
    return force2;
  }
}
