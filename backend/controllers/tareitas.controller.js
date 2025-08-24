// Aqui se van a guardar todas la tareitas 😁
let tareitas = []; 


// Obtener todas las tareitas 
export const mostrarTareitas = (req, res) => {
  res.json(tareitas);
};

// Agregar nueva tarea
export const agregarTareita = (req, res) => {
  //Aqui le digo el cuerpo del json que sera texto
  const { texto } = req.body;
  //Aqui si el texto esta vacio, me salca un error
  if (!texto || texto.trim() === "") {
    return res.status(400).json({ error: "El texto es requerido" });
  }
  //Aqui se agregara a la memoria con el cuerpo del nombre el estado de la tarea
  tareitas.push({ texto: texto.trim(), completed: false });
  //Alerta de tarea agregada
  res.json({ message: "Tareita agregada", tareitas });
};

// Editar tarea
export const editarTareita = (req, res) => {
  //Aqui tendra el valor numerico de la tarea
  const i = parseInt(req.params.i);
  //Aqui lee toda las tareas hasta encontralar, si no la encuestra nos sale una alerta
  if (i < 0 || i >= tareitas.length) {
    return res.status(404).json({ error: "Tareita no encontrada" });
  }
 
  const { texto } = req.body;
  if (texto && texto.trim() !== "") {
    tareitas[i].texto = texto.trim();
  }
  res.json({ message: "Tareita editada", tareitas });
};

// Eliminar tarea
export const eliminarTareita = (req, res) => {
  const i = parseInt(req.params.i);
  if (i < 0 || i >= tareitas.length) {
    return res.status(404).json({ error: "Tareita no encontrada" });
  }
  //Funcion de eliminar tarea
  tareitas.splice(i, 1);
  res.json({ message: "Tareita eliminada", tareitas });
};

// Cambiar estado (completada a pendiente)
export const chulitoTareita = (req, res) => {
  const i = parseInt(req.params.i);
  if (i < 0 || i >= tareitas.length) {
    return res.status(404).json({ error: "Tareita no encontrada" });
  }
  //Aqui cambio la tarea por lo contrario del estado actual
  tareitas[i].completed = !tareitas[i].completed;
  res.json({ message: "Estado cambiado", tareitas });
};
