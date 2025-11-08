import { Routes, Route, Navigate } from "react-router-dom";
//import ProtectedRoute from "./assets2/ProtectedRoute";
import MainLayout from "./MainLayout";
// ------------------------------------------------------------------
// 🚨 AJUSTA ESTAS RUTAS DE IMPORTACIÓN A TU ESTRUCTURA DE CARPETAS 🚨
// ------------------------------------------------------------------
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HomePage from "./HomePage";
import MythPage from "./MythPage";
import GreekMythPage from "./GreekMythPage";
import NorseMythPage from "./NorseMythPage";
import EgyptianMythPage from "./EgyptianMythPage";
import Chatbot from "./Chatbot";

const AppContent = () => {
  return (
    <Routes>
      {/* ---------------------------------------------------- */}
      {/* RUTAS PÚBLICAS (NO TIENEN PROTECCIÓN) */}
      {/* ---------------------------------------------------- */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* ---------------------------------------------------- */}
      {/* RUTA PADRE PROTEGIDA (Usa ProtectedRoute, que tiene el MainLayout y <Outlet />) */}
      {/* ---------------------------------------------------- */}
      <Route element={<MainLayout />}>
        {/* RUTAS HIJAS PROTEGIDAS (Renderizadas por el <Outlet /> del Layout) */}

        {/* RUTA RAÍZ/HOME */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        {/* RUTA DINÁMICA */}
        <Route path="/myth/:mythType" element={<MythPage />} />

        {/* RUTAS ESPECÍFICAS DE MITOLOGÍA (Importante: NO USAN ProtectedRoute de envoltorio aquí) */}
        <Route path="/myth/greek" element={<GreekMythPage />} />
        <Route path="/myth/norse" element={<NorseMythPage />} />
        <Route path="/myth/egyptian" element={<EgyptianMythPage />} />

        <Route path="/chatbot" element={<Chatbot />} />
      </Route>

      {/* ---------------------------------------------------- */}
      {/* RUTA DE RESERVA (Catch-all) */}
      {/* ---------------------------------------------------- */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppContent;
