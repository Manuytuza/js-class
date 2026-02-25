/************************************************************
 * JAVASCRIPT – GUÍA COMPLETA CON EXPLICACIONES EN CÓDIGO
 * Todas las explicaciones están en comentarios //
 ************************************************************/

// ==========================================================
// 1. COMENTARIOS
// ==========================================================

// Los comentarios sirven para explicar el código
// No se ejecutan
// Ayudan a entender y mantener el código

/*
  Comentarios multilínea
  (también válidos, pero aquí usamos //)
*/

// ==========================================================
// 2. VARIABLES Y CONSTANTES
// ==========================================================

// let → variable que puede cambiar
let firstName = "Manuel";     // string: texto
let lastName = "Ytuza";      // string: texto
let age = 30;                // number: número
let height = 1.81;           // number decimal
let isFather = true;         // boolean: true / false
let emptyValue = null;       // null: valor vacío intencional
let notAssigned;             // undefined: sin valor asignado

// const → constante que NO debe cambiar
const COUNTRY = "Peru";      // buena práctica usar MAYÚSCULAS

// ==========================================================
// 3. TIPOS DE DATOS
// ==========================================================

// Texto
let text = "Hello";

// Números
let number = 100;
let decimal = 99.99;

// Booleanos
let booleanTrue = true;
let booleanFalse = false;

// Valores especiales
let nothing = null;          // vacío
let unknown;                 // undefined

// ==========================================================
// 4. MOSTRAR INFORMACIÓN EN CONSOLA
// ==========================================================

// console.log muestra información en la consola
// Se usa para depurar y aprender

console.log(text);                       // muestra texto
console.log("Age:", age);                // concatena texto y variable
console.log(`Country: ${COUNTRY}`);      // template literal con ` `

// ==========================================================
// 5. OPERADORES
// ==========================================================

// Operadores matemáticos
let a = 10;
let b = 3;

a + b;   // suma
a - b;   // resta
a * b;   // multiplicación
a / b;   // división
a % b;   // residuo
a ** b;  // potencia

// Operadores de asignación
a += 5;  // a = a + 5
a -= 2;  // a = a - 2
a *= 2;  // a = a * 2
a /= 2;  // a = a / 2

// Operadores de comparación
a === b; // estrictamente igual (recomendado)
a !== b; // diferente
a > b;   // mayor
a < b;   // menor
a >= b;  // mayor o igual
a <= b;  // menor o igual

// Operadores lógicos
!true && false; // AND
true || false; // OR
!true;         // NOT

// ==========================================================
// 6. CONDICIONALES
// ==========================================================

// Ejecutan código según una condición

if (age >= 18 && isFather) {
  console.log("Adult and father"); // condición verdadera
} else if (age >= 18) {
  console.log("Adult");            // segunda condición
} else {
  console.log("Minor");            // condición falsa
}

// Operador ternario (forma corta)
let status = age >= 18 ? "Adult" : "Minor";

// ==========================================================
// 7. FUNCIONES
// ==========================================================

// Función clásica
// Recibe parámetros y devuelve un valor
function fullNameFn(name, last) {
  return `${name} ${last}`;
}

// Función flecha (arrow function)
// Sintaxis moderna y corta
const sum = (x, y) => x + y;

// Función con valor por defecto
function greet(name = "Guest") {
  return `Hello ${name}`;
}

const saludoArrow2 = (name) => `hello my friend ${name}`;
console.log(saludoArrow2("Manuel"));
console.log(fullNameFn(firstName, lastName));
console.log(sum(5, 7));
console.log(greet());

// ==========================================================
// 8. ARRAYS (TODOS LOS TIPOS)
// ==========================================================

// Array de strings
let fruits = ["apple", "banana", "orange", "orange"];

console.log(fruits.reduce((acumulator, fruit) => {
  if (acumulator[fruit]) {
    acumulator[fruit] += 1;
  } else {
    acumulator[fruit] = 1;
  }
  return acumulator;
}, {}));

console.log();

// Array de números
let scores = [10, 20, 30];

for ( let num of scores) {
  console.log (`${num*2} with for of`)
}

