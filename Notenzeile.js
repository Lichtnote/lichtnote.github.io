class Notenzeile {
  constructor(tonart) {
    this.tonart = tonart;
    this.noten = [];
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
      for (let i = 0; i < this.tonart.tonleiter.length; i++) {
        this.tonart.tonleiter[i].show(3*i*dist+6*dist, this.tonart.tonleiter[0].relC);
      }
    } else {
      for (let i = 0; i < this.noten.length; i++) {
        this.noten[i].show(3*i*dist+6*dist, this.tonart.tonleiter[0].relC);
      }
    }

    image(violin, dist*2, height/2, violin.width/4, violin.height/4);
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
