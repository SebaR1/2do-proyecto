/*
//1ra clase Coderhouse 
let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseInt(prompt("Ingresa otro num"));
let suma = num1 + num2;

alert("La suma de ambos numeros es= " + suma);

//2da clase Coderhouse
let nombre;
let contraseña;
alert("Proceso para registrarse");
let aux1 = prompt("Ingrese un nick");
if (aux1.length >= 5) {
  nombre = aux1;
} else {
  aux1 = prompt("Ingrese otro nick de más de 5 caracteres");
  nombre = aux1;
}
let aux2 = prompt("Ingrese su contraseña");
if (aux2.length >= 10) {
  contraseña = aux2;
} else {
  aux2 = prompt("Ingrese otra contraseña de más de 10 caracteres");
  contraseña = aux2;
}

alert("Proceso para ingresar");
let aux3 = prompt("Ingrese su nick");
let aux4 = prompt("Ingrese su contraseña");

if (aux3 == nombre && aux4 == contraseña) {
  alert("Bienvenido " + nombre + "!");
} else if (aux3 == nombre && aux4 != contraseña) {
  alert("El usuario esta bien, pero esta mal la contraseña");
} else if (aux4 != nombre && aux4 != contraseña) {
  alert(
    "Ni el usuario ni la contraseña esta registrado en nuestros datos, la policia esta en camino a su domicilio"
  );
}


//3ra clase Coderhouse

let suma = 0;

for (let i = 1; i <= 5; i++) {
  let num = parseInt(prompt("Digite el numero " + i));
  suma = suma + num;
}

alert("La suma de los 5 numeros fue " + suma);



let sum = 0;
for (let i = 1; i <= 3; i++) {
  let notas = parseInt(prompt("Ingrese su nota numero " + i));
  sum = sum + notas;
}
let prom = sum / 3;
if (prom >= 7) {
  alert("Felicidades! Aprobaste la materia, tu promedio fue de " + prom);
} else {
  alert(
    "Lamentablemente no alcanzo, tu promedio fue de " +
      prom +
      ". Exitos para la proxima!"
  );
}

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

function pedirvolver() {
  let num2 = prompt("Desea volver al menu? (si/no)");
  if (num2 == "si" || num2 == "Si" || num2 == "SI") {
    pediropc();
    menu();
  } else if (num2 == "no" || num2 == "No" || num2 == "NO") {
    opc = 4;
  } else {
    alert("Ingrese una respuesta valido!");
    pedirvolver();
  }
}


let dinero = 50;
let opc;

alert("Bienvenido a un cajero automatico");
pediropc();
menu();
*/

//2da ENTREGA

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
