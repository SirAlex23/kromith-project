import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface MythData {
  title: string;
  content: string;
  // Puedes añadir más campos como image: string;
}

// 🛑 Simulación de datos para cada mitología
const mythologies: { [key: string]: MythData } = {
  greek: {
    title: "Mitología Griega/Romana",
    content:
      "Sumérgete en el Olimpo. Explora las épicas de Zeus, Poseidón y Hades. Conoce las hazañas de héroes como Hércules y la sabiduría de Atenea. Esta mitología forma el pilar de la civilización y el arte occidentales.",
  },
  norse: {
    title: "Mitología Nórdica",
    content:
      "Viaja a Asgard, hogar de Odín, Thor y Loki. Descubre los Nueve Mundos conectados por el Yggdrasil y prepárate para el Ragnarök, el crepúsculo de los dioses. Fuerte influencia en las leyendas y la cultura vikinga.",
  },
  egyptian: {
    title: "Mitología Egipcia",
    content:
      "Explora los misterios del Nilo con Ra, Osiris e Isis. Descubre el proceso de la momificación, el juicio de Anubis y la cosmogonía que se centra en la vida después de la muerte y el orden (Ma'at).",
  },
};

const MythPage = () => {
  // Obtiene el parámetro de la URL (ej: 'greek', 'norse', 'egyptian')
  const { mythType } = useParams<{ mythType: string }>();
  const [currentMyth, setCurrentMyth] = useState<MythData | null>(null);

  // 🛑 Lógica para aplicar el fondo de Espartanos (Home)
  useEffect(() => {
    // Asumimos que quieres el fondo 'spartans-background' para todas las mitologías
    document.body.classList.add("spartans-background");

    // Cargar el contenido basado en el parámetro de la URL
    if (mythType && mythologies[mythType]) {
      setCurrentMyth(mythologies[mythType]);
    } else {
      setCurrentMyth({
        title: "Mitología No Encontrada",
        content:
          "El tipo de mitología especificado no existe o la ruta es incorrecta.",
      });
    }

    // Limpiar la clase cuando el componente se desmonte
    return () => {
      document.body.classList.remove("spartans-background");
    };
  }, [mythType]);

  if (!currentMyth) {
    // Muestra un estado de carga si el contenido aún no está listo
    return <div className="mythology-content">Cargando...</div>;
  }

  return (
    // 🛑 Utiliza la clase 'mythology-content' para centrar y dar el estilo de tarjeta oscura
    <div className="mythology-content">
      <h2>{currentMyth.title}</h2>
      <p style={{ marginTop: "20px", lineHeight: "1.6" }}>
        {currentMyth.content}
      </p>

      <p
        style={{
          marginTop: "30px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          paddingTop: "15px",
          fontSize: "0.9em",
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {/* Texto de relleno para mostrar la estructura */}
        Este es el lugar para el contenido detallado, imágenes y artículos
        relacionados con la mitología {currentMyth.title}.
      </p>
    </div>
  );
};

export default MythPage;
