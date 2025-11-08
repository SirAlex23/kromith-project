import React from "react";
import MythologyGlosary from "./MythologyGlosary";
import { greekGlosary } from "./data/mythData";
// Importa el MainLayout si lo usas para la estructura de la página y el menú lateral.
//import MainLayout from './MainLayout';

const GreekMythPage: React.FC = () => {
  return (
    // Se asume que este div se renderiza dentro del MainLayout o en la estructura principal
    // para que la imagen de fondo cubra el espacio principal.
    <div className="mythology-page-container greek-bg">
      {/* Opcional: Puedes añadir un título específico para esta página con el estilo del Home Page */}{" "}
      {/*<div className="welcome-text-container">
          <h1>Mitología Griega y Romana</h1>
          <p>Explora a los dioses y héroes del Olimpo.</p>
        </div>*/}
      {/* RENDERIZA EL GLOSARIO CON LOS DATOS GRIEGOS */}
      <MythologyGlosary data={greekGlosary} />
    </div>
  );
};

export default GreekMythPage;
