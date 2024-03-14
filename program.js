const readlineSync = require('readline-sync');
let sueldo = 0;
let cantidaddehijos = 0;
let genero = ``;
let estrato = ``;
let Zona = ``;
let Continuar = 1;
let NonimaMujer = 0;
let nonimaHombre = 0;
genero = readlineSync.question("Ingresa tu genero M/F")
while (Continuar !==0){
    let Nempleados = +readlineSync.question("cuantos empleados son?")
  for (i=0;i<Nempleados;i++){  
   if (genero ==  "M" ){
     sueldo = +readlineSync.question(`Ingresa El Sueldo `)
     estrato = +readlineSync.question(`Ingresa El Estrato En la Que Vives `)
     hijos = readlineSync.question(`tienes Hijos `)
        let zona = readlineSync.question(`Vive en Rural o Urbano `)
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

        
       
       
        
        
    }else{
        sueldo = +readlineSync.question(`Ingresa El Sueldo `)
     estrato = +readlineSync.question(`Ingresa El Estrato En la Que Vives`)
     hijos = readlineSync.question(`tienes Hijos`)
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
       if (cdehijosprimaria>0){
        Sudsidiofinalprimaria = sueldo + (subsidioprimaria* cdehijosprimaria)
       }
       if (candehijosUniversida>0){
        SudsidiofinalUniversidad = sueldo + (subsidioUniversidad* cantidaddehijos)
       }
       if (cdehijossecundaria>0){
        SudsidiofinalSecundaria = sueldo + (subsidiosecundaria* cantidaddehijos)
       }
      sueldo = sueldo + sueldo

    }
  }
}
     
console.info(sueldo)
 
