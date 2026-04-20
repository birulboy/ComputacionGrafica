function Punto7() {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));

    let Primo = "es primo";
    for ( i = 2 ; i <= Math.sqrt(num) ; i++ ) {
        if (num % i == 0) {
            Primo = "no es primo";
            break;
        }
    }
    if (num <= 1) {
        Primo = "no es primo";
    }

    let ParString ="";
    if ( num % 2 == 0 ) {
        ParString = "es par";
    } else {
        ParString = "no es par";
    }
    console.log("El número " + num + " " + Primo + " y " + ParString + ".");
}

module.exports = Punto7;