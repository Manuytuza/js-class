//scope es el contexto de una variable, es decir, donde se puede acceder a ella
//existen 3 tipos de scope: global, local y bloque 
// scope change es el cambio de scope, es decir, cuando una variable cambia de scope, por ejemplo, cuando una variable global se convierte en local dentro de una función

// =======================
// 📌 PROPIEDADES DE ARRAYS
// =======================
// length        -> número de elementos en el array
// constructor   -> referencia a la función que creó el array
// prototype     -> permite añadir nuevas propiedades o métodos al objeto Array

// =======================
// 📌 MÉTODOS DE ARRAYS
// =======================

// --- Manipulación básica ---
// push()        -> agrega un elemento al final
// pop()         -> elimina el último elemento
// shift()       -> elimina el primer elemento
// unshift()     -> agrega un elemento al inicio
// concat()      -> combina arrays y devuelve uno nuevo
// slice()       -> devuelve una copia parcial del array
// splice()      -> agrega, elimina o reemplaza elementos
// copyWithin()  -> copia elementos dentro del mismo array
// fill()        -> llena el array con un valor específico
// flat()        -> aplana arrays anidados
// flatMap()     -> combina map() y flat()
// toSpliced()   -> versión inmutable de splice

// --- Búsqueda y comprobación ---
// indexOf()     -> devuelve la posición de un elemento
// lastIndexOf() -> última posición de un elemento
// includes()    -> verifica si un elemento existe
// find()        -> devuelve el primer elemento que cumple una condición
// findIndex()   -> devuelve el índice del primer elemento que cumple una condición
// at()          -> accede a un elemento por índice (incluye negativos)

// --- Transformación y recorrido ---
// forEach()     -> ejecuta una función por cada elemento
// map()         -> crea un nuevo array transformando cada elemento
// filter()      -> crea un nuevo array con elementos que cumplen una condición
// reduce()      -> reduce el array a un solo valor
// reduceRight() -> igual que reduce, pero de derecha a izquierda
// sort()        -> ordena los elementos
// reverse()     -> invierte el orden
// every()       -> comprueba si todos cumplen una condición
// some()        -> comprueba si al menos uno cumple una condición

// --- Conversión ---
// toString()    -> convierte el array en string
// join()        -> une los elementos en un string con separador

// --- Iteradores ---
// keys()        -> devuelve un iterador con los índices
// values()      -> devuelve un iterador con los valores
// entries()     -> devuelve un iterador con pares [índice, valor]

// --- Nuevos métodos útiles ---
// Array.from()  -> crea un array desde un objeto iterable
// Array.isArray() -> verifica si un valor es un array
        
// ===== Métodos comunes de Math en JavaScript =====

// --- Redondeo ---
// Math.round(x) → redondea al entero más cercano
// Math.floor(x) → redondea hacia abajo
// Math.ceil(x) → redondea hacia arriba

// --- Valores absolutos ---
// Math.abs(x) → convierte negativos en positivos

// --- Potencias y raíces ---
// Math.pow(base, exponente) → calcula base ^ exponente
// Math.sqrt(x) → raíz cuadrada

// --- Aleatorios ---
// Math.random() → número aleatorio entre 0 y 1
// Para obtener un entero en un rango: 
// Math.floor(Math.random() * rango) + inicio

// --- Máximos y mínimos ---
// Math.max(a, b, c...) → devuelve el mayor
// Math.min(a, b, c...) → devuelve el menor

// --- Constantes matemáticas ---
// Math.PI → valor de π (3.14159...)
// Math.E → número de Euler (2.71828...)

// --- Redondeo con decimales ---
// num.toFixed(n) → muestra con n decimales (devuelve string)
// parseFloat(num.toFixed(n)) → convierte a número con n decimales