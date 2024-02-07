
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// function conteo(texto = ''){
//     if(!texto){
//             console.warn('no hay cadena de texto para contar')
//     }else{
//        console.log( `"${texto}" contiene ${texto.length} caracteres`);
//     }
// }
// conteo('angel');
//simplificando------------------------------------------

//se pone "?" porque como no es obligación el el string deje de estar vacio, es decir es opcional.
const conteo = (texto = '') => (!texto) ? console.warn('no hay cadena de texto para contar') : console.log(`"${texto}" contiene ${texto.length} caracteres`);
// conteo('angel');




// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function textoRocorado(texto='', num = undefined){
// if(!texto){
//     console.warn('no hay cadena de texto para contar');
// }else{
//     console.log(texto.slice(0, num));
// }};
// textoRocorado('hola mundo', 4);
//simplificando------------------------------------------


const textoRocorado = (texto = "", num = undefined) => (!texto) ? console.warn('no hay cadena de texto para contar') : (num === undefined) ? console.warn('no ingresaste cantidad para recortar el texto') : console.log(texto.slice(0, num));
// textoRocorado('hola mundo', 4);




// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const array = (texto = "", signo = undefined) => (!texto) ? console.warn('no hay cadena de texto para contar') : (signo === undefined) ? console.warn('no ingresaste separador de texto') : console.log(texto.split(signo));
// array("en la casa de angelito ia ia oh", " ")



// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
// const repetir = (texto = "", cantidad = undefined) =>( (!texto)? console.warn('no hay cadena de texto para contar'): (cantidad === undefined) ? console.warn('no ingresaste la cantidad') : console.log(texto.match));

const repetirTexto = (texto = '', cantidad = undefined) => {

    if (!texto) return console.warn('no hay cadena de texto');
    if (cantidad === undefined) return console.warn('no hay cantidad añadida');
    if (cantidad === 0) return console.error('la cantidad no puede ser igual a 0');
    if (Math.sign(cantidad) === -1) return console.error('la cantidad no puede ser negativa');

    for (let i = 1; i <= cantidad; i++) console.log(texto, i);
}

// repetirTexto('en la casa de angelito', 10);
// repetirTexto('en la casa de angelito');
// repetirTexto('en la casa de angelito', 0);
// repetirTexto('en la casa de angelito', -1);
// repetirTexto('', 1);


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirTexto = (texto = '') => {
    let separarCadena = texto.split("");
    let invertirArreglo = separarCadena.reverse();
    let unirArrlego = invertirArreglo.join("");

    console.log(unirArrlego);
}
//simplificando------------------------------------------

const invertirTexto2 = (texto = '') => (!texto) ? console.warn('no hay cadena de texto') : console.log(texto.split("").reverse().join(""));
// invertirTexto2('angel');


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


const repeticion = (cadena = "", texto = "") => {

    if (!cadena) return console.warn('no hay cadena de texto');
    if (!texto) return console.warn('no hay texto a evualuar');

    let i = 0,
        contador = 0;

    // mientras que i sea diferente de -1, es -1 cuando el indexOf no encuentra nada en este caso está comparando la cadena de texto con la palabra
    while (i !== -1) {
        // en i se va a ir almacenando en la posición en que encontró la coincidencia 
        i = cadena.indexOf(texto, i);
        console.log(i);
        //si encontró coincidencia el valor de i no es -1 y por ende entra a la condición para que asi aumente en i++ y el contador++
        if (i !== -1) {
            i++;
            contador++;
        }
    }

    return console.log(`la palabra ${texto} se repite ${contador} veces`);
}

// repeticion('hola mundo que tal mundo mundo', 'mundo');






// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const palindromo = (texto = '') => (!texto) ? console.warn('no hay cadena de texto') :
    (texto.toLocaleLowerCase().split("").reverse().join("") === texto.toLocaleLowerCase()) ? console.log(true) : console.log(false);

// palindromo('acurruca');


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto) ? console.warn('no hay cadena de texto') : (!patron) ? console.warn('no ingresaste un patrón de caracteres') :
        console.info(texto.replace(new RegExp(patron, "ig"), ""));

