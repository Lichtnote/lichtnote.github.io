class Vorzeichen {
  constructor(note) {
    this.note = note;
  }

  show(){
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(0);
    text('♯', dist*4, noteWo(this.note.relC)+5);
  }
}
