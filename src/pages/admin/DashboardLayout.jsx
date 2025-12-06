import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
