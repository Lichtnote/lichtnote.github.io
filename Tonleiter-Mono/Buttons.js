function toggleSolmisation() {
  if (this.checked()) {
    test = createP(' ');
  } else {
    test.remove();
  }
}

function toggleNotennamen() {
  if (this.checked()) {
    testt = createP(' ');
  } else {
    testt.remove();
  }
}

function changeTonart() {
  let item = tonarten.value();
  background(200);
  if (item == 'B-Dur') {
    eins = new NotenzeileViolin(new BDur());
  } else if (item == 'F-Dur') {
    eins = new NotenzeileViolin(new FDur());
  } else if (item == 'C-Dur') {
    eins = new NotenzeileViolin(new CDur());
  } else if (item == 'G-Dur') {
    eins = new NotenzeileViolin(new GDur());
  } else if (item == 'D-Dur') {
    eins = new NotenzeileViolin(new DDur());
  } else if (item == 'd-Moll') {
    eins = new NotenzeileViolin(new Dmoll());
  } else if (item == 'a-Moll') {
    eins = new NotenzeileViolin(new Amoll());
  } else if (item == 'e-Moll') {
    eins = new NotenzeileViolin(new Emoll());
  }
}
