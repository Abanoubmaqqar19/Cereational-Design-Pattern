// StudentsFactory.js
export default class StudentsFactory {
  createNewStudent(type) {
    if (type === "Graduate") {
      return new Graduate();
    }
    if (type === "UnGraduate") {
      return new UnGraduate();
    }
    if (type === "PhD") {
      return new PhD();
    }

    throw new Error("Unknown student type");
  }
}

class Graduate {
  constructor() {
    console.log("Graduate student created");
  }
}

class UnGraduate {
  constructor() {
    console.log("UnGraduate student created");
  }
}

class PhD {
  constructor() {
    console.log("PhD student created");
  }
}
