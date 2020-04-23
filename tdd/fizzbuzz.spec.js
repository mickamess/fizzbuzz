/*
  Multiple de 3 => "Fizz"
  Multiple de 5 => "Buzz"
  Multiple de 3 et 5 => "FizzBuzz"
  Sinon renvoie n

  qu'est ce qui se passe si : 
  n n'est pas entier, est une string, ect
  ?
  */
const {fizzbuzz} = require('./fizzbuzz')

it('should test correctly', function(){
    expect(true).toBe(true)
});

it('sould return fizz for n = 3', function(){
    expect(fizzbuzz(3)).toEqual("Fizz")
})

it('sould return buzz for n = 5', function(){
    expect(fizzbuzz(5)).toEqual("Buzz")
})

it('sould return buzz for n = 10', function(){
    expect(fizzbuzz(10)).toEqual("Buzz")
})

it('sould return fizzbuzz for n = 15', function(){
    expect(fizzbuzz(15)).toEqual("FizzBuzz")
})
it('sould return fizzbuzz for n = 30', function(){
    expect(fizzbuzz(30)).toEqual("FizzBuzz")
})

it('sould return fizzbuzz for n = 2', function(){
    expect(fizzbuzz(2)).toEqual('2')
})

it('sould return fizzbuzz for n = 4', function(){
    expect(fizzbuzz(4)).toEqual('4')
})


