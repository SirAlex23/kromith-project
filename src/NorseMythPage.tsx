import React from "react";
import MythologyGlosary from "./MythologyGlosary";
import { norseGlosary } from "./data/mythData";
// Asegúrate que las rutas '../components/...' y '../data/...' sean correctas.

const NorseMythPage: React.FC = () => {
  return (
    // Usa la clase CSS para el fondo nórdico
    <div className="mythology-page-container norse-bg">
      {/* RENDERIZA EL GLOSARIO CON LOS DATOS NÓRDICOS */}
      <MythologyGlosary data={norseGlosary} />
    </div>
  );
};

export default NorseMythPage;
