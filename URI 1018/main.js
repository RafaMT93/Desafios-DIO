let num = parseInt();
let aux = 0;
let cedulas = [100, 50, 20, 10, 5, 2, 1];

function contaNotas(valor) {
  aux = parseInt(num / valor);
  num = num % valor;
  console.log(`${aux} nota(s) de R$ ${valor},00`);
}
console.log(num);
for (let cedula in cedulas) {
  contaNotas(cedulas[cedula]);
}
