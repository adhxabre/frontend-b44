import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const isSignIn = true;

  return isSignIn === true ? <Outlet /> : <Navigate to="/sign-up" />;
}
