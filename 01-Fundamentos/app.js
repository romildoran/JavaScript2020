var edadGrover, edadPablo, diferenciaEdades, sumaEdades, yearGrover, yearPablo;

edadGrover = 34;
edadPablo = 28;

var fechaActual = new Date();
var yearActual = fechaActual.getFullYear();

diferenciaEdades = edadGrover - edadPablo;
sumaEdades = edadGrover + edadPablo;

yearGrover = yearActual - edadGrover;
yearPablo = yearActual - edadPablo;

console.log(diferenciaEdades);
console.log(sumaEdades);
console.log('Año de nacimiento de Grover: ' + yearGrover);
console.log('Año de nacimiento de Pablo: ' + yearPablo);
console.log('Año actual: ' + yearActual);
console.log(yearActual * 5);
console.log(yearActual / 2);

//Operadores Lógicos

const IMC = (peso, altura) => {
    let _IMC = peso / altura ** 2;
    return _IMC.toFixed();
}

let IMCcarlos = IMC(72, 1.50);
console.log(IMCcarlos);

let IMCluis = IMC(89, 1.72);
console.log(IMCluis);

//for
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//while
var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
//Do while
var i = 0;
do {
    console.log(i);
    i++
} while (i >= 10) {

}

//swhict
let numero = 1;
switch (numero) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;
    case 6:
        console.log(6);
        break;
    case 7:
        console.log(7);
        break;
    case 8:
        console.log(8);
        break;
    case 9:
        console.log(9);
        break;
    case 10:
        console.log(10);
        break;
    default:
        console.log("Número no válido");
        break;
}



//
let pablo = (14 + 10 + 16) / 3;
let maria = (12 + 18 + 10) / 3;

console.log('el promedio de pablo es de: ' + pablo.toFixed(1) + ' y el promedio de maria es de: ' + maria.toFixed(1));

if (pablo > maria) {
    console.log('el promedio de pablo es el mas alto.');
} else if (pablo < maria) {
    console.log('el promedio de maría es el mas alto.');
} else {
    console.log('ambos promedios son iguales');
}


for (let i = 1; i <= 2; i++) {
    if (i === 1) {
        if (pablo > 13) {
            console.log('pablo aprueba');
        } else {
            console.log('pablo no aprueba');
        }
    } else {
        if (maria > 13) {
            console.log('maria aprueba');
        } else {
            console.log('maria no aprueba');
        }
    }
}

//funciones
function bienvenido() {
    console.log('Bienvenido');
}
bienvenido();

function mensaje() {
    return 'bienvenido';
}
console.log(mensaje());

let imprimeMensaje = mensaje();
console.log(imprimeMensaje);

//función calcular edad
function calcularEdad(yearNacimiento) {
    var fechaActual = new Date();
    var yearActual = fechaActual.getFullYear();
    return yearActual - yearNacimiento;
}

var edad1 = calcularEdad(1986);
console.log(edad1);

//
var calcularScore = function (nombre, pos, neg) {
    var porPos = (pos / 100) * 100;
    var porNeg = (neg / 100) * 100;

    if (porPos >= 90) {
        score = 'A';
    } else if (porPos >= 70) {
        score = "B";
    } else if (porPos >= 45) {
        score = "C";
    } else {
        score = "D";
    }

    var _porPos = porPos.toFixed();
    var _porNeg = porNeg.toFixed();

    return `${nombre} tiene el score ${score}, y tiene un ${_porPos}% de positivaspositivas y un ${ _porNeg}% de negativas.`

}

var resultado = calcularScore('Pablo', 72, 28);
console.log(resultado);

//
let persona = {
    nombre: 'Enrique',
    edad: 76,
    ciudad: 'Londres',
}

persona.edad = 66;

console.log(`${persona.nombre} tiene ${persona.edad} años y vive en la ciudad de ${persona.ciudad}.`);

//
