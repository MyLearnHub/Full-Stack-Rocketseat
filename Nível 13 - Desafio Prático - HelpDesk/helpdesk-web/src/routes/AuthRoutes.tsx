import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<h1>SignIn</h1>} />
        <Route path="/signup" element={<h1>SignUp</h1>} />
      </Route>

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
