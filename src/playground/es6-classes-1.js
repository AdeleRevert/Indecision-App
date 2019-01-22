class Person {
  constructor(name, age) {
    this.name = name || 'Anonymous';
    this.age = age || 0;
  }
  getGreeting() {
    return `Hi ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += `I'm visiting from ${this.homeLocation}`
    }
    return greeting
  }
}

const me = new Student('Adèle', 23, 'Computer Science');
console.log(me, me.getGreeting(), me.getDescription(), me.hasMajor());

const someone = new Traveler('Marc', 19, 'Paris');
console.log(someone, someone.getGreeting());

const other = new Student();
console.log(other, other.getGreeting(), other.getDescription(), other.hasMajor());