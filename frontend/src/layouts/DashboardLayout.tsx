import Navbar from "../components/DashboardPage/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="grow py-10 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
