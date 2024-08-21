class Particle {
    constructor(x, y, c) {
      this.x = x;
      this.y = y;
      this.c = c;
      this.moveSpeed = 0.4;
      this.moveScale = 800;
      this.prevX = x;
      this.prevY = y;
      this.polarity = -1;
      this.hp = 10;
      this.noiseScale = null;//default is 64
;    }
  
    update() {
      this.moveSpeed = map(sin(phase*2),-1, 1, 0.3, 1.4);      
      let angle = noise(this.x / this.moveScale, this.y / this.moveScale, phase * 2) * TWO_PI / map(mouseX, 0, width, 0.25 , 512) * this.moveScale;
      let newX = this.x + cos(angle) * this.moveSpeed;
      let newY = this.y + sin(angle) * this.moveSpeed;
      if (this.x - newX > 0 && this.polarity > 0){
        this.polarity = -1;
        this.hp--;
      }
      else if(this.x - newX < 0 && this.polarity < 0){
        this.polarity = 1;
        this.hp--;
      }    
  
      // Update position
      this.x = newX;
      this.y = newY;
      let nextX = null;
      let nextY = null;
      // Check if particle is out of bounds or moving too slowly
      let distanceFromCenter = dist(width / 2, height / 2, this.x, this.y);
  
      if (distanceFromCenter > (height / 2) || random(1) < 0.001 || this.hp <= 0) {
        this.x = random(width);
        this.y = random(height);
        this.hp = 10;
        
      }
    }
  
    // TODO: add fade here, when this.hp = 10 first time use black circle the same size that will be drawn after the present circle,
    // and the slowly it will become transparent and then  before 0 do slow fade out
    display() {
      fill(this.c);
      let scale = map(dist(width / 2, height / 2, this.x, this.y), 0, height / 2, 1, 0.2);
      ellipse(this.x, this.y, 6 * scale, 6 * scale);
    }
  
    // run the particle frame once
    run() {
      if (dist(width / 2, height / 2, this.x, this.y) > (height / 2) ){
          this.hp = 0;
          this.update();
        }
        else{
          this.update();
          this.display();
        }
    }
  }