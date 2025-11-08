import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // ESTADOS
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🛑 APLICAR FONDO DE LOGIN
  useEffect(() => {
    document.body.classList.add("celestial-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  // 🛑 FUNCIÓN DE INICIO DE SESIÓN Y REDIRECCIÓN
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Simulación de validación
    if (username.length < 3 || password.length < 3) {
      alert("Usuario/Contraseña muy corto.");
      return;
    }

    // 2. Guardar token de simulación (Éxito)
    localStorage.setItem("auth_token", "simulated_valid_token");

    // 3. Redirigir al Home
    navigate("/home");
  };

  return (
    // 🛑 CLASE PARA CENTRAR EL FORMULARIO
    <div className="auth-container">
      {/* 🛑 CLASE PARA EL ESTILO DE TARJETA */}
      <form onSubmit={handleLogin} className="auth-form-card">
        <h2>Iniciar Sesión en KroMith</h2>
        <input
          type="text"
          placeholder="Introduce tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Introduce tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <p className="register-link">
          ¿No tienes cuenta?{" "}
          <a onClick={() => navigate("/register")}>Regístrate aquí</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
