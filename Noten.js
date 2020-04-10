class Note {
  constructor() {
    this.farbe = '#000000';
  }

  show(x, y) {
    if(this.checkHilfslinie()){
      stroke(this.farbe);
      for(let i = 0; i >= this.relC; i-=2){
        line(x-dist, noteWo(int((this.relC-i)/2)*2), x+dist, noteWo(int((this.relC-i)/2)*2));
      }
    }

    noStroke();
    fill(this.farbe);
    ellipse(x, noteWo(this.relC), dist * 1.2, dist)
  }
  play(){
    //userStartAudio();
    //polySynth.play(this.name + this.octave, 1/2, 0, 1/4);
    if(sound.checked()){
      piano.play(this.name, this.octave, 1);
    }
  }

  licht() {
    this.farbe = '#9900ff';
  }
  aus() {
    this.farbe = '#000000';
  }

  checkHilfslinie() {
    if(this.relC <= 0 || this.relC >= 12){
      return true;
    }else{
      return false;
    }
  }
}

class C extends Note {
  constructor(octave) {
    super();
    this.relC = 0;
    this.relC += octave * 7;
    this.name = 'C';
    this.octave = octave+3;
  }
}

class D extends Note {
  constructor(octave) {
    super();
    this.relC = 1;
    this.relC += octave * 7;
    this.name = 'D';
    this.octave = octave+3;
  }
}

class E extends Note {
  constructor(octave) {
    super();
    this.relC = 2;
    this.relC += octave * 7;
    this.name = 'E';
    this.octave = octave+3;
  }
}

class F extends Note {
  constructor(octave) {
    super();
    this.relC = 3;
    this.relC += octave * 7;
    this.name = 'F';
    this.octave = octave+3;
  }
}

class Fis extends Note {
  constructor(octave) {
    super();
    this.relC = 3;
    this.relC += octave * 7;
    this.name = 'F#';
    this.octave = octave+3;
  }
}

class G extends Note {
  constructor(octave) {
    super();
    this.relC = 4;
    this.relC += octave * 7;
    this.name = 'G';3333333333
    this.octave = octave+3;
  }
}

class A extends Note {
  constructor(octave) {
    super();
    this.relC = 5;
    this.relC += octave * 7;
    this.name = 'A';
    this.octave = octave+3;
  }
}

class H extends Note {
  constructor(octave) {
    super();
    this.relC = 6;
    this.relC += octave * 7;
    this.name = 'B';
    this.octave = octave+3;
  }
}
