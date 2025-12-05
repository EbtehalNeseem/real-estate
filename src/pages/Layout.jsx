
import Header from "../components/Header"
import Home from "../pages/Home";

export default function DashboardLayout() {
  return (
    
      <div className="flex-1">
        <Header/>
        <Home />
      </div>
  );
}