// Array de booleanos
let flags = [true, false, true];

// Array mixto (permitido en JS)
let mixed = ["text", 100, true, null];

// Array de arrays (matriz)
let matrix = [
  [1, 2],
  [3, 4]
];

// Array de objetos
let users = [
  { name: "Manuel", role: "Father" },
  { name: "Alice", role: "Daughter" }
];
console.log(users[0].name);

// Métodos comunes de arrays
fruits.push("grape");       // agrega al final
fruits.pop();               // elimina el último
fruits.shift();             // elimina el primero
fruits.unshift("pear");     // agrega al inicio
fruits.length;              // cantidad de elementos
fruits.includes("apple");   // verifica si existe
fruits.indexOf("banana");   // posición del elemento

totalOrange = 0
for (let fruit of fruits) {
  if (fruit === "orange") {
    totalOrange++;
  }     
};
console.log(`Total de naranjas: ${totalOrange}`) ;


// ==========================================================
// 9. OBJETOS
// ==========================================================

// Los objetos agrupan datos relacionados
let person = {
  name: "Manuel",
  age: 30,
  isFather: true,
  address: {
    country: "Peru",
    city: "Arequipa"
  }
};

// Acceso a propiedades
person.name;
person.address.city;

// Modificar propiedades
person.age += 1;

// ==========================================================
// 10. BUCLES
// ==========================================================

// for clásico
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // recorre por índice
}
console.log()
// for...of (recomendado para arrays)
for (let fruit of fruits) {
  console.log(fruit);
}
console.log( "forEach is coming");
// forEach (funcional)
fruits.forEach((fruit) => {
  console.log(fruit);
});
console.log()
// while
let counter = 0;
while (counter < 3) {
  console.log(counter);
  counter++;
}
console.log("mas claro con do-while"); 
// do...while
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 3);  
// ==========================================================
// 11. TEMPLATE LITERALS
// ==========================================================

// Permiten texto multilínea y variables
let daughter = "Alice";
let nickname = "Exmoxnix";

let message = `
I am ${firstName} ${lastName}.
I am ${daughter}'s father.
I call her ${nickname} and I love her.
`;

console.log(message);

// ==========================================================
// 12. SCOPE (ALCANCE)
// ==========================================================

// Las llaves {} crean un bloque
{
  let localVar = "Only here";
  console.log(localVar);
}
// localVar no existe fuera del bloque

// ==========================================================
// 13. DESTRUCTURING....lo vere despues 
// ==========================================================

// Extrae valores fácilmente
let [firstFruit, secondFruit] = fruits;
let { name, age: personAge } = person;

// ==========================================================
// 14. SPREAD OPERATOR (...)
// ==========================================================

// Copia y une datos
let newFruits = [...fruits, "mango"];
let newPerson = { ...person, active: true };

// ==========================================================
// 15. MAP, FILTER, REDUCE
// ==========================================================
console.log("MAP, FILTER, REDUCE");
// Programación funcional
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);          // transforma
let evens = numbers.filter(n => n % 2 === 0);   // filtra numeroPar 
let total = numbers.reduce((acc, n) => acc + n, 0); // acumula
console.log (doubled, evens, total);  
// ==========================================================
// 16. MANEJO DE ERRORES
// ==========================================================

// try...catch evita que el programa se rompa
try {
  let result = unknownVar;
} catch (error) {
  console.log("Error capturado correctamente");
}

// ==========================================================
// 17. BUENAS PRÁCTICAS
// ==========================================================

// Usar const por defecto
// Usar let solo si cambia
// Usar === en lugar de ==
// Nombres claros en inglés
// Código ordenado y comentado

console.log();
console.log( "Math.random()");
let numerAleatory = Number(Math.random().toFixed(1)*20)+1 
let numberAleatory2 = Math.floor(Math.random() * 20) + 1; // genera un número aleatorio entre 1 y 20
console.log(numerAleatory);
console.log(numberAleatory2); 
/************************************************************
 * FIN DE LA GUÍA JAVASCRIPT PROFESIONAL
 ************************************************************/
