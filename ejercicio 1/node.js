function sum2(a, b) {
  return a + b;
}

function sumAny(a,b) {
  let numbers = Array.from(arguments);
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}


function substract2(a, b) {
  return a - b;
}

function substractAny(a,b) {
  let numbers = Array.from(arguments);
  let sum = 0;
  numbers.forEach((num) => (sum -= num));
  return sum;
}

function multiply2(a, b) {
  return a * b;
}

function multiplyAny(a,b) {
  let resultado = 1;
  let numbers = Array.from(arguments);
  for (let i = 0; i < numbers.length; i++) {
    resultado *= numbers[i];
  }

  return resultado;
}

function divide2(a, b) {
  return a / b;
}

function dividirNumeros() {
  const numerosArray = Array.from(arguments);
  let resultado = numerosArray[0];

  for (let i = 1; i < numerosArray.length; i++) {
    resultado /= numerosArray[i];
  }

  return resultado;
}

/* Sumar 2 Numeros */
console.log('Sumar 2 Numeros',sum2(10, 6));
/* Sumar N Numeros */
console.log('Sumar N Numeros',sumAny(10, 5, 6));

/* Restar 2 Numeros */
console.log('Restar 2 Numeros',substract2(10, 6));
/* Restar N Numeros */
console.log('Restar N Numeros',substractAny(10, 5, 6));

/* Multiplicar 2 Numeros */
console.log('Multiplicar 2 Numeros',multiply2(10, 6));
/* Multiplicar N Numeros */
console.log('Multiplicar N Numeros',multiplyAny(10, 5, 6));

/* Dividir 2 Numeros */
console.log('Dividir 2 Numeros',divide2(10, 6));
/* Dividir N Numeros */
console.log('Dividir N Numeros', dividirNumeros(10, 5, 6));