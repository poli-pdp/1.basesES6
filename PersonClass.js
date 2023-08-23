class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  saludar() {
    return `Hola ${this.name}`;
  }
}
const persona = new Person("ana", 20, "profesora");
console.log(persona);
