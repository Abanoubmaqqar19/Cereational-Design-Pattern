class HiddenPizza {
  constructor() {
    this.dough = "";
    this.sauce = "";
    this.price = "";
    this.category = "";
  }
  describe() {
    console.log(
      `Pizza with ${this.dough} dough, ${this.sauce} sauce}`,
    );
  }
}


export default class PizzaBuilder {
  constructor() {
    this.pizza = new HiddenPizza();
  }

    setDough(dough) {
        this.pizza.dough = dough;
        return this;
    }
    
    setSaouce(sauce) {
        this.pizza.sauce = sauce;
        return this;
    }

    Build() {
        return this.pizza;
    }

}



