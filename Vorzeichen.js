class Vorzeichen {
  constructor(note) {
    this.note = note;
  }

  show(i, bassLine) {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(0);
    if (this.note.vorzeichen == '#') {
      text('♯', dist * (4 + i), noteWo(this.note.relC - 2 * bassLine) + 5);
    } else if (this.note.vorzeichen == 'b') {
      text('♭', dist * (4 + i), noteWo(this.note.relC - 2 * bassLine) - 5);
    }
  }
}
