import X from "./Singletone.js"



// Singleton 
console.log("Singleton TESTS---------------------------------")
const a = new X();
const b = new X();
const c = new X();

console.log(a.getCounter()); // 1
console.log(b.getCounter()); // 1
console.log(c.getCounter()); // 1
console.log(a === b); // true
console.log(b === c); // true


import StudentsFactory from "./Factory.js"

console.log("");

console.log("Factory TESTS -------------------------");
const factory = new StudentsFactory();

const s1 = factory.createNewStudent("Graduate");
const s2 = factory.createNewStudent("UnGraduate");
const s3 = factory.createNewStudent("PhD");
// const s4 = factory.createNewStudent("PD"); //Unknown student type



import Document from "./Prototype.js"
console.log("");

console.log("Prototype TESTS -------------------------");

const doc1 = new Document("Header1", "Footer1", 10, "Hello World");


const doc2 = doc1.clone();
console.log("Original")
doc1.GetAll();

console.log("copy")
doc2.GetAll();


//* update 
doc2.text = "D2  New Text";
doc2.pages = 20;
console.log("After Update copy")
doc2.GetAll();


import PizzaBuilder  from "./Builder.js";
console.log("");
console.log("Build  TESTS -------------------------");
const myPizza = new PizzaBuilder()
  .setDough("Thin crust")
  .setSaouce("Tomato")
  .Build();

myPizza.describe();




const Pizzo = new PizzaBuilder().setDough(" crust").setSaouce("Mas").Build();
Pizzo.describe();











