function Punto3() {
        const prompt = require('prompt-sync')();

        let IntNumber= parseInt(prompt("Ingrese el valor del numero entero: "));

        // decifrar la potencia de 10 con la misma longitud del numero ingresado 
        let tenPow = 1;
        let tempNumber = IntNumber;
        // mientras tempNumber sea mayor o igual a 10 , el tenPow no es de la misma longitud que el ingresado
        while (tempNumber >=10) {
            tenPow *= 10;
            tempNumber = IntNumber / tenPow 
        }
        let NewNumber = 0;
        let i = 1;
        tempNumber = IntNumber;
        // Cuando 1/tenPow sea igual a 10 , Ya se abran terminado el proceso y tenPow seria 0.1 ( 1 / 10)
        while ( 1 / tenPow != 10 ) {
              NewNumber += parseInt(tempNumber / tenPow ) * (i);
              tempNumber -= parseInt(tempNumber / tenPow) * tenPow;
              i *= 10;
              tenPow /= 10;
        }
        console.log("El numero invertido es: " + NewNumber + "");
}
module.exports = Punto3;