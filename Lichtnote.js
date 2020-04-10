var scale;
var dist;

var violin;

var dev;
var doremi;
var ckeys;

var polySynth;
var piano;
var guitar;
var organ;
var edm;

var title;
var solmisation;
var notennamen;
var sound;
var tonartenDiv;
var tonarten;

function setup() {
  title = createP('Lichtnote');
  title.class('title')

  solmisation = createCheckbox('Solmisation', false);
  solmisation.changed(toggleSolmisation);
  notennamen = createCheckbox('Notennamen', false);
  notennamen.changed(toggleNotennamen);

  tonartenDiv = createDiv();
  tonartenDiv.class('dropdown');
  tonarten = createSelect('tonarten');

  sound = createCheckbox('Sound', false);
  sound.id('sound');
  //tonarten.position(10, 10);
  tonarten.option('C-Dur');
  tonarten.option('a-Moll');
  tonarten.class('dropdown');
  tonarten.parent(tonartenDiv);
  tonarten.changed(changeTonart);

  pixelDensity(4.0);
  createCanvas(windowWidth, windowHeight/2);

  scale = 0.1;
  dist = 250 * scale;

  dev = false;
  doremi = "";
  ckeys = 0;

  polySynth = new p5.PolySynth();
  piano = Synth.createInstrument('piano');
  organ = Synth.createInstrument('organ');
  guitar = Synth.createInstrument('acoustic');
  edm = Synth.createInstrument('edm');

  eins = new Notenzeile(new CDur());

  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(height/18);

  violin = loadImage('violin.png');

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
