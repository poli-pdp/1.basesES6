/**
 *  Function Declarative (nombradas)
 */

function calcular(valor = 10) {
  return valor * 1000;
}
console.log(calcular(100));

/**
 *  Function Expression (anonimas)
 */

const sumar = function (valor = 10) {
  return valor * 1000;
};
console.log(sumar(1000));
