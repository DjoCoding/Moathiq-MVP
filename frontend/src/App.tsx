import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import DashboardLayout from "./layouts/DashboardLayout";
import Classes from "./components/DashboardPage/Classes/Main.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import PrivateRoute from "./routes/PrivateRoute.tsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="classes/:id?" element={<Classes />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
