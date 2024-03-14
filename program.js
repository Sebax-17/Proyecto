const readlineSync = require('readline-sync');
let sueldo = 0;
let Estrato = 0;
let zona = ``;
let Sudsidioprimaria = 0;
let SudsidioSecundaria = 0;
let SudsidioUniversidad = 0;
let CanDeHijosPrimaria = 0;
let CanDeHijosSecundaria = 0;
let CanDeHijosUniversidad = 0;
let NonimaMujeres = 0;
let NonimaHombres = 0;
let Genero = ``;
let CanDeEmpleados = 0;
let Extrangero = ``; 
 
CanDeEmpleados = +readlineSync.question(`Cuantos empleados son? `)
for(let i=0 ;i<CanDeEmpleados ; i++){
    sueldo = +readlineSync.question(`Ingresa el sueldo del empleado, `)
    Estrato = +readlineSync.question(`Que estrato eres: `)
    if(Estrato == 1 ){
     sueldo = sueldo*0.15        
    }
    if(Estrato == 2){
        sueldo = sueldo * 0.1
    }
    if(Estrato == 3){
        sueldo = sueldo * 0.05
    }
    zona = readlineSync.question(`En que zona vives rural o urbano `)
    if(zona == `rural`){
        sueldo = sueldo + 35000
    }
    CanDeHijosPrimaria = +readlineSync.question(`Cuantos Hijos tienen en primaria `)
    CanDeHijosSecundaria = +readlineSync.question(`Cuantos Hijos tiene en Secundaria `)
    CanDeHijosUniversidad = +readlineSync.question(`Cuantos Hijos tiene en la Universidad `)
    if(CanDeHijosPrimaria > 0 ){
        Sudsidioprimaria = +readlineSync.question(`Cual es el sudsidio para Primaria `)
        let SudsidioFinalPrimaria = sueldo + (Sudsidioprimaria * CanDeHijosPrimaria)
    }
    if(CanDeHijosSecundaria > 0){
        SudsidioSecundaria = +readlineSync.question(`Cual Es el Sudsidio para Secundaria `)
        let SudFinalSecundaria = sueldo + (SudsidioSecundaria * CanDeHijosSecundaria)
    }
    if(CanDeHijosUniversidad > 0 ){
        SudsidioUniversidad = +readlineSync.question(`Cual es el Sudsidio para Universidad `)
        let SudFinalUniversidad = sueldo + (SudsidioUniversidad * CanDeHijosUniversidad )
    }
    Genero = readlineSync.question(`Cual es tu genero M/F `)
    if(Genero == `M`){
        NonimaHombres = sueldo + SudFinalSecundaria + SudFinalUniversidad + SudsidioFinalPrimaria
    }else{
        NonimaMujeres = sueldo + SudFinalSecundaria + SudFinalUniversidad + SudsidioFinalPrimaria
    }
    Extrangero = readlineSync.question(`Eres extrangero`)
    

}

