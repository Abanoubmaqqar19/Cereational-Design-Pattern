export default class X {
  static instance = null;

  constructor() {
    if (X.instance) {
      return X.instance;
    }

    this.Counter = 1;
    X.instance = this;
  }

  getCounter() {
    return this.Counter;
  }
}

