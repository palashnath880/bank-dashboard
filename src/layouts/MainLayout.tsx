import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="h-full flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
}
