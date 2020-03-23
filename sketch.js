let img; 
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;

function setup() {
  createCanvas(windowWidth,windowHeight);
  img =  loadImage('assets/boxHill.jpg'); 
  img2 = loadImage('assets/town.jpg'); 
  img3 = loadImage('assets/deer.jpg'); 
  img4 = loadImage('assets/duck.jpg'); 
  img5 = loadImage('assets/ocean.jpg'); 
  img6 = loadImage('assets/trail.jpg'); 
  angleMode(DEGREES);
}
function draw(){
  //box-hill
  push();
  scale(3.0)
  translate(50/ 2, 50 / 2);
  rotate(90);
  image(img, -50,-50,80,80);
  pop();
  //chatter
  push();
  scale(3.0);
  translate(65/ 2, 65 / 2);
  rotate(90);
  image(img2, -65,-65,80,80);
  pop();
  //deer
  push();
  scale(3.0);
  translate(70/ 2, 70 / 2);
  rotate(60);
  image(img3, -70, -70, 80, 80);
  pop();
  //duck
  push();
  scale(3.0);
  translate(85/ 2, 85 / 2);
  rotate(90);
  image(img4, -85, -85, 80, 80);
  pop();
  //ocean
  push();
  scale(3.0);
  translate(100/ 2, 100 / 2);
  rotate(90);
  image(img5, -100, -100, 80, 80);
  pop();
  //trail
  push();
  scale(3.0);
  translate(115/ 2, 115/ 2);
  rotate(90);
  image(img6, -115, -115, 80, 80);
  pop();
  }
  
  