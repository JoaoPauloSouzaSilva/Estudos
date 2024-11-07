/*
  --- Propriedades do objeto ---

  Um carro da vida real tem propriedades como peso e cor:

  -> car.name = Fiat, 
  -> modelo do carro = 500, 
  -> peso do carro = 850kg, 
  -> cor do carro = branco.

  Os objetos Car têm as mesmas propriedades, mas os valores diferem de carro para carro.

*/

//______________________________________________________________________________

/*
  --- Métodos de objeto ---

  Um carro da vida real tem métodos como iniciar e parar:

  -> carro.start(), 
  -> carro.drive(), 
  -> carro.brake(), 
  -> carro.stop().

  Os objetos Car têm os mesmos métodos, mas os métodos são executados em momentos diferentes.
  
*/

//______________________________________________________________________________

/*   
  --- Objeto Javascript ---
  
  Objetos também são variáveis. Mas os objetos podem conter muitos Valores.
*/

  const car = {type:"Fiat", model:"500", color:"white"};

//______________________________________________________________________________

//  --- Como definir um objeto JavaScript ---

// -> Usando um literal de objeto ----------------------------------------------
  const person0 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// -> palavra-chave ------------------------------------------------------------
  
  const person1 = new Object();

  person1.firstName = "John";
  person1.lastName = "Doe";
  person1.age = 50;
  person1.eyeColor = "blue";

// -> Acessando propriedades do objeto -----------------------------------------
  const person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };

  document.getElementById("demo").innerHTML = "The last name is " + person.lastName;

//______________________________________________________________________________

/*
  --- Métodos de objeto JavaScript ---

    Métodos são ações que podem ser executadas em objetos.

    Métodos são definições de função armazenadas como valores de propriedade.
*/

  const perso2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  document.getElementById("demo").innerHTML = person.fullName(); // usa assim

//______________________________________________________________________________

/*
  --- Objetos JavaScript são mutáveis ---

    Os objetos são mutáveis: eles são endereçados por referência, não por valor.

    Se person for um objeto, a instrução a seguir não criará uma cópia de person:
*/
    //Create an Object
    const person3 = {
      firstName:"John",
      lastName:"Doe",
      age:50, eyeColor:"blue"
    }

    // Create a copy
    const x = person3;

    // Change Age in both
    x.age = 10;

    let x = "firstname";
    let y = "age";
    person[x] + " is " + person[y] + " years old.";

/*
      O objeto x não é uma cópia de pessoa. O objeto x é pessoa.
      O objeto x e o objeto person compartilham o mesmo endereço de memória.
      Quaisquer alterações em x também mudarão de pessoa
*/
//______________________________________________________________________________

//  --- Adicionando novas propriedades ---

  person.nationality = "English";

//______________________________________________________________________________

//  --- Excluindo propriedades ---

  const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  delete person4.age;

//______________________________________________________________________________

//  --- Objetos aninhados ---

    myObj = {
      name:"John",
      age:30,
      myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
      }
    }

  // Você pode acessar objetos aninhados usando a notação de ponto ou a notação de colchetes:

  myObj.myCars.car2; // Possibilidade 001

  myObj.myCars["car2"]; // Possibilidade 002

  myObj["myCars"]["car2"]; // Possibilidade 003

  let p1 = "myCars";
  let p2 = "car2"; 
  myObj[p1][p2]; // Possibilidade 004

//______________________________________________________________________________
