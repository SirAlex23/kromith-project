import { useEffect } from "react";

const HomePage = () => {
  // 🛑 Lógica para aplicar la clase CSS del fondo solo en esta página
  useEffect(() => {
    document.body.classList.add("spartans-background");
    return () => {
      document.body.classList.remove("spartans-background");
    };
  }, []);

  return (
    <div className="home-container">
      {/* 🛑 La tarjeta de bienvenida puede ser la misma o envuelta para centrar */}
      <div className="welcome-card">
        <h1>Bienvenido a KroMith</h1>
        <p>
          Sumérgete en un viaje épico a través de los mitos y leyendas más
          fascinantes de la antigüedad. Explora las historias de dioses, héroes
          y criaturas místicas de las mitologías Griega/Romana, Nórdica y
          Egipcia. ¡Tu aventura comienza aquí!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