//no debo rendirme 
// terminar juego avanzarnode
//const game = ["piedra", "papel", "tijera"];
//const player = prompt("elige tu jugada: piedra, papel o tijera");
//const alert = ("la computadora elige: " + game[Math.floor(Math.random() * game.length)]);
console.log("no debo rendirme");
//numero aleatorio entre 0 y 100
const aleatory = Math.random().toFixed(2) * 100; // genera un número aleatorio entre 0 y 100 con 2 decimales
console.log(aleatory);   

// change string to integer
const stringNumber = "42";
const integerNumber = parseInt(stringNumber);
console.log(integerNumber); // muestra 42 como número entero
console.log(typeof integerNumber); // muestra "number" para confirmar el tipo de dato

// ejemplo de recorrer
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i]!== "apple")  { 
        fruits[i] += " ~NO es Apple";
        console.log(fruits[i])}
} 
// generar un numero ramdom con dos decimales de 1 al 100

/* const ramdomNumber = Math.floor((Math.random() * 10) + 1)
let numberGame = parseInt(prompt("adivina el numero de 1 al 10"))

while (ramdomNumber !== numberGame) {

  if (ramdomNumber<numberGame) {alert("es menor");}
  else {alert("es mayor");}

  numberGame= parseInt(prompt("intenta de nuevo"));

}

alert("salio, bien") 

//switch  estructura
switch (valor) {
  case opcion1:
    // código
    break;

  case opcion2:
    // código
    break;

  default:
    // si no coincide ninguno
} 

let model = prompt ("ingresa tu modelo de phone");
if (model) {
  model = model.toLowerCase().trim(); // para convertir a minúsculas y eliminar espacios;
}

switch (model) {
  case "iphone":
    alert("es el mejor modelo del mercado");
    break;
  case "samsung":
    alert("es un modelo muy popular");
    break;  
  case "xiaomi":
    alert("es un modelo económico y bueno");
    break;    
  default:
    alert("modelo no reconocido");
    break;
}
*/
// ejemplo de switch con operaciones matematicas CALCULADORA
/*
const sumas = (x, y) => x + y;
const resta = (x, y) => x - y;
const multiplicacion = (x, y) => x * y;
const division = (x, y) => x / y;

let solicitud = Number(prompt(
  "Elige una opción:\n1 = Sumar\n2 = Restar\n3 = Multiplicar\n4 = Dividir"
));

let x = Number(prompt("Enter first number"));
let y = Number(prompt("Enter second number"));

if (isNaN(x) || isNaN(y)) {
  alert("Debes ingresar números válidos");
} else {
  switch (solicitud) {
    case 1:
      alert(`La suma es: ${sumas(x, y)}`);
      break;
    case 2:
      alert(`La resta es: ${resta(x, y)}`);
      break;
    case 3:
      alert(`La multiplicación es: ${multiplicacion(x, y)}`);
      break;
    case 4:
      if (y === 0) {
        alert("No se puede dividir entre 0");
      } else {
        alert(`La división es: ${division(x, y)}`);
      }
      break;
    default:
      alert("Opción no válida");
  }
} */
//repaso de git 10 minutos
// ==========================
// WORKFLOWS PRINCIPALES
// ==========================

// 1. Básico (solo)
// git add .
// git commit -m "msg"
// git push

// 2. Feature Branch (PRO)
// git checkout -b feature/nombre
// git add .
// git commit -m "msg"
// git push -u origin feature/nombre
// merge a main

// 3. Pull Request
// Crear rama → push → PR en GitHub → merge

// 4. Git Flow (equipos grandes)
// main → producción
// develop → desarrollo
// feature/* → nuevas funciones



// ==========================
// MERGE vs REBASE
// ==========================

// git merge rama
// ✔ seguro

// git rebase main
// ✔ historial limpio



// ==========================
// SSH
// ==========================

// ssh-keygen -t ed25519 -C "email"
// ssh-add ~/.ssh/id_ed25519
// agregar clave a GitHub
// ssh -T git@github.com



// ==========================
// HTTPS
// ==========================

// git remote set-url origin https://github.com/user/repo.git
// git push -u origin main
// usar TOKEN (no contraseña)

