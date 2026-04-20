function Punto2() {
    const prompt = require('prompt-sync')();
    let n = parseInt(prompt("Ingrese el valor de n: "));

    if ( n%2 == 0 ) {
        for ( i = 1 ; i <= n ; i++) {
            console.log(i**2);
        }
    }else {
        for ( i = 1 ; i <= n ; i++) {
            console.log(i**3);
        }
    }    
}
module.exports = Punto2;