/*
//1ER ENTREGA

function pediropc() {
  opc = parseInt(
    prompt(
      "Seleccione una opcion(un numero).\n1.Para saber con cuanto efectivo contas\n2.Ingresar dinero\n3.Retirar dinero.\nSi desea salir presione otro número"
    )
  );
}

function mostrardinero() {
  alert("En la cuenta tienes " + dinero);
}

function menu() {
  while (opc == 1 || opc == 2 || opc == 3) {
    switch (opc) {
      case 1:
        mostrardinero();
        pedirvolver();
        break;
      case 2:
        let dineroadepositar = parseInt(
          prompt("Ingrese la cantidad a depositar")
        );
        if (
          dineroadepositar > 0 &&
          !isNaN(dineroadepositar) &&
          dineroadepositar != ""
        ) {
          dinero = dinero + dineroadepositar;
        } else {
          alert("Ingrese bien la cantidad!");
        }
        mostrardinero();
        pedirvolver();
        break;
      case 3:
        let dineroaretirar = parseInt(prompt("Ingrese la cantidad a retirar"));
        if (
          dinero >= dineroaretirar &&
          !isNaN(dineroaretirar) &&
          dineroaretirar != ""
        ) {
          dinero = dinero - dineroaretirar;
          mostrardinero();
          pedirvolver();
        } else {
          alert(
            "No tiene esa cantidad en la cuenta o ingrese mal la cantidad!"
          );
          mostrardinero();
          pedirvolver();
        }
        break;
    }
  }
}

//2da ENTREGA
/*
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
      } else if (opc2 == "s") {
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
*/

let Tareas = [];
let form = document.getElementById("form");

class Tarea {
  constructor(titulo, descripcion, dia, mes) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.dia = dia;
    this.mes = mes;
  }
}

let btn_aggTarea = document.getElementById("btn_aggTarea");
btn_aggTarea.onclick = (e) => {
  e.preventDefault();
  let tituloTarea = document.getElementById("tareaTitulo").value;
  let diaTarea = document.getElementById("tareaDia").value;
  let descripcionTarea = document.getElementById("tareaDesc").value;
  let mesTarea = document.getElementById("tareaMes").value;
  let Tarea_reciente = new Tarea(
    tituloTarea,
    descripcionTarea,
    diaTarea,
    mesTarea
  );
  Tareas.push(Tarea_reciente);
  Swal.fire("Agregaste una tarea!");
};

console.log(Tareas);

let divTareas = document.getElementById("tareas");

function mostrarTareas() {
  for (let tarea of Tareas) {
    divTareas.innerHTML += `
            <div class="col d-flex">
              <div
                class="m-2 p-2 border justify-content-center align-items-center"
              >
                <div class="tituloTarea h3">${tarea.titulo}</div>
                <div class="tituloDesc h4">${tarea.descripcion}</div>
              </div>
              <div
                class="m-2 p-2 justify-content-center align-items-center border"
              >
                <div class="fechaDia h5 border">${tarea.dia} del</div>
                <div class="fechaMes h5 border">${tarea.mes}</div>
              </div>
            </div>
            `;
  }
}
function ocultarTareas() {
  divTareas.innerHTML = ``;
}

//Mostrar y ocultar todas las tareas
let verTareas = document.getElementById("btn-tareas");
let opciontareas = "MostrarTareas";

verTareas.onclick = () => {
  if (opciontareas == "MostrarTareas") {
    verTareas.innerText = "Ocultar las tareas";
    opciontareas = "OcultarTareas";
    mostrarTareas();
  } else {
    verTareas.innerText = "Ver las tareas";
    opciontareas = "MostrarTareas";
    ocultarTareas();
  }
};

function guardarLocal(clave, valor) {
  localStorage.setItem(clave, valor);
}

let btnGuardarStorage = document.getElementById("btn-GuardarStorage");
btnGuardarStorage.onclick = () => {
  guardarLocal("listaTareas", JSON.stringify(Tareas));
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Guardaste tus tareas!",
    showConfirmButton: false,
    timer: 1000,
  });
};

let btnBorrarStorage = document.getElementById("btn-BorrarStorage");
btnBorrarStorage.onclick = () => {
  Tareas = [];
  guardarLocal("listaTareas", JSON.stringify(Tareas));
  ocultarTareas();
  Swal.fire({
    title: "Estas seguro?",
    text: "No vas a poder volver a ver tus tareas!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Tareas borradas!");
    }
  });
};

let tareasStorage = JSON.parse(localStorage.getItem("listaTareas"));
Tareas = tareasStorage;
