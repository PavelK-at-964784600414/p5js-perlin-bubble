class ParticleSystem {
    constructor(numParticles) {
      this.particles = [];
      this.colors = [
        color("#67b7da"), color("#6894dd"), color("#6870db"),
        color("#8067dc"), color("#aaaaaa"), color("#f9d3ef"),
        color("#dec1ee"), color("#c5dcee"), color("#f6c5c5"),
        color("#a300ff"), color("#4842ee"), color("#ff02a8"),
        color("#fd8b16"), color("#ffdd11")
      ];
      for (let i = 0; i < numParticles; i++) {
        this.addParticle();
      }
    }
    // add particel to the system
    addParticle(xOff = 0, yOff = 0) {
      let c = this.colors[floor(random(this.colors.length))];
      this.particles.push(new Particle(random(width), random(height), c));
    }
    
    // will run one frame
    //TODO: Calculate the ceffocient
    run() {
      let coefficient = 
      console.log(this.particles.length);
      for (let particle of this.particles) {
        particle.run();
      }
    } 
  }
  