import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  // ESTADOS
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // 🛑 APLICAR FONDO DE REGISTER
  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);

  // 🛑 FUNCIÓN DE REGISTRO Y REDIRECCIÓN
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("¡Error! Las contraseñas no coinciden.");
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
      <form onSubmit={handleRegister} className="auth-form-card">
        <h2>Registro en KroMith</h2>

        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Repite Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Registrarse</button>
        <p className="register-link">
          ¿Ya tienes cuenta?{" "}
          <a onClick={() => navigate("/login")}>Inicia sesión</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
