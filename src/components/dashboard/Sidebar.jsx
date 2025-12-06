import {
  Menu,
  House,
  Link as LinkIcon,
  Pencil,
  Mail,
  Settings,
 ShoppingBag,
  
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const ICONS = {
  House,
  Settings,
  ShoppingBag,
  Mail,
  Pencil,
  Link: LinkIcon,
};


export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const sidebarItems = [
  { name: "Home", path: "/dashboard", icon: "House" },
  { name: "Manage Properties", path: "/dashboard/manage", icon: "ShoppingBag" },
  { name: "Add Property", path: "/dashboard/add", icon: "Link" },
  { name: "Edit Property", path: "/dashboard/edit/:id", icon: "Pencil" },
  { name: "Messages", path: "/dashboard/messages", icon: "Mail" },
  { name: "Settings", path: "/dashboard/settings", icon: "Settings" },
];

  return (
    <aside
      className={`sticky top-0 z-100 mr-6 h-screen flex flex-col shadow-lg border-r border-[var(--light)] bg-[var(--primary)] text-light transition-all duration-300 ${
        isSidebarOpen ? "w-64" : "w-16"
      }`}
      
    >
      {/* Header */}
      <div className="flex items-center justify-around py-4 text-white">
        {isSidebarOpen && (
          <h3 className="text-white font-bold tracking-wider">
            Admin Panel
          </h3>
        )}

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 rounded-xl hover:bg-[--light] text-light transition-colors cursor-pointer "
        >
          <Menu size={22} className="text-white " />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4 flex-grow px-2 ">
        {sidebarItems.map((item) => {
          const IconComponent = ICONS[item.icon];
          const isActive = location.pathname === item.path;

          return (
            <Link to={item.path} key={item.name}>
              <div
                className={`flex items-center gap-4 p-3 rounded-xl my-2 cursor-pointer h-[48px] transition-colors ${
                  isActive
                    ? "bg-[var(--light)] text-[var(--accent)] font-bold shadow-md"
                    : "text-white font-thin hover:bg-[var(--light)]/50"
                }`}
              >
                <IconComponent size={22} className="min-w-[22px] " />

                {isSidebarOpen && (
                  <span className="whitespace-nowrap font-medium tracking-wide ">
                    {item.name}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {isSidebarOpen && (
        <div className="p-4">
          <p className="text-xs text-white tracking-wide">
            © 2025 All rights reserved.
          </p>
        </div>
      )}
    </aside>
  );
}