//ITERACIONES
let list = ["eat", "sleep", "code", "repeat"];

function iterateList(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
iterateList(list);
console.log(" ");

// map crea una nueva array con cada elemento modificado  
let list2 =list.map(n=> n + " arrow+function");
console.log(list2);

// for of recorre cada elemento directamente del array

for (let words of list) {
  console.log(words + " "+ list.indexOf(words));
}
console.log(" ");

/// fin del dia 22/02/2026 01:10pm

//OBJETOS

let datosPersonales = {
  name: "Manuel",
  lastName: "Ytuza",
  age: 30,
  isFather: true,
  address: {
    street: "Calle 123",
    city: "Buenos Aires",
    country: "Jupiter"
  }
}
// recore elementos de un objeto con for in
for (let key in datosPersonales) {
  console.log(`${key}: ${datosPersonales[key]}`);
}

// WHILE repite un bloque de código mientras una condición sea verdadera
/*
let participantes = 0
let listParticipantes = []
while (participantes < 4) {
  let newparticipantes = prompt("ingresa el nombre del participante");
  if (typeof newparticipantes === "string" && newparticipantes.trim() !== "") {
    alert(`Bienvenido ${newparticipantes}`);
    listParticipantes.push(newparticipantes);
    participantes++;
  } else {
    alert("No se ingresó un nombre válido");
  }
} 
console.log("");
console.log("Lista de participantes:");

for (let participante of listParticipantes) {
  console.log(participante);
};
*/

// dO WHILE ejecuta el bloque al menos una vez, luego verifica la condición
do {
  console.log("Este mensaje se muestra al menos una vez, es do-while");
} while (false);

//repaso de functions

let twentyOff = (price, discount) => {
  let discountValue = (price * discount)/100;
  return price - discountValue;
}      // función flecha que aplica un 20% de descuento a un precio

console.log(twentyOff(200, 20)); // muestra 80, que es el resultado de aplicar el descuento al precio original de 100

// method es una función-arrow dentro de un objeto
let calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => y !== 0 ? x / y : "No se puede dividir entre 0"  // ? operador ternario para evitar división por cero
}; 

console.log();
//metodos de un objeto
console.log( calculator.add(10, 5)); 
console.log( calculator.subtract(10, 5));
console.log( calculator.multiply(5, 7)); 
console.log( calculator.divide(10, 0));

//operador ternario ? para asignar un valor según una condición igual que if else pero en una sola línea 
let age2 = 17;
let age3 = 18;

let exampleTernario = age2 >= 18 ? "pass" : "fail";
console.log(exampleTernario); // muestra "pass" si age es mayor o igual a 18, de lo contrario muestra "fail"

let exampleTernario2 = age3 >= 18 ? "pass" : "fail";
console.log(exampleTernario2); // muestra "pass" si age es mayor o igual a 18, de lo contrario muestra "fail"

// sumar elementos de un array 
let example = [1, 2, 3, 4, 5];
let sumaEx = 0;
for (let n of example) {
  sumaEx += n; // sumaEx = sumaEx + n
} 
console.log(sumaEx); // muestra 15, que es la suma de los números del array

// sumar elementos de un array con reduce, NO SE CONLUYO EN PLATZY
let sumaReduce = example.reduce((acc, n) => acc + n, 0);
console.log(sumaReduce); // muestra 15, que es el resultado de reducir el array sumando sus elementos, comenzando con un acumulador inicial de 0  

// 21/06/2024 iniciamos con map

let newExample = example.map(n => n * 3);
console.log(newExample); // muestra [3, 6, 9, 12, 15], que es el resultado de multiplicar cada elemento del array original por 3 usando el método map 

//forEach no devuelve un nuevo array, solo ejecuta una función para cada elemento del array original
let temperature = [20, 25, 30, 35, 40];
let celsius = [];
temperature.forEach(temp => {
  celsius.push(Math.round(5/9 * (temp - 32)));
});
console.log(celsius); // muestra [ -6, -3, 0, 2, 4 ], que es el resultado de convertir cada temperatura de Fahrenheit a Celsius usando el método forEach para iterar sobre el array original y agregar los resultados a un nuevo array celsius.

