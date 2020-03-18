var scale;
var dist;

var dev;
var doremi;
var ckeys;

function setup() {
  pixelDensity(4.0);
  createCanvas(windowWidth, windowHeight);

  scale = 0.1;
  dist = 250 * scale;

  dev = false;
  doremi = "";
  ckey = 0;

  eins = new Notenzeile(new CDur());

  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(height/18);

  smooth();
}

function draw() {
  background(255);
  eins.show();
}

function noteWo(s, t) {
  return (height / 2 + dist * 3 - dist / 2 * s);
}
