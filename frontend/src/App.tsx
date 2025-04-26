import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import DashboardLayout from "./layouts/DashboardLayout";
import Classes from "./components/DashboardPage/Classes/Main.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import PrivateRoute from "./routes/PrivateRoute.tsx";
import Group from "./components/DashboardPage/Group/Group.tsx";

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
          <Route path="groups/:groupID/:classID" element={<Group />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
