//import React from "react";
//import { Navigate, Outlet } from "react-router-dom";
//import MainLayout from "../MainLayout.tsx";
//
//// No definimos ninguna prop aquí.
//const ProtectedRoute: React.FC = () => {
//  const isAuthenticated =
//    localStorage.getItem("auth_token") === "simulated_valid_token";
//
//  if (!isAuthenticated) {
//    return <Navigate to="/login" replace />;
//  }
//
//  // Esto es lo que se renderiza. MainLayout ya no debería causar conflicto.
//  return (
//    <MainLayout>
//      <Outlet />
//    </MainLayout>
//  );
//};
//
//export default ProtectedRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// 🛑 1. SE COMENTA LA LÍNEA QUE FALLA PARA ROMPER LA DEPENDENCIA.
// import MainLayout from "../MainLayout.tsx";

// 🛑 2. COMPONENTE MARCADOR DE POSICIÓN (LAYOUT TEMPORAL)
// Este componente reemplaza temporalmente a MainLayout para que el build no falle.
// Simplemente renderiza a sus hijos (Outlet).
const LayoutPlaceholder: React.FC = () => {
  // Nota: Si MainLayout maneja props, aquí deberías pasarlas.
  // Asumiendo que solo envuelve el contenido:
  return (
    <div className="main-layout-temp-wrapper">
      <Outlet />
    </div>
  );
};

// Componente que comprueba la autenticación
const ProtectedRoute: React.FC = () => {
  // La lógica del token y redirección se mantiene
  const isAuthenticated =
    localStorage.getItem("auth_token") === "simulated_valid_token";

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al login
    return <Navigate to="/login" replace />;
  }

  // 🛑 3. USAR EL MARCADOR DE POSICIÓN EN LUGAR DE MAINLAYOUT
  // Si está autenticado, renderiza el contenido dentro del layout temporal.
  return <LayoutPlaceholder />;
};

export default ProtectedRoute;
