function gui(){
  text(ckeys, width/6, height-100);
}

function changeTest(content){
  test.remove();
  test = createP(content);
  test.center('horizontal');
  test.class('solmisation');
}
