const readlineSync = require('readline-sync');

for (i;i< nEmpleados;i++){
function calcularSubsidioEstrato(estrato, salario) {
    if (estrato === 1) {
        return salario * 0.15;
    } else if (estrato === 2) {
        return salario * 0.10;
    } else if (estrato === 3) {
        return salario * 0.05;
    } else {
        return 0;
    }
}

function calcularSubsidioHijo(nivelEstudio, subsidioPrimaria, subsidioUniversidad, subsidioSecundaria) {
    if (nivelEstudio === "primaria") {
        return subsidioPrimaria;
    } else if (nivelEstudio === "secundaria") {
        return subsidioSecundaria;
    } else if (nivelEstudio === "universidad") {
        return subsidioUniversidad;
    } else {
        return 0;
    }
}

function main() {
    let totalNomina = 0;
    let totalNominaHombres = 0;
    let totalNominaMujeres = 0;
    let empleadoMasCostoso = null;
    let maxCosto = 0;
    let totalSubsidioSecundaria = 0;
    let totalPasajesExtranjeros = 0;

    const X = parseFloat(readlineSync.question("Ingrese el subsidio para primaria: "));
    const Y = parseFloat(readlineSync.question("Ingrese el subsidio para universidad: "));
    const Z = parseFloat(readlineSync.question("Ingrese el subsidio para secundaria: "));

    const nEmpleados = parseInt(readlineSync.question("Ingrese el número de empleados: "));
    for (let i = 0; i < nEmpleados; i++) {
        const nombre = readlineSync.question(`Ingrese el nombre del empleado ${i + 1}: `);
        const salario = parseFloat(readlineSync.question(`Ingrese el salario de ${nombre}: `));
        const estrato = parseInt(readlineSync.question(`Ingrese el estrato de ${nombre}: `));
        const sexo = readlineSync.question(`Ingrese el sexo de ${nombre} (M/F): `).toUpperCase();
        const sector = readlineSync.question(`Ingrese el sector de ${nombre} (rural/urbano): `).toLowerCase();
        const nivelEstudioHijo = readlineSync.question(`Ingrese el nivel de estudio del hijo de ${nombre} (primaria/secundaria/universidad): `).toLowerCase();

        let subsidioEmpleado = calcularSubsidioEstrato(estrato, salario);
        if (sector === "rural") {
            subsidioEmpleado += 35000;
        }

        if (sexo === "M") {
            totalNominaHombres += salario + subsidioEmpleado;
        } else {
            totalNominaMujeres += salario + subsidioEmpleado;
        }

        totalNomina += salario + subsidioEmpleado;

        const subsidioHijo = calcularSubsidioHijo(nivelEstudioHijo, X, Y, Z);
        totalSubsidioSecundaria += subsidioHijo;

        const esExtranjero = readlineSync.question(`El empleado ${nombre} es extranjero? (si/no): `).toLowerCase();
        if (esExtranjero === "si") {
            totalPasajesExtranjeros += 2; // Aquí deberías ingresar el costo real de los pasajes
        }

        if (salario + subsidioEmpleado > maxCosto) {
            maxCosto = salario + subsidioEmpleado;
            empleadoMasCostoso = nombre;
        }
    }

    console.log("1. El costo total de la nómina es:", totalNomina);
    console.log("2. El costo de la nómina de los hombres es:", totalNominaHombres);
    console.log("3. El costo de la nómina de las mujeres es:", totalNominaMujeres);
    console.log("4. El empleado que más dinero le cuesta a la empresa es:", empleadoMasCostoso);
    console.log("5. El dinero gastado en subsidios para los hijos en secundaria es:", totalSubsidioSecundaria);
    console.log("6. El dinero gastado en pasajes para los empleados extranjeros es:", totalPasajesExtranjeros);
}
}