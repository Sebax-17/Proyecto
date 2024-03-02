const readlineSync = require('readline-sync');

// Wait for user's response.
let Continuar = +readlineSync.question('Si= 1 , No= 0');
if (Continuar == 1){


    console.log(Continuar);
}
if(Continuar != 1 & Continuar != 0){
    console.error("Numeros invalidos ")
    
}