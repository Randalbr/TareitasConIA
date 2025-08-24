// Aqui importa la bibilioteca que me permite utilizar gemini
import { GoogleGenerativeAI } from "@google/generative-ai";

// Aqui inicio con mi API KEY que me da gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

//Aqui estoy escogiendo el modelo de gemini que quiero
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Creo una funcion Asincrona que va a conectar la api de gemini con mi app de tareitas
export async function consultarIA(prompt) {
  try {
    // Aqui creo una varible que mandara el promt recibido desde antes
    const result = await model.generateContent(prompt);
    // Aqui recibo la respuesta
    const response = result.response;
    // Y esta sera la respuesta para mandarla al usuario, como en texto
    return response.text().trim();
  } catch (err) {
    //Por si pasa algun error travieso
    console.error("Error en Gemini:", err);
    return "⚠️ No se pudo obtener respuesta de Gemini.";
  }
}
