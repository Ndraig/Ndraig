Let cantidad = prompt("¿cuantos alumnos son?");
Let alumnosTotales = [];

for (i = 0 < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
 }

const tomarAsistencia = (nombre,p)=>{
    Let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[i][1]++;

    }
}


for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotalesk
    Let resultado =  `${alumnosTotales[alumno][0]}:<br>
          Presentes:${alumnosTotales[alumno][1]}   <br>
          Ausencias: ${30 - parseInt(alumnosTotales[alumno][1]}
    `;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= REPROBADO POR INASISTENCIA
        } else {
            resultado+= "<br><br>"
        }

        document.write(resultado)