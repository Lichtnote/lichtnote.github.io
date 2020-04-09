function keyPressed() {
  if (key === '1') {
    eins.tonart.tonleiter[0].licht();
    eins.schreibe(0);
    if (solmisation.checked()) {
      changeTest('Do');
    }
  } else if (key === '2') {
    eins.tonart.tonleiter[1].licht();
    eins.schreibe(1);
    if (solmisation.checked()) {
      changeTest('Re');
    }
  } else if (key === '3') {
    eins.tonart.tonleiter[2].licht();
    eins.schreibe(2);
    if (solmisation.checked()) {
      changeTest('Mi');
    }
  } else if (key === '4') {
    eins.tonart.tonleiter[3].licht();
    eins.schreibe(3);
    if (solmisation.checked()) {
      changeTest('Fa');
    }
  } else if (key == '5') {
    eins.tonart.tonleiter[4].licht();
    eins.schreibe(4);
    if (solmisation.checked()) {
      changeTest('Sol');
    }
  } else if (key === '6') {
    eins.tonart.tonleiter[5].licht();
    eins.schreibe(5);
    if (solmisation.checked()) {
      changeTest('La');
    }
  } else if (key === '7') {
    eins.tonart.tonleiter[6].licht();
    eins.schreibe(6);
    if (solmisation.checked()) {
      changeTest('Si');
    }
  } else if (key === '8') {
    eins.tonart.tonleiter[7].licht();
    eins.schreibe(7);
    if (solmisation.checked()) {
      changeTest('Do');
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
    test.remove();
    test = createP('');
  }
}
