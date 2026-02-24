/* let fatherName = "Manuel";
let doutherName = "Alice";
let secondDoutherName = "Emile ";
let nickName = "exmoxnix";
let feelingFather = "proud";
console.log (`My name is ${fatherName}. My douther's name is ${doutherName}, but her nickname is ${nickName}. I am very ${feelingFather} of her!`);

function successfulFather() {
    return `${fatherName} is a successful father because his douther ${doutherName} is very clever and kind.`;
}

console.log (successfulFather()); */



let finalExample = ["Manuel", "Alice", "Emile", "Exmoxnix", "proud", "Manuel", "Alice", "Emile", "Exmoxnix", "proud", "Manuel", "Alice", "Emile", "Exmoxnix", "proud"];
let conteo =finalExample.reduce ((acumulador, valoractual) => { // el acumulador es el objeto que se va construyendo con el conteo, y el valoractual es cada elemento del array que se va procesando
    if (acumulador[valoractual]) { // si el valor actual ya existe como propiedad en el acumulador, entonces se incrementa su valor en 1
        acumulador[valoractual] += 1;
    } else {
        acumulador[valoractual] = 1;
    }
    return acumulador;
}, {}) 
console.log(conteo); // muestra un objeto con la cantidad de veces que cada elemento aparece en el array, por ejemplo: { Manuel: 1, Alice: 1, Emile: 1, Exmoxnix: 1, proud: 1 }  

function exampleFunction() {
    return "This is an example clasic function.";
} 
console.log(exampleFunction()); // muestra "This is an example clasic function."

let exampleArrowFunction = () => "This is an example arrow function.";
console.log(exampleArrowFunction()); // muestra "This is an example arrow function."

let array1 = [1, 2, 3];
let array2 = [];
array1.forEach(x => array2.push(x * 2)); // recorre cada elemento del array1, lo multiplica por 2 y lo agrega al array2
console.log(array2); // muestra [2, 4, 6]

let array3 = array1.map(x => x * 2); // recorre cada elemento del array1, lo multiplica por 2 y devuelve un nuevo array con los resultados
console.log(array3); // muestra [2, 4, 6] 

array4 = array1.findIndex(x => x > 2); // 
array5 = array1.slice(0, 2); // devuelve un nuevo array con los elementos desde el índice 0 hasta el índice 2 (sin incluir el índice 2)
array5 = [...array1, ...array2]; 
console.log(array5);
let [a, b] = array1; // destructuración de arrays, asigna el primer elemento de array1 a la variable a y el segundo elemento a la variable b
console.log(a); // muestra 1
console.log(b); // muestra 2 

let objExample = { name: "Manuel", age: 30, city: "Madrid" };
let { name, age } = objExample; // destructuración de objetos, asigna la propiedad name de objExample a la variable name y la propiedad age a la variable age
console.log(name);    // muestra Manuel
console.log(age); // muestra 30

let valor = 17;
switch(true) {
  case (valor > 20): console.log("valor es mayor a 20");
    break;
  case (valor > 0 && valor < 20): console.log("valor está entre 0 y 20");
    break;
  default: console.log("valor es 0 o menor que 0");
}   

console.log(`El valor es ${valor}`); 

// estructura vacica de swith
/*switch(variable) {
  case valor1: 
    break;
  case valor2: 
    break;
  default: 
}   */

let objtExample2 = { name: "Alice", age: 25, city: "Barcelona" };
console.log(objtExample2.name); // muestra Alice
console.log(objtExample2["age"]); // muestra 25

new Date()
console.log(new Date()); // muestra la fecha y hora actual en formato de objeto Date

