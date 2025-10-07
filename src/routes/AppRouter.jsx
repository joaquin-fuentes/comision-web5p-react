import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CounterPage from "../pages/CounterPage.jsx";
import SculpturesPage from "../pages/SculpturesPage.jsx";
import TasksPage from "../pages/TasksPage.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";

export default function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contador" element={<CounterPage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/esculturas" element={<SculpturesPage />} />
        <Route path="/tareas" element={<TasksPage />} />
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </>
  );
}
