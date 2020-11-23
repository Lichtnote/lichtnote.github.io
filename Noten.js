class Note {
  constructor() {
    this.farbe = '#000000';
    this.light = false;
    this.vorzeichen = '';
  }

  show(x, c) {
    if(this.checkHilfslinie(c)){
      stroke(this.farbe);
      for(let i = 0; i >= this.relC+c; i-=2){
        line(x-dist, noteWo(int(((this.relC+c)-i)/2)*2), x+dist, noteWo(int((this.relC+c-i)/2)*2));
      }
      for(let i = 12; i <= this.relC+c; i+=2){
        line(x-dist, noteWo(int((this.relC+c)/2)*2-i+12), x+dist, noteWo(int((this.relC+c)/2)*2-i+12));
      }
    }
    if(this.light) {
      noStroke();
      fill(this.farbe);
    } else {
      stroke(this.farbe);
      strokeWeight(48*scale);
      noFill();
    }
    ellipse(x, noteWo(this.relC+c), dist * 1.2, dist)
  }
  play(){
    //userStartAudio();
    //polySynth.play(this.name + this.octave, 1/2, 0, 1/4);
    if(sound.checked()){
      piano.play(this.name, this.octave, 2);
    }
  }

  licht() {
    this.farbe = '#9900ff';
    this.light = true;
  }
  aus() {
    this.farbe = '#000000';
    this.light = false;
  }

  checkHilfslinie(c) {
    if(this.relC+c <= 0 || this.relC+c >= 12){
      return true;
    }else{
      return false;
    }
  }

  addOctave(amount){
    this.octave+=amount;
    this.relC += amount*7;
  }
}

class C extends Note {
  constructor(octave) {
    super();
    this.relC = 0;
    this.relC += octave * 7;
    this.name = 'C';
    this.nick = 'C';
    this.octave = octave+4;
  }
}

class Cis extends Note {
  constructor(octave) {
    super();
    this.relC = 0;
    this.relC += octave * 7;
    this.name = 'C#';
    this.nick = 'Cis';
    this.vorzeichen = '#';
    this.octave = octave+4;
  }
}

class D extends Note {
  constructor(octave) {
    super();
    this.relC = 1;
    this.relC += octave * 7;
    this.name = 'D';
    this.nick = 'D';
    this.octave = octave+4;
  }
}

class Es extends Note {
  constructor(octave) {
    super();
    this.relC = 2;
    this.relC += octave * 7;
    this.name = 'D#';
    this.nick = 'Es';
    this.vorzeichen = 'b';
    this.octave = octave+4;
  }
}

class E extends Note {
  constructor(octave) {
    super();
    this.relC = 2;
    this.relC += octave * 7;
    this.name = 'E';
    this.nick = 'E';
    this.octave = octave+4;
  }
}

class F extends Note {
  constructor(octave) {
    super();
    this.relC = 3;
    this.relC += octave * 7;
    this.name = 'F';
    this.nick = 'F';
    this.octave = octave+4;
  }
}

class Fis extends Note {
  constructor(octave) {
    super();
    this.relC = 3;
    this.relC += octave * 7;
    this.name = 'F#';
    this.nick = 'Fis';
    this.vorzeichen = '#';
    this.octave = octave+4;
  }
}

class G extends Note {
  constructor(octave) {
    super();
    this.relC = 4;
    this.relC += octave * 7;
    this.name = 'G';
    this.nick = 'G';
    this.octave = octave+4;
  }
}

class A extends Note {
  constructor(octave) {
    super();
    this.relC = 5;
    this.relC += octave * 7;
    this.name = 'A';
    this.nick = 'A';
    this.octave = octave+4;
  }
}

class B extends Note {
    constructor(octave) {
      super();
      this.relC = 6;
      this.relC += octave * 7;
      this.name = 'A#';
      this.nick = 'B';
      this.vorzeichen = 'b';
      this.octave = octave+4;
    }
}

class H extends Note {
  constructor(octave) {
    super();
    this.relC = 6;
    this.relC += octave * 7;
    this.name = 'B';
    this.nick = 'H';
    this.octave = octave+4;
  }
}
