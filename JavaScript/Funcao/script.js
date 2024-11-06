/*
  Sintaxe função:
  function name(parameter1, parameter2, parameter3) {
    code to be executed
  }

*/

function myFunction(p1, p2) {
  return p1 * p2;
}

//______________________________________________________________________________

// retorno da função

function myFunction(a, b) {
  // Function returns the product of a and b
    return a * b;
  }

//______________________________________________________________________________

// Variaveis locais

  // -> code here can NOT use carName

  function myFunction() {
    let carName = "Volvo";
    // -> code here CAN use carName
  }

  // -> code here can NOT use carName