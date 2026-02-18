
let changeValue = 10;
const pi = 3.14;

let value = {
    string: "string",
    number: 1,
    boolean: true,
    nullValue: null,
    undefinedValue: undefined,
    object: { name: "object" },
    array: [1, 2, 3],
    function: function() { return "function"; } 
};

for (let key in value) {
    console.log(`${key} is ${typeof value[key]}`);
}   

let age = 10;
let dni = true;

if (age > 18 && dni !== null) {
    console.log("you have continued");
} else if (age > 18 || dni === false) {
    console.log("its a jocker");
} else {
    console.log("you dont have continued");
}