// mas sencillo con map
let celciusMap = temperature.map(t => parseFloat((5/9 * (t -32)).toFixed(1)));
console.log(celciusMap); // muestra [ -6.7, -3.9, 0, 2.2, 4.4 ], que es el resultado de convertir cada temperatura de Fahrenheit a Celsius usando el método map para crear un nuevo array con los resultados redondeados a un decimal.

// suma de elemtos de un array con reduce

let totalTemperatureReduce = temperature.reduce ((acc,t) => acc + t, 0);
console.log(totalTemperatureReduce); // muestra 150, que es el resultado de reducir el array de temperaturas sumando sus elementos, comenzando con un acumulador inicial de 0.
let totalCelciusReduce = celciusMap.reduce((acc, c) => acc + c, 0);
console.log(`con reduce ${totalCelciusReduce}`); // muestra -5.6, que es el resultado de reducir el array de temperaturas en Celsius sumando sus elementos, comenzando con un acumulador inicial de 0.

// suma con forEach
let totalCelciusForEach = 0;
celciusMap.forEach(c => totalCelciusForEach += c);
console.log(`Con forEach ${totalCelciusForEach}`); // muestra -5.6, que es el resultado de iterar sobre el array de temperaturas en Celsius usando forEach para sumar sus elementos a un acumulador totalCelciusForEach, comenzando con un valor inicial de 0. 

// filter crea un nuevo array con los elementos que cumplen una condición
let valueFilter = [2,3,5,6,7,8,44,55,66,77,88,99];
let parValue = valueFilter.filter(n => n % 2 === 0);
console.log(parValue); // muestra [ 2, 6, 8, 44, 66, 88 ], que es el resultado de filtrar el array original para incluir solo los números pares usando el método filter con una función que verifica si el número es divisible por 2 sin residuo. 

//reduce con string y cuantas veces se repite una palabra en un array
let wordFilter = ["apple", "banana", "orange", "apple", "grape", "banana"];
let countAll = wordFilter.reduce ( (acc, word) => {
  if (acc[word]) {
    acc[word] += 1; // si la palabra ya existe en el acumulador, incrementa su contador
  } else {
    acc[word] = 1; // si la palabra no existe, inicializa su contador en 1
  }
  return acc; // devuelve el acumulador actualizado para la siguiente iteración   
}, {});
console.log(countAll); // muestra { apple: 2, banana: 2, orange: 1, grape: 1 }, que es el resultado de reducir el array de palabras para contar cuántas veces se repite cada palabra, utilizando un objeto como acumulador para almacenar los conteos.

// find encuentro primer numero que cumple
let findNumber = valueFilter.find(n => n >70);
console.log(findNumber); // muestra 77, que es el primer número en el array valueFilter que es mayor que 70, encontrado usando el método find con una función que verifica si el número es mayor que 70.
// findIndex encuentro el índice del primer numero que cumple
let finderIndex = valueFilter.findIndex(n => n >70);
console.log(finderIndex); // muestra 9, que es el índice del primer número en el array valueFilter que es mayor que 70, encontrado usando el método findIndex con una función que verifica si el número es mayor que 70.
// slice crea un nuevo array con una parte del array original
let sliceExample = [0,1,2,3,4,5,6,7,8];
console.log(sliceExample.slice(2,5)); // no incluye el indice de cierre -1, [ 2, 3, 4 ]
console.log(sliceExample.slice(2,6)); // no incluye el indice de cierre -1, [ 2, 3, 4, 5 ]
console.log(sliceExample.slice(2,30)); 
// spread operator para copiar un array
let copyArray = [...sliceExample]; // crea una copia del array sliceExample usando el spread operator (...), lo que permite crear un nuevo array con los mismos elementos sin modificar el original.
console.log(copyArray); 
let copyArray2 = [...sliceExample,...copyArray]; // copia el array original y lo concatena con la copia, creando un nuevo array con los elementos repetidos
console.log(copyArray2); 
let copyArray3 = [...sliceExample, "Manuel", "Exmoxnix"]; // copia el array original y agrega dos elementos nuevos al final
console.log(copyArray3); 

