// NumeroRomano.js
function convertirANumerosRomanos(numero) {
  const romanos = [
      { valor: 50, simbolo: 'L' },
      { valor: 40, simbolo: 'XL' },
      { valor: 10, simbolo: 'X' },
      { valor: 9, simbolo: 'IX' },
      { valor: 5, simbolo: 'V' },
      { valor: 4, simbolo: 'IV' },
      { valor: 1, simbolo: 'I' },
  ];

  let resultado = '';
  let valorRestante = numero;

  for (const { valor, simbolo } of romanos) {
      while (valorRestante >= valor) {
          resultado += simbolo;
          valorRestante -= valor;
      }
  }

  return resultado;
}

export default convertirANumerosRomanos;

