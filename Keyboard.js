function keyPressed() {
  print(keyCode);
  if (key === '1') {
    eins.noten[1].licht();
    eins.noten[1].play();
    eins.schreibe(0);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Do');
      } else {
        changeTest('La');
      }
    }
    if (notennamen.checked()) {
      changeNote(0);
    }
  } else if (key === '2') {
    eins.noten[2].licht();
    eins.noten[2].play();
    eins.schreibe(1);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Re');
      } else {
        changeTest('Si');
      }
    }
    if (notennamen.checked()) {
      changeNote(1);
    }
  } else if (key === '3') {
    eins.noten[3].licht();
    eins.noten[3].play();
    eins.schreibe(2);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Mi');
      } else {
        changeTest('Do');
      }
    }
    if (notennamen.checked()) {
      changeNote(2);
    }
  } else if (key === '4') {
    eins.noten[4].licht();
    eins.noten[4].play();
    eins.schreibe(3);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Fa');
      } else {
        changeTest('Re');
      }
    }
    if (notennamen.checked()) {
      changeNote(3);
    }
  } else if (key == '5') {
    eins.noten[5].licht();
    eins.noten[5].play();
    eins.schreibe(4);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Sol');
      } else {
        changeTest('Mi');
      }
    }
    if (notennamen.checked()) {
      changeNote(4);
    }
  } else if (key === '6') {
    eins.noten[6].licht();
    eins.noten[6].play();
    eins.schreibe(5);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('La');
      } else {
        changeTest('Fa');
      }
    }
    if (notennamen.checked()) {
      changeNote(5);
    }
  } else if (key === '7') {
    eins.noten[7].licht();
    eins.noten[7].play();
    eins.schreibe(6);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Si');
      } else {
        changeTest('Sol');
      }
    }
    if (notennamen.checked()) {
      changeNote(6);
    }
  } else if (key === '8') {
    eins.noten[8].licht();
    eins.noten[8].play();
    eins.schreibe(7);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Do');
      } else {
        changeTest('La');
      }
    }
    if (notennamen.checked()) {
      changeNote(0);
    }
  } else if (key === '9') {
    eins.noten[9].licht();
    eins.noten[9].play();
    eins.schreibe(8);
    if (solmisation.checked()) {
      if(eins.tonart.moll == false) {
        changeTest('Re');
      } else {
        changeTest('Si');
      }
    }
    if (notennamen.checked()) {
      changeNote(1);
    }
  } else if (key === '0') {
  eins.noten[10].licht();
  eins.noten[10].play();
  eins.schreibe(9);
  if (solmisation.checked()) {
    if(eins.tonart.moll == false) {
      changeTest('Mi');
    } else {
      changeTest('Do');
    }
  }
  if (notennamen.checked()) {
    changeNote(2);
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
    eins.noten[0].aus();
  } else if (key === '2') {
    eins.noten[1].aus();
  } else if (key === '3') {
    eins.noten[2].aus();
  } else if (key === '4') {
    eins.noten[3].aus();
  } else if (key === '5') {
    eins.noten[4].aus();
  } else if (key === '6') {
    eins.noten[5].aus();
  } else if (key === '7') {
    eins.noten[6].aus();
  } else if (key === '8') {
    eins.noten[7].aus();
  } else if (key === '9') {
    eins.noten[8].aus();
  } else if (key === '0') {
    eins.noten[9].aus();
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
