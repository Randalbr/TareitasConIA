import { Router } from "express";
//llamo los controladores
import {
  mostrarTareitas,
  agregarTareita,
  editarTareita,
  eliminarTareita,
  chulitoTareita,
} from "../controllers/tareitas.controller.js";

//Defino la variable para utilizar express
const router = Router();

// Definición de rutas
router.get("/", mostrarTareitas);          // Obtener todas
router.post("/", agregarTareita);          // Crear
router.put("/:i", editarTareita);        // Editar
router.delete("/:i", eliminarTareita);   // Eliminar
router.patch("/:i", chulitoTareita);    // Completar/Descompletar

export default router;
