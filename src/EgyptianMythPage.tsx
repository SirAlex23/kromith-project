import React from "react";
import MythologyGlosary from "./MythologyGlosary";
import { egyptianGlosary } from "./data/mythData";
// Asegúrate que las rutas '../components/...' y '../data/...' sean correctas.

const EgyptianMythPage: React.FC = () => {
  return (
    // Usa la clase CSS para el fondo egipcio
    <div className="mythology-page-container egyptian-bg">
      {/* RENDERIZA EL GLOSARIO CON LOS DATOS EGIPCIOS */}
      <MythologyGlosary data={egyptianGlosary} />
    </div>
  );
};

export default EgyptianMythPage;
