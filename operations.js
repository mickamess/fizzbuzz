exports.multiple5 = (number) => {
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
  
  exports.multiple3 = (number) => {
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
  exports.multiple15 = (number) => {
    if (Number.isInteger(number / 15) === true) {
      console.log("fizzbuzz");
      return number;
    } else {
      return number;
    }
  };
  exports.nonMultiple = (number) => {
    if (
      Number.isInteger(number / 3) === false &&
      Number.isInteger(number / 5) === false
    ) {
      console.log("non divisible par 3 ou 5");
    }
  };