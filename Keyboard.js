function keyPressed() {
  if (key === '1') {
    eins.tonart.tonleiter[0].licht();
    eins.tonart.tonleiter[0].play();
    eins.schreibe(0);
    if (solmisation.checked()) {
      changeTest('Do');
    }
    if (notennamen.checked()) {
      changeNote(0);
    }
  } else if (key === '2') {
    eins.tonart.tonleiter[1].licht();
    eins.tonart.tonleiter[1].play();
    eins.schreibe(1);
    if (solmisation.checked()) {
      changeTest('Re');
    }
    if (notennamen.checked()) {
      changeNote(1);
    }
  } else if (key === '3') {
    eins.tonart.tonleiter[2].licht();
    eins.tonart.tonleiter[2].play();
    eins.schreibe(2);
    if (solmisation.checked()) {
      changeTest('Mi');
    }
    if (notennamen.checked()) {
      changeNote(2);
    }
  } else if (key === '4') {
    eins.tonart.tonleiter[3].licht();
    eins.tonart.tonleiter[3].play();
    eins.schreibe(3);
    if (solmisation.checked()) {
      changeTest('Fa');
    }
    if (notennamen.checked()) {
      changeNote(3);
    }
  } else if (key == '5') {
    eins.tonart.tonleiter[4].licht();
    eins.tonart.tonleiter[4].play();
    eins.schreibe(4);
    if (solmisation.checked()) {
      changeTest('Sol');
    }
    if (notennamen.checked()) {
      changeNote(4);
    }
  } else if (key === '6') {
    eins.tonart.tonleiter[5].licht();
    eins.tonart.tonleiter[5].play();
    eins.schreibe(5);
    if (solmisation.checked()) {
      changeTest('La');
    }
    if (notennamen.checked()) {
      changeNote(5);
    }
  } else if (key === '7') {
    eins.tonart.tonleiter[6].licht();
    eins.tonart.tonleiter[6].play();
    eins.schreibe(6);
    if (solmisation.checked()) {
      changeTest('Si');
    }
    if (notennamen.checked()) {
      changeNote(6);
    }
  } else if (key === '8') {
    eins.tonart.tonleiter[7].licht();
    eins.tonart.tonleiter[7].play();
    eins.schreibe(7);
    if (solmisation.checked()) {
      changeTest('Do');
    }
    if (notennamen.checked()) {
      changeNote(7);
    }
  } else if (key === 'z') {
    eins.undo();
  } else if (key === 't') {
    eins.leiter = !eins.leiter;
  } else if (key === 'c') {
    eins.noten.clear();
  } else if (key === 'd') {
    eins = new Notenzeile(new CDur());
  } else if (key === 'm') {
    eins = new Notenzeile(new Amoll());
  }
  ckeys++;
}

function keyReleased() {
  if (key === '1') {
    eins.tonart.tonleiter[0].aus();
  } else if (key === '2') {
    eins.tonart.tonleiter[1].aus();
  } else if (key === '3') {
    eins.tonart.tonleiter[2].aus();
  } else if (key === '4') {
    eins.tonart.tonleiter[3].aus();
  } else if (key === '5') {
    eins.tonart.tonleiter[4].aus();
  } else if (key === '6') {
    eins.tonart.tonleiter[5].aus();
  } else if (key === '7') {
    eins.tonart.tonleiter[6].aus();
  } else if (key === '8') {
    eins.tonart.tonleiter[7].aus();
  }
  if (ckeys > 0) {
    ckeys--;
  }
  if (ckeys == 0) {
    if(solmisation.checked()){
      test.remove();
      test = createP('');
    }
    if(notennamen.checked()){
      testt.remove();
      testt = createP(' ');
    }
  }
}
