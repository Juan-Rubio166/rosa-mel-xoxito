
function par (numero)
{
    var EsPar;
      var i;

        for (i=numero-1; i>=2; i=i-1)
          {
          if ( numero% i ==0)
          {
            EsPrimo = false;
            return EsPrimo;
          }

          }
    EsPar = true;
    return EsPar;
}
