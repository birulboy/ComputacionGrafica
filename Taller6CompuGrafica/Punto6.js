function Punto6() {
    const prompt = require('prompt-sync')();

    let num = parseInt(prompt("Ingrese un número: "));
    let temp = num
    let binaryNum = 0
    for (let i = 0; temp != 0; i++) {
        binaryNum += (temp % 2) * 10**i
        temp = parseInt(temp / 2)
    }

    console.log("El numero '" + num + "' pasado a binario es: '" + binaryNum + "'")
}
module.exports = Punto6;