function Punto5() {
         const prompt = require('prompt-sync')();

        let IntNumber= parseInt(prompt("Ingrese el valor del numero entero: "));
        let digit = parseInt(prompt("Ingrese el digito a verificar: "));

        // decifrar la potencia de 10 con la misma longitud del numero ingresado 
        let tenPow = 1;
        let tempNumber = IntNumber;
        // mientras tempNumber sea mayor o igual a 10 , el tenPow no es de la misma longitud que el ingresado
        while (tempNumber >=10) {
            tenPow *= 10;
            tempNumber = IntNumber / tenPow 
        }
        // Cuando 1/tenPow sea igual a 10 , Ya se abran terminado el proceso y tenPow seria 0.1 ( 1 / 10)
        tempNumber = IntNumber;
        let digitCounter = 0;
        while ( 1 / tenPow != 10 ) {

              if ( parseInt(tempNumber / tenPow) == digit ) { digitCounter++; }
              tempNumber -= parseInt(tempNumber / tenPow) * tenPow;
              tenPow /= 10;
        }
        console.log("El digito " + digit + " se encuentra " + digitCounter + " veces en el numero " + IntNumber);
}
module.exports = Punto5;