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
true && false; // AND
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

console.log(fullNameFn(firstName, lastName));
console.log(sum(5, 7));
console.log(greet());

// ==========================================================
// 8. ARRAYS (TODOS LOS TIPOS)
// ==========================================================

// Array de strings
let fruits = ["apple", "banana", "orange", "orange"];

// Array de números
let scores = [10, 20, 30];

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
console.log()
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
console.log("duda") 
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
// 13. DESTRUCTURING
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

// Programación funcional
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);          // transforma
let evens = numbers.filter(n => n % 2 === 0);   // filtra
let total = numbers.reduce((acc, n) => acc + n, 0); // acumula

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

/************************************************************
 * FIN DE LA GUÍA JAVASCRIPT PROFESIONAL
 ************************************************************/
//no debo rendirme 
// terminar juego avanzar
//const game = ["piedra", "papel", "tijera"];
//const player = prompt("elige tu jugada: piedra, papel o tijera");
//const alert = ("la computadora elige: " + game[Math.floor(Math.random() * game.length)]);

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
        fruits[i] += " ~NO es Apple"};
    console.log(fruits[i]);
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

// dOWHILE ejecuta el bloque al menos una vez, luego verifica la condición
do {
  console.log("Este mensaje se muestra al menos una vez, es do-while");
} while (false);

//repaso de functions

let twentyOff = (price, discount) => {
  let discountValue = (price * discount)/100;
  return price - discountValue;
}      // función flecha que aplica un 20% de descuento a un precio

console.log(twentyOff(200, 20)); // muestra 80, que es el resultado de aplicar el descuento al precio original de 100


