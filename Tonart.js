class Tonart {
  constructor() {
    this.tonleiter = [];
    this.vorzeichen = [];
    this.scale = '';
    this.moll = false;
  }

  show(){}

}

class BDur extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new B(-1);
    this.tonleiter[1] = new C(0);
    this.tonleiter[2] = new D(0);
    this.tonleiter[3] = new Es(0);
    this.tonleiter[4] = new F(0);
    this.tonleiter[5] = new G(0);
    this.tonleiter[6] = new A(0);

    this.moll = false;

    this.vorzeichen[0] = new Vorzeichen(new B(0));
    this.vorzeichen[1] = new Vorzeichen(new Es(1));
  }

  show(){
    for(let i = 0; i < this.vorzeichen.length; i++){
      this.vorzeichen[i].show(i);
    }
  }
}

class FDur extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new F(0);
    this.tonleiter[1] = new G(0);
    this.tonleiter[2] = new A(0);
    this.tonleiter[3] = new B(0);
    this.tonleiter[4] = new C(1);
    this.tonleiter[5] = new D(1);
    this.tonleiter[6] = new E(1);

    this.moll = false;

    this.vorzeichen[0] = new Vorzeichen(new B(0));
  }

  show(){
    for(let i = 0; i < this.vorzeichen.length; i++){
      this.vorzeichen[i].show(i);
    }
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

    this.moll = false;
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

    this.moll = false;

    this.vorzeichen[0] = new Vorzeichen(new Fis(1));
  }

  show(){
    for(let i = 0; i < this.vorzeichen.length; i++){
      this.vorzeichen[i].show(i);
    }
  }
}

class DDur extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new D(0);
    this.tonleiter[1] = new E(0);
    this.tonleiter[2] = new Fis(0);
    this.tonleiter[3] = new G(0);
    this.tonleiter[4] = new A(0);
    this.tonleiter[5] = new H(0);
    this.tonleiter[6] = new Cis(1);

    this.moll = false;

    this.vorzeichen[0] = new Vorzeichen(new Fis(1));
    this.vorzeichen[1] = new Vorzeichen(new Cis(1));
  }

  show(){
    for(let i = 0; i < this.vorzeichen.length; i++){
      this.vorzeichen[i].show(i);
    }
  }
}

class Dmoll extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new D(0);
    this.tonleiter[1] = new E(0);
    this.tonleiter[2] = new F(0);
    this.tonleiter[3] = new G(0);
    this.tonleiter[4] = new A(0);
    this.tonleiter[5] = new B(0);
    this.tonleiter[6] = new C(1);

    this.moll = true;

    this.vorzeichen[0] = new Vorzeichen(new B(0));
  }

  show(){
    for(let i = 0; i < this.vorzeichen.length; i++){
      this.vorzeichen[i].show(i);
    }
  }
}

class Amoll extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new A(0);
    this.tonleiter[1] = new H(0);
    this.tonleiter[2] = new C(1);
    this.tonleiter[3] = new D(1);
    this.tonleiter[4] = new E(1);
    this.tonleiter[5] = new F(1);
    this.tonleiter[6] = new G(1);

    this.moll = true;
  }
}

class Emoll extends Tonart {
  constructor() {
    super();
    this.tonleiter[0] = new E(0);
    this.tonleiter[1] = new Fis(0);
    this.tonleiter[2] = new G(0);
    this.tonleiter[3] = new A(0);
    this.tonleiter[4] = new H(0);
    this.tonleiter[5] = new C(1);
    this.tonleiter[6] = new D(1);

    this.moll = true;

    this.vorzeichen[0] = new Vorzeichen(new Fis(1));
  }

  show(){
    for(let i = 0; i < this.vorzeichen.length; i++){
      this.vorzeichen[i].show(i);
    }
  }
}
