function keyTyped() {
  if (key === '1') {
    eins.tonart.tonleiter[0].licht();
    eins.schreibe(0);
    doremi = "Do";
  } else if (key === '2') {
    eins.tonart.tonleiter[1].licht();
    eins.schreibe(1);
    doremi = "Re";
  } else if (key === '3') {
    eins.tonart.tonleiter[2].licht();
    eins.schreibe(2);
    doremi = "Mi";
  } else if (key === '4') {
    eins.tonart.tonleiter[3].licht();
    eins.schreibe(3);
    doremi = "Fa";
  } else if (key == '5') {
    eins.tonart.tonleiter[4].licht();
    eins.schreibe(4);
    doremi = "Sol";
  } else if (key === '6') {
    eins.tonart.tonleiter[5].licht();
    eins.schreibe(5);
    doremi = "La";
  } else if (key === '7') {
    eins.tonart.tonleiter[6].licht();
    eins.schreibe(6);
    doremi = "Si";
  } else if (key === '8') {
    eins.tonart.tonleiter[7].licht();
    eins.schreibe(7);
    doremi = "Do";
  } else if (key === 'z') {
    eins.undo();
  } else if (key === 't') {
    eins.leiter = !eins.leiter;
  } else if (key === 'c') {
    eins.noten.clear();
  } else if (key === 'd') {
    eins = new Notenzeile(new CDur());
  } else if (key === 'm') {
    eins = new Notenzeile(new amoll());
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
  ckeys--;
  if (ckeys == 0) {
    doremi = "";
  }
}
