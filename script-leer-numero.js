document.write ("<br>");
var numero = prompt("introduce un numero del 1 al 100");
numero = number(numero);

while (numero<1 || numero >100) {
  numero = prompt("numero invalido, vuelve a hacerlo");
  numero = number (number);
}
document.write ("</br>");
