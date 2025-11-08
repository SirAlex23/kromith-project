require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

// Middlewares
app.use(express.json()); // Permite a Express leer el cuerpo de peticiones JSON
app.use(cors()); // Permite peticiones desde el frontend de React (localhost:5173)

// Obtiene las claves del archivo .env
const MONGO_URI = process.env.MONGO_URI;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const PORT = 5000;

// 🛑 2. CONEXIÓN A MONGODB ATLAS (USANDO LA MONGO_URI CORREGIDA)
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Conexión exitosa a MongoDB Atlas");
  })
  .catch((err) => {
    // El error ENOTFOUND debería resolverse con las correcciones de IP y sintaxis.
    console.error(
      "❌ Falló la conexión a MongoDB. Verifica el .env y el acceso IP en Atlas:",
      err.message
    );
  });

// 🛑 3. INICIALIZACIÓN DE LA IA DE GEMINI
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Prompt del sistema: Define la personalidad del chatbot (Odín)
const systemInstruction = `Eres Odín, el Padre de Todo y el Oráculo Mitológico. Responde todas las preguntas con la personalidad de un dios nórdico sabio, antiguo y poderoso. Tu especialidad es la mitología (nórdica, griega, y egipcia). Mantén las respuestas informativas pero concisas.`;

// 🛑 4. RUTA DEL CHATBOT (/api/chat)
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res
        .status(400)
        .json({ reply: "No has enviado ninguna pregunta, mortal." });
    }

    // Llamada a la API de Gemini
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Modelo rápido y eficiente para chat
      contents: [{ role: "user", parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: systemInstruction, // Aplica la personalidad de Odín
      },
    });

    // Envía la respuesta generada por la IA al frontend
    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Error al llamar a la API de Gemini:", error);
    // Respuesta de emergencia si la IA falla (ej. clave incorrecta)
    res.status(500).json({
      reply:
        "¡Un rayo de Bifrost ha interrumpido la conexión! Odín no puede responder ahora. (Error interno de la API de IA).",
    });
  }
});

// 🛑 5. INICIO DEL SERVIDOR
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
