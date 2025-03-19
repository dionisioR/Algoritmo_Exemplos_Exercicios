let numero = parseFloat(prompt("Digite um número: "))

let rQuadrada = Math.sqrt(numero)
console.log(rQuadrada)

let rCubica = Math.cbrt(numero)
console.log(rCubica)

numero = parseFloat(prompt("Digite o número: "))
let pot = parseInt(prompt("Potencia: "))

console.log(Math.pow(numero,pot));

console.log('------------------');
console.log(Math.pow(numero, 1/7));
console.log(Math.pow(numero, 1/13));

console.log('------------------');

// let pi = 3.14
console.log(Math.PI);

console.log('------------------');

let PI = Math.PI
console.log(PI.toFixed(2));