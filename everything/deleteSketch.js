
let bubs = []; 
let score = 0;
//delete bubbles
function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 1000; i++) {
      let x = random(width);
      let y = random(height);
      let sz = random(10, 100);
      let col = color(random(255), random(255), random(255));
  
      let b = new Bubble(x, y, sz, col); // make a new bubble
      bubs.push(b); // add it to the array
    }
}
function draw() {
  background(220);
  
  textSize(40);
  noStroke();
  fill(0);
  text(score, 50,50);
  for (let bub of bubs) {
    bub.display();
    bub.update();
    bub.burst();
  }

}

class Bubble {
  constructor(tempX = 200, tempY = 200, tempSize = 50, tempColor = 0) {
    this.x = tempX;
    this.y = tempY;
    this.size = tempSize;
    this.color = tempColor;
    this.alive = true;
  }

  display() {
    if (this.alive) {
      noFill();
      strokeWeight(3);
      stroke(this.color);
      ellipse(this.x, this.y, this.size);
    }
  }

  update() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  burst() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size / 2) {
      // over the bubble
      this.alive = false;
      this.x = 1000000;
      this.y = 1000000;
      score++;
    }

  }

}

