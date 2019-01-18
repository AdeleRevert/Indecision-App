// var peut être réassigné et créé une seconde fois
var nameVar = 'Adèle';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let peut être réassigné mais pas créé une seconde fois
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// const ne peut pas être créé une seconde fois ni réassigné
const nameConst = 'Franck';
console.log('nameConst', nameConst);

// FUNCTION SCOPED
// var existe uniquement dans la fonction où elle est définie
// accessible via le return de la fonction
// pareil pour const et let 
function getPetName() {
  const petName = 'Rubie';
  return petName;
}
const petName = getPetName();
console.log(petName)

// BLOCK SCOPED
// let et const sont block scoped (loop, if, etc)
// const et let accessibles uniquement dans le if statement
// pour y accéder : déclarer let avant et le réassigner dans le if
// pas possible avec const
const fullName = 'Andrew Mead';
let firstName;

if(fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);