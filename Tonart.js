class Tonart {
  constructor() {
    this.tonleiter = [];
    this.vorzeichen = [];
  }

  show(){}
}

class CDur extends Tonart{
  constructor() {
    super();
    this.tonleiter[0] = new C(0);
    this.tonleiter[1] = new D(0);
    this.tonleiter[2] = new E(0);
    this.tonleiter[3] = new F(0);
    this.tonleiter[4] = new G(0);
    this.tonleiter[5] = new A(0);
    this.tonleiter[6] = new H(0);
    this.tonleiter[7] = new C(1);
    this.tonleiter[8] = new D(1);
    this.tonleiter[9] = new E(1);
  }
}

class Amoll extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new A(-1);
    this.tonleiter[1] = new H(-1);
    this.tonleiter[2] = new C(0);
    this.tonleiter[3] = new D(0);
    this.tonleiter[4] = new E(0);
    this.tonleiter[5] = new F(0);
    this.tonleiter[6] = new G(0);
    this.tonleiter[7] = new A(0);
    this.tonleiter[8] = new H(0);
    this.tonleiter[9] = new C(1);
  }
}

class GDur extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new G(0);
    this.tonleiter[1] = new A(0);
    this.tonleiter[2] = new H(0);
    this.tonleiter[3] = new C(1);
    this.tonleiter[4] = new D(1);
    this.tonleiter[5] = new E(1);
    this.tonleiter[6] = new Fis(1);
    this.tonleiter[7] = new G(1);
    this.tonleiter[8] = new A(1);
    this.tonleiter[9] = new H(1);

    this.vorzeichen[0] = new Vorzeichen(new Fis(1));
  }

  show(){
    for(let i = 0; i < this.vorzeichen.length; i++){
      this.vorzeichen[i].show();
    }
  }
}
