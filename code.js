function menu() {
  let opcionMenu = parseInt(
    prompt(
      "Seleccione una opcion de lo que desee hacer:\n1-Agregar una tarea.\n2-Eliminar una tarea.\n3-Ver sus tareas.\n4-Horario y fecha de hoy.\n5-Salir."
    )
  );
  switch (opcionMenu) {
    case 1:
      let opc1 = parseInt(prompt("Cuantas tareas desea agregar?"));
      if (opc1 > 0) {
        for (let i = 1; i <= opc1; i++) {
          let tituloTarea = prompt("Escriba el titulo de la " + i + " tarea:");
          let descripcionTarea = prompt("Descripcion:");
          let diaTarea = parseInt(prompt("Dia:(dd)"));
          let mesTarea = parseInt(prompt("Mes:(mm)"));
          let tarea = new Tarea(
            tituloTarea,
            descripcionTarea,
            diaTarea,
            mesTarea
          );
          Tareas.push(tarea);
        }
        volverAlMenu();
      } else {
        error();
      }
      break;
    case 2:
      let opc2 = prompt(
        "Indique el numero de la tarea que desea eliminar: (Si no sabe que tareas tiene, presione S para volver al menu y busque el numero de la tarea de la lista de TODAS las tareas"
      );
      if (opc2 <= Tareas.length) {
        Tareas.splice(parseInt(opc2) - 1, 1);
        alert("Tarea eliminada!");
        volverAlMenu();
      } else if (opc2.toLowerCase() == "s") {
        menu();
      } else {
        alert("No existe ese numero de tarea!");
        error();
      }
      break;
    case 3:
      if (Tareas.length != 0) {
        let opc3 = parseInt(
          prompt(
            "Seleccione una opcion:\n1-Ver todas tus tareas.\n2-Todas las de un mes."
          )
        );

        if (opc3 == 1) {
          alert("Tienes " + Tareas.length + " Tareas para hacer. Y son:");
          for (i = 0; i < Tareas.length; i++) {
            alert(
              "Tu " +
                (i + 1) +
                " Tarea:\n" +
                Tareas[i].titulo +
                ", " +
                Tareas[i].descripcion +
                "\nEs para el " +
                Tareas[i].dia +
                " del " +
                Tareas[i].mes
            );
          }
        } else if (opc3 == 2) {
          let opcmes = parseInt(prompt("Ingrese un mes"));
          let tareasMeses = Tareas.filter((tarea) => tarea.mes == opcmes);
          if (tareasMeses.length != 0) {
            alert(
              "Tienes " +
                tareasMeses.length +
                " Tareas para hacer este mes. Y son:"
            );
            for (i = 0; i < tareasMeses.length; i++) {
              alert(
                "Tu " +
                  (i + 1) +
                  " Tarea:\n" +
                  tareasMeses[i].titulo +
                  ", " +
                  tareasMeses[i].descripcion +
                  "\nEs para el " +
                  tareasMeses[i].dia +
                  " del " +
                  tareasMeses[i].mes
              );
            }
          } else {
            alert("No tiene ninguna tarea agregada ese mes");
          }
        } else {
          error();
        }
      } else {
        alert("No tiene ninguna tarea agregada");
      }
      volverAlMenu();
      break;
    case 4:
      let hoy = new Date();
      alert(hoy.toLocaleString());
      volverAlMenu();
      break;
    case 5:
      vuelvaProntos();
      break;
    default:
      error();
      break;
  }
}

function error() {
  alert("Ingreso una opcion erronea!\nVolvera al menu automaticamente.");
  menu();
}

function volverAlMenu() {
  let opcVolver = prompt("Desea volver al menu?(s/n)");

  if (opcVolver.toLowerCase() == "s") {
    menu();
  } else if (opcVolver.toLowerCase() == "n") {
    vuelvaProntos();
  } else {
    alert("Ingrese una opcion correcta!");
    volverAlMenu();
  }
}

function vuelvaProntos() {
  alert("Adios. Vuelva prontos.");
}

class Tarea {
  constructor(titulo, descripcion, dia, mes) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.dia = dia;
    this.mes = mes;
  }
}

let Tareas = [];

alert("Bienvenido a su lista de tareas!");
menu();
