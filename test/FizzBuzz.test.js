const {expect} = require ("@jest/globals");
const FizzBuzz = require ("../FizzBuzz.js");

/**
 * featura para saber si un numero es primo
    * 1 cuando es divisible por 3 es fizz
    * cuando es divisible por 5 es buzz
    * cuando es divisible  entre 3 y 5 devuelve fizzbuzz
    * cuando no es dibisible, devuelve el numero tal cua
 */

describe ('Tests que validan los multiplos de 3 y 5',() => {
    const fizz_buzz = new FizzBuzz();

     test (`Test devuelve Fizz cuando es divisible entre 3`,()=>{
        const numero_ingresado = 3;
        const respuesta_esperada= "Fizz"

        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);
        expect (respuesta_recibida).toBe(respuesta_esperada);
     });

     test (`Test devuelve Buzz cuando es divisible entre 5`,()=>{
        const numero_ingresado = 5;
        const respuesta_esperada= "Buzz"

        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        expect (respuesta_recibida).toBe(respuesta_esperada);
     });


     test (`Test devuelve FizzBuzz cuando es divisible entre 3 y 5`,()=>{
        const numero_ingresado = 15;
        const respuesta_esperada= "FizzBuzz"

        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);

        expect (respuesta_recibida).toBe(respuesta_esperada);
     });

     
     test (`Test devuelve el numero cuando no es divisible ni por 3 ni por 5`,()=>{
        const numero_ingresado = 1;
        const respuesta_esperada= numero_ingresado;

        const respuesta_recibida = fizz_buzz.validar_primos_3_5(numero_ingresado);
        
        expect (respuesta_recibida).toBe(respuesta_esperada);
   });
})