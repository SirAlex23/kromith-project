import React, { useState, useEffect, useRef } from "react";
import axios from "axios"; // 🛑 IMPORTAMOS AXIOS

// Define el tipo para un mensaje
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

// 🛑 URL SIMULADA DE LA API (Ajusta el puerto si tu backend es diferente)
const CHAT_API_URL = "http://localhost:5000/api/chat"; //

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]); //
  const [inputMessage, setInputMessage] = useState(""); //
  const [isLoading, setIsLoading] = useState(false); //

  // Ref para mantener el scroll al final de los mensajes
  const messagesEndRef = useRef<HTMLDivElement>(null); //

  // Lógica para mantener el scroll abajo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); //
  }, [messages]);

  // Aplica el fondo y el mensaje inicial
  useEffect(() => {
    // 🛑 SE HA ELIMINADO LA MANIPULACIÓN DE document.body.classList 🛑
    // Esto es lo que soluciona la filtración del fondo.

    // Mensaje de bienvenida inicial
    setMessages([
      {
        id: 1,
        text: "¡Hola! Soy Odín, el Padre de Todo. ¿Qué deseas aprender sobre mitología?",
        sender: "bot",
      },
    ]);
    // El return () => { document.body.classList.remove... } también fue eliminado.
  }, []);

  // 🛑 FUNCIÓN ASÍNCRONA PARA EL ENVÍO Y LLAMADA A LA API
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const userText = inputMessage.trim();
    if (!userText) return;

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
      // 2. LLAMADA A LA API DE LA IA
      const response = await axios.post(CHAT_API_URL, {
        message: userText,
      });

      const botResponseText =
        response.data.reply ||
        "Odín no ha podido escuchar tu pregunta. Asegúrate de que el servidor está activo.";

      // 3. Añadir la respuesta del bot
      const botResponse: Message = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      // 4. Manejar errores de conexión (ej. el backend no está corriendo)
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "❌ El servidor de Odín está dormido. Fallo al conectar con el backend (API).",
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error calling chat API:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // 🚨 CLAVE: Envuelve el chatbot con el contenedor de la página
    // y añade la clase de fondo **oraculo-background** (o spartans-background si insistes)
    <div className="mythology-page-container oraculo-background">
      {/* Tu contenedor principal del Chatbot con el fondo azul semi-transparente */}
      <div className="chatbot-container">
        {/* SECCIÓN VISUAL (ODÍN) - Clase CSS: .chatbot-visual-section */}
        <div className="chatbot-visual-section">
          {" "}
          {/* */}
          {/* Asegúrate de que la ruta a la imagen de Odín es correcta */}
          <img src="/assets/odin-logo.jpg" alt="Odín, el Padre de Todo" />
          <h3>Odín, el Oráculo Mitológico</h3>
          <p>Tu guía a través de las historias de los Nueve Mundos.</p>
          <small
            style={{ color: "var(--color-primary-gold)", marginTop: "10px" }}
          >
            Estado: {isLoading ? "Pensando..." : "Listo para la pregunta"}
          </small>
        </div>

        {/* SECCIÓN DE CHAT - Clase CSS: .chatbot-chat-section */}
        <div className="chatbot-chat-section">
          {" "}
          {/* */}
          {/* Aquí va el mensaje inicial '¡Hola! Soy Odín...' */}
          {/* Área de Mensajes - Clase CSS: .chat-messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message ${message.sender}-message`} //
              >
                <span>{message.text}</span>
              </div>
            ))}
            {/* Elemento de referencia para el scroll */}
            <div ref={messagesEndRef} />
          </div>
          {/* Formulario de Input - Clase CSS: .chat-input-form */}
          <form onSubmit={handleSendMessage} className="chat-input-form">
            {" "}
            {/* */}
            <input
              type="text"
              placeholder={
                isLoading
                  ? "Odín está pensando..."
                  : "Escribe tu pregunta sobre mitología..."
              }
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              {" "}
              {/* */}
              {isLoading ? "..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
