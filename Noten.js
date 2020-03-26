class Note {
  constructor() {
    this.farbe = '#000000';
  }

  show(x, y) {
    noStroke();
    fill(this.farbe);
    ellipse(x, noteWo(this.relC, y), dist * 1.2, dist)
  }
  licht() {
    this.farbe = '#9900ff';
  }
  aus() {
    this.farbe = '#000000';
  }
}

class C extends Note {
  constructor(octave) {
    super();
    this.relC = 0;
    this.relC += octave * 7;
  }
}

class D extends Note {
  constructor(octave) {
    super();
    this.relC = 1;
    this.relC += octave * 7;
  }
}

class E extends Note {
  constructor(octave) {
    super();
    this.relC = 2;
    this.relC += octave * 7;
  }
}

class F extends Note {
  constructor(octave) {
    super();
    this.relC = 3;
    this.elC += octave * 7;
  }
}

class G extends Note {
  constructor(octave) {
    super();
    this.relC = 4;
    this.relC += octave * 7;
  }
}

class A extends Note {
  constructor(octave) {
    super();
    this.relC = 5;
    this.relC += octave * 7;
  }
}

class H extends Note {
  constructor(octave) {
    super();
    this.relC = 6;
    this.relC += octave * 7;
  }
}
