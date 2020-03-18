class Tonart {
  constructor() {
    this.tonleiter = [];
  }
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
  }
}
