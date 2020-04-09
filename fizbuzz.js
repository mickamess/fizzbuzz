
/* ma démarche  :
1- je voulais mettre en pratique un sujet sur lequel je bosse depuis 3 jours : les promesses
2- je me suis appuyer sur la méthode .isInteger de l'objet Number, que je trouve cool -> je n'ai pas encore trouvé d'autre option pour vérifier un entier
2- je trouve que ça donne quelque chose de plus lisible et maintenable sur le long terme
3- je trouve l'option de déclarer mes fonctions multiple5-3-15 assez explicite, plutôt que de faire la solution 2 plus bas*/

const myFizzBuzz = (mynumber) => {
  return new Promise(function (resolve, reject) {
    if (Number.isInteger(mynumber / 3) === true) {
      resolve(mynumber);
    } else if (Number.isInteger(mynumber / 5) === true) {
      resolve(mynumber);
    } else {
      reject(console.log("non multiple"));
    }
  });
};

multiple5 = (number) => {
  if (
    Number.isInteger(number / 5) === true &&
    Number.isInteger(number / 3) === false
  ) {
    console.log("fizz");
    return number;
  } else {
    return number;
  }
};

multiple3 = (number) => {
  if (
    Number.isInteger(number / 3) === true &&
    Number.isInteger(number / 5) === false
  ) {
    console.log("buzz");
    return number;
  } else {
    return number;
  }
};
multiple15 = (number) => {
  if (Number.isInteger(number / 15) === true) {
    console.log("fizzbuzz");
    return number;
  } else {
    return number;
  }
};
nonMultiple = (number) => {
  if (
    Number.isInteger(number / 3) === false &&
    Number.isInteger(number / 5) === false
  ) {
    console.log("non divisible par 3 ou 5");
  }
};

const testNumber = 45;
const test = myFizzBuzz(testNumber)
  .then(multiple3)
  .then(multiple5)
  .then(multiple15)
  .catch(nonMultiple);
console.log(test);

/*
autre solution sans passer par les promesses et je trouve avec un code beaucoup moins clean 

function FizzBuzzsimple(number){
    if(Number.isInteger(number/3)===true && Number.isInteger(number/5)===false ){
        console.log("fizz");
    }else if(Number.isInteger(number/3)===true && Number.isInteger(number/5)===false) {
        console.log("buzz");
    } else if(Number.isInteger(number/3)===true && Number.isInteger(number/5)===true){
        console.log("fizzbuzz");
    } else {
        return console.log("non divisible!!!");
    }
}
console.log(FizzBuzzsimple(7))*/
