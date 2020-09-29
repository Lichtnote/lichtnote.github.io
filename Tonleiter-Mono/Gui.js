function gui(){
}

function changeTest(content){
  test.remove();
  test = createP(content);
  test.center('horizontal');
  test.class('subtitle');
  test.id('solmisation');
}

function changeNote(id){
  testt.remove();
  testt = createP(eins.tonart.tonleiter[id].nick);
  testt.center('horizontal');
  testt.class('subtitle');
  testt.id('notenname');
}
