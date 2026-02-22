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