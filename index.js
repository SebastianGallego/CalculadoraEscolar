


// Calculadora de Aprobación Escolar

// Escribe un programa en JavaScript que ayude a determinar si un estudiante ha aprobado o 
// reprobado una asignatura. El programa debe realizar lo siguiente:

// 1. Solicitar al usuario que ingrese su nota en la asignatura (un número entre 0 y 100).
// 2. Utilizar la estructura if para evaluar la nota ingresada. Si la nota es mayor o 
// igual a 60, mostrar un mensaje que diga "Aprobado". Si la nota es menor a 60, 
// mostrar un mensaje que diga "Reprobado".
// 3. Si la nota es menor a 0 o mayor a 100, mostrar un mensaje que indique que la nota 
// es inválida.
// 4. Además de la nota, preguntar al usuario si entregó todos los trabajos y asistió a 
// todas las clases (sí o no). Si el usuario responde "no" a cualquiera de estas preguntas, 
// mostrar un mensaje adicional que indique "Debe mejorar la asistencia y la entrega de 
// trabajos para la próxima evaluación".
// 5. Utilizar un operador lógico (por ejemplo, && o ||) para combinar las respuestas 
// sobre la asistencia y la entrega de trabajos. Si el estudiante tiene baja asistencia o 
// no entregó todos los trabajos, mostrar el mensaje adicional mencionado en el punto anterior.
// 6. Utilizar la estructura switch para mostrar un mensaje personalizado dependiendo de 
// la nota obtenida. Por ejemplo, si la nota es entre 90 y 100, mostrar 
// "¡Excelente trabajo!". Si la nota está entre 80 y 89, mostrar "Buen trabajo". 
// Y así sucesivamente.


    const nota = parseInt(prompt("Ingrese su Nota: "));

    let trabajosPracticos = false;
    let asistencia = false;
 
    if (isNaN(nota) || nota<0 || nota>100) {
       alert("Error: Ingresar un número entre 0 y 100");
    }else {
        $(document).ready(function() {
            $('#confirmModalTp').modal('show');
        });
      
        $(document).ready(function() {
            $('#confirmModalAsistencia').modal('show');
        });
    }



    





    function asistenciaSi() {
        asistencia=true;
        console.log(asistencia);
    }

    function asistenciaNo() {
        asistencia=false;
        console.log(asistencia);
    }


    function tpSi() {
        trabajosPracticos=true;
        console.log(trabajosPracticos);
    }

    function tpNo() {
        trabajosPracticos=false;
        console.log(trabajosPracticos);
    }

    


    




      

   
