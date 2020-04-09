var scale;
var dist;

var violin;

var dev;
var doremi;
var ckeys;

var title;
var solmisation;
var notennamen;

function setup() {
  title = createP('Lichtnote');
  title.class('title')
  solmisation = createCheckbox('Solmisation', false);
  solmisation.changed(toggleSolmisation);
  notennamen = createCheckbox('Notennamen', false);
  notennamen.changed(toggleNotennamen);

  pixelDensity(4.0);
  createCanvas(windowWidth, windowHeight/2);

  scale = 0.1;
  dist = 250 * scale;

  dev = false;
  doremi = "";
  ckeys = 0;

  eins = new Notenzeile(new CDur());

  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(height/18);

  violin = loadImage("violin.png");

  smooth();
}

function draw() {
  background(255);
  eins.show();
  gui();
}

function noteWo(s, t) {
  return (height / 2 + dist * 3 - dist / 2 * s);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight/2);
}
