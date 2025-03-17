function PedirNumeroEnRango (min, max) {
  var numero;
  do {
    numero = prompt("ingrese un número entre el " + min +" y " + max +":");
    numero = Number(numero);
  } while (numero < min || numero > max);
  return numero;
}


function PedirNumeroEnRangoMejorado (texto,min, max) {
  var numero;
  do {
    numero = prompt(texto + min +" y " + max +":");
    numero = Number(numero);
  } while (numero < min || numero > max);
  return numero;
}