// eliminarCaracteres();
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");





// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

//math.round te redondea hacia arriba de .5 en adelante o al mas cercano, por ejemplo: 5.4 redondea a 5.
//math.random, escoge un numero al azar de 0 a 99*100 un numero de 0 a 99 y le sumamos los 500, te da el valor entre el 501 y 599
const aleatorio = () => console.info((Math.round(Math.random() * 100) + 500));

// aleatorio();



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


const capicua = (numero = 0) => {
    if (!numero) console.warn(`no ingresaste un número`);
    //se pone return porque acá si vamos a retornar un error
    if (typeof numero !== "number") return console.error(`el valor ${numero} ingresado, no es un número`);

    // convertimos el numero a string para evaluarlo como hicimos con los palindromos

    numero = numero.toString();
    let alreves = numero.split("").reverse().join("");

    return ((numero) === alreves)
        ? console.log(`si es capícua, Numero orinal ${numero} numero alreves ${alreves}`)
        : console.log(`no es capícua, Numero orinal ${numero} numero alreves ${alreves}`)

}
// capicua();







// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
//     se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn('no ingresaste numero');
    if (typeof numero !== 'number') return console.warn(`el valor ${numero} ingresado, no es un número`);
    if (numero === 0) return console.warn(' el numero ingresado debe ser mayor a 0');
    if (Math.sign(numero) === -1) return console.warn('el numero debe ser positivo');

    let factorial = 1;

    for (let i = numero; i > 1; i--) {

        factorial = factorial * i;
        // factorial *=i;


    }
    return console.info(` El factorial de ${numero} es: ${factorial}`);
}

// factorial();
// factorial('jkwhnedkjw')
// factorial(0)
// factorial(-2)
// factorial(5);



// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primo = (numero = undefined) => {

    if (numero === undefined) return console.warn('no ingresaste numero');
    if (typeof numero !== 'number') return console.warn(`el valor ${numero} ingresado, no es un número`);
    if (numero === 0) return console.warn(' el numero ingresado debe ser mayor a 0');
    if (numero === 1) return console.warn(' el numero ingresado debe ser mayor a 1');
    if (Math.sign(numero) === -1) return console.warn('el numero debe ser positivo');

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
        ? console.log(`el valor ${numero} no es un numero primo `)
        : console.log(`el valor ${numero} si es un numero primo `);
}

// primo();
// primo('lkjwhed');
// primo(0);
// primo(1);
// primo(-1);
// primo(13);
// primo(10);




// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.


parOImpar = (numero = undefined) => {

    if (numero === undefined) return console.warn('No ingresaste numero para evaluar');
    if (typeof numero !== 'number') return console.warn('el valor que ingresas no es un numero');
    if (numero === 0) return console.warn('El numero ingresado debe ser mayor a 0');
    if (Math.sign(numero) === -1) return console.warn('el numero debe ser positivo');

    // if(numero % 2 === 0){
    //     console.log('el numero ingresado es PAR');

    // }else{
    //     console.log('el numero ingresado es IMPAR');
    // }

    // IF RESUMIDO
    return (numero % 2 === 0)
        ? console.log(`el valor ${numero} es PAR `)
        : console.log(`el valor ${numero} es IMPAR`);
}

// parOImpar()
// parOImpar('kwuehgfd')
// parOImpar(0)
// parOImpar(-1);
// parOImpar(25)
// parOImpar(20)










// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const conversor = (grados = undefined, unidad = undefined) => {

    if (grados === undefined) return console.warn('No ingresaste numero para evaluar');
    if (typeof grados !== 'number') return console.warn('el valor que ingresaste no es un numero');
    if (unidad === undefined) return console.warn('No ingresaste una unidad de temperatura');
    if (typeof unidad !== 'string') return console.warn('el valor que ingresaste no es una cadena de texto');

    if (unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('valor de unidad no reconocido');


    if (unidad === 'C') {
        return console.info(`${grados}°C da como resultado de conversión a Fahrenhein: ${Math.round((grados * (9 / 5)) + 32)}°F`);
    } else if (unidad === 'F') {
        return console.info(`${grados}°F da como resultado de conversión a Celcius: ${Math.round(((grados - 32) * (5 / 9)))}°C`);
    } else {
        console.error("El tipo de grado a convertir no es válido");
    }
}

