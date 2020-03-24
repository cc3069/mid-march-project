let bubbles = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
   background(0);
	
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}

function mousePressed(){
	bubbles.push(new Bubble(width/2, width/2, 40));
}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}

	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		fill(random(255), 255, 255);
		ellipse(this.x, this.y, this.r * 2);
	}
}

