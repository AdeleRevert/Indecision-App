// with es5 we can console.log the arguments

const add = function (a, b) {
  console.log(arguments);
  return a + b;
}
console.log(add(55, 1));

// with es6 arrow function we can't access the arguments
const add2 = (a, b) => {
  // console.log(arguments);
  return a + b;
}
console.log(add2(55, 1));

// this accessible que dans une fonction définie avec es5
// ou via une "method" es6
const user = {
  name: 'Adèle',
  cities: ['Lyon', 'Paris'],
  printPlacesLived() {
    // on peut enregistrer this dans une variable pour y accéder
    // const that = this;

    // ici on conserve l'array cities et on en créé une nouvelle
    //const cityMessages = this.cities.map((city) => {
    //  return this.name + ' has lived in ' + city;
    //});
    //return cityMessages;

    // si on veut directement modifier cities on peut utiliser 
    // la syntaxe réduite es6
    return this.cities.map((city) => this.name + ' has lived in ' + city);


    //this.cities.forEach((city) => {
    //  console.log(this.name + ' has lived in ' + city);
    //});
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: [],
  printMultiplied(){
    return this.numbers.map((oneNumber) => oneNumber * this.multiplyBy)
  }
}

console.log(multiplier.printMultiplied());