// conversor(20, 'wedwedC');
// conversor(50, 'wedF');
// conversor(50, 'F');
// conversor(505, 'F');
// conversor(26, 'C');




// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertidorNumeros = (numero = undefined, base = undefined) => {

    if (numero === undefined) return console.warn('No ingresaste un numero');
    if (typeof numero !== 'number') return console.warn('el valor que ingresaste no es un numero');
    if (base === undefined) return console.warn('no ingresas una base');
    if (typeof base !== 'number') return console.warn('el valor que ingresaste para la base no es un numero');

    if (base === 2) {
        // Es la formula para pasar de base 2 a base 10
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    } else if (base === 10) {
        // Es la formula para pasar de base 10 a base 2
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    } else {
        return console.error('el tipo de base a convertir no es válido');
    }

}
// convertidorNumeros(100, 2);
// convertidorNumeros(114, 10);
// convertidorNumeros(1110010, 2)




// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const montoFinal = (monto = undefined, descuento = undefined) => {
    if (monto === undefined) return console.warn('no ingresas ningún monto');
    if (typeof monto !== 'number') return console.warn('el monto ingresado no es válido');
    if (Math.sign(monto) === -1) return console.warn('el numero debe ser positivo');

    if (descuento === undefined) return console.warn('No ingresaste el valor del descuento');
    if (typeof descuento !== 'number') return console.warn('El valor del descuento no es válido');
    if (Math.sign(descuento) === -1) return console.warn('el numero debe ser positivo');

    // let total = 0,
    //     subtotal = 0;

    // subtotal = (descuento / 100) * monto;
    // total = (monto - subtotal);
    // console.log('El valor total, con su descuento aplicado es de ', total);

    //FORMA CORTA
    console.log(`$${monto} - ${descuento}% = $${monto - ((monto * descuento) / 100)}`);
}

// montoFinal(1000, 20)



// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn('No ingresaste una fecha válida');

    // instaceof, reconoce de manera diferente el typeof, este si reconoce a fecha como una variable de tipo Date.
    // en cambio typeof lo reconoce como si fuera un objeto. De este modo no podriamos comparar en cierta forma con tipo Date.
    if (!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha válida ');

    //para objeter la fecha de hoy : new Date().. para convertirlos a milisegundos desde 1970 hasta hoy: new Date().getTime()

    //fecha de hoy en milisegundos - fechaDada
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        //vamos a expresar un año en milisegundos
        //1000msg = 1sg    min hora dias  años
        aniosEnMs = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs); // floor me devuelve al numero anterior por si es un día antes de la fecha dada



    return (Math.sign(aniosHumanos) === -1)
        //si nos ingresan una fecha que aún no ha ocurrido.
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${Math.abs(aniosHumanos)} años, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);

}


// calcularAnios();
// calcularAnios('angel');
// calcularAnios(false);
// calcularAnios(2020);
// calcularAnios(new Date());
// calcularAnios(new Date(1992, 8, 25));
// calcularAnios(new Date(2082, 8, 25));







// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const cadenaTexto = (texto = "") => {

    if (!texto) return console.warn('no ingresaste una cadena de texto para evaluar');
    if (typeof texto !== 'string') return console.warn(`el valor ${texto} ingresado, no es una cadena de texto`);

    let vocales = 0,
        consonantes = 0;
    texto = texto.toLocaleLowerCase();

    for (let letra of texto) {
        if (/[aeiouáéíóú]/.test(letra)) vocales++;
        if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    //en EM5 cuando tenemos por ejemplo cadena: cadena, entonces podemos dejarlo solo como cadena, 
    return console.info({
        texto,
        vocales,
        consonantes
    });
}

// cadenaTexto();
// cadenaTexto(123);
// cadenaTexto('Angel es la monda');


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.




// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.








// console.log(``);
// console.info(``);







const sencilla = (nombre = '', apellido = '') => {
    console.log('Hola', nombre);
}
// sencilla('angel','Gamez');







