const readlineSync = require('readline-sync');
let sueldo = 0;
let cantidaddehijos = 0;
let genero = ``;
let estrato = ``;
let Zona = ``;
let Mujercontador = 0;
const Nacionalidad = readlineSync.question(`Ingrese La Nacionalidad En La que se encuentra la empresa`)
Continuar = 1;
while (Continuar == 1 )
   if (Nacionalidad == Nacionalidad){
     genero = readlineSync.question(`ingresa tu genero M ó H :`)
     sueldo = +readlineSync.question(`Ingresa El Sueldo `)
     estrato = +readlineSync.question(`Ingresa El Estrato En la Que Vives`)
     hijos = readlineSync.question(`tienes Hijos`)
     
     subsidioprimaria = +readlineSync.question(`Ingrese el subsidio de tenre hijos en primaria`)
     subsidiosecundaria = +readlineSync.question(`Ingrese el subsidio de tenre hijos en secundaria`)
     subsidioUniversidad = +readlineSync.question(`Ingrese el subsidio de tenre hijos en Universidad`)
       
        if (isNaN(cdehijosprimaria)){
            console.error(`Tiene que ser numerico `)
            continue;
        }
        if (isNaN(cdehijossecundaria)){
            console.error(`Tiene que ser numerico `)
            continue;
        }
        if (isNaN(candehijosUniversida)){
            console.error(`Tiene que ser numerico `)
            continue;
        }
        
     
   
        sueldo = +readlineSync.question(`Ingresa El Sueldo `)
        estrato = +readlineSync.question(`Ingresa El Estrato En la Que Vives`)
        let zona = readlineSync.question(`Vive en Rural o Urbano`)
        if (zona == `Rural`){
            sueldo = sueldo + 35000;
        }
        if (estrato == 1){
            sueldo = sueldo * 0.15
        }if (estrato == 2 ) {
            sueldo = sueldo * 0.1
        }if (estrato == 3){
            sueldo = sueldo * 0.05
        }
       if (hijos == `si` && hijos == `SI` && hijos == `Si`){
         cdehijosprimaria = +readlineSync.question(`Cantidad de hijos que estudian en primaria`)
         cdehijossecundaria = +readlineSync.question(`ingresa la cantida de estudian en secundaria`)
         candehijosUniversida = +readlineSync.question(`Cuantos Hijos estudian en Univesidad`)
         subsidioprimaria = +readlineSync.question(`Ingrese el subsidio de tenre hijos en primaria`)
         subsidiosecundaria = +readlineSync.question(`Ingrese el subsidio de tenre hijos en secundaria`)
         subsidioUniversidad = +readlineSync.question(`Ingrese el subsidio de tenre hijos en Universidad`)
       }
       Sudsidiofinalprimaria = sueldo + (subsidioprimaria* cdehijosprimaria)
       SudsidiofinalSecundaria = sueldo + (subsidiosecundaria * cdehijossecundaria)
       SudsidiofinalUniversidad = sueldo + (SudsidiofinalUniversidad * candehijosUniversida)
        
        
    }
     
    console.log(sueldo)

let Continuar = +readlineSync.question('Si= 1 , No= 0 :  ');
       if(genero == `M`){
        console
       }
