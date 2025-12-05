import { Outlet } from "react-router-dom";
import Header from "../components/Header"

export default function DashboardLayout() {
  return (
    
      <div className="flex-1">
        <Header/>
        <Outlet />
      </div>
  );
}
