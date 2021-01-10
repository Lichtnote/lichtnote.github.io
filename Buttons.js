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

function changeKey() {
  changeTonart();
}

function changeTonart() {
  let item = tonarten.value();
  background(200);
  if(!bass.checked()) {
    if (item == 'B-Dur') {
      eins = new NotenzeileViolin(new BDur(), 0);
    } else if (item == 'F-Dur') {
      eins = new NotenzeileViolin(new FDur(), 0);
    } else if (item == 'C-Dur') {
      eins = new NotenzeileViolin(new CDur(), 0);
    } else if (item == 'G-Dur') {
      eins = new NotenzeileViolin(new GDur(), 0);
    } else if (item == 'D-Dur') {
      eins = new NotenzeileViolin(new DDur(), 0);
    } else if (item == 'd-Moll') {
      eins = new NotenzeileViolin(new Dmoll(), 0);
    } else if (item == 'a-Moll') {
      eins = new NotenzeileViolin(new Amoll(), 0);
    } else if (item == 'e-Moll') {
      eins = new NotenzeileViolin(new Emoll(), 0);
    }
  } else {
    if (item == 'B-Dur') {
      eins = new NotenzeileBass(new BDur(), 0);
    } else if (item == 'F-Dur') {
      eins = new NotenzeileBass(new FDur(), -1);
    } else if (item == 'C-Dur') {
      eins = new NotenzeileBass(new CDur(), 0);
    } else if (item == 'G-Dur') {
      eins = new NotenzeileBass(new GDur(), -1);
    } else if (item == 'D-Dur') {
      eins = new NotenzeileBass(new DDur(), 0);
    } else if (item == 'd-Moll') {
      eins = new NotenzeileBass(new Dmoll(), 0);
    } else if (item == 'a-Moll') {
      eins = new NotenzeileBass(new Amoll(), 0);
    } else if (item == 'e-Moll') {
      eins = new NotenzeileBass(new Emoll(), 0);
    }
  }
}
