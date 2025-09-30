import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CounterPage from "../pages/CounterPage.jsx";
import SculpturesPage from "../pages/SculpturesPage.jsx";
import TasksPage from "../pages/TasksPage.jsx";

export default function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contador" element={<CounterPage />} />
        <Route path="/esculturas" element={<SculpturesPage />} />
        <Route path="/tareas" element={<TasksPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </>
  );
}
