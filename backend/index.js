import express from "express";
import cors from "cors";
import tareitasRoutes from "./routes/tareitas.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tareitas", tareitasRoutes);

app.listen(4000, () => {
  console.log("Servidor backend corriendo en http://localhost:4000");
});
