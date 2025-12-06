import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import LoadingPage from "../LoadingPage";

export default function DashboardLayout() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  return (
    
      <div className="flex-1">
        <Header/>
        <Outlet />
        <Footer />
      </div>
  );
}
