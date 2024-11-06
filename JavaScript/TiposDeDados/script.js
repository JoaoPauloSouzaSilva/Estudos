/* 
  Os tipos de dados do Js são:
-> String
-> Number
-> Bigint
-> Boolean
-> Undefined
-> Null
-> Symbol
-> Object
    |
    |-> Tipos de dados do objeto:
        -> Objetos
        -> Matrizes
        -> Datas
        -> Mapas
        -> Conjuntos
        -> Intarrays
        -> Floatarrays
        -> Promisses
        -> ...    
*/

//______________________________________________________________________________

//  Números -> Todos os números JavaScript são armazenados como números decimais (ponto flutuante 64 bits). 

//______________________________________________________________________________

// Números extra grandes ou extra pequenos podem ser escritos com científico Notação (exponencial):

let y = 123e5;    // 12300000

let z = 123e-5;   // 0.00123

//______________________________________________________________________________

/* 
  JavaScript BigInt é um novo tipo de dados (ES2020)
  Usado para armazenar valores inteiros que são muito grandes para serem representados por um número JavaScript normal.
*/

let x = BigInt("123456789012345678901234567890");

//______________________________________________________________________________

// Isso é Object !== Array

//Object:
const person = {firstName:"John", lastName:"Doe"}; // { }

// Array object:
const cars = ["Saab", "Volvo", "BMW"]; // [ ]

//______________________________________________________________________________

// Operador Typeof (localizar o tipo de uma variável JavaScript)

typeof "John Doe"  // Returns "string"