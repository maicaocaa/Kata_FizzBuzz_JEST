class FizzBuzz {
    validar_primos_3_5 (numero) {
        return numero % 15 === 0 ? "FizzBuzz" :
               numero % 5 === 0 ? "Buzz" :
               numero % 3 === 0 ? "Fizz" :
               numero;
    }
};

module.exports = FizzBuzz;