const ahora = new Date();
console.log(ahora.toString());

const fecha1 = new Date('December 17, 1995 06:20:15');
console.log(fecha1.toString());


console.log(`Año: ${ahora.getFullYear()}`);

console.log(`Mes: ${ahora.getMonth()}`);

console.log(`Dia ${ahora.getDate()}`);

console.log(`Dia ${ahora.getDay()}`);

console.log(`Hora: ${fecha1.getHours()}`);
console.log(`Minutos: ${fecha1.getMinutes()}`);
console.log(`Segundos: ${fecha1.getSeconds()}`);


const timestamp = ahora.getTime();
console.log(timestamp.toString());

const fechaActual = new Date(timestamp);
console.log(fechaActual.getFullYear());

//ejercicio

const fechaUNO = new Date('April 2017 12:00:00');
const fechaDOS = new Date();
const timestampFechaUNO = fechaUNO.getTime();
const timestampFechaDOS = fechaDOS.getTime();

if(timestampFechaUNO < timestampFechaDOS){
    console.log(fechaUNO.toString());
}else{
    console.log(timestampFechaDOS.toString());
}