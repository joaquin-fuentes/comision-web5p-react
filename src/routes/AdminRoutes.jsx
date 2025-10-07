import { Outlet, Navigate } from "react-router-dom";

export default function AdminRoutes() {
  const usuarioDelSessionStorage =
    JSON.parse(sessionStorage.getItem("usuario")) || null;

  if (usuarioDelSessionStorage) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
