//Llamo ala conexion de Gemini
import {consultarIA} from './iaService'

//La direccion de mi Api 💪🏽
const API = "http://localhost:4000/api/tareitas";

//Funcion asincrona para mostra las tareas
export async function mostrarTareitas() {
  // esta variable llama a la funcion get de mi api
  const res = await fetch(API);
  return res.json();
}

//Funcion asicrona para agregar tareas que recibira el texto del nombre de la tare
export async function agregarTareita(texto) {
  // Escojo el metodo para agregar(postt) que lo mande como un json estruturado como texto
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto })
  });
}

//Funcion asincrona para editar la tarea, que recibe el valor numerico y el nombre de la tarea
export async function editarTareita(i, texto) {
  // llamo la direccion que le puse en la api, el metodo de actualizar(put)
  await fetch(`${API}/${i}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto })
  });
}

//Funcion asincrona para eliminar tare, que recibe el valor numerico de la tarea
export async function eliminarTareita(i) {
  // lo envio ala direccion que previmente la deje en mi api y pone el metodo eliminar(Delete)
  await fetch(`${API}/${i}`, { method: "DELETE" });
}

//Funcion asincrona para chuliar las tareas, recibe el valor numerico de la tarea
export async function chulitoTareita(i) {
  // escogemos el metodo de actualizar parcialmente(Patch) y cambio de estado a true a false
  await fetch(`${API}/${i}`, { method: "PATCH" });
}

//Funcion asincrona para dar consejito Esta si me ayude de la Ia jajaja saludos
export async function getInsights(tasks) {

  // Esta varible se encarga de obtener toda la lista de tareas con el texto y el estado en texto
  let listaTexto = tasks
    .map(t => `${t.text} [${t.completed ? "HECHA" : "PENDIENTE"}]`)
    .join(", ");

  // Este es el prompt con el que nos vamos a comunicar con gemini, con la lista
  let prompt = `Analiza esta lista de tareas y da un consejo motivacional breve: ${listaTexto}`;

  //Ya teniendo  el prompt con la lista, se lo mandamos a gemini
  return await consultarIA(prompt);
}

//Funcion asincrona para estimar el tiempo de una tarea,recibira el nombre de la tarea
export async function estimarTiempo(tarea) {
 //Aqui pongo el prompt para eviarle a gemmini con la tarea
  let prompt = `¿Cuánto tiempo suele llevar esta actividad? 
  Responde breve en minutos u horas.
  Actividad: "${tarea}"`;
//Se lo mando a gemini
  return await consultarIA(prompt);
}