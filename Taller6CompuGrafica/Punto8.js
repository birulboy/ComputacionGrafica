const Punto1 = require('./Punto1');
const Punto2 = require('./Punto2');
const Punto3 = require('./Punto3');
const Punto4 = require('./Punto4');
const Punto5 = require('./Punto5');
const Punto6 = require('./Punto6');
const Punto7 = require('./Punto7');

function Punto8 ()  {
    const prompt = require('prompt-sync')();
    
    let opcion = 0;
    do {
        console.log("\n========= MENÚ =========");
        console.log("1. Ejecutar ejercicio 1");
        console.log("2. Ejecutar ejercicio 2");
        console.log("3. Ejecutar ejercicio 3");
        console.log("4. Ejecutar ejercicio 4");
        console.log("5. Ejecutar ejercicio 5");
        console.log("6. Ejecutar ejercicio 6");
        console.log("7. Ejecutar ejercicio 7");
        console.log("0. Salir");

        opcion = parseInt(prompt("Seleccione una opción: "));

        switch (opcion) {
        case 1:
            Punto1();
            break;
        case 2:
            Punto2();
            break;
        case 3:
            Punto3();
            break;
        case 4:
            Punto4();
            break;
        case 5:
            Punto5();
            break;
        case 6:
            Punto6();
            break;
        case 7:
            Punto7();
            break;
        case 0:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción inválida");
        }

    } while (opcion !== 0);
};
Punto8()