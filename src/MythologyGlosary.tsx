import React from "react";
import { MythologyGlosaryData, MythEntry } from "./data/mythData";

interface MythologyGlosaryProps {
  data: MythologyGlosaryData; // Recibe los datos (ej: greekGlosary)
}

// Componente que muestra una sola entrada de mito (el cuadro azul)
const MythEntryComponent: React.FC<{ entry: MythEntry }> = ({ entry }) => (
  <div className="myth-entry">
    <h3>{entry.name}</h3>
    <p>{entry.description}</p>
  </div>
);

const MythologyGlosary: React.FC<MythologyGlosaryProps> = ({ data }) => {
  // Obtiene y ordena todas las letras del glosario (A, B, C...)
  const sortedLetters = Object.keys(data).sort();

  return (
    // Aplica la clase para centrar y limitar el ancho del glosario
    <div className="glosario-container">
      {/* Mapea cada letra del abecedario */}
      {sortedLetters.map((letter) => (
        <React.Fragment key={letter}>
          {/* Muestra la letra de la categoría (ej: 'A') */}
          <h2 className="alphabet-header">{letter}</h2>

          {/* Mapea y renderiza todos los mitos bajo esa letra */}
          {data[letter].map((entry, index) => (
            <MythEntryComponent key={index} entry={entry} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MythologyGlosary;
