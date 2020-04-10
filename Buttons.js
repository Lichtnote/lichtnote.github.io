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
  if (item == 'C-Dur') {
    eins = new Notenzeile(new CDur());
  } else if (item == 'a-Moll') {
    eins = new Notenzeile(new Amoll());
  }
}
