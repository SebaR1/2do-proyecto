let Tareas = [];
let TareasImpJSON = [];
let forms = document.getElementById("form");

class Tarea {
  constructor(titulo, descripcion, dia, mes) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.dia = dia;
    this.mes = mes;
  }
}

//Dar el evento al boton para agregar una tarea
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
  forms.reset();
};

let divTareas = document.getElementById("tareas");
function mostrarTareas() {
  for (let tarea of Tareas) {
    divTareas.innerHTML += `
    <div class="col d-flex ">
    <div
      class="p-2 justify-content-center align-items-center bg-tarea border"
    >
      <div class="tituloTarea h3">${tarea.titulo}</div>
      <div class="tituloDesc h4">${tarea.descripcion}</div>
    </div>
    <div
      class="p-2 justify-content-center align-items-center bg-tarea border"
    >
      <div class="fechaDia h5">${tarea.dia} de</div>
      <div class="fechaMes h5">${tarea.mes}</div>
    </div>
  </div>
  `;
  }
}

function ocultarTareas() {
  divTareas.innerHTML = ``;
}

//Mostrar y ocultar todas TUS tareas
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

//Guardar tus tareas en el Storage
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

//Borrar tus tareas en el storage
let btnBorrarStorage = document.getElementById("btn-BorrarStorage");
btnBorrarStorage.onclick = () => {
  Swal.fire({
    title: "Estas seguro?",
    text: "No vas a poder volver a ver tus tareas!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      Tareas = [];
      guardarLocal("listaTareas", JSON.stringify(Tareas));
      ocultarTareas();
      Swal.fire("Tareas borradas!");
    }
  });
};

//Cargar las tareas del storage siempre
let tareasStorage = JSON.parse(localStorage.getItem("listaTareas"));
if (tareasStorage) {
  Tareas = tareasStorage;
}

//Obtener las tareas importantes en JSON
let divTareasImportantes = document.getElementById("tareasImp");
function renderizarTareasImportantes() {
  for (let tareaImp of TareasImpJSON) {
    divTareasImportantes.innerHTML += `
            <div class="col d-flex ">
              <div
                class="p-2 border justify-content-center align-items-center bg-tarea"
              >
                <div class="tituloTarea h3">${tareaImp.titulo}</div>
                <div class="tituloDesc h4">${tareaImp.descripcion}</div>
              </div>
              <div
                class="p-2 justify-content-center align-items-center border bg-tarea"
              >
                <div class="fechaDia h5 ">${tareaImp.dia} de</div>
                <div class="fechaMes h5">${tareaImp.mes}</div>
              </div>
            </div>
            `;
  }
}

async function obtenerJSON() {
  const URLJSON = "T_importantes.json";
  const resp = await fetch(URLJSON);
  const data = await resp.json();
  TareasImpJSON = data;
  renderizarTareasImportantes();
}

obtenerJSON();
