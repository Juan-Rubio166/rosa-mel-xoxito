function ComprobarSiEsPrimo (numero)
{
    var EsPrimo;
      var i;

        for (i=numero-1; i>=2; i=i-1)
          {
          if ( numero% i ==0)
          {
            EsPrimo = false;
            return EsPrimo;
          }

          }
    EsPrimo = true;
    return EsPrimo;
}