// guia 2 - 22/06/2024 03:32pm

// -----------------------YA SE GENERO PRIMER DICCIONARIO------------------------------

// 2026-02-23 inicio 2:00pm

//                           programcionOrientadaAObjetos 
const person1 = {
  name: "Manuel",
  age: 30,
  city: "Madrid",
  pensar() {
    return `i am ${this.name} and i am living in ${this.city}`}
};
console.log(person1.pensar()); // muestra "i am Manuel and i am living in Madrid", que es el resultado de llamar al método pensar del objeto person1, utilizando this para acceder a las propiedades name y city del mismo objeto.
// agregar propieda y new metodo a un objeto
person1.gameFavorite = "God of War";
person1.playGame = (game) => `i am play ${game}`;
console.log(person1.gameFavorite);  
console.log(person1.playGame( "The Last of Us")); 
console.log(person1)
// para elmininar uso delete
delete person1.age;
delete person1.pensar;
console.log(person1); 

// funcion constructora y instancias 

function Person(name, power, city) {
  this.name = name;
  this.power = power;
  this.city = city;
}
let person2 = new Person("Manuel", "coding", "New York","god of war");
console.log(person2);
// sumar propiedad a todas las instancias de Person con prototype
Person.prototype.hobby = "reading";

//prototype para agregar un metodo a todas las instancias de Person
Person.prototype.introduce = function() {
  return `Hi, I am ${this.name} and I have the power of ${this.power}`;
}   
console.log(person2.introduce()); 

// agregar propiedad a una instancia específica sin afectar a las demás instancias de Person
 let person3 = new Person("Alice", "painting", "Paris");
 person3.facebook = "alice.art"; // agregar propiedad a una instancia específica sin afectar a las demás instancias de Person
 console.log("agregamos una propiedad a una instancia especifica person3", person3);
 console.log(person3.hobby); 
 //lo que esta dentro de prototype no esta directamente por eso no aparece n console log pero se hereda para el uso 
 console.log (Person.prototype);
 console.log (person2.__proto__); // muestra el objeto prototype de la función constructora Person, que contiene las propiedades y métodos heredados por las instancias creadas con esa función constructora. 

 //Date y manejo de fechas

const opciones = {
  timeZone: "America/Lima",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
};
const fp = () => { 
console.log(new Date().toLocaleString("es-PE", opciones));}

// 24/02/2026, 02:24:11 p. m. iniciamos
fp(); 
// Clases en JavaScript: Creación y Uso de Objetos con Sintaxis Moderna 
// blueprint de una clase

class PersonClass {
  constructor(name, age, city, dreams) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.dreams = dreams;
  }
  introduce() {
    return `Hi, I am ${this.name}, I am ${this.age} years old and I live in ${this.city}. My dreams are ${this.dreams}`;
  }  
}

let person4 = new PersonClass("Manuel", 30, "Madrid", "be a great programmer");
console.log(person4.introduce()); 
console.log(person4);

//extends y super para herencia de clases
class Student extends PersonClass {
  constructor(name, age, city, dreams, grade) {
    super(name, age, city, dreams);
    this.grade = grade;
  }
  study(){return `i am ${this.name}, i live in ${this.city} and i have a grade of ${this.grade} in school`;}
}

let student1 = new Student("Alice", 5, "Peru", "learn to read", "A");
console.log(student1.study());
// Una instancia es un objeto creado a partir de una clase.
// cadena de prototipos es el mecanismo por el cual los objetos en JavaScript heredan propiedades y métodos de otros objetos, formando una cadena de prototipos que permite la reutilización de código y la creación de objetos más complejos a partir de objetos más simples.

Student.prototype.pet = function() {
  return "todos tenemos un perro como mascota";
}
console.log(student1.pet());
// this en clases se refiere a la instancia actual de la clase, permitiendo acceder a sus propiedades y métodos desde dentro de la clase.
Student.prototype.pet = function() {
  return `todos los de clase ${this.grade} tenemos un perro como mascota`;
};
console.log(student1.pet());

// Guard Clause (cláusula de guarda) 
//if (!student1) return null;
