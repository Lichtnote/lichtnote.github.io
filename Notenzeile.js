class NotenzeileViolin {
  constructor(tonart, octave) {
    this.tonart = tonart;
    this.noten = [];
    this.noten[0] = Object.create(tonart.tonleiter[6]);
    this.noten[0].addOctave(-1+octave);
    for(let i = 0; i < 10; i++){
      this.noten[i+1] = Object.create(tonart.tonleiter[i%7]);
      this.noten[i+1].addOctave(int(i/7)+octave);
    }
    this.leiter = true;
    this.doremi = this.doremi;
  }

  show() {
    for (let i = 0; i < 5; i++) {
      strokeWeight(24*scale);
      stroke(0);
      line(0, height/2-(dist*(2-i)), width, height/2-(dist*(2-i)));
    }

    //shape(violin, dist, height/2-120*scale);
    if (dev) {
      stroke(0, 255, 0);
      noFill();
      rect(dist, height/2, violin.width, violin.height);
      stroke(0, 0, 0);
    }

    if (this.leiter) {
      for (let i = 0; i < this.noten.length; i++) {
        this.noten[i].show(3*i*dist+8*dist, 0);
      }
    } else {
      for (let i = 0; i < this.noten.length; i++) {
        this.noten[i].show(3*i*dist+8*dist, 0);
      }
    }

    textAlign(CENTER, CENTER);
    textSize(150);
    fill(0);
    //text('𝄞', dist*2, height/2+dist/3);
    image(violin, dist*2, height/2, violin.width/4, violin.height/4);


    for(let i = 0; i < this.tonart.vorzeichen.length; i++){
      this.tonart.vorzeichen[i].show(i, false);
    }
  }

  solmi() {
    textSize(500*scale);
    fill(0);
    text(this.doremi, width/2, height*0.75);
  }

  schreibe(i) { //int i
    if (this.leiter == false) {
      this.noten.push(this.noten[i]);
    }
  }

  taste(i) { //int i
    this.noten[0].licht();
    schreibe(0);
    this.doremi = "Do";
  }

  undo() {
    if (this.noten.size() > 0) {
      this.noten.remove(this.noten.length-1);
    }
  }
}

class NotenzeileBass {
  constructor(tonart, octave) {
    this.tonart = tonart;
    this.noten = [];
    this.noten[0] = Object.create(tonart.tonleiter[6]);
    this.noten[0].addOctave(-2+octave);
    for(let i = 0; i < 10; i++){
      this.noten[i+1] = Object.create(tonart.tonleiter[i%7]);
      this.noten[i+1].addOctave(int(i/7)-1+octave);
    }
    this.leiter = true;
    this.doremi = this.doremi;
  }

  show() {
    for (let i = 0; i < 5; i++) {
      strokeWeight(24*scale);
      stroke(0);
      line(0, height/2-(dist*(2-i)), width, height/2-(dist*(2-i)));
    }

    //shape(violin, dist, height/2-120*scale);
    if (dev) {
      stroke(0, 255, 0);
      noFill();
      rect(dist, height/2, violin.width, violin.height);
      stroke(0, 0, 0);
    }

    if (this.leiter) {
      for (let i = 0; i < this.noten.length; i++) {
        this.noten[i].show(3*i*dist+8*dist, 12);
      }
    } else {
      for (let i = 0; i < this.noten.length; i++) {
        this.noten[i].show(3*i*dist+8*dist, 12);
      }
    }

    textAlign(CENTER, CENTER);
    textSize(148);
    fill(0);
    //text('𝄢', dist*2, height/2+dist/4*3);
    image(bassKey, dist*2, height/2-dist/3, bassKey.width/2, bassKey.height/2);

    for(let i = 0; i < this.tonart.vorzeichen.length; i++){
      this.tonart.vorzeichen[i].show(i, true);
    }
  }

  solmi() {
    textSize(500*scale);
    fill(0);
    text(this.doremi, width/2, height*0.75);
  }

  schreibe(i) { //int i
    if (this.leiter == false) {
      this.noten.push(this.tonart.tonleiter[i]);
    }
  }

  taste(i) { //int i
    this.tonart.tonleiter[0].licht();
    schreibe(0);
    this.doremi = "Do";
  }

  undo() {
    if (this.noten.size() > 0) {
      this.noten.remove(this.noten.length-1);
    }
  }
}
