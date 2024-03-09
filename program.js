const readlineSync = require('readline-sync');
let sueldo = 0;
let cantidaddehijos = 0;
let genero = ``;
let estrato = ``;
let Zona = ``;
const Nacionalidad = readlineSync.question(`Ingrese La Nacionalidad En La que se encuentra la empresa`)
// Wait for user's response.
let Continuar = +readlineSync.question('Si= 1 , No= 0 :  ');
if (Continuar == 1){


    console.log(Continuar);
}
if(Continuar !== 1 && Continuar !== 0 ){

    console.error(`Numeros invalidos`)
   
    
}
while (Continuar == 1 ){
   if (Nacionalidad == Nacionalidad){
     sueldo = +readlineSync.question(`Ingresa El Sueldo `)
     estrato = +readlineSync.question(`Ingresa El Estrato En la Que Vives`)
     cantidaddehijos= +readlineSync.question(`Cuantos Hijos tiene`)
     if (cantidaddehijos > 1){
        let cdehijosprimaria = +readlineSync.question("cuantos hijos estudian en primaria: ")
        
     } if (cdehijosprimaria < cantidaddehijos) {
        let cdehijossecundaria = +readlineSync.question(`ingresa la cantina de estudian en secundaria`)
        if (isNaN(cdehijossecundaria)){
            console.error(`Tiene que ser numerico `)
            continue;
        }
     
    }
        
     


     
   }



}