let resposta = '1';

while (resposta == '1') {
  let num1 = +gets();
  let num2 = +gets();

  while (num1 < 0 || num1 > 10) {
    console.log('nota invalida');
    num1 = +gets();
  }

  while (num2 < 0 || num2 > 10) {
    console.log('nota invalida');
    num2 = +gets();
  }

  console.log(`media = ${((num1 + num2) / 2).toFixed(2)}`);
  resposta = '';

  while (resposta != 1 && resposta != 2) {
    console.log('novo calculo (1-sim 2-nao)');
    resposta = +gets();
  }
}
