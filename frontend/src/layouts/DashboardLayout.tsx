import Navbar from "../components/DashboardPage/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="grow py-10 flex">
        <Outlet />
      </div>
    </div>
  );
}
