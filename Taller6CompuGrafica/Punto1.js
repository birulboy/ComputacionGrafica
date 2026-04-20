function Punto1() { 

    const prompt = require('prompt-sync')();

    let number = parseInt(prompt("Ingrese el valor del numero: "));
    let acumulator = 0;

    for ( i = 0 ; i < number ; i++ ) {
        number%i == 0? acumulator += i : acumulator += 0;
    }

    if ( acumulator == number ) {
        console.log("El numero " + number + " es perfecto");
    } else {
        console.log("El numero " + number + " no es perfecto");
    }

}
module.exports = Punto1;