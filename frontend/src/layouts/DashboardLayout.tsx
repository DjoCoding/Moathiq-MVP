import { useState } from "react";
import Navbar from "../components/DashboardPage/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { LinkT } from "../types";

export default function Dashboardayout() {
  const [link, setLink] = useState<LinkT>("المواد");

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar linkSelected={link} setLink={setLink} />
      <div className="grow py-10 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}
