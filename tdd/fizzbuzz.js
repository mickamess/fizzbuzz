exports.fizzbuzz = function (n) {
  let result = ""
  if (isMultipleOf3(n)) {
     result +="Fizz";
  }
  if (isMultipleOf5(n)) {
    /* nommage fonction qui retourne un boolean "is"*/
    result += "Buzz";
  }
 
  return result || n.toString();
};

function isMultipleOf5(n) {
  return n % 5 == 0;
}
function isMultipleOf3(n) {
  return n % 3 == 0;
}
