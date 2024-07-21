// Ex06_03

let beach = ["#D9C6B0", "#314650", "#2D4761", "#45718C", "#B6E1F2"];
let palette = beach;

let s = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(palette[0]);
  smooth();
  noStroke();

  for(let x = 0; x < width; x += s){
    for(let y = 0; y < height; y += s) {
      fill(palette[int(random(1, 5))]);
      rect(x, y, s, s);
    }
  }
}


function draw() {
   fill(palette[int(random(1, 5))]);
 let x = int(random(width/s))*s;
 let y = int(random(height/s))*s;
  rect(x, y, s, s);
}
