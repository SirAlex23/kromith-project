import { Outlet, Link, useNavigate } from "react-router-dom";

// Verifica la ruta de la imagen, debe ser correcta para que se vea
const logoImage = "/assets/logo-page.jpg";

const MainLayout = () => {
  const navigate = useNavigate();

  // El estado sidebarOpen se elimina para evitar el warning
  // y mantener el menú siempre visible y abierto.

  const handleLogout = () => {
    // 1. Eliminar el token de sesión simulado
    localStorage.removeItem("auth_token");
    // 2. Redirigir al Login
    navigate("/login");
  };

  return (
    // Clase principal para el diseño de dos columnas
    <div className="main-layout">
      {/* ========================================================= */}
      {/* SIDEBAR (Menú Fijo y Simplificado) */}
      {/* ========================================================= */}
      {/* NOTA: Se elimina la clase condicional 'closed' */}
      <nav className="sidebar">
        <div className="sidebar-header">
          {/* 🛑 AHORA USA LA CLASE 'sidebar-logo' PARA CUBRIR EL ANCHO */}
          <img src={logoImage} alt="KroMith Logo" className="sidebar-logo" />
          {/* Se elimina el título si solo quieres el logo */}
        </div>

        <div className="sidebar-menu">
          {/* 🛑 Se elimina la pestaña "Inicio" */}
          {/* 🛑 Se elimina el título "Mitología" */}
          <Link to="/Home" className="menu-link">
            Inicio
          </Link>
          <Link to="/myth/greek">Mitología Griega/Romana</Link>
          <Link to="/myth/norse">Mitología Nórdica</Link>
          <Link to="/myth/egyptian">Mitología Egipcia</Link>
          <Link to="/chatbot">Chatbot</Link>
        </div>

        {/* 🛑 SE AGREGA LA CLASE 'logout-button' PARA MEJOR VISIBILIDAD */}
        <a onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </a>
      </nav>

      {/* ========================================================= */}
      {/* CONTENIDO PRINCIPAL */}
      {/* ========================================================= */}
      <div className="content-area-wrapper">
        {/* Aquí iría el Header si lo usas */}

        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
