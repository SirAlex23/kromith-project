import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMythDetail, MythEntry } from "./data/mythData"; // 🛑 IMPORTA TU FUNCIÓN DE BÚSQUEDA

const MythDetail: React.FC = () => {
  // 1. Obtener los parámetros de la URL
  const { mythType, godId } = useParams<{ mythType: string; godId: string }>();
  const [detail, setDetail] = useState<MythEntry | null>(null);

  useEffect(() => {
    if (mythType && godId) {
      // 2. Buscar los datos en mythData.ts
      const data = getMythDetail(mythType, godId);

      if (data) {
        setDetail(data);
      } else {
        setDetail(null);
      }
    }
  }, [mythType, godId]);

  // Usamos el tipo de mitología para aplicar el fondo correcto (ej: greek-bg)
  const backgroundClass = `${mythType}-bg`;

  if (!detail) {
    // Muestra un estado de no encontrado
    return (
      <div className={`mythology-page-container ${backgroundClass}`}>
        <div className="detail-card-wrapper">
          <h1 className="detail-title">Mito No Encontrado</h1>
          <p>No se encontró la información detallada para "{godId}".</p>
        </div>
      </div>
    );
  }

  return (
    // Contenedor principal con el fondo específico de la mitología
    <div className={`mythology-page-container ${backgroundClass}`}>
      <div className="detail-card-wrapper">
        <h1 className="detail-title">{detail.name}</h1>

        <div className="detail-content">
          {/* Imagen Ampliada */}
          <div className="god-image-container">
            <img
              src={detail.largeImageUrl}
              alt={detail.name}
              className="god-detail-image"
            />
          </div>

          {/* Contenido Ampliado */}
          <div className="god-text-content">
            {/* Descripción corta (la que se ve en el glosario) */}
            <p className="short-description">{detail.description}</p>

            <hr className="detail-divider" />

            <h2>Historia y Leyendas</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythDetail;
