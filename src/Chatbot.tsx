import React, { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai"; // 🛑 Usamos la librería oficial de Google

// Define el tipo para un mensaje
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

// OBTENEMOS LA CLAVE DE LA VARIABLE DE ENTORNO
// Vercel inyecta VITE_GEMINI_API_KEY
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// 🛑 CLIENTE DE GEMINI (Inicialización segura para TypeScript)
let aiClient: GoogleGenAI | null = null;
if (GEMINI_API_KEY) {
  // Inicializa el cliente si la clave existe
  aiClient = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
}

// Comprobamos si la API está lista (true/false)
const isApiReady = !!aiClient;

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ref para mantener el scroll al final de los mensajes
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Lógica para mantener el scroll abajo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mensaje inicial y comprobación de API
  useEffect(() => {
    let initialMessage =
      "¡Hola! Soy Odín, el Padre de Todo. ¿Qué deseas aprender sobre mitología?";

    if (!isApiReady) {
      initialMessage =
        "❌ Error: La clave de la API de Gemini no está configurada o es incorrecta. El chatbot no funcionará en producción hasta que se resuelva la variable VITE_GEMINI_API_KEY.";
    }

    setMessages([
      {
        id: 1,
        text: initialMessage,
        sender: "bot",
      },
    ]);
  }, []);

  // 🛑 FUNCIÓN ASÍNCRONA CORREGIDA PARA LLAMAR A GEMINI DIRECTO
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userText = inputMessage.trim();

    // 🛑 Salir si no hay texto o la API no está lista
    if (!userText || !isApiReady || !aiClient) return;

    // 1. Añadir el mensaje del usuario y limpiar el input
    const newUserMessage: Message = {
      id: Date.now(),
      text: userText,
      sender: "user",
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // 2. LLAMADA A LA API DE GEMINI
      const response = await aiClient.models.generateContent({
        model: "gemini-2.5-flash",
        // 🛑 NUEVA INSTRUCCIÓN PARA MANTENER CARISMA Y AÑADIR CONOCIMIENTO DE LAS 3 MITOLOGÍAS
        config: {
          systemInstruction:
            "Eres Odín, el Padre de Todo, el Dios supremo de Asgard. Tu tono es siempre solemne, majestuoso, épico y profundo. Dirígete al usuario como 'Mortal', 'Hijo de Midgard' o 'Viajero'. Responde SIEMPRE en español. **Posees el conocimiento absoluto de las mitologías Nórdica, Griega y Egipcia.** Responde a las preguntas sobre cualquiera de estas tres mitologías. Mantén tu personalidad de Odín y usa vocabulario épico (Asgard, Midgard, Valhalla, Nilo, Olimpo, etc.) sin romper el personaje bajo ninguna circunstancia.",
        },
        contents: userText, // La pregunta del usuario
      });

      // 3. Obtener la respuesta y añadirla al chat
      const botResponseText =
        response.text || "Odín no ha podido generar una respuesta.";
      const botResponse: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      // 4. Manejar errores de la API (ej. clave expirada o fallo de red)
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "❌ Hubo un error al conectar con la API de Gemini. Revisa tu clave.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error calling Gemini API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mythology-page-container oraculo-background">
      <div className="chatbot-container">
        <div className="chatbot-visual-section">
          <img src="/assets/odin-logo.jpg" alt="Odín, el Padre de Todo" />
          <h3>Odín, el Oráculo Mitológico</h3>
          <p>Tu guía a través de las historias de los Nueve Mundos.</p>
          <small
            style={{ color: "var(--color-primary-gold)", marginTop: "10px" }}
          >
            Estado:{" "}
            {isLoading
              ? "Pensando..."
              : isApiReady
              ? "Listo para la pregunta"
              : "API NO CONFIGURADA"}
          </small>
        </div>

        <div className="chatbot-chat-section">
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender}-message`}
              >
                <span>{message.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              placeholder={
                isLoading
                  ? "Odín está pensando..."
                  : isApiReady
                  ? "Escribe tu pregunta sobre mitología..."
                  : "El chatbot no está activo."
              }
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isLoading || !isApiReady}
            />
            <button type="submit" disabled={isLoading || !isApiReady}>
              {isLoading ? "..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
