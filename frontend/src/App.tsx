import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import DashboardLayout from "./layouts/DashboardLayout";
import Classes from "./components/DashboardPage/Classes.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="classes" element={<Classes />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
