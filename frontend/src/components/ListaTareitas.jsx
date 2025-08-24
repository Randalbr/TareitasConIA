import { useEffect, useState } from "react";

// Importo el css
import "../css/index.css";

// Importo los services, para las siguientes funciones que mandaran la informacion
import {
  mostrarTareitas,
  agregarTareita,
  editarTareita,
  eliminarTareita,
  chulitoTareita,
  getInsights,
  estimarTiempo,
} from "../services/tareitasService";

export default function ListaTareitas() {

  // Aqui creo una "Varible" que me permite guardar las tareas en modo Array
  const [tareitas, setTareitas] = useState([]);
  //Aqui es lo mismo que el primero pero guarda los inputs que da el usuario
  const [texto, setTexto] = useState("");

  // cuando abra la pagina va cargar las tareas
  useEffect(() => {
    cargarTareitas();
  }, []);

  // Aqui hago una funcio asincron para que llama la funcion de mostrar
  async function cargarTareitas() {
    const data = await mostrarTareitas();
    setTareitas(data);
  }

  // Aqui hago una funcion asincrona para agregar
  async function Agregar() {

    //Una alerta si el campa esta vacio
    if (!texto.trim()) return alert("Tienes que escribir una tareita");

    //Manda la tarea del campo para agregarlo
    await agregarTareita(`${texto}`);

    //El campo pase vacion
    setTexto("");

    cargarTareitas();
  }

  //Funcion asincrona de editar que le damos el valor numerico de la tarea
  async function Editar(i) {
    // El campo que resivira la nueva tarea
    const nuevoTexto = prompt("Edita la tareita", tareitas[i].texto);
    // Si la tarea no es diferente aqui termina ek proceso
    if (!nuevoTexto) return;
    //Mando el valor numerico de la tarea con la nueva informacion
    await editarTareita(i, nuevoTexto);

    cargarTareitas();
  }

  // Funcion Asicrona de eliminar, a este le damos el valor numerico de la tarea
  async function Eliminar(i) {
    //Mnadamos una alerta si esta seguro si dice que no actua el return
    if (!window.confirm("¿Seguro que quieres borrarla?")) return;
    //Manda la informacion con el valor numerico
    await eliminarTareita(i);
    cargarTareitas();
  }

  //Funcion Asincrona que le mandamos el valor numericco de la tarea
  async function Chulito(i) {
    // Este se encarga de cambira el estado de la tarea de true a false
    await chulitoTareita(i);
    cargarTareitas();
  }

  //Funcion Asincron para enviar el promt a gemini
  async function DameConsejo() {
    // Esta variable recogue todas la tareas con el texto y el estado de completado, y resive la informacion que manda gemini
    const consejo = await getInsights(tareitas);
    //muestra el mensaje recibido
    alert("💡 Consejo: " + consejo);
  }
  //Funcion Asincron para enviar el promt a gemini
  async function Estimar(i) {

    //Esta varible recogue el nombre de la tarea en especifico, y le manda un promt a gemini, y recibe la informacion de gemini
    const tiempo = await estimarTiempo(tareitas[i].texto);

    //Muestra la informacion
    alert(`⏳ Estimación: ${tiempo}`);
  }

  return (
    <div className="contenedor">
      <h1>😊 Tareitas Pero Inteligentes 😊</h1>

      <div className="agregar">
        <input
          type="text"
          placeholder="Escribe una tareita"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={Agregar}>Añadir</button>
      </div>

      <ul id="listaDeLasTareitas">
        {tareitas.map((t, i) => (
          <li key={i} className={t.completed ? "completed" : ""}>
            <span>{t.texto}</span>
            <div>
              <button className="chulito" onClick={() => Chulito(i)}>
                {t.completed ? "✅" : "⏳"}
              </button>
              <button className="editar" onClick={() => Editar(i)}>
                ✏️
              </button>
              <button className="eliminar" onClick={() => Eliminar(i)}>
                🗑️
              </button>
              <button className="tiempo" onClick={() => Estimar(i)}>
                ⏱️
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="consejitos" onClick={DameConsejo}>
        💡 Dame un consejito
      </button>
    </div>
  );
}
