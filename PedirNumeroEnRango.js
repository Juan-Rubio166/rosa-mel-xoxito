function PedirNumeroEnRango.js(min, max) {
  var numero;
  do {
    numero = prompt("ingrese un número entre el " + min +" y " + max +":");
    numero = number(numero);
  } while (numero < min || numero > max);

  return numero;
}
