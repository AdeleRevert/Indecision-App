// es5 function
// possible de nommer la fonction : function square(x){}
// et de l'appeler square(8)
const square = function(x){
  return x * x;
}

console.log(square(8));

// es6 arrow function
// toujours anonyme, obligé de l'assigner à une variable pour l'appeler 
const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(10));

// es6 arrow function syntax
// si un seul argument possible de l'écrire en une ligne 
const squareArrow2 = (x) =>  x * x;
console.log(squareArrow2(5));

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}
console.log(getFirstName('Mike Smith'));

const getFirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getFirstName2('Mike Smith'));
